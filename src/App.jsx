import { RouterProvider } from "react-router-dom";
import { routes } from "./AppRoutes";

function App() {
  return (
    <div className="app">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
