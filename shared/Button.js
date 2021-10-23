import styles from './Button.module.scss'

const Button = ({ label, onClick, children }) => {
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}
export default Button;
