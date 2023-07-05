import styles from '../styles/components/title.module.css'

const Title = ({content}) => {
  return (
    <h1
     className={styles.titleContent}>{content}
    </h1>
  )
}

export default Title;