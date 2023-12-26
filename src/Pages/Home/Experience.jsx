import data from "../../data/index.json";

export default function Education() {
  return (
    <section className="education--section" id="education">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Experience</p>
          <h2 className="section--heading">Experience</h2>
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
                <p className="info education--school--name">{item.company}</p>
                <p className="info">{item.location}</p>
                <p className="info">{item.position}</p>
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
