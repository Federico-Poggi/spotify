import { Component } from "react";
import { Col, Row } from "react-bootstrap";

class Rock extends Component {
  state = {
    data: [],
  };

  updateComponent = (key, value) => {
    this.setState({
      data: {
        ...this.state.data,
        [key]: value,
      },
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const dataArtist = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
    );

    if (dataArtist.ok) {
      const datas = await dataArtist.json();
      this.updateComponent("data", datas);
    } else {
      console.log("error getting data");
    }

    console.log(this.state.m);
  };

  render() {
    return (
      <div>
        <Row>
          <Col>
            <p>Ciao</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Rock;
