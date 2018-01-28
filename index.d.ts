import * as React from 'react';

interface IProps = {
  switchOn: boolean;
  onPress: func;
  containerStyle?: object,
  circleStyle?: object,
  backgroundColorOn?: string,
  backgroundColorOff?: string,
  circleColorOff?: string,
  circleColorOn?: string,
  duration?: number,
}

declare class SwtichToggle extends React.Component<IProps, any> {

}

export default SwtichToggle;
