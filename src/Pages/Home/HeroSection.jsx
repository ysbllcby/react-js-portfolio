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
            Hi! I'm Ysa!
            <br />
            <br />
            A passionate software developer based in the sunny city of Calgary,
            AB.
            <br />
            <br /> Driven by a love for crafting digital solutions, I specialize
            in building exceptional websites and applications that seamlessly
            blend form and function. With a keen eye for detail and a knack for
            problem-solving, I transform ideas into code, turning concepts into
            captivating digital experiences.
          </p>
        </div>
        <button className="btn btn-primary">Get in touch</button>
      </div>
      <div className="hero--section-img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
