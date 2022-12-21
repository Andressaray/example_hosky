// import '@testing-library/jest-dom/extend-expect'
/**
 * @jest-environment jsdom
 */
import { fireEvent, render } from "@testing-library/react";

import FormLogin from "./index";

test("Render content", async () => {
  const component = render(<FormLogin />);

  const handleChange = (placeholder = '', value = '') => {
    const input = component.getByPlaceholderText(placeholder)
    fireEvent.change(input, {target: { value }})
    return input
  }
  const email = 'andressaray14@gmail.com'
  const password= '1234'
  const inputEmail = handleChange('Email', email)
  const inputPassword = handleChange('Password', password)
  expect(inputEmail.value).toBe(email)
  expect(inputPassword.value).toBe(password)
  const button = component.getByRole('button')
});
