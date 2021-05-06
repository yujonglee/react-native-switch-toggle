import {
  Animated,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  TouchableOpacityProps,
} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';

interface Props extends TouchableOpacityProps {
  testID?: string;
  switchOn: boolean;
  onPress: () => void;
  containerStyle?: ViewStyle;
  circleStyle?: ViewStyle;
  backgroundColorOn?: string;
  backgroundColorOff?: string;
  backgroundImageOn?: React.ReactElement;
  backgroundImageOff?: React.ReactElement;
  circleColorOff?: string;
  circleColorOn?: string;
  duration?: number;
  type?: number;
  buttonText?: string;
  backTextRight?: string;
  backTextLeft?: string;
  buttonTextStyle?: StyleProp<TextStyle>;
  textRightStyle?: StyleProp<TextStyle>;
  textLeftStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  // limitation: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/12202
  buttonContainerStyle?: StyleProp<ViewStyle>;
  rightContainerStyle?: StyleProp<ViewStyle>;
  leftContainerStyle?: StyleProp<ViewStyle>;
  RTL?: boolean;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const SwitchToggle: FC<Props> = (props) => {
  const {
    testID,
    switchOn,
    onPress,
    containerStyle,
    circleStyle,
    backgroundColorOn,
    backgroundColorOff,
    backgroundImageOn,
    backgroundImageOff,
    circleColorOff,
    circleColorOn,
    duration,
    type,
    buttonText,
    backTextRight,
    backTextLeft,
    buttonTextStyle,
    textRightStyle,
    textLeftStyle,
    buttonStyle,
    buttonContainerStyle,
    rightContainerStyle,
    leftContainerStyle,
    RTL,
    activeOpacity = 0.5,
    ...touchableProps
  } = props;
  const [animXValue] = useState(new Animated.Value(switchOn ? 1 : 0));

  const getStart = (): number | Record<string, unknown> | undefined => {
    // prettier-ignore
    return type === undefined
      ? 0
      : type === 0
        ? 0
        : containerStyle && containerStyle.padding
          ? (containerStyle.padding as number) * 2
          : {};
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const runAnimation = (): void => {
    const animValue = {
      fromValue: switchOn ? 0 : 1,
      toValue: switchOn ? 1 : 0,
      duration: duration,
      useNativeDriver: false,
    };

    Animated.timing(animXValue, animValue).start();
  };

  const endPos =
    containerStyle && circleStyle
      ? (containerStyle.width as number) -
        ((circleStyle.width as number) +
          ((containerStyle.padding as number) || 0) * 2)
      : 0;

  const circlePosXEnd = RTL ? -endPos : endPos;
  const [circlePosXStart] = useState(getStart());

  const prevSwitchOnRef = useRef<boolean>();
  const prevSwitchOn = !!prevSwitchOnRef.current;

  useEffect(() => {
    prevSwitchOnRef.current = switchOn;

    if (prevSwitchOn !== switchOn) runAnimation();
  }, [prevSwitchOn, switchOn, runAnimation]);

  const generateRightText = (): React.ReactElement => {
    return (
      <Animated.View style={rightContainerStyle}>
        <Text style={textRightStyle}>{backTextRight}</Text>
      </Animated.View>
    );
  };

  const generateLeftText = (): React.ReactElement => {
    return (
      <Animated.View style={leftContainerStyle}>
        <Text style={textLeftStyle}>{backTextLeft}</Text>
      </Animated.View>
    );
  };

  const generateLeftIcon = (): React.ReactElement => {
    return (
      <View style={{position: 'absolute', left: 5}}>
        {backgroundImageOn}
      </View>
    );
  };

  const generateRightIcon = (): React.ReactElement => {
    return (
      <View style={{position: 'absolute', right: 5}}>
        {backgroundImageOff}
      </View>
    );
  };

  return (
    <TouchableOpacity
      {...touchableProps}
      testID={testID}
      onPress={onPress}
      activeOpacity={activeOpacity}>
      <Animated.View
        style={[
          styles.container,
          containerStyle,
          {
            backgroundColor: animXValue.interpolate({
              inputRange: [0, 1],
              outputRange: [
                backgroundColorOff as string | number,
                backgroundColorOn as string | number,
              ] as string[] | number[],
            }),
          },
        ]}>
        {generateLeftText()}
        {switchOn && generateLeftIcon()}
        <Animated.View
          style={[
            circleStyle,
            {
              backgroundColor: animXValue.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  circleColorOff as string | number,
                  circleColorOn as string | number,
                ] as string[] | number[],
              }),
            },
            {
              transform: [
                {
                  translateX: animXValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [
                      circlePosXStart as string | number,
                      circlePosXEnd as string | number,
                    ] as string[] | number[],
                  }),
                },
              ],
            },
            buttonStyle,
          ]}>
          <Animated.View style={buttonContainerStyle}>
            <Text style={buttonTextStyle}>{buttonText}</Text>
          </Animated.View>
        </Animated.View>
        {generateRightText()}
        {!switchOn && generateRightIcon()}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default SwitchToggle;
