import React from "react";
import "../../../styles/Home.css";
import Ship from "../../../assets/images/Ship.png";

import CMACGM from "../../../assets/images/CMACGM.png";
import COSCO from "../../../assets/images/COSCO.png";
import EVGLine from "../../../assets/images/EVGLine.png";
import Hapag from "../../../assets/images/Hapag.png";
import Maersk from "../../../assets/images/Maersk.png";
import MSC from "../../../assets/images/MSC.png";

import CommonHeader from "./Common/Header";
import { CallBackHandlerProps } from "../../../Helpers/Types/props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCentercode, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkedAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Home: React.FC<CallBackHandlerProps> = (props: CallBackHandlerProps) => {
    return (
        <>
            {/* Structure */}
            <div className="row m-0" style={{ background: `url(${Ship})`, backgroundPosition: "right", backgroundPositionX: "300px", backgroundPositionY: "-110px", backgroundRepeat: "no-repeat", fontFamily: "Poppins-SemiBold", fontSize: "14px" }}>
                <div className="col-md-7 col-sm-12" style={{ backgroundColor: "white" }}>
                    {/* Header Area*/}
                    <CommonHeader callbackHandler={props.callbackHandler} backgroundColor = {"#F05050"} />
                </div>
                <div className="col-md-7 col-sm-12" style={{ backgroundColor: "white", paddingTop: "100px", paddingBottom: "200px" }}>
                    <p className="text-center" style={{ fontSize: "50px" }}>
                        Kotnett
                    </p>
                    <p className="px-5" style={{ fontSize: "30px", color: "#2C2C2C", opacity: "0.65" }}>
                        All your shipping solutions<br />
                        Are here
                    </p>
                    <div className="px-5">
                        <button type="button" className="btn btn-book m-auto" onClick = {() => props.callbackHandler(0)}>
                            Book Shipment
                        </button>
                    </div>
                </div>
            </div>
            <div className="row mx-0" style={{ marginTop: "-100px" }}>
                <div className="col-md-6 col-sm-12 mx-auto" style={{ backgroundColor: "#000024", opacity: "0.9" }}>
                    <div className="row py-5 my-5">
                        <div className="col-9" style={{ fontSize: "30px", color: "#FFFFFF", opacity: "0.9", letterSpacing: "-0.55px" }}>
                            Now going world wide
                        </div>
                        <div className="col-3">
                            <p style={{ fontSize: "20px", color: "#FFFFFF", opacity: "0.9", transform: "matrix(0, -1, 1, 0, 0, 0)", top: "50px", right: "0px", position: "absolute", cursor: "pointer" }} onClick = {() => props.callbackHandler(3)}>Learn More</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row py-5 my-5 mx-0">
                <div className="col-10 mx-auto">
                    <div className="row mx-0" style={{ fontSize: "50px", fontFamily: "Poppins-SemiBold" }}>
                        <div className="col-lg-3 col-12 text-center">
                            <p className="mb-0">10</p>
                            <p style={{ fontSize: "25px", opacity: "0.8" }}>Years</p>
                        </div>
                        <div className="col-lg-3 col-12 text-center">
                            <p className="mb-0">45</p>
                            <p style={{ fontSize: "25px", opacity: "0.8" }}>Partners</p>
                        </div>
                        <div className="col-lg-3 col-12 text-center">
                            <p className="mb-0">500</p>
                            <p style={{ fontSize: "25px", opacity: "0.8" }}>Happy Customers</p>
                        </div>
                        <div className="col-lg-3 col-12 text-center">
                            <p className="mb-0">2500</p>
                            <p style={{ fontSize: "25px", opacity: "0.8" }}>Shipments</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-5 mx-0">
                <div className="col-lg-8 col-12 mx-auto text-center" style={{ fontSize: "80px", fontFamily: "Poppins-SemiBold" }}>
                    <div className="flex">
                        <p className="mb-0 text-break d-none d-lg-block d-md-block" style={{ opacity: "0.3", lineHeight: "80px", letterSpacing: "10px", textShadow: "-2px 0 #F05050, 0 2px #F05050, 2px 0 #F05050, 0 -2px #F05050", color: "white" }}>
                            Our Services
                        </p>
                        <p className="mb-0 text-break" style={{ fontSize: "30px", position: "absolute", left: "0px", right: "0px", bottom: "0px", color: "#F05050" }}>
                            Our Services
                        </p>
                    </div>
                </div>
            </div>

            <div className="row mx-0" style={{ fontSize: "30px", fontFamily: "Poppins" }}>
                <div className="col-lg-9 col-12 mx-auto">
                    <div className="row m-0">
                        <div className="col-lg-3 col-12">
                            <div style={{ color: "#244C86" }}>
                                <b>01</b>
                            </div>
                            <div style={{ fontSize: "40px", fontFamily: "Poppins-SemiBold", overflowWrap: "break-word" }}>FCL</div>
                        </div>
                        <div className="col-lg-9 col-12 h-100 my-auto" style={{ fontSize: "20px" }}>
                            Full Container Load
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mx-0" style={{ fontSize: "30px", fontFamily: "Poppins" }}>
                <div className="col-lg-9 col-12 mx-auto">
                    <div className="row m-0">
                        <div className="col-lg-3 col-12 d-md-block d-lg-none">
                            <div className="text-lg-right" style={{ color: "#244C86" }}>
                                <b>02</b>
                            </div>
                            <div className="text-lg-right" style={{ fontSize: "40px", fontFamily: "Poppins-SemiBold", overflowWrap: "break-word" }}>
                                LCL
                            </div>
                        </div>
                        <div className="col-lg-9 col-12 h-100 my-auto" style={{ fontSize: "20px" }}>
                            Less Container Load
                        </div>
                        <div className="col-lg-3 col-12 d-none d-lg-block">
                            <div className="text-lg-right" style={{ color: "#244C86" }}>
                                <b>02</b>
                            </div>
                            <div className="text-lg-right" style={{ fontSize: "40px", fontFamily: "Poppins-SemiBold", overflowWrap: "break-word" }}>
                                LCL
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mx-0" style={{ fontSize: "30px", fontFamily: "Poppins" }}>
                <div className="col-lg-9 col-12 mx-auto">
                    <div className="row m-0">
                        <div className="col-lg-3 col-12">
                            <div style={{ color: "#244C86" }}>
                                <b>03</b>
                            </div>
                            <div style={{ fontSize: "40px", fontFamily: "Poppins-SemiBold", overflowWrap: "break-word" }}>Customs Clearance</div>
                        </div>
                        <div className="col-lg-9 col-12 h-100 my-auto" style={{ fontSize: "20px" }}>
                            Custom Clearance
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mx-0" style={{ fontSize: "30px", fontFamily: "Poppins" }}>
                <div className="col-lg-9 col-12 mx-auto">
                    <div className="row m-0">
                        <div className="col-lg-3 col-12 d-md-block d-lg-none">
                            {" "}
                            {/* To be rendered only in xs */}
                            <div className="text-lg-right" style={{ color: "#244C86" }}>
                                <b>04</b>
                            </div>
                            <div className="text-lg-right" style={{ fontSize: "40px", fontFamily: "Poppins-SemiBold", overflowWrap: "break-word" }}>
                            Transport
                            </div>
                        </div>
                        <div className="col-lg-9 col-12 h-100 my-auto" style={{ fontSize: "20px" }}>
                            Truck and Container Transport
                        </div>
                        <div className="col-lg-3 col-12 d-none d-lg-block">
                            <div className="text-lg-right" style={{ color: "#244C86" }}>
                                <b>04</b>
                            </div>
                            <div className="text-lg-right" style={{ fontSize: "40px", fontFamily: "Poppins-SemiBold", overflowWrap: "break-word" }}>
                                Transport
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-5" style={{ background: `url(${Ship})` }}>
                <div style={{ backgroundColor: "#000024", opacity: "0.9", height: "200px", display: "grid" }}>
                    <div className="row mx-0 my-auto" style={{ fontSize: "40px", color: "white", fontFamily: "Poppins-SemiBold" }}>
                        <div className="col-lg-7 col-12 text-center">Get In Touch</div>
                        <div className="col-lg-5 col-12" style={{ display: "flex" }}>
                            <button className="m-auto btn btn-light">Need number</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mx-0 mt-5 pt-5">
                <div className="col-lg-8 col-12 mx-auto text-center" style={{ fontSize: "80px", fontFamily: "Poppins-SemiBold" }}>
                    <div className="flex">
                        <p className="mb-0 text-break d-none d-lg-block d-md-block" style={{ opacity: "0.09", lineHeight: "80px", letterSpacing: "10px", textShadow: "-2px 0 green, 0 2px green, 2px 0 green, 0 -2px green", color: "white" }}>
                            Our Associates
                        </p>
                        <p className="mb-0 text-break" style={{ fontSize: "30px", position: "absolute", left: "0px", right: "0px", bottom: "0px", color: "green" }}>
                            Our Associates
                        </p>
                    </div>
                </div>
            </div>
            <p className = "text-center">Need associate brands list</p>
            <div className="row mx-0 my-5">
                <div className="col-lg-2 col-6 d-flex pb-2">
                    <img className="img-fluid my-auto" src={COSCO} alt = {"Parter"}/>
                </div>
                <div className="col-lg-2 col-6 d-flex pb-2">
                    <img className="img-fluid my-auto" src={Maersk} alt = {"Parter"}/>
                </div>
                <div className="col-lg-2 col-6 d-flex pb-2">
                    <img className="img-fluid my-auto" src={MSC} alt = {"Parter"}/>
                </div>
                <div className="col-lg-2 col-6 d-flex pb-2">
                    <img className="img-fluid my-auto" src={CMACGM} alt = {"Parter"}/>
                </div>
                <div className="col-lg-2 col-6 d-flex pb-2">
                    <img className="img-fluid my-auto" src={Hapag} alt = {"Parter"}/>
                </div>
                <div className="col-lg-2 col-6 d-flex pb-2">
                    <img className="img-fluid my-auto" src={EVGLine} alt = {"Parter"}/>
                </div>
            </div>

            {/* Footer Area starts here */}
            <div className="row mx-0 py-5" style={{ backgroundColor: "#000024", color: "white" }}>
                <div className="col-10 col-lg-3 ml-lg-auto">
                    <h4 className="pb-2 pt-3 mb-0">About</h4>
                    <div className="col-12 col-lg-10">
                        <p>Tension free shipping with Kotnett</p>
                        
                    </div>
    
                    <div className="col-lg-6 col-8 d-flex">
                        <a className="mx-auto" href="https://twitter.com/narendramodi"><FontAwesomeIcon icon={faTwitter} color = "#fff" /></a>
                        <a className="mx-auto" href="https://www.instagram.com/bluepen11"><FontAwesomeIcon className="mx-auto" icon={faInstagram} color = "#fff" /></a>
                        <a className="mx-auto" href="https://www.facebook.com/bluepen11"><FontAwesomeIcon className="mx-auto" icon={faFacebook} color = "#fff" /></a>
                    </div>
                </div>
                <div className="col-10 col-lg-3 mx-lg-auto">
                    <h4 className="pb-2 pt-3 mb-0">Navigate</h4>
                    <div className="col-12">
                        <p className = "mb-1" onClick = {() => props.callbackHandler(2)} style = {{cursor: "pointer"}}>Home</p>
                        <p className = "mb-1" onClick = {() => props.callbackHandler(3)} style = {{cursor: "pointer"}}>About</p>
                        <p className = "mb-1" onClick = {() => props.callbackHandler(4)} style = {{cursor: "pointer"}}>Contact</p>
                        <p className = "mb-1" onClick = {() => props.callbackHandler(1)} style = {{cursor: "pointer"}}>Create New Account</p>
                        <p className = "mb-1" onClick = {() => props.callbackHandler(0)} style = {{cursor: "pointer"}}>Log In</p>
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
                <div className="center" style={{ textAlign: "center" ,  backgroundColor: "#000024", color: "white" }}>@ Copyright 2018,All Rights Reserved by KOTNETT<br/>Desinged with 💕by  & <a href="https://www.bluepen.co.in/">BLUEPEN</a></div>
               
            
        </>
    );
};

export default Home;