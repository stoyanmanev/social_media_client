import { FormEvent, useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RegisterForm: React.FC = () => {
  const [personalName, setPersonalName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [dob, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [visiblePass, setVisiblePass] = useState(false);

  const isNotEmptyFields =
    personalName !== "" &&
    familyName !== "" &&
    email !== "" &&
    pass !== "" &&
    dob !== "" &&
    gender !== "";

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(isNotEmptyFields) return false;
    console.log(personalName, familyName, email, pass, gender, dob);
  };

  return (
    <div>
      <Form className="register-form" onSubmit={(e) => submitHandler(e)}>
        <Row>
          <Col lg={6}>
            <Form.Group className="mb-3" controlId="formRegisterPersonalName">
              <Form.Label className="hidden-label">Собствено име</Form.Label>
              <Form.Control
                type="text"
                placeholder="Собствено име"
                value={personalName}
                onChange={(e) => setPersonalName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group className="mb-3" controlId="formRegisterFamilyName">
              <Form.Label className="hidden-label">Фамилно име</Form.Label>
              <Form.Control
                type="text"
                placeholder="Фамилно име"
                value={familyName}
                onChange={(e) => setFamilyName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col lg={12}>
            <Form.Group className="mb-3" controlId="formRegisterEmail">
              <Form.Label className="hidden-label">Имейл</Form.Label>
              <Form.Control
                type="text"
                placeholder="Имейл"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col lg={12}>
            <Form.Group
              className="mb-3 password-field"
              controlId="formRegisterPassword"
            >
              <Form.Label className="hidden-label">Парола</Form.Label>
              <Form.Control
                type={visiblePass ? "text" : "password"}
                placeholder="Парола"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="pass-view-btn"
                onClick={() => setVisiblePass(!visiblePass)}
              />
            </Form.Group>
          </Col>
          <Col lg={12}>
            <Form.Group className="mb-3" controlId="formRegisterDOB">
              <Form.Label className="register-label">
                Дата на раждане
              </Form.Label>
              <Form.Control
                type="date"
                placeholder="Дата на раждане"
                value={dob}
                onChange={(e) => setDOB(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col lg={12}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formRegisterGender"
            >
              <Form.Label className="register-label">Пол</Form.Label>
              <Col lg={6}>
                <Form.Check
                  type="radio"
                  label="Мъж"
                  name="ganderRadio"
                  id="genderMaleRadio"
                  className="gender-radio"
                  onClick={() => setGender("male")}
                />
              </Col>
              <Col lg={6}>
                <Form.Check
                  type="radio"
                  label="Жена"
                  name="ganderRadio"
                  id="genderFemaleRadio"
                  className="gender-radio"
                  onClick={() => setGender("female")}
                />
              </Col>
            </Form.Group>
          </Col>
        </Row>

        <Button className="register-btn" type="submit">
          Регистрация
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
