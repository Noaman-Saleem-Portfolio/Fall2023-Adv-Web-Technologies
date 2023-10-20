import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import bmwImg from "../../assets/images/bmw.jpg";
import Container from "react-bootstrap/Container";

function CardComponent(prop) {
  console.log(prop);
  return (
    <div style={{ padding: "30px 0", backgroundColor: "pink" }}>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={bmwImg} />
          <Card.Body>
            <Card.Title>{prop.carName}</Card.Title>
            <Card.Text>
              {prop.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default CardComponent;
