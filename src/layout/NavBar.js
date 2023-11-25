import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link, } from 'react-router-dom';
import Footer from '../componentes/Footer';

import { Logout } from '../services/login';
import { Dropdown } from 'react-bootstrap';
import { Space, Spin } from 'antd';

function NavBar({ client, nosotros, usuario, theme, footerHeader, footerLabel, footerIcon, services }) {
    //const location = useLocation()
    const styleLabel = { color: `${theme?.header_title_color !== "" ? theme?.header_title_color : 'black'}`,
    background: `none`, border: `none` }
    return (
        <div>
            {nosotros.length === 0 ?
                <div style={{ minHeight: `30rem`, display: `flex`, justifyContent: `center`, alignItems: `center` }}>
                    <Space size="middle">
                        <Spin size="large" />
                    </Space>
                </div> :
                <>
                    <Navbar
                        expand="lg"
                        style={{
                            backgroundColor: `${theme?.header_color}`,
                            position: "initial"
                        }}
                        fixed="bottom"
                    >
                        <Container >
                            <Navbar.Brand as={Link} to='/' >
                                {/*<img style={{ maxWidth: `8rem` }} src={require('../assets/logo.png')} alt='' />*/}
                                {(theme?.html_logo === '' || theme?.html_logo === null) ?
                                    null
                                    : <img
                                        src={theme?.html_logo}
                                        style={{ maxWidth: `8rem`, borderRadius: `4px` }}
                                        alt="..."
                                    />}

                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto" >
                                    <Nav.Link as={Link} to='/inicio' style={styleLabel} >Home</Nav.Link>
                                    {nosotros.length !== 0 ? <Nav.Link as={Link} to='/nosotros' style={styleLabel}>Nosotros</Nav.Link> : null}
                                    {client.length !== 0 ? <Nav.Link as={Link} to='/clientes' style={styleLabel}>Clientes</Nav.Link> : null}
                                    {services.length !== 0 ? <Nav.Link as={Link} to='/servicios' style={styleLabel}>Servicios</Nav.Link> : null}
                                    <Dropdown hidden={usuario?.nivel === '1' ? false : true}>
                                        <Dropdown.Toggle  style={styleLabel} id="dropdown-basic">
                                            Administración
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item as={Link} to='/welcome' >Bienvenida</Dropdown.Item>
                                            <Dropdown.Item as={Link} to='/clienteheader' >Cliente Header</Dropdown.Item>
                                            <Dropdown.Item as={Link} to='/serviceheader' >Service Header</Dropdown.Item>
                                            <Dropdown.Item as={Link} to='/footerheader' >Footer Header</Dropdown.Item>
                                            <Dropdown.Item as={Link} to='/destacadoheader' >Destacados Header</Dropdown.Item>
                                            <Dropdown.Item as={Link} to='/about'>Nosotros</Dropdown.Item>
                                            <Dropdown.Item as={Link} to='/tema'>Tema</Dropdown.Item>
                                            <Dropdown.Item as={Link} to='/icono'>Icono</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item as={Link} onClick={(e) => Logout()}>Cerrar sesión</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Outlet />
                    {footerHeader.length !== 0 ?
                        <Footer theme={theme} footerHeader={footerHeader} footerLabel={footerLabel} footerIcon={footerIcon} />
                        : null}
                </>
            }

        </div>
    );
}

export default NavBar;