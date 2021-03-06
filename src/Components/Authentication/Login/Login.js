import React from 'react';
import './Login.css';
import { Button, Card, Col, Container, Row, Form } from 'react-bootstrap';
import { FaFacebook } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsGoogle } from 'react-icons/bs';
import Navigation from '../../Home/Navigation/Navigation';
import Footer from '../../Footer/Footer';


const Login = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <>
            <Navigation></Navigation>
            <section class="vh-100">

                <div class="container-fluid ">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid"
                                alt="Sample image" />
                        </div>
                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                        <FaFacebook />
                                    </button>

                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                        <BsGoogle />
                                    </button>

                                    <button type="button" class="btn btn-primary btn-floating mx-1 rounded">
                                        <AiOutlineInstagram />
                                    </button>
                                </div>
                                <hr />
                                <div class="divider d-flex align-items-center my-4">
                                    <p class="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="email" id="form3Example3" class="form-control form-control-lg"
                                        placeholder="Enter a valid email address" />
                                    <label class="form-label" for="form3Example3">Email address</label>
                                </div>

                                <div class="form-outline mb-3">
                                    <input type="password" id="form3Example4" class="form-control form-control-lg"
                                        placeholder="Enter password" />
                                    <label class="form-label" for="form3Example4">Password</label>
                                </div>

                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="form-check mb-0">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label class="form-check-label" for="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" class="text-body">Forgot password?</a>
                                </div>

                                <div class="text-center text-lg-start mt-4 pt-2">
                                    <Button type="button" class="btn btn-primary btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                                    >Login</Button>
                                    <p class=" fw-bold h6 mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                        class="link-danger h6 ">Register</a></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Login;