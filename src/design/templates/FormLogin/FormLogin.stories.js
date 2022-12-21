import React from "react";

import TemplateLogin from "./index";
import { action } from "@storybook/addon-actions";

export default {
  title: "Templates/FormLogin",
  component: TemplateLogin,
//   argTypes: {
//     onClick: { action: "clicked" },
//     bg: {
//       control: "select",
//     },
//   },
};

const Template = (args) => <TemplateLogin {...args} />;

export const TemplateLoginC = Template.bind({});

// Primary.args = {
//   onClick: action("clicked"),
//   text: "Presss me",
//   size: "md",
// };
