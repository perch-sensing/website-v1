import "./PageNotFound.scss";
import notFoundGraphic from "../../assets/broken-line.svg";
import { Link } from "react-router-dom";
import MetaTags from 'react-meta-tags';

export default function PageNotFound() {
  return (
    <article className="PageNotFound">
      <section>
      <MetaTags>
        <title>Perch Sensing Page Not Found Page</title>
        <meta name="description" content="This page is a standard error landing page. It also provides a button to go back to the home (landing) page." />
      </MetaTags>
        <img src={notFoundGraphic} alt="shrouded alerts" />
        <h1>404</h1>
        <p>We're sensing that this is not what you expected.</p>
        <Link to="/">
          <button>Go Back to Home</button>
        </Link>
      </section>
    </article>
  );
}
