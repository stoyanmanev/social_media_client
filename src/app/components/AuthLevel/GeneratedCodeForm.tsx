import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ForgottenForm from "./ForgottenForm";
import Email from "../../../interfaces/forgottEmail";
import { Button, Form } from "react-bootstrap";
import { FormEvent, useEffect, useState } from "react";

interface Props {
  closeModalHandler: (type: boolean) => void;
  setIsNewPasswordView: (type: string) => void;
  setIsCodeResetView:(type: Email | undefined) => void;
  codeData: Email;
}

const GeneratedCodeForm: React.FC<Props> = ({
  closeModalHandler,
  setIsNewPasswordView,
  setIsCodeResetView,
  codeData,
}) => {
  const [inputCode, setInputCode] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [isWrongCode, setIsWrongCode] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrorMsg(true);
      clearTimeout(timeout)
    }, codeData.avaiblleTime);
  }, []);

  const userCloseModal = () => {
    if (inputCode !== codeData.code) closeModalHandler(false);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(errorMsg) return false;
    if (inputCode === codeData.code) {
      setIsWrongCode(false);
      setIsCodeResetView(undefined)
      setIsNewPasswordView(codeData.email)
    } else {
      setInputCode("");
      setIsWrongCode(true);
    }
  };

  return (
    <div className="forgotten-form-holder">
      <div className="title">
        <h3>Въведете получения от имейла си код</h3>
      </div>
      
      <Form className="login-form" onSubmit={(e) => submitHandler(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="hidden-label">
            Въведете получения код
          </Form.Label>
          {!errorMsg && <Form.Control
            type="text"
            placeholder={`${isWrongCode ? "Въведения код е грешен" : "Код"}`}
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
          />}
          {errorMsg && <Form.Control
            type="text"
            placeholder={`${isWrongCode ? "Въведения код е грешен" : "Код"}`}
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            disabled
          />}
        </Form.Group>
        <Button variant="primary" type="submit">
          Изпрати
        </Button>
      </Form>
      <div className="modal-info">
        {!errorMsg && (
          <div>
            <p>
              Изпратихме имейл на посочения адрес. Моля въведете кода от имейла!
            </p>
            <p>
              Кода ще бъде активен само 2 минути, като след това това съобщения
              ще се затвори автоматично.
            </p>
          </div>
        )}
        {errorMsg && (
          <div className="alert-msg">
            <p>
              Времето изтече. Моля опитайте отново.
            </p>
          </div>
        )}
      </div>
      <div className="close">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => {
            userCloseModal();
          }}
        />
      </div>
    </div>
  );
};

export default GeneratedCodeForm;
