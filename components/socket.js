import io from "socket.io-client";

const socket = io("ws://localhost:2999");

export default socket;
