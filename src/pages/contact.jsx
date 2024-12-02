import React from "react";
import { Carousel } from "react-responsive-carousel";
import contact from "./src/assets/CONTACT.png";
import handset from "./src/assets/HANDSET CORD.png";
import headset from "./src/assets/HEADSET.png";

function Contact() {
  return (
    <div className="mb-10">
      <Carousel
        autoPlay
        interval={2500}
        infiniteLoop
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        className="relative z-10"
      >
        <div className="text-end relative z-10">
          <img src={contact} alt="Slide 1" />
        </div>
        <div className="text-end relative z-10">
          <img src={handset} alt="Slide 2" />
        </div>
        <div className="text-end relative z-10">
          <img src={headset} alt="Slide 3" />
        </div>
      </Carousel>
      <p className="text-center text-blue-950 text-3xl font-bold bg-opacity-50 p-2 rounded mt-5">
        Contact us, We're Here to Help
      </p>
      <div className="p-4">
        <p className="flex justify-center">
          {" "}
          Have a question, need assistance, or interested in our services? Get
          in touch with us - we're here to help you!
        </p>
        <br />
        <br />
        <p className="text-left text-base/9">
          <b className="text-orange-700">Phone:</b>
          +234803300AFCOMM,+234803300AFCOMM
          <br />
          <b className="text-orange-700">Email:</b> inquiries@afcomm.ng
          <br />
          <b className="text-orange-700">Address:</b> 4, Arukweh street,
          Aradagun badagry, Lagos state, Nigeria.
        </p>
        <h1 className="text-3xl font-bold text-blue-950 text-center my-10">
          Business Hours
        </h1>
        <p className="text-base/9">
          <b className="text-orange-700">Monday to Friday:</b> 8:00 AM - 5:00 PM
          <br />
          <b className="text-orange-700">Saturday:</b> 8:00 AM - 12:00 PM
          <br />
          <b className="text-orange-700">Sunday:</b> Closed
        </p>{" "}
        <br />
        <p className="my-5">
          <b>
            <i className="text-blue-950 font-bold">How Can We Assist You?</i>
          </b>
        </p>
        Whether you're looking for maintenance services, supply and procurement
        of technology solutions, or have general inquiries, questions &
        feedback, our team is ready to assist you.
        <br />
        <br />
        Reach out to us directly via phone or email during our business hours.
        Let's connect, and let us be your partner in enhancing your security
        systems, office technology solutions, and more.
      </div>
    </div>
  );
}

export default Contact;
