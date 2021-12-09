import GlobalStyle from "./GlobalStyle/style";
import Routes from "./Routes";
import List from "./Components/List";
function App() {
  return (
    <>
      {/*<ExemploDeProvider>*/}
      <Routes />
      <GlobalStyle />
      <List />
      {/*</ExemploDeProvider>*/}
    </>
  );
}

export default App;
