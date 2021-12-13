function Home({ history }) {
  return (
    <>
      <button onClick={() => history.push("/login")}>Login</button>
    </>
  );
}

export default Home;
