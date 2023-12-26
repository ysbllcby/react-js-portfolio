import data from "../../data/index.json";

export default function TechStack() {
  return (
    <section className="tech--section" id="techstack">
      <div className="tech--container">
        <p className="tech--title"></p>
        <h2 className="tech--section--heading">TechStack</h2>
      </div>
      <div className="tech--section--container">
        {data?.["tech-stack"].map((item, index) => (
          <div key={index} className="tech--section--card">
            <div className="tech--section--img icon">
              <img src={item.src} alt="Product Chain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
