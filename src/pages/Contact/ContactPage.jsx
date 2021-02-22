import "./ContactPage.scss";
import { Mail, Phone } from "react-feather";
import TextField from "../../components/TextField/TextField";
import { useRef } from "react";

const contactMethods = [
  {
    Icon: Mail,
    text: "hello@web.perchsensing.com",
    href: "mailto:hello@web.perchsensing.com",
  },
  { Icon: Phone, text: "+1 (805) 316-4626", href: "tel:+18053164626" },
];

export default function ContactPage() {
  const cardRef = useRef(null);

  function animateSend(e) {
    e.preventDefault();
    if (cardRef.current?.classList.contains("send")) return;
    console.log("send");
    const payload = new FormData(e.target);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: payload,
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    setTimeout(() => {
      for (let input of e.target) {
        if (input.type !== "submit") input.value = "";
      }
    }, 1000);

    // Send off the form data

    cardRef.current?.classList.add("send");

    cardRef.current?.addEventListener(
      "animationend",
      () => {
        cardRef.current?.classList.remove("send");
      },
      { once: true }
    );
  }
  return (
    <article className="ContactPage">
      <section className="contact">
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
