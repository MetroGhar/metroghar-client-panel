import React, {useState, useEffect } from "react";
import "./style.css"
import { 
    Box,
    InputBase,
    Divider,
    Menu
} from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import cardImg1 from "../../assets/images/landingCard1.jpg"
import cardImg2 from "../../assets/images/landingCard2.jpg"
// import cardImg3 from "../../assets/images/landingCard3.jpg"
import cardImg4 from "../../assets/images/landingCard4.jpg"
import { useNavigate } from "react-router-dom";
import { LandingSearchBoxWrapper,
        LandingTypo,
        LandingWrapper,
        LocationButton,
        SearchBox,
        StyledMenuItem
} from "./styles.js"
import Trending from "./components/Trending";
import Localities from "./components/Localities";
import Choice from "./components/Choice";
import Cities from "./components/Cities";
import Exclusive from "./components/Exclusive";

const cardsData = [
    {
        image: cardImg1,
        head: "Understand Your Need",
        content: "We will understand your requirements in detail to find a home that suits you best!"
    },
    {
        image: cardImg2,
        head: "Various option To Select",
        content: "We will understand your requirements in detail to find a home that suits you best!"
    },
    {
        image: cardImg2,
        head: "Shortlist your Preferences",
        content: "Based on your personal needs, we will help you shortlist applicable projects!"
    },
    {
        image: cardImg4,
        head: "Conduct Site Visit",
        content: "Once you select a property, we negotiate with the builder to get you the best bargain!"
    },
    {
        image: cardImg1,
        head: "Negotoable Price",
        content: "We also help you identify the home loan scheme that best suits your needs!"
    },
    {
        image: cardImg2,
        head: "Lock The  Deal",
        content: "  We help with all the legalities and documentation so you can rest easy!"
    }
]


const Home = () => {

    const [location,setLocation] = useState('');
    const [locality,setLocality] = useState('');
    const [search,setSearch] = useState('');
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    useEffect(() => {
        window.sessionStorage.setItem("filter Values",JSON.stringify({
            location: location,
            locality: '',
            minPrice: 0,
            maxPrice: 100000000,            
            price: [0,100000000],
            propertyType: '',
            spaceType: '',
            postedBy: '',
            status: '',
            minArea: 200,
            maxArea: 5000,
            area: [200,5000],
            raraProperty: '',
            raraNumber: '',
            search: search
        }))
      })
    
      useEffect(() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            event.preventDefault();
            navigate("/search")
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
      }, []);

      const handleClose = (e) => {
        setLocation(e.target.innerText);
        setLocality("")
        setAnchorEl(null);
    };

    const capitalize = (str) =>{ return str.charAt(0).toUpperCase() + str.slice(1)}
    return(
    <>
        <div style={{
            zIndex: 1000,
            marginLeft: "200px",
            display: 'none',
        }}>
            <div>
                <img src={cardImg1} className="cardImg" />
            </div>
            <div className="secondBox">
                <div style={{
                    display:'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <p className="head">Aman Villa</p>
                    <p className="price">3.41 Cr</p>
                </div>
                <p className="location">Banner Pune</p>
                <div className="subbb">
                    <p>3 BHK Appartment</p>
                    <p>Biometric Entry</p>
                    <p>4500 Sq.ft</p>
                    <p>24 x 7 Security</p>
                    <p>4500 Sq.ft</p>
                    <p>24 x 7 Security</p>
                </div>
            </div>
        </div>
        <LandingWrapper>
            <LandingSearchBoxWrapper>
                <LandingTypo variant="h5">Home Buying Is Now Hassle-Free With Us!</LandingTypo>
                <SearchBox>
                    <LocationButton 
                     aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}>{location ? capitalize(location) :"Location"}</LocationButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}                       
                        disableScrollLock={true}
                        sx={{height: "200px",position: "absolute"}}
                        >
                        {/* <MenuItem onClick={handleClose}>Dashboard</MenuItem> */}
                        <StyledMenuItem onClick={handleClose}>Bangalore</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose}>Bhopal</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose}>Mumbai</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose}>Delhi</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose}>Lucknow</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose}>Hyderabad</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose}>Pune</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose}>Chennai</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose}>Gurgaon</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose}>Noida</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose}>Kolkata</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose}>Ahmedabad</StyledMenuItem>
                        <StyledMenuItem onClick={handleClose}>Thane</StyledMenuItem>
                    </Menu>
                    <Divider sx={{ height: 60, mr: 2 }} orientation="vertical" />
                    <InputBase 
                        id="searchInput" 
                        sx={{flex: 1}} 
                        placeholder="Search here by locality, project, developer..."
                        value={search} 
                        disabled={!location}
                        onChange={(e)=>setSearch(e.target.value)}  />
                </SearchBox>
            </LandingSearchBoxWrapper>            
        </LandingWrapper>
        <Box sx={{p: "40px 7vw"}}>
            <Trending head="Trending Projects" />
            <Localities />
            <Exclusive />
            <Choice />
            <Trending head="Recomended Projects" />
            <Trending head="Recomended Properties" />
            <Cities />

            {/* <LandingTypo variant="h5" sx={{textAlign: 'center',mb: 5}}>Why With Us?</LandingTypo>
            <Grid container columnSpacing="110px" rowSpacing="110px">
                {
                    cardsData.map((val,i)=>{
                        return(
                        <Grid item xs={4} key={i+1}>
                            <Card sx={{minWidth: 270,maxWidth: 270,minHeight: 300,border: "1px solid #e5e5e5"}}>
                                <CardMedia
                                    component="img"
                                    height="160"
                                    image={val.image}
                                    alt={`cardImg-${i+1}`}
                                 />
                                <CardContent>
                                    <Typography align="center" sx={{color: "primary.main",mb: 1}}>{val.head}</Typography>
                                    <Typography variant="body2" align="center">{val.content}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        )
                    })
                }
            </Grid> */}
        </Box>
    </>
    )
}

export default Home;