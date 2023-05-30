import "./App.css";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar";
import SearchPage from "./pages/search/SearchPage";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <SearchBar /> */}
      <SearchPage />
    </div>
  );
}

export default App;
