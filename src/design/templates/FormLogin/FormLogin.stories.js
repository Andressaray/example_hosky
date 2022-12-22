import React from "react";

import TemplateLogin from "./index";

export default {
	title: "Templates/FormLogin",
	component: TemplateLogin,
};

const Template = (args) => <TemplateLogin {...args} />;

export const TemplateLoginC = Template.bind({});
