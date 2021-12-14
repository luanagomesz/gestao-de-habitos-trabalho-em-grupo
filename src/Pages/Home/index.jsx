import Header from "../../Components/Header";

function Home({ history }) {
  return (
    <>
      <Header backgroundColor={"var(--red)"} />
      <button onClick={() => history.push("/login")}>Login</button>
    </>
  );
}

export default Home;
