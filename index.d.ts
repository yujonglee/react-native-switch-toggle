import * as React from '../../node_modules';

interface IProps {
    switchOn: boolean;
    onPress: func;
    containerStyle?: object;
    circleStyle?: object;
    backgroundColorOn?: string;
    backgroundColorOff?: string;
    circleColorOff?: string;
    circleColorOn?: string;
    duration?: number;
    type?: number,
    buttonText?: string,
    backTextRight?: string,
    backTextLeft?: string,
    buttonTextStyle?: any,
    textRightStyle?: any,
    textLeftStyle?: any,
    buttonStyle?: any,
    buttonContainerStyle?: any,
    rightContainerStyle?: any,
    leftContainerStyle?: any
}

declare class SwtichToggle extends React.Component<IProps, any> {

}

export default SwtichToggle;
