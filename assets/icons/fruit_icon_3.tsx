import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <Circle cx={30} cy={30} r={30} fill="#fff" />
    <Path
      fill="#E8B485"
      d="M32.113 23.216c-.98-1.336-2.88-1.987-4.71-1.65-1.73.317-3.915 1.005-4.671 2.451-1.332 2.536 13.477 30.032 15.079 26.764 1.374-2.812-1.163-21.381-5.698-27.573v.008Z"
    />
    <Path
      fill="#6CB041"
      d="M29.726 23.821c.368-1.343.07-2.724-.582-3.92-.58-1.073-1.562-1.884-2.579-2.512-.788-.485-1.64-.859-2.476-1.259-.945-.455-1.89-.901-2.836-1.356-.608-.29-1.277-.395-1.928-.193-.578.175-1.188.643-1.455 1.191-.574 1.158-.26 2.788.998 3.383 1.03.494 2.06.988 3.09 1.474.912.431 1.847.836 2.664 1.436l-.519-.375c.315.232.597.49.848.79l-.406-.495c.181.236.339.489.472.76l-.267-.592c.106.239.18.478.23.734l-.112-.662c.031.215.046.431.02.648l.071-.668c-.02.142-.041.285-.087.427-.346 1.259.539 2.764 1.837 3.017 1.364.268 2.64-.485 3.017-1.836v.008Z"
    />
    <Path
      fill="#6CB041"
      d="M28.226 17.855c-1.66-2.415-3.321-4.821-4.982-7.236-.739-1.077-2.294-1.58-3.436-.798-1.077.74-1.589 2.286-.797 3.436 1.66 2.415 3.321 4.821 4.982 7.236.739 1.077 2.294 1.58 3.436.798 1.077-.74 1.589-2.286.797-3.436Z"
    />
    <Path
      fill="#6CB041"
      d="M28.308 18.92a77.478 77.478 0 0 0-.487-6.653c-.079-.672-.279-1.265-.784-1.742-.445-.42-1.162-.723-1.785-.68-.623.044-1.306.28-1.741.784-.41.479-.757 1.138-.68 1.785.256 2.206.422 4.432.487 6.652.039 1.306 1.223 2.52 2.569 2.422 1.345-.098 2.462-1.172 2.42-2.569Z"
    />
    <Path
      fill="#6CB041"
      d="M28.488 20.527c.082-.618.239-1.23.463-1.811l-.232.606a8.458 8.458 0 0 1 .995-1.827l-.376.519c.176-.247.369-.477.578-.7.436-.47.7-1.136.68-1.784-.018-.616-.314-1.331-.783-1.742-.47-.41-1.12-.724-1.785-.68-.664.045-1.29.288-1.741.784-.686.744-1.301 1.603-1.732 2.523-.43.92-.776 1.912-.912 2.932a1.854 1.854 0 0 0-.013.999c.027.332.136.637.327.922.315.507.928.988 1.523 1.104.644.122 1.358.076 1.913-.306.506-.348 1.023-.896 1.104-1.522l-.009-.017Z"
    />
    <Path
      fill="#6CB041"
      d="M29.15 19.817c-.01-.04-.02-.082-.029-.132l.111.663a1.706 1.706 0 0 1-.008-.291l-.072.668c.013-.117.043-.235.08-.352l-.231.606a2.09 2.09 0 0 1 .205-.38l-.376.518a1.8 1.8 0 0 1 .299-.317l-.496.406c.179-.147.375-.26.589-.359l-.592.267c.313-.142.642-.243.98-.336.323-.085.601-.243.836-.474.27-.183.47-.422.62-.718.174-.288.265-.607.272-.94a1.94 1.94 0 0 0-.071-.997L31 17.058a2.582 2.582 0 0 0-.925-.872l-.606-.232a2.579 2.579 0 0 0-1.33.04c-.306.092-.62.176-.907.31-.329.142-.674.277-.977.47-.302.191-.57.415-.821.648-.251.232-.442.529-.634.809-.191.28-.306.633-.421.953-.116.32-.138.711-.16 1.045l.005.191c.023.241.072.49.121.73.001.04.02.082.029.132.084.322.242.6.474.834.183.27.422.47.717.62.288.175.607.265.94.272.335.065.668.039.997-.07l.592-.268a2.58 2.58 0 0 0 .871-.925l.232-.606a2.58 2.58 0 0 0-.04-1.33l-.007.008Z"
    />
  </Svg>
)
export default SvgComponent
