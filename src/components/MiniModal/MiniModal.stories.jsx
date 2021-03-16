import React from "react";
import { MiniModal, MiniModalContent, MiniModalActions } from "./MiniModal";

export default {
  title: "MiniModal",
  component: MiniModal,
  subcomponents: { MiniModalActions, MiniModalContent },
  description: `MiniModal.`,
  argTypes: {},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <MiniModal {...args}>
    <MiniModalContent
      header="Select starting point"
      body="Start with keywords extracted from the data, or use themes generated automatically by our NLP engine"
    ></MiniModalContent>
    <MiniModalActions>
      <button>Action</button>
    </MiniModalActions>
  </MiniModal>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  isClosable: false,
};
