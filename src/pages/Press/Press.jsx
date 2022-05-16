import "./Press.scss";
import "react-loading-skeleton/dist/skeleton.css";

import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import MetaTags from "react-meta-tags";
import Skeleton from "react-loading-skeleton";
import rehypeRaw from "rehype-raw";

import { ReactComponent as PerchLogo } from "../../assets/perch-logo-currentColor.svg";

export default function Press() {
  const { postName } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [markdownBody, setMarkdownBody] = useState("");
  const [frontmatter, setFrontmatter] = useState("");
  const [partnerLogo, setPartnerLogo] = useState("");
  const [error404, setError404] = useState("");
  let pageTitle = `${
    frontmatter.title ? frontmatter.title : "Press Release"
  } | Perch Sensing`;
  let ogImgURL = `https://og-image.services.perchsensing.com/${encodeURIComponent(
    frontmatter.title
  )}?date=${encodeURIComponent(
    frontmatter.pub_date
  )}`;
  // Eventually, we'll include this, but it isn't working right now (LinkedIn is
  // chopping off most of the logo)
  // &partnerLogo=${encodeURIComponent(
  //   `data:image/svg+xml;base64,${btoa(partnerLogo)}`
  // )}
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

    if (frontmatter.partner_logo) {
      import(`../../assets/press/${postName}/${frontmatter.partner_logo}`).then(
        (res) => {
          fetch(res.default)
            .then((res) => res.text())
            .then((res) => setPartnerLogo(res))
            .then(() => setIsLoading(false));
        }
      );
    } else {
      if (markdownBody) {
        setIsLoading(false);
      }
    }
  });

  if (error404) {
    return <Redirect to="/404" />;
  }
  return (
    <article className="Press">
      <MetaTags>
        <title>{pageTitle}</title>
        <meta name="description" content={frontmatter.description} />
        <meta
          property="og:url"
          content="https://epic-albattani-285170-87e760.netlify.live/press/calseed-grant/"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
        <meta property="og:image" content={ogImgURL} />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1254" />
        <meta name="author" content={frontmatter.author}></meta>
      </MetaTags>
      {isLoading ? (
        <SkeletonArticle />
      ) : (
        <section>
          <div className="post-container">
            <div className="post-titleblock">
              <div className="header">
                <div className="header-logo">
                  <div className="logo">
                    <PerchLogo fill="white" className="perch-logo" />
                  </div>
                </div>
                <div className="header-text">
                  <p>Press Release - {frontmatter.pub_date}</p>
                </div>
              </div>
              <div className="release-title">
                <h1>{frontmatter.title}</h1>
              </div>
              {frontmatter.partner_logo ? (
                <div className="partner-logo">
                  <img
                    src={`data:image/svg+xml;utf8,${encodeURIComponent(
                      partnerLogo
                    )}`}
                  />
                </div>
              ) : null}
            </div>
            <div className="post">
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                children={markdownBody}
                className="post-md"
              />
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
                  <span className="tag" key={tag}>
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </article>
  );
}

const SkeletonArticle = () => {
  return (
    <section>
      <div className="post-container">
        <div className="post-titleblock">
          <div className="header">
            <div className="header-logo">
              <Skeleton
                width={150}
                height={50}
                className="logo"
                borderRadius={25}
              />
            </div>
            <div className="header-text">
              <p>
                <Skeleton width={`200px`} borderRadius={25} />
              </p>
            </div>
          </div>
          <div className="release-title">
            <h1>
              <Skeleton borderRadius={25} />
            </h1>
          </div>
        </div>
        <div className="post">
          <div className="post-md">
            {Array(5)
              .fill()
              .map((_, index) => (
                <p key={index}>
                  <Skeleton count={6} borderRadius={25} />
                  <Skeleton
                    count={1}
                    width={`${getRandRange(45, 100)}%`}
                    borderRadius={25}
                  />
                </p>
              ))}
          </div>
        </div>
        <div className="below-post">
          <div className="media">
            <Skeleton width={300} borderRadius={25} />
          </div>
          <div className="tags">
            {Array(3)
              .fill()
              .map((_, index) => (
                <Skeleton
                  inline={true}
                  containerClassName="tag"
                  width={getRandRange(45, 100)}
                  key={index}
                  borderRadius={25}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function getRandRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
