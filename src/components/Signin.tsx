import React, { useRef } from 'react';
import { Col, Input, Row, Button } from 'antd';
import { LoginReqType } from '../types';
import styles from "./Signin.module.css";

interface SigninProps{
    login: (reqDaata : LoginReqType) => void;
}

const Signin : React.FC<SigninProps> = ({ login } : SigninProps) => {
    const emailRef = useRef<Input>(null);
    const passwordRef = useRef<Input>(null);

    function click(){
        const email = emailRef.current!.state.value;
        const password = passwordRef.current!.state.value;
        login({email, password});
    }

    return (
        <Row align="middle" className={styles.signin_row}>
            <Col span={24}>
                <Row className={styles.signin_contents}>
                    <Col span={12}>
                        <img 
                            src="/bg_signin.png" 
                            className={styles.signin_bg} 
                            alt="signin"
                        />
                    </Col>
                    <Col span={12}>
                        <div className={styles.signin_title}>My Books</div>
                        <div className={styles.signin_subtitle}>Please Note Your Opinion</div>
                        <div className={styles.signin_underline}/>
                        <div className={styles.email_title}>
                            Email
                            <span className={styles.required}> * </span>
                        </div>
                        <div className={styles.input_area}>
                            <Input 
                                className={styles.input}
                                placeholder="Email"
                                autoComplete="email"
                                ref={emailRef}
                            />
                        </div>
                        <div className={styles.password_title}>
                            Password
                            <span className={styles.required}> * </span>
                        </div>
                        <div className={styles.input_area}>
                            <Input
                                className={styles.input}
                                autoComplete="current-password"
                                placeholder="Password"
                                type="password"
                                ref={passwordRef}
                            />
                        </div>
                        <div className={styles.button_area}>
                            <Button className={styles.button} size="large" onClick={click}>Sign in</Button>
                        </div>
                    </Col>
                </Row> 
            </Col>
        </Row>        
    )
}

export default Signin
