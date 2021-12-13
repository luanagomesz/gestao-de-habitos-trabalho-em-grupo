import GlobalStyle from "./GlobalStyle/style";
import { ActivitiesProvider } from "./Provider/Activities/activities";
import { DashboardProvider } from "./Provider/dashboard/dashboard";
import { GoalsProvider } from "./Provider/goals/goals";
import Routes from "./Routes";

function App() {
  return (
    <>
      {/*<ExemploDeProvider>*/}
      <DashboardProvider>
        <GoalsProvider>
          <ActivitiesProvider>
            <GlobalStyle />
            <Routes />
          </ActivitiesProvider>
        </GoalsProvider>
      </DashboardProvider>
      {/*</ExemploDeProvider>*/}
    </>
  );
}

export default App;
