import { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import ForgottenPassword from "./ForgottenPassword";

import LoginForm from "./LoginForm";
import ModalRegister from "./ModalRegister";

const NotAuthContainer: React.FC = () => {
  const [isViewRegisterForm, setIsViewRegisterForm] = useState(false);
  const [isViewForgotenPassForm, setIsViewForgotenPassForm] = useState(false);

  return (
    <div className="not-auth-container">
      <Container className="login-holder">
        <Container className="custom-container">
          <Row className="between a-center">
            <Col lg={2}>
              <img
                src="/images/layout/winku.png"
                alt="Winku Social Network Toolkit"
                width={94}
                height={34}
                className="mb-3"
              />
            </Col>
            <Col lg={6}>
              <div className="acount-controller">
                <LoginForm />
                <div className="forgotten-password-container">
                  <span onClick={() => setIsViewForgotenPassForm(true)}>Забравена парола?</span>
                </div>
                <hr className="hr-20" />
                <Button
                  className="register-modal-btn"
                  onClick={() => setIsViewRegisterForm(true)}
                >
                  Създаване на нов профил
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      {isViewRegisterForm && (
        <ModalRegister closeModalHandler={setIsViewRegisterForm}/>
      )}
      {isViewForgotenPassForm &&(
        <ForgottenPassword closeModalHandler={setIsViewForgotenPassForm} />
      )
      }
    </div>
  );
};

export default NotAuthContainer;
