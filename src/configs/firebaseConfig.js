import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDK3DnHw8FyFy9gNxv3w4UNvDUTuhNg1p0",
  authDomain: "peaman-ac825.firebaseapp.com",
  databaseURL: "https://peaman-ac825.firebaseio.com",
  projectId: "peaman-ac825",
  storageBucket: "peaman-ac825.appspot.com",
  messagingSenderId: "338536543666",
  appId: "1:338536543666:web:064e10b9a48d575a98a0ab",
  measurementId: "G-4X4CG93PHW",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
