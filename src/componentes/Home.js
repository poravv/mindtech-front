import React from "react";
import Bienvenida from "./Bienvenida";
import Destacados from "./Destacados";
import { Space, Spin } from 'antd';

const Home = ({ welcome, theme, destacados, destacadoHeader }) => {
  return (
    <div>
      {welcome.length !== 0 ? <>
        <Bienvenida welcome={welcome} theme={theme} />
        <Destacados theme={theme} destacados={destacados} destacadoHeader={destacadoHeader} />
      </> :
        <div style={{ minHeight: `30rem`,display:`flex`,justifyContent:`center`,alignItems:`center` }}>
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      }
    </div>
  );
};

export default Home;
