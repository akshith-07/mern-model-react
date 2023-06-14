import React, { useState } from "react";
import "./Booking.css";

const Booking = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [fare, setFare] = useState(0);
  const [bookingData, setBookingData] = useState(null);

  const handleSourceChange = (event) => {
    const selectedSource = event.target.value;
    setSource(selectedSource);
    updateFare(selectedSource, destination);
  };

  const handleDestinationChange = (event) => {
    const selectedDestination = event.target.value;
    setDestination(selectedDestination);
    updateFare(source, selectedDestination);
  };

  const updateFare = (selectedSource, selectedDestination) => {
    const fareAmount = calculateFare(selectedSource, selectedDestination);
    setFare(fareAmount);
  };

  const calculateFare = (selectedSource, selectedDestination) => {
    if (selectedSource === "Chennai" && selectedDestination === "Bengaluru") {
      return 800;
    } else if (
      selectedSource === "Kanyakumari" &&
      selectedDestination === "Chennai"
    ) {
      return 150;
    } else if (
      selectedSource === "Chennai" &&
      selectedDestination === "City C"
    ) {
      return 200;
    } else {
      return 0;
    }
  };

  const handleBook = () => {
    const bookingDetails = {
      source,
      destination,
      fare,
    };

    setBookingData(bookingDetails);
  };

  return (
    <div className="booking-container">
      <h2 className="booking-title">Book your Travel</h2>
      <p className="booking-description">
        Choose from a variety of destinations and plan your trip with ease.
      </p>
      <div className="booking-form">
        <label htmlFor="source">From</label>
        <select id="source" value={source} onChange={handleSourceChange}>
          <option value="">Select current city</option>
          <option value="Chennai">Chennai</option>
          <option value="Kanyakumari">Kanyakumari</option>
          <option value="City 3">City 3</option>
        </select>
      </div>
      <div className="booking-form">
        <label htmlFor="destination">To:</label>
        <select
          id="destination"
          value={destination}
          onChange={handleDestinationChange}
        >
          <option value="">Select destination</option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Chennai">Chennai</option>
          <option value="City C">City C</option>
        </select>
      </div>
      <button className="booking-button" onClick={handleBook}>
        Book Now
      </button>

      {bookingData && (
        <div className="booking-details">
          <h3 className="details-title">Booking Details:</h3>
          <p>Source: {bookingData.source}</p>
          <p>Destination: {bookingData.destination}</p>
          <p>Fare: {bookingData.fare}</p>
        </div>
      )}
    </div>
  );
};

export default Booking;
