import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { User } from "../../../../generated/graphql";
import Email from "../../../interfaces/forgottEmail";
import ForgottenFormContainer from "./ForgotterFormContainer";
import GeneratedCodeForm from "./GeneratedCodeForm";
import ResetPasswordForm from "./ResetPasswordForm";

interface Props {
  closeModalHandler: (type: boolean) => void;
}

const ForgottenPassword: React.FC<Props> = ({ closeModalHandler }) => {

  const [userList, setUserList] = useState<Array<User>>();
  const [isCodeResetView, setIsCodeResetView] = useState<Email>();
  const [isNewPasswordView, setIsNewPasswordView] = useState('');

  return (
    <div className="forgotten-modal-container">
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-text">
            <Container className="custom-container">
              <Row className="center">
                <Col lg={6}>
                    {(!isCodeResetView && !isNewPasswordView) && <ForgottenFormContainer closeModalHandler={closeModalHandler} setIsCodeResetView={setIsCodeResetView} setUserList={setUserList}/>}
                    {isCodeResetView && <GeneratedCodeForm closeModalHandler={closeModalHandler} codeData={isCodeResetView} setIsCodeResetView={setIsCodeResetView} setIsNewPasswordView={setIsNewPasswordView}/>}
                    {isNewPasswordView && <ResetPasswordForm closeModalHandler={closeModalHandler} setIsNewPasswordView={setIsNewPasswordView} user={userList[0]}/>}
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
