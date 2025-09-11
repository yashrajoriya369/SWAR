import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile";
import MainLayout from "./component/MainLayout";
import Dashboard from "./pages/dashboard";
import Interviews from "./pages/interviews";
import History from "./pages/history";
import Team from "./pages/team";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="interviews" element={<Interviews />} />
          <Route path="history" element={<History />} />
          <Route path="team" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
