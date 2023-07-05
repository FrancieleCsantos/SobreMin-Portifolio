import styles from '../styles/components/subtitle.module.css'

const Title = ({content}) => {
  return (
    <h2
     className={styles.SubtitleContent}>{content}
    </h2>
  )
}

export default Title;