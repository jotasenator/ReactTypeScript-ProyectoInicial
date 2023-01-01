import "../styles/styles.css";
import { useState } from "react";

export const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: "maykel",
    email: "jotasenator@gmail.com",
    password1: "123456",
    password2: "123456",
  });

  const { name, email, password1, password2 } = registerData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <div>RegisterPage</div>

      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password1}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Repeat Password"
          value={password2}
          onChange={onChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
