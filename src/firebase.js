import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq4SkGkh7WnA9f9nMugbo48R1rqfgqby0",
  authDomain: "fir-crud-7067b.firebaseapp.com",
  databaseURL: "https://fir-crud-7067b-default-rtdb.firebaseio.com",
  projectId: "fir-crud-7067b",
  storageBucket: "fir-crud-7067b.appspot.com",
  messagingSenderId: "964350168514",
  appId: "1:964350168514:web:d1c9aa96148886074f9a5b",
  measurementId: "G-EEYH9EDYEE",
};
// Initialize Firebase

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  googleLogin() {
    const googleProvider = new app.auth.GoogleAuthProvider();
    return this.auth.signInWithPopup(googleProvider);
  }

  facebookLogin() {
    const facebookProvider = new app.auth.FacebookAuthProvider();
    return this.auth.signInWithPopup(facebookProvider);
  }

  githubLogin() {
    const GitProvider = new app.auth.GithubAuthProvider();
    return this.auth.signInWithPopup(GitProvider);
  }

  getCurrentUserAvatar() {
    return this.auth.currentUser && this.auth.currentUser.photoURL;
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  logOut() {
    this.auth.signOut();
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
}

export default new Firebase();
