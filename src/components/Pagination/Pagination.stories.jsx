import React from "react";
import { Pagination } from "./Pagination";
import { PAGE_SIZE_OPTIONS } from "../../utils/constants";

export default {
  title: "Pagination",
  component: Pagination,
  description: `Pagination.`,
  argTypes: {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Pagination {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  pageSize: 12,
  pageSizeOptions: PAGE_SIZE_OPTIONS,
  page: 0,
  pages: 7,
  canPrevious: false,
  canNext: true,
  onPageChange: () => {},
  onPageSizeChange: () => {},
};
