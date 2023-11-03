import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyA1UPwjHWqnqlyWoihMdC6FbiYsWjO8sls",
  authDomain: "reactauth-65ae7.firebaseapp.com",
  projectId: "reactauth-65ae7",
  storageBucket: "reactauth-65ae7.appspot.com",
  messagingSenderId: "525353226872",
  appId: "1:525353226872:web:a37cf652bb0e34b11b938d",
  measurementId: "G-5F1DR9DK9T"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};