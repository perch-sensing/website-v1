import "./ContactPage.scss";
import { Mail, Phone } from "react-feather";
import TextField from "../../components/TextField/TextField";
import { useRef } from "react";
import MetaTags from 'react-meta-tags';

const contactMethods = [
  {
    Icon: Mail,
    text: "hello@web.perchsensing.com",
    href: "mailto:hello@web.perchsensing.com",
  },
  { Icon: Phone, text: "+1 (925) 264-49843", href: "tel:+192526449843" },
];

export const pageTitle = "Perch Sensing Contact Page"

export default function ContactPage() {
  const cardRef = useRef(null);

  function animateSend(e) {
    e.preventDefault();
    // Don't double send form data
    if (cardRef.current?.classList.contains("send")) return;

    // Send off form data
    const body = encode(new FormData(e.target));
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    }).catch(console.log);

    // Delete form values when card is out of sight
    setTimeout(() => {
      for (let input of e.target) {
        if (input.type !== "submit") input.value = "";
      }
    }, 1000);
    // Start animation
    cardRef.current?.classList.add("send");

    // Remove animation class on completion
    cardRef.current?.addEventListener(
      "animationend",
      () => cardRef.current?.classList.remove("send"),
      { once: true }
    );
  }

  return (
    <article className="ContactPage">
      <section className="contact">
        <MetaTags>
          <title>{pageTitle}</title>
          <meta name="description" content="This contact page provides the email and phone number for Perch Sensing in addition to providing a form 
          to give users the opportunity to send messages through the website." />
        </MetaTags>
        <div className="contact-info">
          <h1>Let's Get In Touch</h1>
          <p>
            Enter your email and send us a message, we’ll get to you as soon as
            possible.
          </p>
          <ul className="contact-methods">
            {contactMethods.map(({ Icon, text, href }) => {
              return (
                <li key={text}>
                  <Icon className="icon" /> <a href={href}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <form onSubmit={animateSend}>
          <div className="contact-card" ref={cardRef}>
            {/* Hidden input for Netlify Forms */}
            <input type="hidden" name="form-name" value="contact" />
            <TextField
              name="name"
              placeholder="Name"
              required
              autoComplete="given-name"
            />
            <TextField
              name="email"
              type="email"
              placeholder="Email"
              required
              autoComplete="email"
            />
            <TextField
              name="company"
              placeholder="Company"
              required
              autoComplete="organization"
            />
            <TextField name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Message" required></textarea>
          </div>
          <input type="submit" value="Send Message" />
        </form>
      </section>
    </article>
  );
}

/**
 * Encodes form data as url.
 * @param {FormData} formData
 */
function encode(formData) {
  let data = [];
  for (let [key, val] of formData) {
    data.push(encodeURIComponent(key) + "=" + encodeURIComponent(val));
  }
  return data.join("&");
}
