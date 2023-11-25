import { Container } from "react-bootstrap";

const Destacados = ({ theme, destacados, destacadoHeader }) => {
  return (
    <div style={{ minHeight: `60%` }}>
      <hr style={{ width: "5%", height: "5px", backgroundColor: "#000339", margin: "0 auto", }} />
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }} >
        <br />
        <h3 style={{ fontSize: "35px", fontWeight: "bold", color: `${theme?.content_title_color}`, my: 3 }}>
          {destacadoHeader?.title}
        </h3>
        <div>
          <h1
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: `${theme?.content_subtitle_color}`,
              textAlign: "center",
            }}
          >
            {destacadoHeader?.subtitle}
          </h1>
        </div>
        <div style={{ width: `100%`, marginTop: `4rem`, marginBottom: `4rem` }}>
          <div className="row" style={{ cursor: "pointer", display: `flex` }}>
            {destacados?.map((data, index) => (
              <div key={index + 1} className="col" style={{ justifyContent: `center`, alignItems: `center` }}>
                <a rel="noreferrer" href={`${data?.href}`} target="_blank" style={{ textDecoration: `none` }}>
                  <img style={{ height: `170px`,borderRadius:`10px` }} src={data?.html_image} alt="buyIcon" />
                  <h1 style={{ fontSize: "1em",maxWidth:`15em`, color: `${theme?.content_title_color}`, }}>
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

export default Destacados;
