import GlobalStyle from "./GlobalStyle/style";
import { ActivitiesProvider } from "./Provider/Activities/activities";
import { DashboardProvider } from "./Provider/dashboard/dashboard";
import { HabitsProvider } from "./Provider/Habits/habits";
import { GroupsProvider } from "./Provider/Groups/groups";
import { GoalsProvider } from "./Provider/goals/goals";
import { LoginProvider } from "./Provider/Login/Login";
import Routes from "./Routes";

function App() {
  return (
    <>
      {/*<ExemploDeProvider>*/}
      <LoginProvider>
        <GroupsProvider>
          <HabitsProvider>
            <DashboardProvider>
              <GoalsProvider>
                <ActivitiesProvider>
                  <GlobalStyle />
                  <Routes />
                </ActivitiesProvider>
              </GoalsProvider>
            </DashboardProvider>
          </HabitsProvider>
        </GroupsProvider>
      </LoginProvider>
      {/*</ExemploDeProvider>*/}
    </>
  );
}

export default App;
