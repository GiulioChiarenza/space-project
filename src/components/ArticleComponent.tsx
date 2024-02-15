import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SingleArticle from './SingleArticle'
import Articles from '../interfaces/article'


const ArticleComponent = () => {
  const [articles, setArticles] = useState<Articles[]>([])
  // attenzione ad inizializzare un array semplicemente con un valore di []!
  // l'array riceverà automaticamente da TS il tipo "never[]"
  // è necessario creare l'interfaccia per l'oggetto/array che vi verrà restituito nel JSON della Response
  // in modo da poter assegnare alla variabile di stato il tipo corretto

  const fetchArticles = async () => {
    try {
      const response = await fetch(
        'https://api.spaceflightnewsapi.net/v4/articles'
      )
      if (response.ok) {
        // andiamo avanti
        const arrayOfArticles = await response.json()
        console.log(arrayOfArticles)
        // salviamo l'array dei libri nello state
        setArticles(arrayOfArticles)
      } else {
        // lanciamoci nel catch
        throw new Error('errore nel recupero degli articoli')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // simula un componentDidMount
    // qua facciamo partire la fetch dei libri
    fetchArticles()
  }, [])

  return (
    <Container>
    <Row className="justify-content-center">
      <Col xs={12} md={6} className="text-center">
        <h2>Articoli disponibili nel database:</h2>
      </Col>
    </Row>
    <Row className="justify-content-center">
    {articles.map((singleArticle) => (
  <SingleArticle articleData={singleArticle} key={singleArticle.id} />
))}
    </Row>
  </Container>
  )
}

export default ArticleComponent