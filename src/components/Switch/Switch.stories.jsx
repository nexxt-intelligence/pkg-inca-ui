import React from "react";
import Switch from "./Switch";

export default {
    title: "Switch",
    component: Switch,
    description: `Switch`,
    argTypes: {},
};

const Template = (args) => (
    <Switch {...args} />
);

export const Default = Template.bind({});
Default.args = {
    defaultState: false,
    onChange: () => { }
};
