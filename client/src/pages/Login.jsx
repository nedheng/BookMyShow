import React from 'react'
import { Button, Form, Input, message } from 'antd'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <header className='App-header'>
            <main className='mw-500 text-center px-3'>
                <section>
                    <h1>Login into BookMyShow</h1>
                </section>
                <section>
                    <Form layout='vertical'>
                        <Form.Item label="Email" name="email" htmlFor='email' rules={[{required:true, message:"Email is required"}]}> 
                            <Input type='email' placeholder='Enter your Email'></Input>
                        </Form.Item>
                        <Form.Item label="Password" name="password" htmlFor='password' rules={[{required:true, message:"Email is required"}]}>
                            <Input type='password' placeholder='Enter your Password'></Input>
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' block htmlType='submit' style={{fontSize:"1rem", fontWeight:"600"}}>Login</Button>
                        </Form.Item>
                    </Form>
                </section>
                <section>
                    <p>
                        New user ? <Link to="/register">Register Here</Link>
                    </p>
                </section>
            </main>
        </header>
    )
}


export default Login