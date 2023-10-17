import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import bmwImg from "../../assets/images/bmw.jpg";
import Container from "react-bootstrap/Container";

function CardComponent() {
  return (
    <div style={{ padding: "30px 0", backgroundColor: "pink" }}>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={bmwImg} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default CardComponent;
