**Project Title**: Chat Sphere

**Project Description**:
Chat Sphere is an innovative chat application designed to facilitate real-time communication between users. Key features include:

Login System with Profile Picture Upload: Users can upload profile pictures via Cloudinary during the registration process.
User Search and Chat Initiation: Users can search for other users and initiate chats seamlessly.
Group Chat Functionality: Users can create group chats, add or remove members as needed.
Real-Time Messaging: Chat Sphere employs web sockets to enable instantaneous messaging between users.
Notification System: Users receive notifications for new messages. The notification bell icon provides a direct link to the personal chat of the sender, 
ensuring efficient and timely communication.
Chat Sphere offers a comprehensive and user-friendly platform for dynamic and engaging conversations.

**Technologies Used**

- Frontend: React.js, Chakra UI
- Backend: Node.js, Express.js
- Database: MongoDB
- Real-Time Communication: Socket.io
- Image Storage: Cloudinary

**Installation**

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/chat-sphere.git
    cd chat-sphere
    ```

2. **Install dependencies for the backend**:
    ```bash
    cd backend
    npm install
    ```

3. **Install dependencies for the frontend**:
    ```bash
    cd ../frontend
    npm install
    ```

4. **Set up environment variables**:
    Create a `.env` file in the `backend` directory and add your MongoDB URI, Cloudinary credentials (Create Your Own Link in Cloudinary Just Sign in To get the Link)
   ,Generate Token (In Generate Token js Create and Variable And Use the Same Variable in AuthMiddleWare.js File for decoding the Token)
   and any other required environment variables.


6. **Run the application**:
    ```bash
    # Run the backend server
    cd backend
    npm start

    # Run the frontend development server
    cd ../frontend
    npm start
    ```

Usage

- Login: Create an account or log in with existing credentials.
- Upload Profile Picture: Upload a profile picture using Cloudinary.
- Search Users: Use the search functionality to find other users.
- Start Chatting: Initiate a chat with any user or create a group chat.
- Manage Group Chats: Add or remove participants from group chats.
- Receive Notifications: Get notified of new messages and click on the bell icon to view and navigate to chats.
  (OPEN 2 Chrome Tabs IN WHICH ONE SHOULD BE ON INCOGNITO TO TEST ALL THE FEATURES) 

ScreenShots-
![Screenshot 2024-06-29 142451](https://github.com/AbhishekBharambe2002/ChatApp/assets/123597077/8fc1f876-d91c-4867-acf9-46284823d206)
