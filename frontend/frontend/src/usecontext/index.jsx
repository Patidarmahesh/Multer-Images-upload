import { createContext, useState } from "react";

export const ModalData = createContext();

const AllUserContext = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const handler = () => {
    setVisible(true);
    console.log("mmmmmmmmmmmmm");
  };
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const [data,setData] = useState([]);
  const [userId,setUserId] = useState('');

  return (
    <ModalData.Provider value={{ visible, handler, closeHandler,data,setData,userId,setUserId}}>
      {children}
    </ModalData.Provider>
  );
};
export default AllUserContext;
