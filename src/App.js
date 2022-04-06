import "./App.css";
import app from "./firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({}); // Sign-out successful.
      })
      .catch((error) => {
        setUser({});
        // An error happened.
      });
  };

  return (
    <div className="App">
      {/* condition ? true : false */}
      {/* {user.email ? ( */}
      {user.uid ? (
        // sign in kora thakle sign out button dekhabo
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        // sign out kora thakle sign in button dekhabo
        //fragment <> diver moto kaj korbe, div banabe na
        <>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
          <button onClick={handleGithubSignIn}>Github Sign In</button>
        </>
      )}

      <h2>Name: {user.displayName}</h2>
      <p>I know your Email address: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
