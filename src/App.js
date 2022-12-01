import "./App.css";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import { HiChevronDown } from "react-icons/hi";

function App() {
  return (
    <div className="w-full justify-center">
      <Header />
      <main className="w-[76%] m-auto">
        <div className="my-14 py-2">
          <div className="sm:flex justify-between items-center">
            <ul>
              <li className="hidden sm:block lg:text-4xl font-semibold">
                Search properties to rent
              </li>
            </ul>
            <ul className="flex items-center justify-between border-2 border-gray-300 px-3 py-2 rounded-md text-gray-600">
              <li className="font-semibold">
                <input
                  type="search"
                  className="outline-none"
                  placeholder="Search with Search Bar"
                />
              </li>
              <li>
                <HiChevronDown />
              </li>
            </ul>
          </div>
          <NavBar />
        </div>

        {/* main-content */}

        <div className=" ">
          <div className="grid xl:grid-cols-3 lg:grid-row-3 md:grid-cols-2 lg:gap-8 md:gap-6 sm:gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
