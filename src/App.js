import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/Header.jsx";
import SearchPage from "./pages/search/SearchPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <SearchPage />
      </div>
    </QueryClientProvider>
  );
}

export default App;
