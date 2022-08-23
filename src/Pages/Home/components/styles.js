import { styled, Typography, Box, Button } from "@mui/material";

export const HeadTypo = styled(Typography)({
    fontSize: "28px",
    lineHeight: "32px",
    fontWeight: "500",
    textAlign: "center",
    margin: "40px 0"
})

export const CardWrapper = styled(Box)({
    width: "292px",
    height: "343px",
    border: "1px solid #E5E5E5",
    borderRadius: "15px",
    margin: "0 10px"
})

export const Card1Wrapper = styled(Box)({
    width: "292px",
    height: "145px",
    border: "1px solid #E5E5E5",
    borderRadius: "5px",
    margin: "0 10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // borderBottomColor: "#FEAA7B",
})

export const CardTypo1 = styled(Typography)({
    fontSize: "12px",
    lineHeight: "14px",

})
export const CardTypo2 = styled(Typography)({
    fontSize: "14px",
    lineHeight: "16px",
    
})
export const CardTypo3 = styled(Typography)({
    fontSize: "10px",
    lineHeight: "12px",
    fontWeight: "500"
})

export const CardTypo4 = styled(Typography)({
    fontSize: "8px",
    lineHeight: "10px",
    textAlign: "center",
    marginTop: "3px"
})

export const StyledButton = styled(Button)({
    width: "82px",
    height: "25px",
    borderRadius: "4px",
    textTransform: "none",
    fontSize: "10px",
    lineHeight: "12px",
    ':hover': {
        color: "#fff"
    }
})

export const Card1Button = styled(Button)({
    textTransform: "none",
    width: "100%",
    boxShadow: "none",
    borderRadius: "4px",
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0",
    
    ':hover': {
        color: "#fff",
        boxShadow: "none"
    },
    height: "25px",
    fontSize: "10px",

})

export const Card3Typo = styled(Typography)({
    fontSize: "40px",
    lineHeight: "44px",
    color: "#fff",
    textAlign: "center"
})