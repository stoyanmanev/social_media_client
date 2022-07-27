import { FormEvent, useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { User, useUsersQuery } from "../../../../generated/graphql";
import sendEmail from "../../../helpers/sendEmail"
import Email from "../../../interfaces/forgottEmail";

interface Props {
  closeModalHandler: (type: boolean) => void;
  setIsCodeResetView: (type: object) => void;
}

const ForgottenForm: React.FC<Props> = ({ closeModalHandler, setIsCodeResetView }) => {
  const [email, setEmail] = useState("");
  const usersList: any = useUsersQuery<any>({}, { refetchOnWindowFocus: true });

  if (usersList.isLoading) {
    return (
      <div>
        <span>Зареждане...</span>
      </div>
    );
  }

  const existingEmail = async() => {
    const sendingEmail: Email | any = await sendEmail(email)

    if(sendingEmail?.send) {
      return setIsCodeResetView({code: sendingEmail.code, avaiblleTime: sendingEmail.avaiblleTime});
    }
    return toast.info("Неуспяхме да изпратим имейл към посочения адрес! Моля свържете се с на placeholder@socialmedia.com");
  }

  const notExistingEmail = () => {
    closeModalHandler(false);
    toast.info("Няма профил регистриран с въведения имейл.");
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "") return false;
    const fetchResults: {users : Array<User>} | undefined = usersList.data;
    const isEmailExist: Array<User> = fetchResults.users.filter(user => user.email === email);

    if(isEmailExist.length > 0) return existingEmail();
    return notExistingEmail();
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
        <Button type="submit">Търсене</Button>
      </Form>
    </div>
  );
};

export default ForgottenForm;
