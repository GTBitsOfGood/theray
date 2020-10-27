import React from 'react';
import '../static/css/info-delivery.css';
import Phone from '../static/images/phone.svg';
import Messages from '../static/images/messages.svg';
import Ticket from '../static/images/ticket.svg';
import Icons from '../static/images/ticket-icons.svg';

const InfoDelivery = () => {
  return (
    <div className="info-background">
      <p className="info-title">Ticket</p>
      {/* <div style={{display: "flex", justifyContent: "center"}}> */}
      <p className="info-text">
        As you drive through, WheelRight equipment analyzes your tires with cameras and sensors.
        <br />
        <br />
        Within seconds, WheelRight has crunched the data for every individual tire and can deliver the information
        <br />
        where and how you need it--a text message, a printed ticket, or organized in the cloud for fleet management.
      </p>
      {/* </div> */}
      <img className="image-phone" src={Phone} alt="Phone graphic" />
      <img className="image-messages" src={Messages} alt="Message Bubbles" />
      <img className="image-ticket" src={Ticket} alt="Ticket Graphic" />
      <img className="image-icons" src={Icons} alt="Ticket Icons" />
    </div>
  );
};

export default InfoDelivery;