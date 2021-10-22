import firebase from "firebase";

export const signIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}