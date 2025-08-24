import workData from "../utils/workData";

const Work = () => (
  <section className="work section" id="work">
    <h2 className="section-title">Works</h2>
    <div className="work__container bd-grid">
      {workData?.map(({ img, title, link, desc }) => (
        <div key={title} className="work__item">
          <img src={img} alt={title} />
          <div className="work__info">
            <h3 className="work__title">{title}</h3>
            <a href={link} target="_blank" rel="noreferrer" className="work__link">Visit Project ↗</a>
            <p className="work__desc">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Work;
