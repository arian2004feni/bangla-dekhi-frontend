import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase-init";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [authModalTrigger, setAuthModalTrigger] = useState(false);
  const [authTitle, setAuthTitle] = useState("Wellcome Back!");
  const [authSlogan, setAuthSlogan] = useState(
    "Wellcome back. Please enter your details."
  );

  const openAuthModal = () => {
    document.getElementById("authModal").showModal();
  };

  const closeAuthModal = () => {
    document.getElementById("authModal").close();
  };

  const signIn = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const login = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    signIn,
    login,
    openAuthModal,
    closeAuthModal,
    authTitle,
    setAuthTitle,
    authSlogan,
    setAuthSlogan,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
