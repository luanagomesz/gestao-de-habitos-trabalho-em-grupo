import GlobalStyle from "./GlobalStyle/style";
import { ActivitiesProvider } from "./Provider/Activities/activities";
import { DashboardProvider } from "./Provider/dashboard/dashboard";
import Routes from "./Routes";

function App() {
  return (
    <>
      {/*<ExemploDeProvider>*/}
      <DashboardProvider>
        <ActivitiesProvider>
          <Routes />
          <GlobalStyle />
        </ActivitiesProvider>
      </DashboardProvider>
      {/*</ExemploDeProvider>*/}
    </>
  );
}

export default App;
