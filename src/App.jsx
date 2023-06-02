import "./App.css";
import styled from "styled-components";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import SearchPage from "./pages/search/SearchPage";
import SearchPageTest from "./pages/search/SearchPageTest";
import MapHospital from "./pages/map/MapHospital";
import MapMyPage from "./pages/map/MapMyPage";

const queryClient = new QueryClient();

function App() {
  return (
    <Container>
      <Router>
        <QueryClientProvider client={queryClient}>
          {/* <SearchPageTest /> */}
          {/* <MapHospital /> */}
          <MapMyPage />
        </QueryClientProvider>
      </Router>
    </Container>
  );
}

export default App;

export const Container = styled.div`
  width: 100%;
  max-width: 834px;
  margin: 0 auto;

  text-align: center;
`;
