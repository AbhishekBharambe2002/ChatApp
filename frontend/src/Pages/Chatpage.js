import { useState } from "react";
import { ChatState } from "../Context/ChatProvider"
import MyChatBox from "../Miscellaneous/MyChatBox";
import MyChats from "../Miscellaneous/MyChats";
import SideDrawer from "../Miscellaneous/SideDrawer";
import { Box } from "@chakra-ui/layout";
const Chatpage = () => {
   const {user} = ChatState();
   const[fetchAgain, setFetchAgain] = useState();
  return (
    <div style={{ width: "100%" }}>
    {user && <SideDrawer />}
    <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
      {user && (<MyChats 
      fetchAgain={fetchAgain} />)}
      {user && (<MyChatBox 
      fetchAgain={fetchAgain} setFetchAgain ={setFetchAgain}
      />)} 
    </Box>
    
  </div>
  )
}

export default Chatpage
