import GlobalStyle from "./GlobalStyle/style";
import { ActivitiesProvider } from "./Provider/Activities/activities";
import { DashboardProvider } from "./Provider/dashboard/dashboard";
import Routes from "./Routes";
import { LoginProvider } from "./Provider/Login/Login";
import { GroupsProvider } from "./Provider/Groups/groups";
import { GoalsProvider } from "./Provider/goals/goals";
function App() {
  return (
    <>
      {/*<ExemploDeProvider>*/}
      <LoginProvider>
        <GroupsProvider>
          <DashboardProvider>
            <ActivitiesProvider>
              <GoalsProvider>
                <GlobalStyle />
                <Routes />
              </GoalsProvider>
            </ActivitiesProvider>
          </DashboardProvider>
        </GroupsProvider>
      </LoginProvider>

      {/*</ExemploDeProvider>*/}
    </>
  );
}

export default App;
