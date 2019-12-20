import React, { Component } from "react";

import { RoomContext } from "../context";
import Room from "../components/Room";
import Title from "./Title";

// import Loading from "./Loading";

export default class FeaturedRoom extends Component {
  static contextType = RoomContext;
  render() {
    // const { name, greeting } = this.context;
    let { featuredRooms: rooms } = this.context;
    // console.log(rooms);

    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {/* <Loading /> */}
          {rooms}
        </div>
      </section>
    );
  }
}
