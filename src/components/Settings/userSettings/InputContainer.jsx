
import Box from "@mui/material/Box";
import {Button, Input, Typography} from "@mui/material";
import {RootContainerBoxStyle} from "./Root.styles.js";
import {useContext, useState} from "react";
import {UserSettingsContext} from "../../ContextProviders/UserSettingsContextProvider.jsx";
import {
    ModalButtonsContainerBoxStyle,
    ModalInputContainerInputStyle,
    ModalTitleContainerDialogTitleStyle, SendButtonContainerButtonStyle
} from "../../Chat/SidePanel/Header.styles.js";
import {
    changeOrAddKeyPairFromDb,
} from "../../../storage/storage.js";
import {newAddressDetailsEvent, newNetworkDetailsEvent} from "../../../utils/CustomEvents.js";

const InputContainer = () => {
    const {networkIdentifier, kaspaNodeWrpc} = useContext(UserSettingsContext);
    const [newNetwork, setNewNetwork] = useState(null);
    const [newNodeAddress, setNewNodeAddress] = useState(null);
    const saveNewDetails = () => {

        if (newNetwork !== null && newNetwork !== "" && newNetwork !== " ") {
            changeOrAddKeyPairFromDb("userSettings", "NETWORK_ID", newNetwork);
            document.dispatchEvent(newNetworkDetailsEvent(newNetwork))
        }
        const regex = new RegExp("^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?):(6553[0-5]|655[0-2][0-9]|64[0-9]{3}|[1-9][0-9]{0,3})$");
        if( newNodeAddress !== ""
            && newNodeAddress !== " "
            && newNodeAddress !== null
            && regex.test(newNodeAddress.toString())
        ) {
            changeOrAddKeyPairFromDb("userSettings", "KASPA_NODE_WRPC", "ws://"+newNodeAddress);+
            document.dispatchEvent(newAddressDetailsEvent("ws://"+newNodeAddress))
        }
        setNewNodeAddress("")
        setNewNetwork("")
    }

    //const overrideNetworkIdentifier =
    return (

        <Box sx={RootContainerBoxStyle}>
            <Typography variant={"h3"} sx={ModalTitleContainerDialogTitleStyle}>Save Address</Typography>

            <Box>
                <label>Network</label>
                <Input
                    type="text"
                    placeholder={networkIdentifier.toString()}
                    value={newNetwork}
                    onChange={(event) => setNewNetwork(event.target.value)}
                    sx={ModalInputContainerInputStyle}
                    disableUnderline={true}
                />
            </Box>
            <Box>
                <label>Node address:</label>
                <Input
                    type="text"
                    id="newAlias"
                    placeholder={kaspaNodeWrpc.toString().substring(5)}
                    value={newNodeAddress}
                    onChange={(event) => setNewNodeAddress(event.target.value)}
                    sx={ModalInputContainerInputStyle}
                    disableUnderline={true}
                />
            </Box>

            <Box sx={ModalButtonsContainerBoxStyle}>
                <Button
                    onClick={() => {
                        saveNewDetails()

                    }}
                    sx={SendButtonContainerButtonStyle}>
                    Save
                </Button>

            </Box>

        </Box>

    )
}

export default InputContainer;