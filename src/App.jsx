import { RouterProvider } from "react-router-dom";
import { routes } from "./AppRoutes";
import { useContext, useEffect } from "react";
import { TokenContext } from "./Context/Token";

function App() {
  const { setToken } = useContext(TokenContext);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);
  return (
    <div className="app">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
