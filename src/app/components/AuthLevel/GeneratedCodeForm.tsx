import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ForgottenForm from "./ForgottenForm";
import Email from "../../../interfaces/forgottEmail";
import { Button, Form } from "react-bootstrap";
import { FormEvent, useEffect, useState } from "react";

interface Props {
  closeModalHandler: (type: boolean) => void;
  codeData: Email;
}

const GeneratedCodeForm: React.FC<Props> = ({
  closeModalHandler,
  codeData,
}) => {

  const [inputCode, setInputCode] = useState("");
  const [isWrongCode, setIsWrongCode] = useState<boolean>(false);

  console.log(codeData.code);

  useEffect(() => {
      const timeout = setTimeout(() => {
        console.log('end timeout')
        clearTimeout(timeout)
        return userCloseModal()
      }, 10000)
  },[])

  const userCloseModal = () => {
    if(inputCode !== codeData.code) closeModalHandler(false);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputCode === codeData.code) {
        setIsWrongCode(false);
      console.log("reset password");
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
          <Form.Control
            type="text"
            placeholder={`${isWrongCode ? "Въведения код е грешен" : "Код"}`}
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Изпрати
        </Button>
      </Form>
      <div className="modal-info">
        <p>
          Изпратихме имейл на посочения адрес. Моля въведете кода от имейла!
        </p>
        <p>
          Кода ще бъде активен само 2 минути, като след това това съобщения ще
          се затвори автоматично.
        </p>
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
