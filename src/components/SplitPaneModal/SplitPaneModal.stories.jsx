import React from "react";
import {
  SplitPaneModal,
  SplitPaneModalContent,
  SplitPaneModalActions,
} from "./SplitPaneModal";

import { UilChannel } from "@iconscout/react-unicons";

export default {
  title: "SplitPaneModal",
  component: SplitPaneModal,
  subcomponents: { SplitPaneModalActions, SplitPaneModalContent },
  description: `Split pane modal.`,
  argTypes: {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <SplitPaneModal {...args}>
    <SplitPaneModalContent
      header="Select starting point"
      body="Start with keywords extracted from the data, or use themes generated automatically by our NLP engine"
    ></SplitPaneModalContent>
    <SplitPaneModalActions>
      <button>Action</button>
    </SplitPaneModalActions>
  </SplitPaneModal>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  icon: <UilChannel size="38px" />,
  header: "Quicktag",
  isOpen: true,
  isBlurred: true,
  body: "NLP-powered text clustering",
  isClosable: false,
};
