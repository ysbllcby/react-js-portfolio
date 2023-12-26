export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Ysa.</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">
              Software <br /> Developer{" "}
            </span>
          </h1>
          <p className="hero--section-description">
            I'm a software developer based in the Calgary, AB. I specialize in
            building exceptional websites, applications, and everything in
            between.
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
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
