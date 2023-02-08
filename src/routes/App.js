import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {LandingPage} from "../pages/LandingPage";
import {CreateAccount} from "../pages/CreateAccount";
import {LoginUser} from "../pages/LoginUser";
import {Layout} from "../containers/Layout";
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/create-account" element={<CreateAccount />} />
              <Route exact path="/login-user" element={<LoginUser />} />
          </Routes>
          <Layout>
              <Routes>
                  <Route exact path="/home" element={<h1>home</h1>} />
                  <Route path="*" element={<h1>Not Found</h1>} />
              </Routes>
          </Layout>
      </BrowserRouter>
  );
}

export {App};
