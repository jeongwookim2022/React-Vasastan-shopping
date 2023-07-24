import "./perfumeAccessoryTab.module.css";

function PerfumeAccessoryTab() {
  return (
    <section className="perfume-accessory-tab">
      <div className="accessory-box ">
        <div className="accessory-text">
          <h1 className="ms-5 mb-0">Accessory</h1>
          <p className="ms-5 mt-0 mb-0">TIMELESS EVERYDAY OBJECTS</p>
          <button className="ms-5">View more</button>
        </div>
        <div className="acc-img-box">
          <img
            className="me-4"
            src={`${process.env.PUBLIC_URL}/img/section1_1.png`}
            alt=""
          />
        </div>
      </div>
      <div className="perfume-box ">
        <div className="perfume-img-box">
          <img
            className="ms-4"
            src={`${process.env.PUBLIC_URL}/img/section1_2.png`}
            alt=""
          />
        </div>
        <div className="perfume-text">
          <h1 className="me-5 mb-0">Perfume</h1>
          <p className="me-5 mb-0">TIMELESS EVERYDAY OBJECTS</p>
          <button className="me-5">View more</button>
        </div>
      </div>
    </section>
  );
}
export default PerfumeAccessoryTab;
