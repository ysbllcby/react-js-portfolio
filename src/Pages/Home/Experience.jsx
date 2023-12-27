import data from "../../data/index.json";

export default function Experience() {
  return (
    <section className="education--section" id="experience">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title"></p>
          <h2 className="section--heading">Experiences</h2>
        </div>
      </div>
      <div className="education--section--container">
        {data?.experience?.map((item, index) => (
          <div key={index} className="education--section--card">
            <div className="education--section--card--school--detail">
              <img
                src={item.src}
                className="education--school--logo"
                alt="School logo"
              />
              <div>
                <p className="info education--school--name">{item.position}</p>
                <p className="info">{item.company}</p>
                <p className="info">{item.location}</p>
                <p className="info">{item.date}</p>
                <p className="info">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
