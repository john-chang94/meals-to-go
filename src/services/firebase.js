import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCNKe9e-EnpXTe4NgtKz_sbOD0MhLWX8iY",
  authDomain: "meals-to-go-a18a6.firebaseapp.com",
  projectId: "meals-to-go-a18a6",
  storageBucket: "meals-to-go-a18a6.appspot.com",
  messagingSenderId: "138947514161",
  appId: "1:138947514161:web:c228c7a6ab600444ac2a10",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
