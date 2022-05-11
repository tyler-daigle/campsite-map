import styles from "../styles/Button.module.css";

export default function Button({ text }) {
  const disabled = false;
  return (
    <button onClick={() => console.log("click")} className={`${styles.button} ${styles.enabled}`} type="button" disabled={disabled}>{text}</button>
  );
}