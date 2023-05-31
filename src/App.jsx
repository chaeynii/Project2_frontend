import "./App.css";
import styled from "styled-components";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/Header.jsx";
import SearchPage from "./pages/search/SearchPage";
import MapHospital from "./pages/map/MapHospital";

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <Container>
        <QueryClientProvider client={queryClient}>
          <div className="App">
            {/* <SearchPage /> */}
            <MapHospital />
          </div>
        </QueryClientProvider>
      </Container>
    </RecoilRoot>
  );
}

export default App;

export const Container = styled.div`
  width: 100%;
  max-width: 834px;
  margin: 0 auto;

  text-align: center;
`;
