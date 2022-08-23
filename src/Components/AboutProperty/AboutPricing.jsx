import React, {useCallback, useEffect, useState} from "react";
import {
    Box,
    Paper,
    Grid,
    Typography,
    Modal
} from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import theme from "../../styles/theme"
import { styled } from "@mui/system";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { duration } from "moment";
import Axios from "axios";
import ImageViewer from "../../Components/ImageViewer/ImageViewer";



const StyledPaper = styled(Paper)({
    border: '2px solid #e5e5e5',
    borderRadius: "10px",
    width: "150px",
    height: "75px",
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "400",
    textAlign: "center",
    marginRight: "22px"
})

const FloorCard = styled(Paper)({
    width: "218px",
    height: "280px",
    border: "1px solid #e5e5e5",
    borderRadius: "15px",
    marginRight: "30px"
})

const FloorPlanBox = styled(Box)({

})

const StyledTypo = styled(Typography)({
    fontSize: "11px",
    fontWeight: "400",
    lineHeight: "13px",
    color: "#fff",
    textAlign: "center"
})
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 470,
    bgcolor: 'background.paper',
    border: '7px solid #e5e5e5',
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
    position: 'relative',
  };

const AboutPricing = ({data,expand}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [floors,setFloors] = useState([]);
    const [floorType,setFloorType] = useState([]);
    console.log(data);
    const [apartment,setApartment] = useState("1bhk");
    const [openImages, setOpenImages] = React.useState(false);
    const [currentImg,setCurrentImg] = useState(0);
    const getFloorPlans = useCallback(async(floors)=>{
        let fl = [];
        let ft = [];
        let fi = [];
        for(let i in floors){
        await Axios(`/project/floorplan/${floors[i]}`).then((res)=>{
            console.log(res)
            fl.push(res.data)
            ft.push(res.data.floortype)
            fi.push(res.data.floorimage.secure_url);
            setApartment(res.data.floortype)
        }).catch((err)=>{
            console.log(err);
        })
        setFloors(fl)
        ft.filter((v,i,ar)=>{
            return i == ar.indexOf(v);
        })
        console.log(ft);
        window.localStorage.setItem('floor_Plan_Imgs',JSON.stringify(fi));
        setFloorType(ft);
    }
    },[])
    useEffect(()=>{
       data && getFloorPlans(data.floorplan)
    },[apartment,data])
    useEffect(()=>{
        console.log(floors)
    },[floors,floorType]);

    return data ? (
        <Box sx={{display: expand ? "block" : "none"}}>
            <Box sx={{display: "flex",mb: 4}}>
                {
                    floorType.length>0 && floorType.map((val,i)=>{
                        return(
                            <StyledPaper elevation={3} sx={apartment===val && {border: `2px solid ${theme.palette.primary.light}`}} onClick={()=>setApartment(val)} >{val}<br/>Apartment</StyledPaper>
                        )
                    })
                }
            </Box>
            <Box sx={{display: 'flex',justifyContent: "start",my: 5,minHeight: "300px"}}>
                {
                    floors.length>0 && floors.map((val,i)=>{
                        return apartment === val.floortype ? (
                        <FloorCard>
                            <Box sx={{height: "171px",display: "flex",justifyContent: "center",alignItems: "center",backgroundImage: `url(${val.floorimage.secure_url})`,backgroundAttachment: "cover",backgroundPosition: "cover",backgroundSize: "contain",backgroundRepeat: "no-repeat"}}>
                                <FavoriteIcon sx={{position: "relative",top: "-65px",right: "-150px",backgroundColor: "red",borderRadius: "50%",padding: "3px",fontSize: "14px",color: "#fff"}} />
                                <Typography  onClick={()=>{
                                    // handleOpen()
                                    setCurrentImg(data.externalimages.length + data.internalimages.length + data.amenitiesimages.length + data.othersimages.length);
                                    setOpenImages(true)
                                }}>View Floor Plan</Typography>
                            </Box>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <CancelOutlinedIcon onClick={handleClose} sx={{position: "absolute",right: "10px",top: "10px"}} />
                                    <img src={val.floorimage.secure_url} alt="floor plan" width={500} height={470} />
                                </Box>
                            </Modal>
                            <Grid container sx={{height: "49px",width: "100%",background: "rgba(88, 89, 91, 0.75)",alignItems: "center"}}>
                                <Grid item xs={12}>
                                    <StyledTypo>{val.floortype} Apartment</StyledTypo>
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTypo>Space: {val.carpetarea} sqft</StyledTypo>
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTypo>Price: Rs {val.pricepersqft}/sqft</StyledTypo>
                                </Grid>
                            </Grid>
                            <Box sx={{height: "60px",display: "flex",alignItems: "center",justifyContent: "center"}}>
                                <Typography>Rs {val.totalprice}</Typography>
                            </Box>
                        </FloorCard>
                        ) : <></>
                    })
                }
                
            </Box>
            <ImageViewer data={data? data : ''} open={openImages} setOpen={setOpenImages} currentImg={currentImg} />
        </Box>
    ) : <></>
}

export default AboutPricing;