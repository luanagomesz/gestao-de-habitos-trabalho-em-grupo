import GlobalStyle from "./GlobalStyle/style";
import { DashboardProvider } from "./Provider/dashboard/dashboard";
import Routes from "./Routes";
function App() {
  return (
    <>
      {/*<ExemploDeProvider>*/}
      <DashboardProvider>
        <Routes />
        <GlobalStyle />
      </DashboardProvider>
      {/*</ExemploDeProvider>*/}
    </>
  );
}

export default App;
