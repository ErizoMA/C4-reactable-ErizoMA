import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Global, css } from "@emotion/react";
import Expenses from "./pages/Expenses";
import Incomes from "./pages/Incomes";
import Login from "./pages/Login";
import { SessionProvider } from "./contexts/SessionContext";
import ProtectedRoute from "./components/Routes/ProtectedRoute";

function App() {
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Inter&family=Roboto&display=swap");
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Roboto", sans-serif;
            text-decoration: none;
          }
          :root {
            --gray-1: #333333;
            --gray-2: #4f4f4f;
            --gray-4: #bdbdbd;
            --blue-1: #2f80ed;
            --blue-2: #2d9cdb;
            --red: #eb5757;
          }
        `}
      />
      <div className="App">
        <SessionProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <ProtectedRoute path="/expenses" component={Expenses} />
              <ProtectedRoute path="/incomes" component={Incomes} />
            </Switch>
          </Router>
        </SessionProvider>
      </div>
    </>
  );
}

export default App;
