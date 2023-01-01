import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {
  const { name, email, password1, password2, onChange } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        <button
          type="submit"
          onClick={() =>
            console.log({ name, email, password1, password2, onChange })
          }
        >
          Create
        </button>
      </form>
    </div>
  );
};
