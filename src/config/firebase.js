import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCkCMIaJ4SPCc33zQX9wpsTjXLIF1J-nWI",
  authDomain: "vigontina-statsrt.firebaseapp.com",
  databaseURL: "https://vigontina-statsrt-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vigontina-statsrt",
  storageBucket: "vigontina-statsrt.appspot.com",
  messagingSenderId: "900486495437",
  appId: "1:900486495437:web:902b81b77e42072c853d84"
};

const app = initializeApp(firebaseConfig);
export default app;
