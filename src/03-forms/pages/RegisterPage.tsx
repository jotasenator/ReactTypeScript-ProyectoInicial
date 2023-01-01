import "../styles/styles.css";

export const RegisterPage = () => {
  return (
    <div>
      <div>RegisterPage</div>

      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Repeat Password" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
