import GlobalStyle from "./GlobalStyle/style";
import { ActivitiesProvider } from "./Provider/Activities/activities";
import { DashboardProvider } from "./Provider/dashboard/dashboard";
import Routes from "./Routes";
import { LoginProvider } from "./Provider/Login/Login";
function App() {
  return (
    <>
      {/*<ExemploDeProvider>*/}
      <DashboardProvider>
        <LoginProvider>
          <ActivitiesProvider>
            <GlobalStyle />
            <Routes />
          </ActivitiesProvider>
        </LoginProvider>
      </DashboardProvider>
      {/*</ExemploDeProvider>*/}
    </>
  );
}

export default App;
