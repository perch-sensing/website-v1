import { Switch, Route } from "react-router-dom";

import Lander from "./pages/Lander/Lander";

function App() {
  return (
    <Switch>
      <Route path="*" component={Lander} />
    </Switch>
  );
}

export default App;
