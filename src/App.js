import GlobalStyle from "./GlobalStyle/style";
import { ActivitiesProvider } from "./Provider/Activities/activities";
import { DashboardProvider } from "./Provider/dashboard/dashboard";
import { HabitsProvider } from "./Provider/Habits/habits";
import { GroupsProvider } from "./Provider/Groups/groups";
import { LoginProvider } from "./Provider/Login/Login";
import Routes from "./Routes";
import { GoalsProvider } from "./Provider/goals/goals";
function App() {
  return (
    <>
      {/*<ExemploDeProvider>*/}
      <LoginProvider>
        <GroupsProvider>
          <HabitsProvider>
            <DashboardProvider>
              <ActivitiesProvider>
                <GoalsProvider>
                  <GlobalStyle />
                  <Routes />
                </GoalsProvider>
              </ActivitiesProvider>
            </DashboardProvider>
          </HabitsProvider>
        </GroupsProvider>
      </LoginProvider>
      {/*</ExemploDeProvider>*/}
    </>
  );
}

export default App;
