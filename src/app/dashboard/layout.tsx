import styles from "./styles.module.css";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return <div className={styles.dashboardPageContainer}>{children}</div>;
}
