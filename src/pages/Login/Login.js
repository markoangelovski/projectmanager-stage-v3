import React, { useState, useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import PageMetaData from "../../components/PageMetaData/PageMetaData.js";

import { FormWrapper, FormPlaceholder, ErrorMsg } from "./Login.styles";

const Login = props => {
  const [email, setEmail] = useState("");
  const [isEmailOk, setIsEmailOk] = useState(true);
  const [password, setPassword] = useState("");
  const [isPasswordOk, setIsPasswordOk] = useState(true);
  const [loginErr, setLoginErr] = useState(false);

  const { isBackendAlive, isLoggedIn } = useStoreState(state => state);
  const { logIn } = useStoreActions(actions => actions);

  const handleRedirect = () => {
    if (props.location.state) {
      // Redirect the user to the previous page
      props.history.push(props.location.state.from.pathname);
    } else {
      // If user logged in directly from /login route, redirect to homepage
      props.history.push("/");
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoginErr(false);

    if (isEmailOk && isPasswordOk) {
      const res = await logIn({ email, password });

      if (res) {
        setLoginErr(false);
        handleRedirect();
      } else {
        setIsEmailOk(true);
        setIsPasswordOk(true);
        setLoginErr(true);
      }
    }
  };

  useEffect(() => {
    // If user is logged in when accessing /login route, redirect to homepage
    isLoggedIn && handleRedirect();
    // eslint-disable-next-line
  }, []);

  if (isLoggedIn) return null;

  return (
    <>
      <PageMetaData title={"Login | jBot"} />
      <Col md={{ span: 3, offset: 6 }}>
        <FormWrapper>
          <FormPlaceholder>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  size="sm"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onBlur={e =>
                    email.length < 6 ? setIsEmailOk(false) : setIsEmailOk(true)
                  }
                />
                {!isEmailOk && (
                  <ErrorMsg>
                    Email needs to have at least 6 characters.
                  </ErrorMsg>
                )}
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  size="sm"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onBlur={e =>
                    password.length < 6
                      ? setIsPasswordOk(false)
                      : setIsPasswordOk(true)
                  }
                />
                {!isPasswordOk && (
                  <ErrorMsg>
                    Password needs to have at least 6 characters.
                  </ErrorMsg>
                )}
                {loginErr && (
                  <ErrorMsg>Invalid credentials. Please try again.</ErrorMsg>
                )}
              </Form.Group>

              <Button
                disabled={!isBackendAlive || !isPasswordOk || !isEmailOk}
                variant="primary"
                type="submit"
                size="sm"
              >
                Submit
              </Button>
              {!isBackendAlive && (
                <ErrorMsg>
                  Service is currently down. Please try again later.
                </ErrorMsg>
              )}
            </Form>
          </FormPlaceholder>
        </FormWrapper>
      </Col>
    </>
  );
};

export default Login;
