import type { Metadata } from "next";
/* import styles from "./styles.module.css"; */
import DashboardInput from "../ui/dashboard-input/dashboardInput";

/* import { use } from "react"; */

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is the user dashboard",
};

export default function Dashboard() {
  return (
    <main>
      <p>Dashboard</p>
      <DashboardInput />
    </main>
  );
}
