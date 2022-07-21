import { Row, Col, Container } from "react-bootstrap";
import ForgottenFormContainer from "./ForgotterFormContainer";

interface Props {
  closeModalHandler: (type: boolean) => void;
}

const ForgottenPassword: React.FC<Props> = ({ closeModalHandler }) => {
  return (
    <div className="forgotten-modal-container">
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-text">
            <Container className="custom-container">
              <Row className="center">
                <Col lg={6}>
                    <ForgottenFormContainer closeModalHandler={closeModalHandler}/>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgottenPassword;
