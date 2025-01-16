
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {RootContainerBoxStyle} from "./Root.styles.js";
import InputContainer from "./InputContainer.jsx";




const Root = () => {



    return (

        <Box sx={RootContainerBoxStyle}>
            <Typography variant={'h3'} >Settings</Typography>

            <InputContainer/>

        </Box>

    )
}

export default Root;