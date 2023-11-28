import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Buffer } from 'buffer';

const Clientes = ({ theme, client, clientHeader }) => {
  
  const viewImage = (html_image) => {
    if (html_image && typeof html_image !== "string") {
      //console.log(html_image);
      const asciiTraducido = Buffer.from(html_image?.data).toString('ascii');
      if (asciiTraducido) {
        return (
          <Card.Img variant="top" src={asciiTraducido} />
        );
      }
    }
  }
  return (
    <div style={{ backgroundColor: `${theme?.content_backgroud_color}`, minHeight: `30rem` }}>
      <hr style={{ width: "5%", height: "5px", backgroundColor: "#000339", margin: "0 auto", }} />
      <Container style={{ marginBottom:`4rem` }}>
        <div style={{ textAlign: "center", }}>
          <p style={{ color: `${theme?.content_title_color}`, fontSize: "35px", fontWeight: "bold" }}>
            {clientHeader?.title}
          </p>
          <p style={{ color: `${theme?.content_subtitle_color}`, fontSize: "16px", marginTop: 1 }}>
            {clientHeader?.subtitle}
          </p>
        </div>
        <div style={{ height:`100%`,display:`flex`,flexWrap:`wrap` }}>
          {client ?
            client.map((data,index) => (
              <Card style={{ width: '18rem',margin:`5px` , border: `0px` }} className="shadow" key={index+1}>
                <div style={{ margin: `10px` }}>
                  {viewImage(data?.html_image)}
                </div>
                <Card.Body>
                  <Card.Title>{data?.title}</Card.Title>
                  <Card.Subtitle>{data?.subtitle}</Card.Subtitle>
                  <Card.Text>{data?.description}</Card.Text>
                </Card.Body>
              </Card>
            ))
            : null}

        </div>
      </Container>
    </div>
  );
};

export default Clientes;
