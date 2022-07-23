import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { useLoginMutation } from "../../../../generated/graphql";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [visiblePass, setVisiblePass] = useState(false);
  const [cookie, setCookie] = useCookies(["token"]);

  const {mutate} = useLoginMutation({
    onSuccess: async (data) => {
      console.log(data);
      await setCookie("token", data.login, {
        path: "/",
        maxAge: 360000,
        sameSite: true,
      });
    },
    onError: (err: any) => {
      const errorMsg = String(err).split(":")[1];
      toast.error(`${errorMsg}`);
    }
  })

  const isNotEmptyFields = email !== "" && pass !== "";

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!isNotEmptyFields) {
      if(!email) return toast.error(`Полето Имейл е задължително`);
      if(!pass) return toast.error(`Полето Парола е задължително`);
    }else{
      if(pass.length < 6) return toast.error(`Минималната дължина на паролата не е изпълнена`);
    }

    mutate({
      email,
      password: pass
    })
  };

  return (
    <div className="login-form-holder">
      <Form className="login-form" onSubmit={(e) => submitHandler(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="hidden-label">Имейл</Form.Label>
          <Form.Control
            type="email"
            placeholder="Имейл"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          className="mb-3 password-field"
          controlId="formBasicPassword"
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
        <Button variant="primary" type="submit">
          Вход
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
