import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

function Home() {
  const [rock, setRock] = useState([]);

  useEffect(() => {
    try {
      const getRock = async () => {
        const data = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
        );
        const response = await data.json();
        setRock(response);
      };
      getRock();
    } catch (error) {
      throw new Error("error", error);
    }
  });

  return (
    <Container>
      <Row id={"rockSec"}>
        <Col>
          <h3>Rock</h3>
          {rock.map((rock) => {})}
        </Col>
      </Row>
      <Row id={"popSec"}>
        <Col>
          <h3>Pop</h3>
        </Col>
      </Row>

      <Row id={"otherSec"}>
        <Col>
          <h3>other</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
