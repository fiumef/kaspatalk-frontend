import { createContext } from "react";
import PropTypes from 'prop-types';
import { useState } from 'react';
import { NETWORK_ID, KASPA_NODE_WRPC } from "../../../userSettings.js";
import {checkObjectInDb, getKeyValueFromDbObject} from "../../storage/storage.js";

export const UserSettingsContext = createContext();

const UserSettingsContextProvider = ({children}) => {
  const networkRetriever = () => {
    //first checks if network is in storage
    if (checkObjectInDb("userSettings", "NETWORK_ID")){
      return  getKeyValueFromDbObject("userSettings", "NETWORK_ID")
    }
    //fallback to usersettings.json
    return NETWORK_ID

  }
  const kaspaW_R_C_P_Retriever = () => {
    if (checkObjectInDb("userSettings", "KASPA_NODE_WRPC")){
      return  getKeyValueFromDbObject("userSettings", "KASPA_NODE_WRPC")
    }
    //fallback to usersettings.json
    return KASPA_NODE_WRPC
  }
  const [networkIdentifier, setNetworkIdentifier] = useState(networkRetriever());
  const [kaspaNodeWrpc, setKaspaNodeWrpc] = useState(kaspaW_R_C_P_Retriever);


  document.addEventListener("newNetwork",(event) =>{
    setNetworkIdentifier(event.detail.newNetwork)
  })
  document.addEventListener("newAddress",(event) =>{
    setKaspaNodeWrpc(event.detail.newAddress)
  })
  const value = {
    networkIdentifier,
    setNetworkIdentifier,
    kaspaNodeWrpc,
    setKaspaNodeWrpc
  }
  
  return(
      <UserSettingsContext.Provider value={value}>
          {children}
      </UserSettingsContext.Provider>
  );
};

export default UserSettingsContextProvider;

UserSettingsContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};