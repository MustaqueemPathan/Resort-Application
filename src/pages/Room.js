import React, { Component } from "react";

import Hero from "../components/Hero";
import Banner from "../components/Banner";

import { Link } from "react-router-dom";

import RoomsContainer from "../components/RoomsContainer";

export default class Room extends Component {
  render() {
    return (
      <>
        <Hero hero="roomsHero">
          <Banner title="Our Rooms">
            <Link to="/" className=" btn-primary">
              Return Home
            </Link>
          </Banner>
        </Hero>
        <RoomsContainer />
      </>
    );
  }
}
