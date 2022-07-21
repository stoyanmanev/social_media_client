import { FormEvent, useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";

const ForgottenForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "") return false;
    console.log(email);
  };

  return (
    <div>
      <Form className="register-form" onSubmit={(e) => submitHandler(e)}>
        <Row>
          <Col lg={12}>
            <Form.Group className="mb-3" controlId="formRegisterEmail">
              <Form.Label>
                Моля, въведете своя имейл, за да потърсите акаунта си.
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Имейл"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button type="submit">
          Търсене
        </Button>
      </Form>
    </div>
  );
};

export default ForgottenForm;
