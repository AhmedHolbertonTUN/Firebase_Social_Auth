import React from "react";
import { withRouter } from "react-router-dom";
import firebase from "./firebase";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";
import "./styles.css";

function Home(props) {
  async function onLogin() {
    try {
      await firebase.googleLogin();
      props.history.replace("/sucess");
    } catch (error) {
      alert(error.message);
    }
  }

  async function FbLogin() {
    try {
      await firebase.facebookLogin();
      props.history.replace("/sucess");
    } catch (error) {
      alert(error.message);
    }
  }

  async function GithubLogin() {
    try {
      await firebase.githubLogin();
      props.history.replace("/sucess");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="App">
      <div className="login-form">
        <div className="login-form__top">USER LOGIN</div>
        <div className="box">
          <GoogleLoginButton onClick={onLogin} />
          <FacebookLoginButton onClick={FbLogin} />
          <GithubLoginButton onClick={GithubLogin} />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Home);
