import { Navigate, Route, Routes } from "react-router-dom";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="country" />} />
      <Route path="country" element={<Home />} />
      <Route path="country/:name" element={<CountryDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
