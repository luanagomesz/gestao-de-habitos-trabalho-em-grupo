import GlobalStyle from "./GlobalStyle/style";
import { ActivitiesProvider } from "./Provider/Activities/activities";
import { DashboardProvider } from "./Provider/dashboard/dashboard";
import { GoalsProvider } from "./Provider/goals/goals";
import Routes from "./Routes";
import { LoginProvider } from "./Provider/Login/Login";
function App() {
  return (
    <>
      {/*<ExemploDeProvider>*/}
     <DashboardProvider>
       <LoginProvider>
        <GoalsProvider>
          <ActivitiesProvider>
            <GlobalStyle />
            <Routes />
          </ActivitiesProvider>
        </GoalsProvider>
      </LoginProvider>
     </DashboardProvider>
      {/*</ExemploDeProvider>*/}
    </>
  );
}

export default App;
