import React from "react";
import "../../../styles/Home.css";
import contactUs from "../../../assets/images/contactUs.jpg";

import CommonHeader from "./Common/Header";
import { CallBackHandlerProps } from "../../../Helpers/Types/props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkedAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Contact: React.FC<CallBackHandlerProps> = (props: CallBackHandlerProps) => {
    return (
        <>
            {/* Structure */}
            <div className="row m-0" style={{ background: `url(${contactUs})`, backgroundPosition: "right", backgroundPositionX: "350px", backgroundPositionY: "-60px", backgroundRepeat: "no-repeat", fontFamily: "Poppins-SemiBold", fontSize: "14px" }}>
                <div className="col-md-7 col-sm-12" style={{ backgroundColor: "white" }}>
                    {/* Header Area*/}
                    <CommonHeader callbackHandler={props.callbackHandler} backgroundColor = {"#000000"}/>
                    <div className="row" style={{ backgroundColor: "white", paddingTop: "100px", paddingBottom: "200px" }}>
                        <div className="col-12 mx-auto text-center" style={{ fontSize: "80px", fontFamily: "Poppins-SemiBold" }}>
                            <div className="flex">
                                <p className="mb-0 text-break d-none d-lg-block d-md-block" style={{ opacity: "0.3", lineHeight: "80px", letterSpacing: "10px", textShadow: "-2px 0 #000000, 0 2px #000000, 2px 0 #000000, 0 -2px #000000", color: "white" }}>
                                    Contact us
                                </p>
                                <p className="mb-0 text-break" style={{ fontSize: "30px", position: "absolute", left: "0px", right: "0px", bottom: "0px", color: "#000000" }}>
                                    Contact us
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mx-0" style={{ marginTop: "-100px" }}>
                <div className="col-md-6 col-sm-12 mx-auto" style={{ backgroundColor: "#000000", opacity: "0.9" }}>
                    <div className="row py-5 my-5">
                        <div className="col-9" style={{ fontSize: "30px", color: "#FFFFFF", opacity: "0.9", letterSpacing: "-0.55px" }}>
                            Tension free shipping with Kotnett
                        </div>
                        <div className="col-3">
                            <p style={{ fontSize: "20px", color: "#FFFFFF", opacity: "0.9", transform: "matrix(0, -1, 1, 0, 0, 0)", top: "50px", right: "0px", position: "absolute", cursor: "pointer" }} onClick={() => props.callbackHandler(3)}>
                                Learn More
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mx-0 pt-5" style={{ fontSize: "30px", fontFamily: "Poppins" }}>
                <div className="col-lg-9 col-12 mx-auto">
                    <div className="row m-0">
                        <div className="col-lg-3 col-12">
                            <div style={{ color: "#244C86" }}>
                                <b>01</b>
                            </div>
                            <div style={{ fontSize: "40px", fontFamily: "Poppins-SemiBold", overflowWrap: "break-word" }}>Talk to us</div>
                        </div>
                        <div className="col-lg-9 col-12 h-100 my-auto" style={{ fontSize: "20px" }}>
                            Need all contact details

                            <br />
                            1. Phone number <br />
                            2. Email Address <br />
                            3. Fax
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mx-0 pb-5" style={{ fontSize: "30px", fontFamily: "Poppins" }}>
                <div className="col-lg-9 col-12 mx-auto">
                    <div className="row m-0">
                        <div className="col-lg-3 col-12">
                            <div style={{ color: "#244C86" }}>
                                <b>02</b>
                            </div>
                            <div style={{ fontSize: "40px", fontFamily: "Poppins-SemiBold", overflowWrap: "break-word" }}>Locate Us</div>
                        </div>
                        <div className="col-lg-9 col-12 h-100 my-auto" style={{ fontSize: "20px" }}>
                            Need address map
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Area starts here */}
            <div className="row mx-0 py-5" style={{ backgroundColor: "#000000", color: "white" }}>
                <div className="col-10 col-lg-3 ml-lg-auto">
                    <h4 className="pb-2 pt-3 mb-0">About</h4>
                    <div className="col-12 col-lg-10">
                        <p>Tension free shipping with Kotnett</p>

                    </div>
                    
                    <div className="col-lg-6 col-8 d-flex">
                        <a className="mx-auto" href="https://twitter.com/narendramodi">
                            <FontAwesomeIcon icon={faTwitter} color="#fff" />
                        </a>
                        <a className="mx-auto" href="https://www.instagram.com/bluepen11">
                            <FontAwesomeIcon className="mx-auto" icon={faInstagram} color="#fff" />
                        </a>
                        <a className="mx-auto" href="https://www.facebook.com/bluepen11">
                            <FontAwesomeIcon className="mx-auto" icon={faFacebook} color="#fff" />
                        </a>
                    </div>
                </div>
                <div className="col-10 col-lg-3 mx-lg-auto">
                    <h4 className="pb-2 pt-3 mb-0">Navigate</h4>
                    <div className="col-12">
                        <p className="mb-1" onClick={() => props.callbackHandler(2)} style={{ cursor: "pointer" }}>
                            Home
                        </p>
                        <p className="mb-1" onClick={() => props.callbackHandler(3)} style={{ cursor: "pointer" }}>
                            About
                        </p>
                        <p className="mb-1" onClick={() => props.callbackHandler(4)} style={{ cursor: "pointer" }}>
                            Contact
                        </p>
                        <p className="mb-1" onClick={() => props.callbackHandler(1)} style={{ cursor: "pointer" }}>
                            Create New Account
                        </p>
                        <p className="mb-1" onClick={() => props.callbackHandler(0)} style={{ cursor: "pointer" }}>
                            Log In
                        </p>
                    </div>
                </div>
                <div className="col-10 col-lg-3 mr-lg-auto">
                    <h4 className="pb-2 pt-3 mb-0">Have a Questions?</h4>
                    <div className="row">
                        <div className="col-2 d-flex">
                            <FontAwesomeIcon className="ml-auto" icon={faMapMarkedAlt} />
                        </div>
                        <div className="col-10">
                            <p>
                                Need address
                                <br />
                                Line 1
                                <br />
                                Line 2
                                <br />
                           
                            </p>
                        </div>
                        <div className="col-2 d-flex">
                            <FontAwesomeIcon className="ml-auto" icon={faPhoneAlt} />
                        </div>
                        <div className="col-10">
                            <p>
                                Need phone 1
                                <br />
                               
                            </p>
                        </div>
                        <div className="col-2 d-flex">
                            <FontAwesomeIcon className="ml-auto my-auto" icon={faEnvelope} />
                        </div>
                        <div className="col-10">
                        <p className="mb-0">customerservice@kotnett.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="center" style={{ textAlign: "center" ,  backgroundColor: "#000000", color: "white" }}>@ Copyright 2018,All Rights Reserved by KOTNETT<br/>Desinged with 💕by  & <a href="https://www.bluepen.co.in/">BLUEPEN</a></div>
        </>
    );
};

export default Contact;
