import admin from "firebase-admin";
import serviceAccount from "../key.js";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://peaman-ac825.firebaseio.com",
});

export default admin;
