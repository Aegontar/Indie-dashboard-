export default function Login() {
  // Action
  async function create(formData: FormData) {
    "use server";

    // Logic to mutate data...

    console.log(formData);
  }

  return (
    <div>
      <form action={create}>
        <input type="text" name="username" placeholder="username" required />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
