import { View, StyleSheet, Text, useColorScheme } from 'react-native';
import Colors from '../../constants/Colors';
import i18n from '../../translationService';
import { useAppDispatch, useAppSelector } from '../../hooks';
import CustomButton from '../../components/utils/CustomButton';
import {
  resetForm,
  selectIsGuaranteedAccurate,
  selectValue,
  setAmount,
  setGuaranteedAccurate,
} from '../../store/depositFormSlice';
import { useRouter } from 'expo-router';
import NumberInputNumberPad from '../../components/form/NumberInputNumberPad';
import GradientContainer from '../../components/utils/GradientContainer';
import { CustomModal } from '../../components/utils/CustomModal';
import { setIsModalVisible, setModalText } from '../../store/appStateSlice';
import DepositFormCheckBox from '../../components/DepositFormCheckbox';

export default function Deposit() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const value = useAppSelector(selectValue);
  const isGuaranteedAccurate = useAppSelector(selectIsGuaranteedAccurate);

  const onPressCancel = () => {
    dispatch(resetForm());
    router.replace('/Home');
  };
  const onPressContinue = () => {
    dispatch(
      setModalText(
        `${i18n.t('deposit_modal_amount', { amount: value })}
        ${i18n.t('deposit_modal_stand_manager')}
        ${i18n.t('deposit_modal_you_earn', {
          netAmount: parseFloat(value) * 0.9,
        })}
        `
      )
    );
    dispatch(setGuaranteedAccurate(false));
    dispatch(setIsModalVisible(true));
  };

  const onChangeValue = (newVal: string) => {
    dispatch(setAmount(newVal));
  };

  const onPressModal = () => {
    dispatch(setIsModalVisible(false));
    router.replace('/CompostReport');
  };

  const onPressModalCorrect = () => {
    dispatch(setIsModalVisible(false));
    dispatch(setGuaranteedAccurate(false));
  };

  return (
    <GradientContainer endColor='#F8E0D3'>
      <CustomModal
        buttons={[
          {
            text: i18n.t('deposit_modal_button_correct'),
            onPress: onPressModalCorrect,
          },
          {
            text: i18n.t('deposit_modal_button_finish'),
            onPress: onPressModal,
            disabled: !isGuaranteedAccurate,
          },
        ]}
        customElement={<DepositFormCheckBox />}
      />
      <Text
        style={{
          fontSize: 40,
          paddingVertical: 16,
          color: Colors[colorScheme ?? 'light'].text,
          fontWeight: 700,
        }}
      >
        {i18n.t('deposit_title')}
      </Text>
      <View style={styles.depositSwitches}>
        <NumberInputNumberPad value={value} setValue={onChangeValue} />
        <View style={styles.buttons}>
          <CustomButton
            text={i18n.t('continue')}
            onPress={onPressContinue}
            disabled={!value}
          />
          <CustomButton
            transparent={true}
            text={i18n.t('cancel')}
            onPress={onPressCancel}
          />
        </View>
      </View>
    </GradientContainer>
  );
}

const styles = StyleSheet.create({
  container: { height: '100%', padding: 8 },
  depositSwitches: {
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 16,
    paddingHorizontal: 8,
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: '80%',
  },
  depositSwitchContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  amount: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'stretch',
  },
  amountLabel: { flex: 1 },
  amountInput: { flex: 1 },
  input: {
    height: 120,
    textAlignVertical: 'top',
    textAlign: 'left',
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderStyle: 'solid',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  submitButton: {
    borderRadius: 200,
    width: '40%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
