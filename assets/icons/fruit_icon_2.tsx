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
      fill="#EAE89D"
      d="M38.72 13.658c-3.997 3.945-18.67 18.9-21.888 28.856-.23.712-.11 1.49.334 2.091.593.8 1.52 1.802 2.447 1.802 1.55 0 20.73-18.565 24.133-30.324 0 0 .474-1.661-2.528-2.907a2.307 2.307 0 0 0-2.506.49l.007-.008Z"
    />
    <Path
      fill="#6CB041"
      d="M24.484 24.89c-4.048 3.7-5.48 9.076-7.096 14.11-.356 1.105.415 2.477 1.557 2.736 1.216.274 2.358-.37 2.736-1.557.378-1.186.779-2.447 1.179-3.663.341-1.038.845-2.49 1.172-3.232a19.22 19.22 0 0 1 1.579-2.929c.14-.215.289-.422.437-.623.156-.207.178-.237.052-.074.089-.111.185-.23.282-.34.385-.453.808-.876 1.245-1.284.86-.785.86-2.357 0-3.143-.919-.845-2.224-.838-3.143 0Z"
    />
    <Path
      fill="#6CB041"
      d="M35.886 28.026c-1.757 3.166-4.24 5.627-6.976 8.03-3.062 2.69-6.228 5.241-9.81 7.214-2.505 1.379-.266 5.227 2.247 3.84 3.9-2.15 7.377-4.982 10.714-7.91 2.973-2.61 5.738-5.443 7.673-8.928 1.387-2.506-2.454-4.752-3.84-2.246h-.008Z"
    />
  </Svg>
)
export default SvgComponent