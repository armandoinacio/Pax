import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function Rate(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="prefix__feather prefix__feather-star"
            {...props}
        >
            <Path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </Svg>
    )
}

export default Rate;
