import app from ",/app";
import { Server as WebsocketServer } from 'socket.io'

const io = new WebsocketServer()



app.listen(3000)

console.log('Server is runnin on port 3000')