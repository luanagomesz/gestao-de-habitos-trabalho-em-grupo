import GlobalStyle from "./GlobalStyle/style";
import { ActivitiesProvider } from "./Provider/Activities/activities";
import { DashboardProvider } from "./Provider/dashboard/dashboard";
import { HabitsProvider } from "./Provider/Habits/habits";
import { GroupsProvider } from "./Provider/Groups/groups";
<<<<<<< HEAD
import { GoalsProvider } from "./Provider/goals/goals";
=======
import { LoginProvider } from "./Provider/Login/Login";

import Routes from "./Routes";
>>>>>>> 1f8338db884a76972bb065d3d9021bf1d46cf4d0
function App() {
  return (
    <>
      {/*<ExemploDeProvider>*/}
      <LoginProvider>
        <GroupsProvider>
<<<<<<< HEAD
          <DashboardProvider>
            <ActivitiesProvider>
              <GoalsProvider>
                <GlobalStyle />
                <Routes />
              </GoalsProvider>
            </ActivitiesProvider>
          </DashboardProvider>
=======
          <HabitsProvider>
            <DashboardProvider>
              <ActivitiesProvider>
                <GlobalStyle />
                <Routes />
              </ActivitiesProvider>
            </DashboardProvider>
          </HabitsProvider>
>>>>>>> 1f8338db884a76972bb065d3d9021bf1d46cf4d0
        </GroupsProvider>
      </LoginProvider>
      {/*</ExemploDeProvider>*/}
    </>
  );
}

export default App;
