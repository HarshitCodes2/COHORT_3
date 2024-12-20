import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { SignUpPage } from "./components/Signup";
import { SignInPage } from "./components/Signin";
import { NotFound } from "./components/notfound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          {/* <Route path='/info' element={} />
          <Route path='/space' element={} />
          <Route path='/arena' element={} />
          <Route path='/admin' element={} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
