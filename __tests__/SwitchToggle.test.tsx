import React, {ReactElement} from 'react';

import SwitchToggle from '../index';
import {TouchableOpacity} from 'react-native';
import renderer from 'react-test-renderer';

const createTestProps = (
  obj?: Record<string, unknown>,
): Record<string, unknown> => ({
  ...obj,
});

let props;
let component: ReactElement;
// let testingLib: RenderResult;

jest.useFakeTimers();

describe('[SwitchToggle]', (): void => {
  props = createTestProps({
    testID: 'SWITCH_ID',
    onPress: jest.fn(),
  });

  component = <SwitchToggle {...props} />;

  describe('Rendering', () => {
    it('should render without crashing', () => {
      const rendered = renderer.create(component);

      expect(rendered).toMatchSnapshot();
      expect(rendered).toBeTruthy();
    });

    it('should render type === 0', () => {
      props = {
        ...props,
        type: 0,
      };

      component = <SwitchToggle {...props} />;

      const rendered = renderer.create(component);

      expect(rendered).toMatchSnapshot();
      expect(rendered).toBeTruthy();
    });

    it('should render `containerStyle` and `containerStyle.padding`', () => {
      props = {
        ...props,
        type: 1,
        containerStyle: {
          padding: 40,
        },
      };

      component = <SwitchToggle {...props} />;

      const rendered = renderer.create(component);

      expect(rendered).toMatchSnapshot();
      expect(rendered).toBeTruthy();
    });

    it('should render `containerStyle` and `circleWidth`', () => {
      props = {
        ...props,
        type: 1,
        containerStyle: {
          padding: 40,
          width: 40,
        },
        circleStyle: {
          width: 20,
        },
      };

      component = <SwitchToggle {...props} />;

      const rendered = renderer.create(component);

      expect(rendered).toMatchSnapshot();
      expect(rendered).toBeTruthy();
    });

    it('should render `containerStyle` and `circleWidth` without padding', () => {
      props = {
        ...props,
        type: 1,
        containerStyle: {
          padding: 0,
          width: 40,
        },
        circleStyle: {
          width: 20,
        },
      };

      component = <SwitchToggle {...props} />;

      const rendered = renderer.create(component);

      expect(rendered).toMatchSnapshot();
      expect(rendered).toBeTruthy();
    });

    it('should render when `containerStyle` is not defined', () => {
      props = {
        ...props,
        type: 1,
        containerStyle: undefined,
      };

      component = <SwitchToggle {...props} />;

      const rendered = renderer.create(component);

      expect(rendered).toMatchSnapshot();
      expect(rendered).toBeTruthy();
    });

    it('should render RTL', () => {
      props = {
        ...props,
        type: 1,
        RTL: true,
      };

      component = <SwitchToggle {...props} />;

      const rendered = renderer.create(component);

      expect(rendered).toMatchSnapshot();
      expect(rendered).toBeTruthy();
    });
  });

  describe('Accessibility', (): void => {
    it('should render AccessibilityLabel', () => {
      props = {
        ...props,
        type: 1,
        accessibilityLabel: 'Label for test accessibility',
      };

      component = <SwitchToggle {...props} />;

      const rendered = renderer.create(component);

      expect(rendered).toMatchSnapshot();
      expect(rendered).toBeTruthy();
    });

    it('should render AccessibilityRole', () => {
      props = {
        ...props,
        type: 1,
        accessibilityRole: 'switch',
      };

      component = <SwitchToggle {...props} />;

      const rendered = renderer.create(component);

      expect(rendered).toMatchSnapshot();
      expect(rendered).toBeTruthy();
    });

    it('should render AccessibilityHint', () => {
      props = {
        ...props,
        type: 1,
        accessibilityHint: 'Accessibility hint can be a string or empty',
      };

      component = <SwitchToggle {...props} />;

      const rendered = renderer.create(component);

      expect(rendered).toMatchSnapshot();
      expect(rendered).toBeTruthy();
    });

    it('should render AccessibilityState', () => {
      props = {
        ...props,
        type: 1,
        accessibilityState: {
          disabled: false,
          selected: true,
          checked: false,
          busy: false,
          expanded: false,
        },
      };

      component = <SwitchToggle {...props} />;

      const rendered = renderer.create(component);

      expect(rendered).toMatchSnapshot();
      expect(rendered).toBeTruthy();
    });

    it('should render AccessibilityValue', () => {
      props = {
        ...props,
        type: 1,
        accessibilityValue: {
          min: 0,
          max: 1,
          now: 0,
          text: 'optional text',
        },
      };

      component = <SwitchToggle {...props} />;

      const rendered = renderer.create(component);

      expect(rendered).toMatchSnapshot();
      expect(rendered).toBeTruthy();
    });
  });

  describe('Interaction', (): void => {
    it('should simulate onPress', () => {
      const rendered = renderer.create(component);
      const switchToggle = rendered.root.findByType(TouchableOpacity);

      switchToggle.props.onPress();

      jest.runAllTimers();
      expect(props.onPress).toHaveBeenCalled();
    });

    it('should toggle switchOn to `true` on pressed', () => {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const props = {
        switchOn: false,
        onPress: jest.fn(),
      };

      component = <SwitchToggle {...props} />;

      const rendered = renderer.create(component);
      const switchToggle = rendered.root.findByType(TouchableOpacity);

      switchToggle.props.onPress();

      jest.runAllTimers();
      expect(props.switchOn).toBeFalsy();

      switchToggle.props.onPress();

      expect(props.onPress).toHaveBeenCalled();
    });

    it('should toggle switchOn to `false` on pressed', () => {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const props = {
        switchOn: true,
        onPress: jest.fn(),
      };

      component = <SwitchToggle {...props} />;

      const rendered = renderer.create(component);
      const switchToggle = rendered.root.findByType(TouchableOpacity);

      switchToggle.props.onPress();

      jest.runAllTimers();
      expect(props.switchOn).toBeTruthy();

      switchToggle.props.onPress();

      expect(props.onPress).toHaveBeenCalled();
    });
  });
});
