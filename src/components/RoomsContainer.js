import React from "react";

import RoomFilter from "./RoomFilter";

import RoomList from "./RoomList";

import { withRoomConsumer, RoomConsumer } from "../context";

function RoomsContainer({ context }) {
  const { sortedRooms, rooms } = context;

  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomsContainer);

// import React from "react";

// import RoomFilter from "./RoomFilter";

// import RoomList from "./RoomList";

// import { RoomConsumer } from "../context";

// //  import Loading from './Loading';

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { sortedRooms, rooms } = value;
//         return (
//           <div>
//             Hello Froms Room Container
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
