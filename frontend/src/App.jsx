import React from 'react'
import { Routes, Route } from "react-router";
import TermsPage from "./TermsPage/Page";
import DashboardPage from "./DashBoard/Page";
import PageNotFound from "./PageNotFound/Page";
import Home from './Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="terms" element={<TermsPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App