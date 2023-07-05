import Header from "../components/Header"
import Title from "../components/Title"
import styles from '../styles/pages/home.module.css'
import Text from '../components/Text'
import home from '../assets/home.svg'


const Home = () => {
  return (
    <>
      <Header
        title="console.log(Olá, eu sou a Fran)"
        subtitle="Desenvolvedora Fron-End"
        image={home}
      />

      <main className={styles.containerMainHome}>
        <div className={styles.cardVida}>
      
          <Title content="Vida" />
          <Text text="Eu conto um pouquinho sobre mim, minha formação,
            a história da minha migração de carreira,
            gostos e curiosidades.">
          </Text>
        </div>
        <div className={styles.cardCodigo}>
       
          <Title content="Código" />
          <Text text="Mostro meu portfólio. Tudo o que aprendi até o momento dando
            destaque para alguns dos projetos que criei enquanto estudo
            programação.">
          </Text>
        </div>
        <div className={styles.cardContatos}>
      
          <Title content="Contatos" />
          <Text text="Entre em contato comigo. Seja para entrevistas de emprego
            como deva ou para trocarmos ideias sobre os estudos.">
          </Text>
        </div>
      </main>
    </>
  )
}

export default Home
