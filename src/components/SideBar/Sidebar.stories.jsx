import React from 'react';
import { SideBar, SideBarItem } from './SideBar';

export default {
  title: 'Sidebar',
  component: SideBar,
  subcomponents: { SideBarItem },
  description: `Sidebar.`,
  argTypes: {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <SideBar {...args}>
    <SideBarItem link={'/'}>A</SideBarItem>
    <SideBarItem link="/b">B</SideBarItem>
    <SideBarItem link="/c">C</SideBarItem>
  </SideBar>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  isExpanded: true,
  logo: ['1', '2'],
  footerProps: { helpDeskUrl: '' },
};
