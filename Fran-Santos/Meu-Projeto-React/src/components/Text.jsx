import styles from '../styles/components/text.module.css'

const Text = ({text}) => {
  return (
      <p className={styles.textContent}>{text}</p>
   
  )
}

export default Text;