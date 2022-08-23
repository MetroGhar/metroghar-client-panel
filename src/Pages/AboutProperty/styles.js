import { 
    Paper,
    styled,
    Box,
    Typography,
    Button,
    Tab,
    Tabs,
    Breadcrumbs,
} from "@mui/material";
import { Link} from "react-router-dom";
import theme from "../../styles/theme";

export const StyledPaper = styled(Paper)({
    width: "84vw",
    height: "500px",
    border: "2px solid #c4c4c4",
    display: "flex",
    margin: "0px 8vw 95px 8vw"
    
})

export const ContentBox = styled(Box)({
    padding: "30px",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
})

export const HeadTypography = styled(Typography)({
    fontSize: "28px",
    lineHeight: "35px",
})

export const AddressTypo = styled(Typography)({
    fontSize: "16px",
    lineHeight: "20px",
})

export const GridTypo = styled(Typography)({
    fontSize: "18px",
    lineHeight: "22px",
    color: theme.palette.primary.dark,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
})

export const StyledButton = styled(Button)({
    fontSize: "20px",
    fontWeight: "500",
    textTransform: "none",
    padding: "5px 25px",
    '&:hover': {
        color: "#fff"
    }

})  

export const StyledTabs = styled(Tabs)({
    display: "flex",
    justifyContent: "space-evenly",
    
})

export const StyledTab = styled(Tab)({
    textTransform: "none",
    fontSize: "20px",
    lineHeight: "23px",
    color: "#58595B",
    marginTop: "20px"
})

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 380,
    height: 470,
    bgcolor: 'background.paper',
    border: '7px solid #e5e5e5',
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
    position: 'relative',
  };

  export const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 480,
    height: 520,
    bgcolor: 'background.paper',
    border: '0px solid #e5e5e5',
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
  };

export const ProfileWrapper = styled(Box)({
    border: "1px solid #1ADDFF",
    borderRadius: "50%",
    width: "136px",
    height: "136px",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mb: 2
})

export const ModalHeadTypo = styled(Typography)({
    fontSize: "16px",
    fontWeight: "500",
    display: "inline"
})

export const FlexBox = styled(Box)({
    display: 'flex',
    margin: "20px 0",
    columnGap: "10px"
})

export const StyledLink = styled(Link)({
    color: "grey",
    textDecorationLine: "none",
    '&:hover': {
        textDecorationLine: "underline"
    }
})

export const StyledBreadcrumbs = styled(Breadcrumbs)({
    margin: "0px 8vw",
    height: "90px",
    display: "flex",
    alignItems: "center"
})

export const HeadBar = styled(Box)({
    background: "rgba(26, 221, 255, 0.14)",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 21px",
    width: "100%",
    marginBottom: "40px",
    fontSize: "21px"
})