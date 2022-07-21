import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ForgottenForm from "./ForgottenForm";

interface Props {
  closeModalHandler: (type: boolean) => void;
}

const ForgottenFormContainer: React.FC<Props> = ({ closeModalHandler }) => {
  return (
    <div className="forgotten-form-holder">
      <div className="title">
        <h3>Намиране на вашия акаунт</h3>
      </div>
      <ForgottenForm />
      <div className="close">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => closeModalHandler(false)}
        />
      </div>
    </div>
  );
};

export default ForgottenFormContainer;
