import { Col } from "react-bootstrap";
import { FaLink } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

export const ProjectCard = ({ title, description, imgUrl, webLink, gitLink }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} className="proj-img"></img>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description} </span>
          <a className="project-txtx-link" href={webLink} target="_blank"><i><FaLink /></i> </a>
          <a className="project-txtx-link" href={gitLink} target="_blank"><i><VscGithub /></i></a>
        </div>
      </div>
    </Col>
  );
};
