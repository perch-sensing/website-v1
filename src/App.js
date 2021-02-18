import { Switch, Route } from "react-router-dom";

import Lander from "./pages/Lander/Lander";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <Navigation />
      <Switch>
        <Route path="*" component={Lander} />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
