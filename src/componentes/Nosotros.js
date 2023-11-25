import { Container } from "react-bootstrap";

const Nosotros = ({ nosotros, theme }) => {
  console.log(theme)
  return (
    <div style={{ backgroundColor: `${theme?.content_background_color}`, }}>
      <hr style={{ width: "5%", height: "5px", backgroundColor: "#000339", margin: "0 auto", }} />
      <div style={{
        minHeight: `30rem`,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: `40px`,
        flexWrap: `wrap`,
        display: `flex`,
        margin: `2rem`,
      }} >
        {nosotros ?
          nosotros.map((data, index) => (
            <div style={{ marginTop: `5px` }} key={index + 1}>
              <Container className="row"
                style={{
                  backgroundColor: `${data?.about_background !== "" ? data?.about_background : "#000339"}`,
                  borderRadius: "15px",
                }}>
                <div className="col"
                  style={{
                    display: `flex`,
                    alignItems: "center",
                    justifyContent: "center",
                    margin: `2em`
                  }}>
                  <div className="col" >
                    <p className="row" style={{ fontSize: "35px", color: "white", fontWeight: "700" }}>
                      {data?.title}
                    </p>
                    <p className="row" style={{ fontSize: "16px", color: "#ccc", fontWeight: "500", my: 0 }}>
                      {data?.subtitle}
                    </p>

                    <p className="row" style={{ fontSize: "16px", color: "#ccc", fontWeight: "500", my: 3 }}>
                      {data?.description}
                    </p>
                  </div>
                </div>
                {data?.html_image ?
                  <div className="col"
                  >
                    <img
                      src={data?.html_image}
                      alt="illustration"
                      style={{ width: `40em`, display: `flex` }}
                    />
                  </div>
                  : null}
              </Container>
            </div>
          ))

          : null}

      </div>
    </div>
  );
};

export default Nosotros;
