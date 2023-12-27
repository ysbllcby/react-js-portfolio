import data from "../../data/index.json";

export default function Technologies() {
  const techStack = data?.["tech-stack"];

  const renderTechCategories = () => {
    return techStack.map((category, categoryIndex) => (
      <div key={categoryIndex}>
        <h3 className="tech-category-heading">{category.category}</h3>
        <div className="tech--section--container">
          {category.technologies.map((technology, index) => (
            <div key={index} className="tech--section--card">
              <div className="tech--section--img icon">
                <img src={technology.src} alt={technology.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <section className="tech--section" id="technologies">
      <div className="tech--container">
        <p className="tech--title"></p>
        <h2 className="tech--section--heading">Tech Stack</h2>
      </div>
      {renderTechCategories()}
    </section>
  );
}
