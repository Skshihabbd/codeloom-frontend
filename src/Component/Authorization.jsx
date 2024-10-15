import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const authContext = createContext(null);

// eslint-disable-next-line react/prop-types
const Authorization = ({ children }) => {
  const [hotel, setHotel] = useState([]);

  // data handelling all query setup

  useEffect(() => {
    const handleAllDatas = async () => {
      const { data } = await axios(`https://backend-tau-sage.vercel.app/hotel`);
      setHotel(data);
    };
    handleAllDatas();
  }, []);
  console.log(hotel);
  // data handelling all query setup

  return (
    <authContext.Provider value={{ hotel }}>{children}</authContext.Provider>
  );
};

export default Authorization;
