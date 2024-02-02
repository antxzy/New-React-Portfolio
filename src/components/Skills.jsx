import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../components/assets/img/color-sharp.png";
import firebase from "../components/assets/img/firebase.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>My Skill Stack</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"></img>
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"></img>
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={firebase} className="firebase"></img>
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"></img>
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"></img>
                  <h5>HTML</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp}></img>
    </section>
  );
};
