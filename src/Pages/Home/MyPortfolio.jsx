import data from "../../data/index.json";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container--box">
        <div className="portfolio--container">
          <p className="sub--title"></p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-lg">{item.description}</p>
              </div>
              <p className="text-lg portfolio--link">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  View{" "}
                  <FaExternalLinkAlt
                    style={{ fontSize: "1.5em", marginLeft: "5px" }}
                  />
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
