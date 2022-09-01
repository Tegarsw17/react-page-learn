import { Card, Container, Row } from "react-bootstrap";

const CardHome = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Card bg="dark" text="white">
          <Card.Body>
            <h3 className="text-center">Welcome To My Page</h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="https://raw.githubusercontent.com/reactjs/reactjs.org/main/src/icons/logo.svg"
                height={400}
                width={400}
              />
            </div>
            <p className="text-center mt-2">
              This website create during attend course from Dea Afrizal about
              reactjs fundamental
            </p>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default CardHome;
