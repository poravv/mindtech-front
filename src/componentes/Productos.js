
import { Container } from "react-bootstrap";

const Productos = ({ products, theme, productHeader }) => {
  console.log(products)
  return (
    <div style={{ backgroundColor: "#F5FAFE", minHeight: `30rem` }}>
      <hr style={{ width: "5%", height: "5px", backgroundColor: "#000339", margin: "0 auto", }} />
      <Container>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: `${theme?.content_title_color}`, fontSize: "35px", fontWeight: "bold" }}>
            {productHeader?.title}
          </p>
          <p style={{ color: `${theme?.content_subtitle_color}`, fontSize: "16px", marginTop: 1 }}>
            {productHeader?.subtitle}
          </p>
        </div>
        <div style={{  width: `100%`, marginTop: `4rem`, marginBottom: `4rem`,display:`flex` }}>
          <div className="row" style={{ cursor: "pointer",textAlign:`center` }}>
            {products?.map((data, index) => (
              <div key={index + 1} className="col" style={{ justifyContent: `center`, alignItems: `center`,marginTop:`2rem` }}>
                <a rel="noreferrer" href={`${data?.href}`} target="_blank" style={{ textDecoration: `none` }}>
                  <img style={{ height: `170px`, borderRadius: `10px`}} src={data?.html_image} alt="buyIcon" />
                  <h1 style={{ fontSize: "1em", color: `${theme?.content_title_color}` }}>
                    {data?.title}
                  </h1>
                  <h1 style={{ fontWeight: "bold", fontSize: "14px", color: `${theme?.content_subtitle_color}` }}> Más detalles
                  </h1>
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Productos;
