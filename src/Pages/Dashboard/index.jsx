import React, { useState } from 'react';
import {
    Box
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import LockResetIcon from '@mui/icons-material/LockReset';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CallIcon from '@mui/icons-material/Call';
import RecommendIcon from '@mui/icons-material/Recommend';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { HeadTypography, HeadTypography1, HeadWrapper, SideBarBox, SideBarButton, WrapperDashboard } from './styles';
import User from "../../assets/images/cpProfile.png"
import { PrimaryButton } from "../../Components/Utilities/StyledComponents";
import EditProfile from './components/EditProfile';
import EditPassword from './components/EditPassword';
import RecentSearches from './components/RecentSearches';
import RecentlyViewed from './components/RecentlyViewed';
import RecentlyContacted from './components/RecentContacted';
import Shortlisted from './components/Shortlisted';
import Recommended from './components/Recommended';

const getFullName = (dat) => {
    switch(dat){
        case 0: return "Profile" ;
        case 1: return "Change Password" ;
        case 2: return "Recent Searches" ;
        case 3: return "Recently Viewed" ;
        case 4: return "Shortlisted Property";
        case 5: return "Contacted Property" ;
        case 6: return "Recommended Property" ;
        default: return dat;
    }

}

const Dashboard = () => {
   
    const signout = () => {
        
    }

    const [currPage,setCurrPage] = useState(0);
    return(
        <WrapperDashboard>
            <SideBarBox>
                <Box sx={{mt: 2}}>
                    <img src={User} alt="profile" width={112} height={120} />
                </Box> 
                <Box sx={{width: '84%',mt: 5}}>
                    <HeadTypography>Update Profile <KeyboardArrowDownIcon /></HeadTypography>
                    <SideBarButton onClick={()=>setCurrPage(0)} startIcon={<PersonIcon />}>Profile</SideBarButton>
                    <SideBarButton onClick={()=>setCurrPage(1)} startIcon={<LockResetIcon />}>Change Password</SideBarButton>
                </Box>  
                <Box sx={{width: '84%',mt: 4}}>
                    <HeadTypography>My Activity <KeyboardArrowDownIcon /></HeadTypography>
                    <SideBarButton onClick={()=>setCurrPage(2)} startIcon={<YoutubeSearchedForIcon />}>Recent Searches</SideBarButton>
                    <SideBarButton onClick={()=>setCurrPage(3)} startIcon={<VisibilityOutlinedIcon />}>Recently Viewed</SideBarButton>
                    <SideBarButton onClick={()=>setCurrPage(4)} startIcon={<FavoriteBorderOutlinedIcon />}>Shortlisted Property</SideBarButton>
                    <SideBarButton onClick={()=>setCurrPage(5)} startIcon={<CallIcon />}>Contacted Property</SideBarButton>
                    <SideBarButton onClick={()=>setCurrPage(6)} startIcon={<RecommendIcon />}>Recommended Property</SideBarButton>
                </Box>                 
                <Box>
                    <PrimaryButton sx={{height: "30px",mt: '10vh',fontSize: "16px"}} onClick={signout}>Logout</PrimaryButton>
                </Box>
            </SideBarBox>
            <Box sx={{width: "82%"}}>
                <HeadWrapper>
                    <HeadTypography1>{getFullName(currPage)}</HeadTypography1>
                </HeadWrapper>
                <Box>
                    {
                        currPage === 0 ? <EditProfile /> :
                        currPage === 1 ? <EditPassword /> :
                        currPage === 2 ? <RecentSearches /> : 
                        currPage === 3 ? <RecentlyViewed /> :
                        currPage === 4 ? <Shortlisted /> :
                        currPage === 5 ? <RecentlyContacted /> : 
                        currPage === 6 ? <Recommended /> : ""
                    }
                </Box>
            </Box>
        </WrapperDashboard>
    )
}

export default Dashboard;