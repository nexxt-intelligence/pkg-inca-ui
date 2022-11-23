import React from "react";
import { QuickTagInstanceCardDirectory } from "./QuickTagInstanceCardDirectory";

const QUICKTAG_INSTANCE_CARD_OBJECT = {
  CsvUrl: "#",
  LastUpdatedTime: "2022-11-18T00:00:00.000Z",
  PackageID: null,
  QuestionLabel: "Question Label",
  QuickTagInstanceID: 1,
  Status: 2,
  StudyName: "Study Name",
};

export default {
  title: "QuickTagInstanceCardDirectory",
  component: QuickTagInstanceCardDirectory,
  description: `QuickTagInstanceCardDirectory.`,
  argTypes: {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <QuickTagInstanceCardDirectory {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  data: Array.from({ length: 6 }, (v, i) => ({
    ...QUICKTAG_INSTANCE_CARD_OBJECT,
    QuickTagInstanceID: i + 1,
  })),
  favourites: [1],
  deleteQuickTagInstance: () => {},
  favouriteQuickTagInstance: () => {},
  hostUrl: "#",
  pagination: "Pagination Placeholder",
  handleSearchQueryChange: () => {},
  sortOption: "",
  setSortOption: () => {},
  setShowForm: () => {},
};
