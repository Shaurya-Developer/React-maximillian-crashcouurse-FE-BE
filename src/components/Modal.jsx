import { useNavigate } from "react-router-dom";

// useNavigate use to create a link in our components without using Link component
import classes from "./Modal.module.css";

function Modal({ children }) {
  const navigate = useNavigate(); // it give us function
  function closeHandler() {
    // navigate("/"); // we define where we want to go
    // This below is same as above, .. dot means going to parent element so its bit more dynamic
    navigate("..");
  }
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
