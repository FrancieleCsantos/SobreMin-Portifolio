import Header from "../components/Header"
import Image from "../components/Image"
import minhaFoto from '../assets/minhafoto.jpeg'
import Title from '../components/Title'
import Text from "../components/Text"
import styles from '../styles/pages/sobre.module.css'

import sobre from '../assets/sobre.svg'

const Sobre = () => {
  return (
    <>
      <Header
        title="Sobre mim"
        image={sobre}
      />
      <main className={styles.MainSobre}>
        <div className={styles.sobreImg}>
          <Image className={styles.MinhaFotoSobre} img={minhaFoto} altText='foto da Fran' />
        </div>
        <div className={styles.textoSobre}>
          <Title className={styles.tituloSobre} content='Fran Santos, muito prazer!' />
          <Text text="Baiana, 29 anos, formada em gestão de Recursos Humanos
            iniciei recentemente minha transição de carreira para a
            área da tecnologia, após uma experiência de 10 anos entre
            Atendimento ao Cliente, e a Monitoria de Qualidade da marca
            Itaucard e Chat Personnalité.
            Tenho duas paixões 😍: Customer experience e Desenvolvimento Front-End,
            além de criar sites e aplicações, me preocupo em levar a melhor
            experiência para o cliente/usuário. Quero transformar a minha vida
            e a de outras pessoas por meio da tecnologia."
          />
        </div>
      </main>
    </>
  )
}

export default Sobre
