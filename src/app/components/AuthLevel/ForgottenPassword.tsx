import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Email from "../../../interfaces/forgottEmail";
import ForgottenFormContainer from "./ForgotterFormContainer";
import GeneratedCodeForm from "./GeneratedCodeForm";

interface Props {
  closeModalHandler: (type: boolean) => void;
}

const ForgottenPassword: React.FC<Props> = ({ closeModalHandler }) => {

  const [isCodeResetView, setIsCodeResetView] = useState<Email>();

  return (
    <div className="forgotten-modal-container">
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-text">
            <Container className="custom-container">
              <Row className="center">
                <Col lg={6}>
                    {!isCodeResetView && <ForgottenFormContainer closeModalHandler={closeModalHandler} setIsCodeResetView={setIsCodeResetView}/>}
                    {isCodeResetView && <GeneratedCodeForm closeModalHandler={closeModalHandler} codeData={isCodeResetView} />}
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
