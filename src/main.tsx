import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { initializeApp } from "firebase/app";
import { FIREBASE_CONFIG } from "./config";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(<App />);

initializeApp(FIREBASE_CONFIG);
