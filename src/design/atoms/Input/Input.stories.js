import React from "react";

import Input from "./index";

export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    onChange: {
      action: "changed",
    },
    text: {
      type: "string",
    },
    type: {
      options: ["email", "number", "password", "search", "tel", "text"],
      control: "select",
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: "Dinamyc",
  type: "text",
  name: "text",
};
