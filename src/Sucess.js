import React from "react";
import { withRouter } from "react-router-dom";
import firebase from "./firebase";

function Sucess(props) {
  async function logout() {
    try {
      await firebase.logOut();
      props.history.replace("/");
    } catch (error) {}
  }
  return (
    <>
      {firebase.getCurrentUsername() && (
        <div className="App">
          <div className="card">
            <h3>Welcome Back !</h3>
            <div className="chip">
              <img
                src={firebase.getCurrentUserAvatar()}
                alt="Person"
                width="96"
                height="96"
              />
              <strong>{firebase.getCurrentUsername()}</strong>
            </div>
            <br />
            <button onClick={logout} className="myButton">
              <i className="fa fa-sign-out"></i> Log Out
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default withRouter(Sucess);
