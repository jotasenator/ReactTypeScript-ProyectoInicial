import "../styles/styles.css";
import { useState } from "react";

export const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { name, email, password1, password2 } = registerData;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(registerData);
  };

  return (
    <div>
      <div>RegisterPage</div>

      <form noValidate onSubmit={onSubmit}>
        <input
          name="name"
          onChange={onChange}
          placeholder="Name"
          type="text"
          value={name}
        />
        <input
          name="email"
          onChange={onChange}
          placeholder="Email"
          type="email"
          value={email}
        />
        <input
          name="password1"
          onChange={onChange}
          placeholder="Password"
          type="password"
          value={password1}
        />
        <input
          name="password2"
          onChange={onChange}
          placeholder="Repeat Password"
          type="password"
          value={password2}
        />
        <button type="submit" onClick={() => console.log(registerData)}>
          Create
        </button>
      </form>
    </div>
  );
};
