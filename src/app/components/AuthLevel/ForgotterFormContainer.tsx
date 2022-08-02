import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ForgottenForm from "./ForgottenForm";
import { User } from "../../../../generated/graphql";

interface Props {
  closeModalHandler: (type: boolean) => void;
  setIsCodeResetView: (type: object) => void;
  setUserList: (type: Array<User>) => void;
}

const ForgottenFormContainer: React.FC<Props> = ({ closeModalHandler, setIsCodeResetView, setUserList }) => {
  return (
    <div className="forgotten-form-holder">
      <div className="title">
        <h3>Намиране на вашия акаунт</h3>
      </div>
      <ForgottenForm closeModalHandler={closeModalHandler} setIsCodeResetView={setIsCodeResetView} setUserList={setUserList}/>
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
