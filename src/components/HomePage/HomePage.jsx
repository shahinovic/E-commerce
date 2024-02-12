import { useContext } from "react";
import { CounterContext } from "../../Context/Counter";
import { Button } from "react-bootstrap";

const HomePage = () => {
  const { couter, setCounter } = useContext(CounterContext);

  return (
    <div>
      {couter}
      <h1>HomePage</h1>
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
