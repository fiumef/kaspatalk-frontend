
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {RootContainerBoxStyle} from "./Root.styles.js";
import {useContext} from "react";
import {UserSettingsContext} from "../../ContextProviders/UserSettingsContextProvider.jsx";




const Root = () => {
const {networkIdentifier, kaspaNodeWrpc} = useContext(UserSettingsContext);

console.log(networkIdentifier);
console.log(kaspaNodeWrpc)
    return (

        <Box sx={RootContainerBoxStyle}>
            <Typography variant={'h3'} >Contacts view</Typography>

        </Box>

    )
}

export default Root;