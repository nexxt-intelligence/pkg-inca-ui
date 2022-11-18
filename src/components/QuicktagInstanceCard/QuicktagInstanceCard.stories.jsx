import React from "react";
import { QuicktagInstanceCard } from "./QuicktagInstanceCard";

export default {
  title: "QuicktagInstanceCard",
  component: QuicktagInstanceCard,
  description: `QuicktagInstanceCard.`,
  argTypes: {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <QuicktagInstanceCard {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  object: {
    CsvUrl: "#",
    LastUpdatedTime: "2022-11-18T00:00:00.000Z",
    PackageID: null,
    QuestionLabel: "Question Label",
    QuickTagInstanceID: 1,
    Status: 2,
    StudyName: "Study Name",
  },
  favourites: [1],
  deleteQuickTagInstance: () => {},
  favouriteQuickTagInstance: () => {},
  redirectUrl: "#",
};
