import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
  const {
    name,
    email,
    password1,
    password2,
    onChange,
    resetForm,
    isValidEmail,
  } = useForm({
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
      <div>Register Formik Page</div>

      <form noValidate onSubmit={onSubmit}>
        <input
          className={`${name.trim().length <= 0 && "has-error"}`}
          name="name"
          onChange={onChange}
          placeholder="Name"
          type="text"
          value={name}
        />
        {name.trim().length <= 0 && <span>Mandatory field *</span>}
        <input
          className={`${!isValidEmail(email) && "has-error"}`}
          name="email"
          onChange={onChange}
          placeholder="Email"
          type="email"
          value={email}
        />
        {!isValidEmail(email) && <span>Mandatory field *</span>}
        <input
          name="password1"
          onChange={onChange}
          placeholder="Password"
          type="password"
          value={password1}
        />
        {password1.trim().length <= 0 && <span>Mandatory field *</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>Password should be bigger than 5 characters *</span>
        )}
        <input
          name="password2"
          onChange={onChange}
          placeholder="Repeat Password"
          type="password"
          value={password2}
        />
        {password2.trim().length <= 0 && <span>Mandatory field *</span>}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>Passwords provided must be identical *</span>
        )}
        <button
          type="submit"
          onClick={() =>
            console.log({ name, email, password1, password2, onChange })
          }
        >
          Create
        </button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};
