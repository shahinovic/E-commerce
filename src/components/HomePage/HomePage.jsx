import { useContext } from "react";
import { CounterContext } from "../../Context/Counter";
import { Button } from "react-bootstrap";
import { UserContext } from "../../Context/User";

const HomePage = () => {
  const { couter, setCounter } = useContext(CounterContext);
  const { user } = useContext(UserContext);
  console.log("🚀 ~ HomePage ~ user:", user);

  return (
    <div>
      {couter}
      <h1>Hello {user?.name?.split(" ")[0]}</h1>
      <Button variant="success" onClick={() => setCounter((n) => n + 1)}>
        increment
      </Button>
      <div style={{ marginTop: "20px" }} />
      <Button variant="danger" onClick={() => setCounter((n) => n - 1)}>
        increment
      </Button>
    </div>
  );
};

export default HomePage;
