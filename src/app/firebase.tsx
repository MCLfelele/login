// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBv4GyOuaucGA1BGv-Gjw_zyLmSeLvmEs",
  authDomain: "mcland-c1024.firebaseapp.com",
  projectId: "mcland-c1024",
  storageBucket: "mcland-c1024.appspot.com",
  messagingSenderId: "610675526329",
  appId: "1:610675526329:web:317c746a3350c353c22968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);