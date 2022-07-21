import { Row, Col, Container } from "react-bootstrap";
import RegisterFormContainer from "./RegisterFormContainer";

interface Props {
  closeModalHandler: (type: boolean) => void;
}

const ModalRegister: React.FC<Props> = ({ closeModalHandler }) => {
  return (
    <div className="register-modal-container">
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-text">
            <Container className="custom-container">
              <Row className="center">
                <Col lg={6}>
                  <RegisterFormContainer closeModalHandler={closeModalHandler}/>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRegister;
