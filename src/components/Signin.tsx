import React from 'react';
import { Col, Input, Row, Button } from 'antd';
//import styles from "./Signin.modules.css";

function Signin() {
    return (
        <Row align="middle">
            <Col span={24}>
                <Row>
                    <Col span={12}></Col>
                    <Col span={12}>
                        <div>My Books</div>
                        <div>Please Note Your Opinion</div>
                        <div />
                        <div>
                            Email
                            <span> * </span>
                        </div>
                        <div>
                            <Input 
                                placeholder="Email"
                                autoComplete="email"
                                name="email"
                            />
                        </div>
                        <div>
                            Password
                            <span> * </span>
                        </div>
                        <div>
                            <Input 
                                autoComplete="current-password"
                                type="password"
                                name="password"
                            />
                        </div>
                        <div>
                            <Button size="large">Sign in</Button>
                        </div>
                    </Col>
                </Row> 
            </Col>
        </Row>        
    )
}

export default Signin
