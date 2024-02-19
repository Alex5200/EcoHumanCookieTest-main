import ReactDOM from "react-dom/client";
import Test from "./test/Test.jsx";
import "./index.css";
import { CookiesProvider } from "react-cookie";
import ChekList from "./chekList/ChekList.jsx";
import App from "./App.jsx";
import GlobalFonts from './styled.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  <CookiesProvider defaultSetOptions={{ path: "/" }}>
    <GlobalFonts/>
    <ChekList />
  </CookiesProvider>,
);
