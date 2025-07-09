import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.jpg";
import chatify from "../../Assets/Projects/chatify.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="GoRICO"
              description={`Conducted an in-depth security assessment of GoRICO, Accorian’s proprietary Governance, Risk, and Compliance (GRC) automation platform, emulating real-world attacker behavior through a combination of manual exploitation and automated testing to evaluate the platform’s security posture.\n
Identified and reported several critical and medium-severity vulnerabilities, including Stored and Reflected XSS, malicious file upload, HTML injection in email content, rate limiting bypass, and business logic flaws.\n
Uncovered key issues such as improper error handling, use of components with known vulnerabilities, weak TLS configurations, server-side validation gaps, and server information disclosure.\n
Delivered comprehensive, risk-prioritized reports with CVSS scoring, technical impact analysis, and clear remediation guidance.\n
The engagementled to significant improvements in application resilience and reduced overall attack surface.`}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Leading Healthcare Web Application (Confidential)"
              description={`Conducted end-to-end penetration testing on a healthcare web app using Black/Grey Box approaches. Identified critical XSS, business logic flaws, and malicious file upload issues across web, API, and cloud infrastructure.\n
              Delivered CVSS-scored reports with technical and business impact. Collaborated cross-functionally using Burp Suite Pro, OWASP ZAP, Nmap, and Tenable to mitigate risks in an agile environment.`}/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Payatu Bandit Store & Maximus Tool"
              description={`Led end-to-end VAPT of the Payatu Bandit Store application, covering Web and API layers. Simulated real-world attack scenarios to uncover critical vulnerabilities including SQL Injection, Reflected XSS, and Broken Authentication. Findings were mapped to OWASP Top 10 and CVE standards.\n
              Used a combination of manual and automated techniques with tools like Maximus (Payatu’s internal platform), Burp Suite, OWASP ZAP, and Nmap. Delivered detailed reports with CVSS scores, reproduction steps, and risk ratings. Worked closely with developers to validate fixes and enforce secure coding practices through collaborative remediation sessions.\n
              Contributed to Payatu’s Coordinated Vulnerability Disclosure (CVD) program using Maximus for vulnerability tracking and reporting automation. Helped improve the secure SDLC by streamlining disclosure workflows and providing actionable, best-practice-aligned mitigation strategies.`}          
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
