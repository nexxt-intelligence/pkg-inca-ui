import React from "react";
import { ButtonSwitch } from "./ButtonSwitch";

export default {
  title: "ButtonSwitch",
  component: ButtonSwitch,
  description: `Button Switch.`,
  argTypes: {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ButtonSwitch {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  checked: false,
  left: "Left",
  right: "Right",
  onChange: (event) => {},
  disabled: false,
};
