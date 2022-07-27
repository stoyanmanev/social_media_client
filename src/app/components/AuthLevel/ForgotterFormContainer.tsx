import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ForgottenForm from "./ForgottenForm";

interface Props {
  closeModalHandler: (type: boolean) => void;
  setIsCodeResetView: (type: object) => void;
}

const ForgottenFormContainer: React.FC<Props> = ({ closeModalHandler, setIsCodeResetView }) => {
  return (
    <div className="forgotten-form-holder">
      <div className="title">
        <h3>Намиране на вашия акаунт</h3>
      </div>
      <ForgottenForm closeModalHandler={closeModalHandler} setIsCodeResetView={setIsCodeResetView}/>
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
