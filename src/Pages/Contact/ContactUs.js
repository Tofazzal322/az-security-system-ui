import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import contactImg from "../../images/Headquarters 2.jpg";
import Footer from "../Shared/Footer";
// import useData from '../../hooks/useData';

const ContactUs = () => {
  // const {data}=useData()
  return (
    <div>
      <div className="container mt-5 mb-5">
        <h3 className="mb-5 text-primary">CONTACT WITH US</h3>
        {/* <hr className="w-25" /> */}
        <Row className=" mt-5 contact-section">
          <Col className="mt-1">
            <h3>Az Security System LLC</h3>
            <Col className="mt-3">
              <h4 className="text-left mb-3">Address</h4>
              <p>
                PO Box 719, PC114, Opp. OK Centre, Ruwi, Muscat, Sultanate of
                Oman
              </p>
              <h4>For Sale & General Enquiries</h4>
              <p>+968 2477 0800 / +968 9099 9335</p>
              <h4>Email</h4>
              <p>info@az.securitysystem.om</p>
            </Col>
          </Col>
          <Col className="mb-5">
            <Image className="w-100 mb-2 pb-5" src={contactImg} alt="" />
          </Col>
        </Row>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
