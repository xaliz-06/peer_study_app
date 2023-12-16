import React from "react";

import styles from "./Login.module.css";
import LoginModal from "./LoginModal";

import Card from "../../../ui/Card";

const Login = (props) => {
  const cartModalContent = (
    <React.Fragment>
      <Card>
        <div className={styles.modal_actions}>
          <ul className={styles.modal_list}>
            <li className={styles.modal_action}>Your Profile</li>
            <li className={styles.modal_action}>Billing</li>
            <li className={styles.modal_action}>Account Settings</li>
            <li className={styles.modal_action}>Log Out</li>
          </ul>
        </div>
      </Card>
    </React.Fragment>
  );

  return (
    <div>
      <LoginModal onClose={props.onHideModal}>{cartModalContent}</LoginModal>
    </div>
  );
};

export default Login;
