import Header from "../components/Header"
import Subtitle from '../components/Subtitle'
import Title from "../components/Subtitle"
import styles from '../styles/pages/portfolio.module.css'
import portfolio from '../assets/portfolio.svg'
import Image from '../components/Image'
import lacrei from '../assets/lacrei.png'
import AgendaDeContatos from '../assets/contatos.png'
import ApiGit from '../assets/ApiGit.png'
import Text from '../components/Text'
import axios from "axios"
import { useEffect, useState } from "react"

const Portfolio = () => {

  const [inputValue, setInputValue] = useState('')
  const [reposFromApi, setReposFromApi] = useState([])
  const [reposFiltered, setReposFiltered] = useState([])

  const handleChange = (e) => setInputValue(e.target.value)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/francielecsantos/repos')
        setReposFromApi(response.data)
      }
      catch(err) {
        console.error("Erro capturado: " + err)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    const reposFiltered = reposFromApi.filter((repo) => {
      return repo.name.toLowerCase().includes(inputValue.toLowerCase())
    })
    setReposFiltered(reposFiltered)
  }, [inputValue, reposFromApi])




  return (
    <>
      <Header
        title="Meus projetos"
        image={portfolio}
      />
      <main className={styles.containerMainPortfolio}>

        <section className={styles.reposFavoritos}>
          <div className={styles.reposFavoritoscard1}>
            <Subtitle content="Lacrei Saúde" />
            <Image img={lacrei} />
            <Text text="O Lacrei é o primeiro portal criado para conectar
             a comunidade LGBTQIA+ a profissionais de saúde, advogades 
             e empresas que respeitam a diversidade oferecendo oportunidades
              de trabalho e desenvolvimento profissional. Apoio a causa da Lacrei, 
              por isso desenvolvi o site como o objetivo de divulgação. Utilizo React na aplicação.  " />
          </div>

          <div className={styles.reposFavoritoscard2}>
            <Subtitle content="Agenda de contatos Digital - Controle de Cliente" />
            <Image img={AgendaDeContatos} />
            <Text text="Nessa pequena aplicação podemos fazer o gerenciamento de contatos privados.
             Para ter acesso a lista de contatos, é necessário realizar um cadastro prévio e 
             em seguida realizar login. É possível editar, excluir e incluir novos dados. Aplicação feita em React. "/>
            <Text />
          </div>

          <div className={styles.reposFavoritoscard2}>
            <Subtitle content="GitHub Search - Consumindo Api do GitHub" />
            <Image img={ApiGit} />
            <Text text="Por meio de uma requisição assíncrona a aplicação busca os 
            repositórios públicos da API do GitHub, a busca deve ser feita pelo nome do usuário.
             Aplicação feita com JavaScript, manipulação de DOM, html e CSS." />
          </div>
        </section>

        <section className={styles.ContainerRepos} >
          <Title content='Veja outros repositórios'/>
          <div className={styles.reposLista}>
        <input  className={styles.reposInput}
          placeholder="Digite o nome de um repositório para buscar" 
          onChange={handleChange} 
        />
        {reposFiltered.map(repo => {
          return (
            <div key={repo.id }  className={styles.reposListaRepos}>
              <Subtitle content={repo.name}  className={styles.reposTitle}/>
              <Text text={repo.description} />
              <a href={repo.html_url} target="_blank">
                Conferir
              </a>
            </div>
          )
        })}
      </div>
        </section>
      </main>
    </>

  )
}

export default Portfolio;
