import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title"></p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">
              Software <br /> Developer{" "}
            </span>
          </h1>
          <p className="hero--section-description">
            Hi! I'm Ysa, a passionate software developer based in the sunny city
            of Calgary, AB.
            <br />
            <br /> Driven by a love for crafting digital solutions, I specialize
            in building exceptional websites and applications that seamlessly
            blend form and function. With a keen eye for detail and a knack for
            problem-solving, I transform ideas into code, turning concepts into
            captivating digital experiences.
          </p>
        </div>
        <div className="contact--buttons">
          <a href="mailto:ysabellacubay@gmail.com" className="btn btn-primary">
            <HiOutlineMail />
          </a>
          <a
            href="https://www.linkedin.com/in/ysbllcby/"
            className="btn btn-primary"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/ysbllcby" className="btn btn-primary">
            <FaGithub />
          </a>
        </div>
        <a href="./img/Resume.pdf" download="Resume.pdf">
          <button className="btn btn-primary">Download Resume</button>
        </a>
      </div>
      <div className="hero--section-img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
