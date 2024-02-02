import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "./ProjectCard";
import Treact from "../components/assets/img/Treact.png";
import Library from "../components/assets/img/Library.png";
import Techstore from "../components/assets/img/Techstore.png";

export const Projects = () => {
  const projects = [
    {
      title: "Clone Website",
      description:
        "A beautiful clone built from raw HTML, CSS, and JavaScript.",
      imgUrl: Treact,
    },
    {
      title: "E-Commerce Tech Store",
      description:
        "A tech E-commerce website with functional and dynamic backend API services.",
      imgUrl: Techstore,
    },
    {
      title: "E-Commerce Library",
      description: "A function library website built with React.js.",
      imgUrl: Library,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Below is a snapshot of some of my projects!</p>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav
                varient="pills"
                className="nav-pills"
                mb-5
                justify-content-center
                align-items-center
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first" className="pane">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second"></Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-img-right" src={colorSharp2}></img> */}
    </section>
  );
};
