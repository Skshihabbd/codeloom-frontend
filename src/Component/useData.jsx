import { useContext } from "react";
import { authContext } from "./Authorization";

const useData = () => {
  const dataHotel = useContext(authContext);
  return dataHotel;
};

export default useData;
