import "./ContactPage.scss";
import { Mail, Phone } from "react-feather";
import TextField from "../../components/TextField/TextField";

const contactMethods = [
  {
    Icon: Mail,
    text: "emilerickson@perchsensing.com",
    href: "mailto:emilerickson@perchsensing.com",
  },
  { Icon: Phone, text: "+1 (805) 316-4626", href: "tel:+18053164626" },
];

export default function ContactPage() {
  function sendMessage(e) {
    e.preventDefault();
    new FormData(e.target);
    // Send off the form data
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
        <form onSubmit={sendMessage}>
          <div className="contact-card">
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
