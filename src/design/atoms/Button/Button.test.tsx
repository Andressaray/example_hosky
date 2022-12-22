// import '@testing-library/jest-dom/extend-expect'
/**
 * @jest-environment jsdom
 */
import { fireEvent, render } from "@testing-library/react";

import Button from ".";

test("Render content", () => {
	const text = "Press me";
	const component = render(
		<Button onClick={() => {}} text={text} bg="danger" size="md" />
	);
	fireEvent.click(component.container);
	expect(component.container).toHaveTextContent(text);
	//   component.container.click()
	// expect(component.container)
});
