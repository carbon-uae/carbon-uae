import styles from "./ArrowUpRight.module.css";

export default function ArrowUpRight() {
  return (
    <span className={styles.icon} aria-hidden="true">
      <svg viewBox="0 0 24 24" role="presentation" focusable="false">
        <path d="M5 19L19 5M9 5h10v10" />
      </svg>
    </span>
  );
}
