import React from "react";

import Hero from "../components/Hero";

import Banner from "../components/Banner";

import { Link } from "react-router-dom";

import Services from "../components/Services";

import FeaturedRoom from "../components/FeaturedRoom";
import Styled from "../components/StyledHero";

import Button from "../components/StyledHero";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious rooms"
          subtitle="deluxe rooms starting at $229"
        >
          <Link to="/rooms" className=" btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>

      <Services></Services>
      <FeaturedRoom></FeaturedRoom>
      {/* <Button>Hello</Button> */}
    </>
  );
}
