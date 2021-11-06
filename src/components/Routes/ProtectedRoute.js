import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { SessionContext } from "../../contexts/SessionContext";

export default function ProtectedRoute({
  component: Component,
  ...restOfProps
}) {
  const context = useContext(SessionContext);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        context.token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
