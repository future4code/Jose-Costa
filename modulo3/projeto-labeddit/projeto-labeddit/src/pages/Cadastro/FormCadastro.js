import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { Form, Input, Button } from "antd";
import { enviarNotificacao } from "../../constants/enviarNotificacao";
import { cadastro } from "../../services/acesso";

const FormCadastro = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [form, onChange, clear] = useForm({
        username: "",
        email: "",
        password: ""
    });

    const EnviarCadastro = (event) => {
        event.preventDefault();
        const body = {
            username: form.username,
            email: form.email,
            password: form.password
        }
        cadastro(body, clear, navigate, setLoading);
    };

    return (
        <div>
            <form onSubmit={EnviarCadastro}>
                <Form.Item label="Nome">
                    <Input name="username" value={form.username} onChange={onChange} required />
                </Form.Item>

                <Form.Item label="E-mail">
                    <Input name="email" value={form.email} onChange={onChange} type="email" required />
                </Form.Item>

                <Form.Item label="Senha">
                    <Input.Password name="password" value={form.password} onChange={onChange} type="password" required />
                </Form.Item>

                <Button type="primary" htmlType="submit" loading={loading}>
                    Cadastrar
                </Button>
            </form>
        </div>
    );
};

export default FormCadastro;