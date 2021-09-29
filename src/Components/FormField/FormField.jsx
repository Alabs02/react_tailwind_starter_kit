import { Fragment, useState } from "react";
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import './FormField.css';
import 'animate.css';

export const TextField = (props) => {
  return(
    <Fragment>
      <input className="form-control" {...props} />
    </Fragment>
  );
}

export const PasswordField = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Fragment>
      <div className="password-container">
        <input type={isVisible ? "text" : "password"} className="form-control input-password" {...props} />
        { isVisible
          ? <AiOutlineEye onClick={() => setIsVisible(!isVisible)} size="20px" className="input-append text-primary animate__animated animate__pulse" />
          : <AiOutlineEyeInvisible onClick={() => setIsVisible(!isVisible)} size="20px" className="input-append text-primary animate__animated animate__pulse" />
        }
      </div>
    </Fragment>
  );
}




