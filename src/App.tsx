import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Programs from "./pages/Programs";
import MobilityTest from "./pages/MobilityTest";
import Routine from "./pages/Routine";
import Workout from "./pages/Workout";

function AppContent() {
  const location = useLocation();

  const isWorkout = location.pathname === "/workout";
  const isMobilityTest = location.pathname === "/mobility-test";

  return (
    <>
      {!isWorkout && !isMobilityTest && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/explore" element={<Explore />} />

        <Route path="/programs" element={<Programs />} />

        <Route
          path="/mobility-test"
          element={<MobilityTest />}
        />

        <Route path="/routine" element={<Routine />} />

        <Route path="/workout" element={<Workout />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}