import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/InputForm";
import Page404 from "./components/page404";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container_css}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculadora" element={<Form />} />
          <Route path="404" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;