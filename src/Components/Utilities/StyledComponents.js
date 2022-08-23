import { 
    InputBase, 
    InputLabel,
    Button,
    styled 
} from "@mui/material";
import theme from "../../styles/theme";
import { Link } from "react-router-dom"

export const StyledInput = styled(InputBase)({
    '& .MuiInputBase-input': {
        width: "350px",
        height: "25px",
        borderRadius: 4,
        backgroundColor: '#fff',
        border: '1px solid #ced4da',
        fontSize: 16,
        textIndent: 10,
        marginBottom: "5px",
        '&:focus': {
          boxShadow: 'none',
          borderColor: "primary.light",
        },
      },
})


export const StyledLabel = styled(InputLabel)({
    color: "#000",
    margin: "5px 0"
})
export const StyledLabel1 = styled(InputLabel)({
    color: "#000",
    margin: "5px 0",
    width: "350px",
})

export const PrimaryButton = styled(Button)({
    background: theme.palette.primary.main,
    color: "#000",
    padding: "5px 40px",
    fontSize: "20px",
    textTransform: "none",
    margin: "10px 0",
    borderRadius: "10px",
    border: "1px solid rgba(0, 0, 0, 0.25)",
    '&:hover': {
        background: theme.palette.primary.main
    }
})

export const StyledLink = styled(Link)({
    color: theme.palette.primary.main,
    textDecoration: "none",
    fontSize: "1.2rem",
    '&:hover': {
        color: theme.palette.primary.light
    }
})