import { Col, Card } from 'react-bootstrap'
import Articles from '../interfaces/article'

// props -> { bookData }

interface ArticlesProps {
  articleData: Articles
}

const Article = ({ articleData }: ArticlesProps) => {
    return (
      <Col xs={12} md={4} className="text-center">
        <Card>
          <Card.Img variant="top" src={articleData.results.image_url} />
          <Card.Body>
            <Card.Title>{articleData.title}</Card.Title>
            <Card.Text>{articleData.published_at}</Card.Text>
            <Card.Text>{articleData.summary}</Card.Text>
            <Card.Text>{articleData.news_site}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
  )
}

export default Article