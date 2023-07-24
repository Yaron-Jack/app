import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { mockUser } from '../../Mocks/mockDB';
import DashboardButton from './DashboardButton';
import Colors from '../../constants/Colors';
import i18n from '../../translationService';

export default function Dashboard() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.dashboard}>
      <Text
        style={{
          color: Colors[colorScheme ?? 'light'].text,
          ...styles.subtitle,
        }}
      >
        {i18n.t('home_lira_shapira_currency_you_have')}
      </Text>
      <View style={styles.amountDisplay}>
        <Text
          style={{
            color: Colors[colorScheme ?? 'light'].text,
            ...styles.title,
          }}
        >
          {mockUser.accountBalance}
        </Text>
        <Text style={{ color: Colors[colorScheme ?? 'light'].text }}>
          {i18n.t('home_lira_shapira_currency_shorthand')}
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.labeledButton}>
          <DashboardButton iconName='scan-circle' iconLibrary='Ionicons' />
          <Text
            style={{
              color: Colors[colorScheme ?? 'light'].text,
              textAlign: 'center',
            }}
          >
            {i18n.t('dashboard_dashboard_buttons_scan')}
          </Text>
        </View>
        <View style={styles.labeledButton}>
          <DashboardButton
            iconName='hand-coin-outline'
            iconLibrary='MaterialCommunityIcons'
          />
          <Text
            style={{
              color: Colors[colorScheme ?? 'light'].text,
              textAlign: 'center',
            }}
          >
            {i18n.t('dashboard_dashboard_buttons_request')}
          </Text>
        </View>
        <View style={styles.labeledButton}>
          <DashboardButton iconName='paper-plane' iconLibrary='FontAwesome' />
          <Text
            style={{
              color: Colors[colorScheme ?? 'light'].text,
              textAlign: 'center',
            }}
          >
            {i18n.t('dashboard_dashboard_buttons_send')}
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  dashboard: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  amountDisplay: {
    display: 'flex',
    flexDirection: 'row',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    width: '100%',
  },
  labeledButton: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});