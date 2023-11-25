

import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import React from 'react';
import { Button, Form, Input } from 'antd';
import { createAbout } from '../../services/about';
import { Titulos } from '../Utils/Titulos';

function NewAbout({ token }) {
    const [form] = Form.useForm();
    const [title, settitle] = useState()
    const [subtitle, setsubtitle] = useState()
    const [description, setdescription] = useState()
    const [about_background, setabout_background] = useState()
    const [html_image, sethtml_image] = useState()
    const navigate = useNavigate();

    const create = async (e) => {
        //e.preventDefault();
        await createAbout({
            token: token, json: {
                title,
                subtitle,
                description,
                html_image,
                about_background,
                state: "AC"
        } });
    navigate('/about');
}

const btnCancelar = (e) => {
    e.preventDefault();
    navigate('/about');
}

return (
    <div >
        <div style={{ marginBottom: `20px` }}>
            <Titulos text={`NUEVO`} level={3}></Titulos>
        </div>
        <Form
            name="basic"
            layout="vertical"
            form={form}
            style={{ textAlign: `center`, marginLeft: `10px` }}
            labelCol={{ span: 8, }}
            wrapperCol={{ span: 16, }}
            initialValues={{ remember: true, }}
            onFinish={create}
            autoComplete="off"
        >
            <Form.Item label='Título' name="title" rules={[{ required: true, message: 'Cargue Título', },]}><Input placeholder='Título' value={title} onChange={(e) => settitle(e.target.value)} /></Form.Item>
            <Form.Item label='Subítulo' name="subtitle" rules={[{ required: true, message: 'Cargue Subítulo', },]}><Input placeholder='Subítulo' value={subtitle} onChange={(e) => setsubtitle(e.target.value)} /></Form.Item>
            <Form.Item label='Descripción' name="description" rules={[{ required: true, message: 'Cargue Descripción', },]}><Input placeholder='Descripción' value={description} onChange={(e) => setdescription(e.target.value)} /></Form.Item>
            <Form.Item label='Color de sección' name="about_background" rules={[{ required: true, message: 'Cargue color de sección', },]}><Input placeholder='Color de fondo de sección' value={about_background} onChange={(e) => setabout_background(e.target.value)} /></Form.Item>
            <Form.Item label='html image' name="html_image" ><Input placeholder='html image' value={html_image} onChange={(e) => sethtml_image(e.target.value)} /></Form.Item>
            <Form.Item
                style={{ margin: `20px` }}>
                <Button type="primary" htmlType="submit" style={{ margin: `20px` }} >
                    Guardar
                </Button>
                <Button type="primary" htmlType="submit" onClick={btnCancelar} style={{ margin: `20px` }} >
                    Cancelar
                </Button>
            </Form.Item>
        </Form>
    </div>
);
}

export default NewAbout;
