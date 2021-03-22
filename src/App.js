import { Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

const Lander = lazy(() => import("./pages/Lander/LanderPage"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUsPage"));
const Contact = lazy(() => import("./pages/Contact/ContactPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));

function App() {
  return (
    <main>
      <Navigation />
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path="/" exact component={Lander} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Suspense>
      <Footer />
    </main>
  );
}

export default App;
