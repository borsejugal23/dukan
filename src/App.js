import MainBox from "./components/mainBox/MainBox";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"

function App() {
  return (
    <div className="app">
        <div className="container1">
            <Sidebar />
        </div>
        <div className="container2">
            <Navbar/>
            <MainBox/>
        </div>
    </div>
  );
}

export default App;
