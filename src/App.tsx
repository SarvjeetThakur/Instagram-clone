import { useEffect, useState } from "react";
import Approutes from "./routes/appRoutes"
import { io } from "socket.io-client";

function App() {
  const [socket, setSocket] = useState<any>(null);
  const [newItem, setNewItem] = useState<any>(null);

  useEffect(() => {
    const socket = io('http://localhost:3001');

    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socket.on('newItemNotification', (newItemData) => {
      setNewItem(newItemData);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    setSocket(socket);

    // Clean up the WebSocket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    // <>
    // <Approutes />
    // </>
    <div>
      <h1>Real-time Notifications for New Items</h1>
      <div>
        {newItem && (
          <p>New item added: {newItem.name} (ID: {newItem.id})</p>
        )}
      </div>
    </div>
  )
}

export default App
