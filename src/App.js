import Navbar from "./websiteParts/navbar";
import Sidebar from "./websiteParts/sidbar";
import Footer from "./websiteParts/fotter";
import Main from "./websiteParts/main";
import { Outlet } from "react-router-dom"; /// to use nested routes
const App = () => {
  return (
    <>
      <div className="gridContainer">
        <Navbar />
        <div className="middleContainer">
          <Sidebar />
          <Main />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
