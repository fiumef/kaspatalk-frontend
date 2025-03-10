import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faPen } from '@fortawesome/free-solid-svg-icons'
import { useState, useContext, useRef } from "react"
import { GeneralContext } from "../../ContextProviders/GeneralContextProvider.jsx"
import { UserKeysContext } from "../../ContextProviders/UserKeysContextProvider.jsx";
import { UserSettingsContext } from "../../ContextProviders/UserSettingsContextProvider.jsx";
import { sendTransaction } from "../../../utils/sendTransaction.js";
import { encryptMessage } from "../../../utils/e2ee.js";
import Box from "@mui/material/Box";
import {Button, Dialog, DialogTitle, Input, styled} from "@mui/material";
import theme from "../../../index.theme.js";
import {
    CloseButtonContainerButtonStyle,
    HeaderButtonContainerBoxStyle,
    HeaderButtonContainerStyledFontAwesomeIconStyle, ModalButtonsContainerBoxStyle,
    ModalContainerDialogStyle,
    ModalContentContainerBoxStyle, ModalInputContainerInputStyle,
    ModalTitleContainerDialogTitleStyle,
    SearchBoxContainerBoxStyle,
    SearchBoxIconContainerStyledFontAwesomeIconStyle,
    SearchBoxInputContainerInputStyle, SendButtonContainerButtonStyle,
    SidePanelHeaderContainerBoxStyle
} from "./Header.styles.js";

const Header = () => {
    const modalRef = useRef(null);
    const [newPeerAddress, setNewPeerAddress] = useState("");
    const [messageArea, setMessageArea] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const { setOpenMenuDrawer } = useContext(GeneralContext);
    const { userPrivateKey } = useContext(UserKeysContext);
    const { networkIdentifier, kaspaNodeWrpc } = useContext(UserSettingsContext);
    const StyledFontAwesomeIcon = styled(FontAwesomeIcon)({theme})

    const openModalHandler = () => {
        setOpenModal(true);
    };

    const closeModalHandler = () => {
        setOpenModal(false);
        setNewPeerAddress("");  // Reset dei campi del modale
        setMessageArea("");
    };

    const handleSendTransactionButton = async (userPrivateKey, networkIdentifier, newPeerAddress, messageArea) => {
        try {
            const [encryptedMessage, ivHex] = await encryptMessage(userPrivateKey, messageArea, newPeerAddress);
            const encryptedPayload = encryptedMessage + "|" + ivHex;
            await sendTransaction(userPrivateKey, newPeerAddress, encryptedPayload, networkIdentifier, kaspaNodeWrpc);
            closeModalHandler();
        } catch (sendingTransactionError) {
            console.log("sendingTransactionError")
            console.log(sendingTransactionError)
        }
    };


    return (
        <>
            <Box
                 sx={SidePanelHeaderContainerBoxStyle}>

                <Box
                     sx={HeaderButtonContainerBoxStyle}
                     onClick={() => setOpenMenuDrawer(true)}>

                    <StyledFontAwesomeIcon icon={faBars}
                                           sx={HeaderButtonContainerStyledFontAwesomeIconStyle}/>
                </Box>
                <Box
                     sx={SearchBoxContainerBoxStyle}>
                    <StyledFontAwesomeIcon icon={faSearch}
                                           className={"styles.searchBoxIcon"}
                                           sx={SearchBoxIconContainerStyledFontAwesomeIconStyle}/>
                    <Input type="text"
                           placeholder="Search"

                           sx={SearchBoxInputContainerInputStyle}></Input>
                </Box>
                <Box
                     sx={HeaderButtonContainerBoxStyle}
                     onClick={openModalHandler}>
                    <StyledFontAwesomeIcon icon={faPen}
                                           sx={HeaderButtonContainerStyledFontAwesomeIconStyle}
                                           className={"styles.headerButtonIcon"}/>
                </Box>
            </Box>
            {/* Start new conversation Modal Dialog */}
            <Dialog open={openModal}
                    onClose={closeModalHandler}
                    slotProps={{
                        backdrop: {
                            sx: {
                                backgroundColor: 'rgba(0, 0, 0, 0.25)',
                            },
                        },

                    }}

                    sx={ModalContainerDialogStyle}>
                <Box  sx={ModalContentContainerBoxStyle} ref={modalRef}>
                    <DialogTitle sx={ModalTitleContainerDialogTitleStyle}>Start a new conversation</DialogTitle>
                    <Box>
                        <label>New Peer Address:</label>
                        <Input
                            type="text"
                            id="newPeerAddress"
                            value={newPeerAddress}
                            onChange={(event) => setNewPeerAddress(event.target.value)}
                            placeholder="Enter new peer address"
                            sx={ModalInputContainerInputStyle}
                            disableUnderline={true}
                        />
                    </Box>
                    <Box>
                        <label>Message:</label>
                        <Input
                            type="text"
                            id="messageArea"
                            value={messageArea}
                            onChange={(event) => setMessageArea(event.target.value)}
                            placeholder="Write your message"
                            disableUnderline={true}
                            sx={ModalInputContainerInputStyle}

                        />
                    </Box>
                    <Box sx={ModalButtonsContainerBoxStyle} >
                        <Button
                            onClick={() => handleSendTransactionButton(userPrivateKey, networkIdentifier, newPeerAddress, messageArea)}

                            sx={SendButtonContainerButtonStyle}>

                            Send
                        </Button>
                        <Button onClick={closeModalHandler}
                                sx={CloseButtonContainerButtonStyle}>
                            Cancel
                        </Button>
                    </Box>
                </Box>
            </Dialog>
        </>
    );
};

export default Header;