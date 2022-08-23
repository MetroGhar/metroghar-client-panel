import {
    Box,
    Grid,
    styled
} from "@mui/material"

export const Wrapper = styled(Box)({
    padding: "35px 100px",
    minHeight: "61.5vh",
    maxHeight: "61.5vh",
    overflow: "scroll"
})
export const PropWrapper = styled(Box)({
    minHeight: "61.5vh",
    maxHeight: "61.5vh",
    overflow: "scroll",
    padding: "35px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: 'center'
})

export const ImageUploadBox = styled(Box)({
    border: '1px solid #ced4da',
    borderRadius: 4,
    display: "flex",
    alignItems: "start",
    justifyContent: "space-around",
    width: "350px", 
})

export const GridContainer = styled(Grid)({
    justifyContent: "space-between"
})

export const GridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center"
})
