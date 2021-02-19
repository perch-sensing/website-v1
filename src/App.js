import { Switch, Route } from "react-router-dom";

import Lander from "./pages/Lander/LanderPage";
import AboutUs from "./pages/AboutUs/AboutUsPage";
import Contact from "./pages/Contact/ContactPage";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <Navigation />
      <Switch>
        <Route path="/team" component={AboutUs} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={Lander} />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
