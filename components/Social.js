import styles from "../styles/Social.module.css";

export default function Social() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a href="https://github.com/jungaretti/" target="_blank">
          <div className={styles.body}>
            <p>GitHub</p>
          </div>
        </a>
      </li>
    </ul>
  );
}
