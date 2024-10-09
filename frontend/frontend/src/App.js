import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./component/routes";
import AllUserContext from "./usecontext";

function App() {
  return (
    <div className="App">
      <AllUserContext>
        <BrowserRouter>
          <AllRoutes />
        </BrowserRouter>
      </AllUserContext>
    </div>
  );
}

export default App;
