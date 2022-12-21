import { useState } from "react";
import { Button, Input } from "../../atoms";

const FormLogin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return {
      ...form
    }
  };

  const handleChange = (value = "", field = "") => {
    setForm({
      ...form,
      [field]: value,
    });
  };
  return (
    <form className="flex flex-col gap-4">
      <Input
        name="email"
        text={form.email}
        placeholder="Email"
        type={"email"}
        onChange={(e) => handleChange(e, "email")}
      />
      <Input
        name="password"
        text={form.password}
        placeholder="Password"
        type={"password"}
        onChange={(e) => handleChange(e, "password")}
      />
      <Button onClick={handleSubmit} text="Send" />
    </form>
  );
};

export default FormLogin;
