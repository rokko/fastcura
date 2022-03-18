import { io } from 'socket.io-client';

export const socket = io('http://localhost:8080');
export let socketID = '';
socket.on('connect', () => {
    socketID = socket.id
})