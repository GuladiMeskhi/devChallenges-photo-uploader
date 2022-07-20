import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDfS7kw0WC2VZRn02m2l8Lc12KZYRZ4krs",
  authDomain: "final-photo-uploader-this-time.firebaseapp.com",
  projectId: "final-photo-uploader-this-time",
  storageBucket: "final-photo-uploader-this-time.appspot.com",
  messagingSenderId: "820183252245",
  appId: "1:820183252245:web:db46b84a5551044c477d1c"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)