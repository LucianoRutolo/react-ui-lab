import { Header } from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataTablePage } from "./components/DataTable/DataTablePage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-w-dvw min-h-dvh bg-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<DataTablePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
