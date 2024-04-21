import BottomNav from "./components/sheets/BottomNav";
import { useNavigate, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ChartPage from "./pages/ChartPage";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToPage = (page: string) => {
    navigate(page);
  };
  // TODO: 다른 경로 처리
  return (
    <div className="flex justify-center">
      <div className="w-[375px] h-screen">
        <Routes>
          <Route path="/" element={<ChartPage />} />
        </Routes>
        <Routes>
          <Route path="/pay" element={<ChartPage />} />
        </Routes>
        <Routes>
          <Route path="/user" element={<ChartPage />} />
        </Routes>
        <Routes>
          <Route path="/chart" element={<ChartPage />} />
        </Routes>
        <Routes>
          <Route path="/menu" element={<ChartPage />} />
        </Routes>
        <BottomNav
          onSelect={goToPage}
          selectedMenu={location.pathname.slice(1)}
        />
      </div>
    </div>
  );
}

export default App;
