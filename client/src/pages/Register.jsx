import { Button, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return(
        <header className='App-header'>
            <main className='mw-500 text-center px-3'>
                <h1>Register into BookMyShow</h1>
                <section>
                    <Form layout="vertical">
                        <Form.Item label="Name" name="name" htmlFor="name" rules={[{required:true, message:"Email is required"}]}>
                            <Input type="text" placeholder="Enter your Name" ></Input>
                        </Form.Item>
                        <Form.Item label="Email" name="email" htmlFor="email" rules={[{required:true, message:"Email is required"}]}>
                            <Input type="email" placeholder="Enter your Email" ></Input>
                        </Form.Item>
                        <Form.Item label="Password" name="password" htmlFor="password" rules={[{required:true, message:"Email is required"}]}>
                            <Input type="password" placeholder="Enter your Password" ></Input>
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' block htmlType='submit' style={{fontSize:"1rem", fontWeight:"600"}}>Login</Button>
                        </Form.Item>
                    </Form>
                </section>
                <section>
                    <p>
                        Already a user ? <Link to="/login">Login Here</Link>
                    </p>
                </section>
            </main>
        </header>
    )
}

export default Register