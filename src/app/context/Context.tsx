import React, { useContext, useState } from "react";

interface IContextDati {
  noti: any;
  setNoti : any;
  test : string;
  settaNotifica :()=>void;
}

export const AppContext = React.createContext<IContextDati | null>(null);

const AppProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [noti,setNoti] = useState(false)
  const test = 'ciao'

  const settaNotifica = () =>{
    setNoti(true)
  }

  return <AppContext.Provider value={{ setNoti,noti , test,settaNotifica}}>{children}</AppContext.Provider>;
};

export default AppProvider;
