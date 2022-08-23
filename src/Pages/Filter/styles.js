import { 
    Box,
    styled,
    Typography,
    InputLabel,
    InputBase,
    Breadcrumbs,
    Link
} from "@mui/material"
import bgImage from "../../assets/images/filter_bg.png"

export const FilterBox = styled(Box)({
    width: 360,
    height: "fit-content",
    background: "#FFF",
    border: "2px solid #e5e5e5",
    borderRadius: "20px",
    padding: "26px 24px",
})

export const LandingWrapper = styled(Box)({
    backgroundImage: `url(${bgImage})`,
    height: "300px",
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: 'flex',
    alignItems: "center"
}) 

export const StyledTypography = styled(Typography)({
    fontSize: "30px",
    fontWeight: "400",
    color: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "30px"
})

export const PropListingBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gridRowGap: "30px",
    justifyContent: "start",
    alignItems: "center",
    width: 900,

})

export const StyledLabel = styled(InputLabel)({
    fontSize: "15px",
    fontWeight: "400",
    color: "#000",
    marginTop: "10px"
})

export const StyledInput = styled(InputBase)({
    '& .MuiInputBase-input': {
        width: "270px",
        height: "30px",
        borderRadius: 2.5,
        backgroundColor: '#fff',
        border: '1px solid #e5e5e5',
        fontSize: 14,
        lineHeight: "30px",
        textIndent: 10,
        marginBottom: "5px",
        '&:focus': {
          boxShadow: 'none',
          borderColor: "primary.light",
        },
      },
})

export const StyledInput1 = styled(InputBase)({
    '& .MuiInputBase-input': {
        width: "304px",
        height: "30px",
        borderRadius: 2.5,
        backgroundColor: '#fff',
        border: '1px solid #e5e5e5',
        fontSize: 14,
        lineHeight: "30px",
        textIndent: 10,
        marginBottom: "5px",
        '&:focus': {
          boxShadow: 'none',
          borderColor: "primary.light",
        },
      },
})

export const StyledBreadcrumbs = styled(Breadcrumbs)({
    margin: "0px 6vw",
    height: "70px",
    display: "flex",
    alignItems: "center"
})

export const StyledLink = styled(Link)({
    color: "grey",
    textDecorationLine: "none",
    '&:hover': {
        textDecorationLine: "underline"
    }
})