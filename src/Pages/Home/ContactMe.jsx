import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";

export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2>Contact Me</h2>
        <div className="contact--details">
          <h3>Open to new opportunities and collaborations. Let's connect!</h3>
          <br />
          <h3>
            <a
              href="mailto:ysabellacubay@gmail.com"
              className="btn btn-primary"
            >
              <HiOutlineMail
                style={{ fontSize: "0.9em", marginRight: "5px" }}
              />{" "}
              ysabellacubay@gmail.com
            </a>
            <br />
            <br />
            <a
              href="https://www.linkedin.com/in/ysbllcby/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={{ fontSize: "0.9em", marginRight: "5px" }} />{" "}
              Ysabella Cubay
            </a>
          </h3>
        </div>
      </div>
    </section>
  );
}
