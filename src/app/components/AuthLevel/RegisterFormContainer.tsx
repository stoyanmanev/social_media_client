import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import RegisterForm from "./RegisterForm";

interface Props {
  closeModalHandler: (type: boolean) => void;
}

const RegisterFormContainer: React.FC<Props> = ({ closeModalHandler }) => {
  return (
    <div className="register-form-holder">
      <div className="title">
        <h2>Регистрация <span>Бързо и лесно е</span></h2>
      </div>
      <RegisterForm />
      <div className="close">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => closeModalHandler(false)}
        />
      </div>
    </div>
  );
};

export default RegisterFormContainer;
