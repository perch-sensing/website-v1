import "./PageNotFound.scss";
import notFoundGraphic from "../../assets/broken-line.svg";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <article className="PageNotFound">
      <section>
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
