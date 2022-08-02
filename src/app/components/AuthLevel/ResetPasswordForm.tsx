import { faEyeSlash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useEditUserMutation, User } from "../../../../generated/graphql";

interface Props {
  setIsNewPasswordView: (type: string) => void;
  closeModalHandler: (type: boolean) => void;
  user: User;
}

const ResetPasswordForm: React.FC<Props> = ({
  closeModalHandler,
  user,
  setIsNewPasswordView,
}) => {
  const [pass, setPass] = useState<string>("");
  const [repeatPass, setRepeatPass] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [visiblePass, setVisiblePass] = useState<boolean>(false);

  const { mutate } = useEditUserMutation({
    onSuccess: () => {
      resetData();
      toast.info("Успешно обновихте паролата си.");
    },
    onError: (error) => {
      console.log(error);
      const str = String(error);
      if (str.match("Argument Validation Error")) {
        toast.error(
          "Неуспешно обновяване на паролата! Моля въведете парола от минимум 6 символа."
        );
      } else {
        toast.error("Неуспешно обновяване на паролата! Моля опитайте отново.");
        resetData();
        throw new Error(String(error));
      }
    },
  });

  const resetData = () => {
    setIsNewPasswordView("");
    closeModalHandler(false);
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (pass !== repeatPass) {
      setPass("");
      setRepeatPass("");
      return setError(true);
    }

    if (pass === repeatPass) {
      mutate({
        id: user._id,
        data: {
          password: pass,
        },
      });
    }
    return false;
  };

  return (
    <div className="forgotten-form-holder">
      <div className="title">
        <h3>Въведете желаната нова парола</h3>
      </div>

      <Form className="login-form" onSubmit={(e) => submitHandler(e)}>
        <Form.Group
          className="mb-3 password-field"
          controlId="formBasicPassword"
        >
          <Form.Label className="hidden-label">Въведете нова парола</Form.Label>
          <Form.Control
            type={visiblePass ? "text" : "password"}
            placeholder={
              error ? "Паролите не съвпаднаха" : "Въведете нова парола"
            }
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faEyeSlash}
            className="pass-view-btn"
            onClick={() => setVisiblePass(!visiblePass)}
          />
        </Form.Group>
        <Form.Group
          className="mb-3 password-field"
          controlId="formBasicConfirmPassword"
        >
          <Form.Label className="hidden-label">
            Поторете новата парола
          </Form.Label>
          <Form.Control
            type={visiblePass ? "text" : "password"}
            placeholder="Поторете новата парола"
            value={repeatPass}
            onChange={(e) => setRepeatPass(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faEyeSlash}
            className="pass-view-btn"
            onClick={() => setVisiblePass(!visiblePass)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Изпрати
        </Button>
      </Form>
      <div className="close">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => {
            resetData();
          }}
        />
      </div>
    </div>
  );
};

export default ResetPasswordForm;
