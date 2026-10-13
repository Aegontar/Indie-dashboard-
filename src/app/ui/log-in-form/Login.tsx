import styles from "./styles.module.css";

export default function Login() {
  // Action
  async function create(formData: FormData) {
    "use server";

    // Logic to mutate data...

    console.log(formData);
  }

  return (
    <div className={styles.loginFormContainer}>
      <form className={styles.form} action={create}>
        <input
          className={styles.input}
          type="text"
          name="username"
          placeholder="username"
          required
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
