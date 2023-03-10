import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "./index";

export default {
	title: "Atoms/Button",
	component: Button,
	argTypes: {
		onClick: { action: "clicked" },
		bg: {
			control: "select",
		},
	},
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	onClick: action("clicked"),
	text: "Presss me",
	size: "md",
};
