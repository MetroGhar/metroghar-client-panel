import { 
    Box,
    Paper,
    Typography,
    Button,
    styled,
    MenuItem
} from "@mui/material"
import bgImage from "../../assets/images/landingBG2.jpeg"

export const LandingWrapper = styled(Box)({
    backgroundImage: `url(${bgImage})`,
    height: "463px",
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center'

})

export const LandingSearchBoxWrapper = styled(Box)({
    width: "60vw",
    height: "125px",
    display: 'flex',
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
})

export const SearchBox = styled(Paper)({
    display: 'flex',
    height: 60,
    width: "90%",
    position: "relative"
})

export const LandingTypo = styled(Typography)({
    fontWeight: "500",
    textAlign: "center",
    fontSize: "40px",
})

export const LocationButton = styled(Button)({
    bgcolor: "#fff",
    color: "#000",
    fontSize: "18px",
    width: "15%",
    textTransform: 'none',
    ':hover': {bgcolor: "#fff"}
})

export const StyledMenuItem = styled(MenuItem)({
    width: 123,
})