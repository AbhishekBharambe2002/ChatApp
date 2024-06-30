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
Login Page
![Screenshot 2024-06-29 142451](https://github.com/AbhishekBharambe2002/ChatApp/assets/123597077/8fc1f876-d91c-4867-acf9-46284823d206)


Sign Up  Page
![Screenshot 2024-06-29 142642](https://github.com/AbhishekBharambe2002/ChatApp/assets/123597077/90291ee2-ac33-4aea-bb54-1099bddf4eb5)


Search User
![Screenshot 2024-06-29 181259](https://github.com/AbhishekBharambe2002/ChatApp/assets/123597077/893d2bed-ed0d-4a36-82d1-4b649af7685d)


![Screenshot 2024-06-29 181926](https://github.com/AbhishekBharambe2002/ChatApp/assets/123597077/66cc8b00-4f3d-4622-97e6-ec699d1251ea)


Real Time Chat
![Screenshot 2024-06-29 183512](https://github.com/AbhishekBharambe2002/ChatApp/assets/123597077/0b497c07-e591-48a1-a1ad-41f7cf6012c0)


View Profile
![Screenshot 2024-06-29 181545](https://github.com/AbhishekBharambe2002/ChatApp/assets/123597077/3e700b43-be91-434b-a47e-3f12007b2b32)

Group Chat
![Screenshot 2024-06-29 181958](https://github.com/AbhishekBharambe2002/ChatApp/assets/123597077/394f6131-586b-46e4-9801-024298dd2a74)



![Screenshot 2024-06-29 181807](https://github.com/AbhishekBharambe2002/ChatApp/assets/123597077/15e6248a-76e2-487f-83b7-197864b91a74)


Notification
![Screenshot (154)](https://github.com/AbhishekBharambe2002/ChatApp/assets/123597077/a1587d4e-a27b-4444-96df-ac06d7126913)

![Screenshot 2024-06-29 142931](https://github.com/AbhishekBharambe2002/ChatApp/assets/123597077/75011e3a-e584-40c8-a11a-812286390f2c)


Typing Animation
![Screenshot 2024-06-29 183447](https://github.com/AbhishekBharambe2002/ChatApp/assets/123597077/079c5429-3a3f-4322-ad44-5d0fd96b1e10)
