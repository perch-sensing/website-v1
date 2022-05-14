import "./Press.scss";
import { useParams, Redirect } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import { useState, useEffect } from "react";
import MetaTags from "react-meta-tags";

import { ReactComponent as PerchLogo } from "../../assets/perch-logo-currentColor.svg";

export const pageTitle = "Home | Perch Sensing";

export default function Press() {
  const { postName } = useParams();
  const [markdownBody, setMarkdownBody] = useState("");
  const [frontmatter, setFrontmatter] = useState("");
  const [error404, setError404] = useState("");
  let tags = frontmatter.tags ? frontmatter.tags : "";

  useEffect(() => {
    import(`../../posts/${postName}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((text) => matter(text))
          .then((text) => {
            setFrontmatter(text.data);
            setMarkdownBody(text.content);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
        setError404(true);
      });
  });

  if (error404) {
    return <Redirect to="/404" />;
  }
  return (
    <article className="Press">
      <section>
        <MetaTags>
          <title>{frontmatter.title} | Perch Sensing</title>
          <meta name="description" content={frontmatter.description} />
        </MetaTags>
        <div className="post-container">
          <div className="post-titleblock">
            <div className="header">
              <div className="header-text">
                <p>Press Release - {frontmatter.pub_date}</p>
              </div>
              <div className="header-logo">
                <PerchLogo fill="white" className="logo" />
              </div>
            </div>
            <div className="release-title">
              <h1>{frontmatter.title}</h1>
            </div>
          </div>
          <div class="post">
            <ReactMarkdown children={markdownBody} className="post-md" />
          </div>
          <div className="below-post">
            <div className="media">
              <span className="media-contact">Media Contact: </span>
              <span>
                <a href={`mailto:${frontmatter.contact_email}`}>
                  {frontmatter.contact_email}
                </a>
              </span>
            </div>
            <div className="tags">
              {tags.split(",").map((tag) => (
                <span className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
