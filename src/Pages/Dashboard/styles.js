import {
    Box,
    Button,
    styled,
    Typography
} from "@mui/material";

export const WrapperDashboard = styled(Box)({
    display: 'flex',
})

export const SideBarBox = styled(Box)({
    width: "16%",
    height: "86vh",
    borderRight: "2px solid rgba(229, 229, 229, 0.65)",
    borderLeft: "2px solid rgba(229, 229, 229, 0.65)",
    boxSizing: "border-box",
    margin: "0 0 0 3vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
})

export const SideBarButton = styled(Button)({
    height: "20px",
    textTransform: "none",
    color: "#000",
    margin: "5px 0"
})

export const HeadTypography = styled(Typography)({
    fontSize: "18px",
    lineHeight: "20px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "center"
})
export const HeadTypography1 = styled(Typography)({
    fontSize: "24px",
    lineHeight: "26px",
    textAlign: 'center'
})

export const HeadWrapper = styled(Box)({
    borderBottom: "2px solid rgba(229, 229, 229, 0.65)",
    display: 'flex',
    justifyContent: "center",
    padding: "40px 0"
})