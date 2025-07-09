import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaBug,
  FaShieldAlt,
  FaNetworkWired,
  FaTerminal,
  FaSearch,
  FaLock,
  FaDatabase,
  FaExclamationTriangle,
  FaSkullCrossbones,
} from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaBug /> {/* Burp Suite */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaShieldAlt /> {/* OWASP ZAP */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired /> {/* Nmap */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTerminal /> {/* Metasploit */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSearch /> {/* Nessus */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLock /> {/* Qualys */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaExclamationTriangle /> {/* Nikto */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase /> {/* SQLMap */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSkullCrossbones /> {/* Exploit-DB */}
      </Col>
    </Row>
  );
}

export default Toolstack;
