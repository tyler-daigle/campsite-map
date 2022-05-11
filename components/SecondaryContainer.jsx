import styles from "../styles/SecondaryContainer.module.css";

export default function SecondaryContainer({ children }) {
  return (
    <div className={styles.secondaryContainer}>
      {children}
    </div>
  )
}