import type { Metadata } from "next";
import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is the user dashboard",
};

export default function Dashboard() {
  return <main>Dashboard</main>;
}
