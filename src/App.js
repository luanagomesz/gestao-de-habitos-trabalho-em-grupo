import GlobalStyle from "./GlobalStyle/style";
import Routes from "./Routes";
import Modal from "./Components/Modal";

function App() {
  return (
    <>
      {/*<ExemploDeProvider>*/}
      <Routes />
      <GlobalStyle />
      <Modal
        title={"New Goal"}
        placeholder={"Insert new Goal"}
        text={"How hard is it to keep this goal?"}
      />
      {/*</ExemploDeProvider>*/}
    </>
  );
}

export default App;
