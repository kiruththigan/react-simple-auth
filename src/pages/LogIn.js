import React from 'react'
import './Login.css';
import { Card, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../routes/Auth';

export default function LogIn() {
    const navigate = useNavigate();
    const auth = useAuth();

    const onFinish = async (values) => {
        await auth.login(values)
        navigate('/dashboard', { replace: true })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <section className='login-card'>
                <Card type='inner' title="Login">
                    <Form
                        layout='vertical'
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="E-Mail"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                                {
                                    type: 'email',
                                    message: 'Please input valid email!',
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                placeholder="Username"
                                prefix={<UserOutlined />}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    min: 4,
                                    message: 'Please input minimum 4 characters',
                                }
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                size='large'
                                placeholder="Password"
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Form.Item>
                        <Form.Item className='btn-login-item'>
                            <Button
                                className='btn-login'
                                size='large'
                                shape="round"
                                type='primary'
                                htmlType="submit"
                            >
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </section>
        </div>
    )
}
