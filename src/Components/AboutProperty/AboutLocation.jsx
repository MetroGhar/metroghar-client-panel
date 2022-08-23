import React,{useEffect, useState} from "react";
import {
    Paper,
    Divider,
    Box,
    Typography,
    Grid,
    styled,
    Button
} from "@mui/material";
// import Home from '../../assets/images/Home.png'
// import Hospital from '../../assets/images/hospital.png'
// import Park from '../../assets/images/park.png'
// import Axios from 'axios';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
// import Home from "../../assets/images/home_.png"
// import Park from "../../assets/images/park_.png";
// import Hospital from "../../assets/images/hospital_.png";
// import Restaurent from "../../assets/images/restaurent.png";
// import Bank from "../../assets/images/bank.png";

const ss = [   
  {
    "featureType": "all",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  // {
  //   "featureType": "road.local",
  //   "elementType": "geometry",
  //   "stylers": [
  //     {
  //       // "color": "99FF33"
  //     },
  //   ]
  // },
  // {
  //   "featureType": "road.local",
  //   "elementType": "labels.text",
  //   "stylers": [
  //     {
  //       "visibility": "off"
  //     }
  //   ]
  // },
  {
    "featureType": "road.highway",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  // {
  //   "featureType": "landscape",
  //   "elementType": "labels",
  //   "stylers": [
  //     {
  //       "visibility": "off"
  //     }
  //   ]
  // },
  // {
  //   "featureType": "transit",
  //   "elementType": "labels",
  //   "stylers": [
  //     {
  //       "visibility": "off"
  //     }
  //   ]
  // },
  // // {
  // //   "featureType": "road.highway",
  // //   "elementType": "labels.text",
  // //   "stylers": [
  // //     {
  // //       "visibility": "off"
  // //     }
  // //   ]
  // // },

  {
    "featureType": "administrative.province",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  }, 
  {
    "featureType": "administrative.country",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "on"
      },
    ]
  }, 
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text",
    "stylers": [
      {

      },
    ]
  },
    {
    "featureType": "poi.park",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }, 
  // {
  //   "featureType": "administrative.neighborhood",
  //   "elementType": "labels",
  //   "stylers": [
  //     {
  //       "visibility": "off"
  //     }
  //   ]
  // }, 
  // {
  //   "featureType": "administrative.province",
  //   "elementType": "labels",
  //   "stylers": [
  //     {
  //       "visibility": "off"
  //     }
  //   ]
  // }, 
  
];

const MyMapComponent = withScriptjs(withGoogleMap((props) =>{
  function haversine_distance(latt,lngg) {
    var R = 6371.0710; // Radius of the Earth in miles
    var rlat1 = props.Lat * (Math.PI/180); // Convert degrees to radians
    var rlat2 = latt * (Math.PI/180); // Convert degrees to radians
    var difflat = rlat2-rlat1; // Radian difference (latitudes)
    var difflon = (lngg - props.Lng) * (Math.PI/180); // Radian difference (longitudes)

    var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
    // console.log(d,"sfbh")
    return d;
  }
  return (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: props.Lat, lng: props.Lng }}
    defaultOptions={{
      disableDefaultUI: true,
      draggable: true,
      keyboardShortcuts: false,
      // scaleControl: true,
      // scrollwheel: true,
      styles: ss}}
  >
    {props.isMarkerShown && <Marker zIndex={10}   position={{ lat: props.Lat, lng: props.Lng }} />}
    {
      props.markerData && props.markerData.length>0 && props.markerData.map((val,i)=>{
       // console.log(val.name,haversine_distance(val.geometry.location.lat(), val.geometry.location.lng()))
        let dist = haversine_distance(val.geometry.location.lat(), val.geometry.location.lng());
        return(
          <>
          <Marker
           key={i}
           icon={{
            url: val.icon,
            // url: place==='park'? Park : place=="hospital"? Hospital : place== 'bank' ? Bank : place=='restaurant' ? Restaurent : val.icon,
            scaledSize: new window.google.maps.Size(20, 20),
           }}
           title={`${val.name} - ${dist.toFixed(2)} km`}
          //  label={val.name}
           position={{lat: val.geometry.location.lat(),lng: val.geometry.location.lng()}}
           style={{width: "10px"}}
           />
            {/* <InfoWindow
              onLoad={onLoad}
              position={{lat: val.geometry.location.lat(),lng: val.geometry.location.lng()}}
            >
              <div style={divStyle}>
                
              </div>
            </InfoWindow> */}
        </>
        )
      })
    }


  </GoogleMap>)}
))



const GridContainer = styled(Grid)({
    padding: '44px 71px',
})

const GridBox = styled(Box)({
    border: "2px solid #1ADDFF",
    borderRadius: "10px",
    display: 'flex',
    width: "183px",
    height: "58px"

})
const images = {
    Bank: 'https://firebasestorage.googleapis.com/v0/b/metroghar-5208e-test.appspot.com/o/images%2Ffeatures%2FBank.jpg?alt=media&token=6b3e3a03-aaae-4b86-ae6b-25353ea8a70d',
    Hospital: 'https://firebasestorage.googleapis.com/v0/b/metroghar-5208e-test.appspot.com/o/images%2Ffeatures%2FBank.jpg?alt=media&token=6b3e3a03-aaae-4b86-ae6b-25353ea8a70d',
    National_Highway: 'https://firebasestorage.googleapis.com/v0/b/metroghar-5208e-test.appspot.com/o/images%2Ffeatures%2FNaitional%20Highway.jpg?alt=media&token=7d5d39c7-81f9-4573-8b54-d13ca18d1012',
    School: 'https://firebasestorage.googleapis.com/v0/b/metroghar-5208e-test.appspot.com/o/images%2Ffeatures%2FSchool.jpg?alt=media&token=9af6b204-813f-4329-a9f2-058d590a4680',
    College: 'https://firebasestorage.googleapis.com/v0/b/metroghar-5208e-test.appspot.com/o/images%2Ffeatures%2FCollege.jpg?alt=media&token=b06020d2-12de-4839-8af9-10668f26453d',
    Park: 'https://firebasestorage.googleapis.com/v0/b/metroghar-5208e-test.appspot.com/o/images%2Ffeatures%2FPark.jpg?alt=media&token=3fa1c5f3-98c1-4435-b3c0-e5ba3110eb89',
    Temple: 'https://firebasestorage.googleapis.com/v0/b/metroghar-5208e-test.appspot.com/o/images%2Ffeatures%2FTemple.jpg?alt=media&token=fcfbe53f-a644-4f9c-a279-e9b0dc3d6fc3',
    Metro_Station: 'https://firebasestorage.googleapis.com/v0/b/metroghar-5208e-test.appspot.com/o/images%2Ffeatures%2FMetro%20station.jpg?alt=media&token=e7a2961c-8744-472a-9d38-9bf1fe4abece',
    Railway_Station: 'https://firebasestorage.googleapis.com/v0/b/metroghar-5208e-test.appspot.com/o/images%2Ffeatures%2FRailway%20Station.jpg?alt=media&token=9866356d-5819-4561-8485-bb64bd5fd0bd',
    Ground: 'https://firebasestorage.googleapis.com/v0/b/metroghar-5208e-test.appspot.com/o/images%2Ffeatures%2FNaitional%20Highway.jpg?alt=media&token=7d5d39c7-81f9-4573-8b54-d13ca18d1012',
    Company: 'https://firebasestorage.googleapis.com/v0/b/metroghar-5208e-test.appspot.com/o/images%2Ffeatures%2FNaitional%20Highway.jpg?alt=media&token=7d5d39c7-81f9-4573-8b54-d13ca18d1012',
    ATM: 'https://firebasestorage.googleapis.com/v0/b/metroghar-5208e-test.appspot.com/o/images%2Ffeatures%2FATM.jpg?alt=media&token=d2061643-0e4e-4416-ac74-6c4146715d6d',
    Mall: 'https://firebasestorage.googleapis.com/v0/b/metroghar-5208e-test.appspot.com/o/images%2Ffeatures%2FMart.jpg?alt=media&token=8c4b686b-a120-4611-a559-599fe4d7e27d',
    Airport: 'https://firebasestorage.googleapis.com/v0/b/metroghar-5208e-test.appspot.com/o/images%2Ffeatures%2FNaitional%20Highway.jpg?alt=media&token=7d5d39c7-81f9-4573-8b54-d13ca18d1012',
    Lake: 'https://firebasestorage.googleapis.com/v0/b/metroghar-5208e-test.appspot.com/o/images%2Ffeatures%2FNaitional%20Highway.jpg?alt=media&token=7d5d39c7-81f9-4573-8b54-d13ca18d1012',
    Bus_Stand: 'https://firebasestorage.googleapis.com/v0/b/metroghar-5208e-test.appspot.com/o/images%2Ffeatures%2FNaitional%20Highway.jpg?alt=media&token=7d5d39c7-81f9-4573-8b54-d13ca18d1012',
    Petrol_Pump: 'https://firebasestorage.googleapis.com/v0/b/metroghar-5208e-test.appspot.com/o/images%2Ffeatures%2FNaitional%20Highway.jpg?alt=media&token=7d5d39c7-81f9-4573-8b54-d13ca18d1012',

}

 const featureOptions=[
   
  {
    value:"Ground",
    name: "Ground"
  },
  {
    value:"Company",
    name: "Company"
  },
  {
    value:"Mall",
    name: "Mall",
    img:''
  },
  
  {
    value:"Airport",
    name: "Airport"
  },
  {
    value:"Lake",
    name: "Lake"
  },
  {
    value:"Bus_Stand",
    name: "Bus Stand"
  },
  {
    value:"Petrol_Pump",
    name: "Petrol Pump"
  },
  {
    value:"ATM",
    name: "ATM",
    img:'https://firebasestorage.googleapis.com/v0/b/metroghar-5208e-test.appspot.com/o/images%2Ffeatures%2FATM.jpg?alt=media&token=d2061643-0e4e-4416-ac74-6c4146715d6d'
  }
  
  
  ]


const AboutLocation = ({lat, lng, expand}) => {
  const apiKey="AIzaSyBwDsuvGuJLVODO-lwEBmSeZyb8VsRDUiM";
  // const key='AIzaSyCPJ10SOVXGlrVsdru1ajSJ5_wqIbD6G2s';
  const key='AIzaSyDw9TWvIDJ5VBc0okmmbfmTBAWeB2GgiaY';
  // var config = {
  //   method: 'get',
  //   url: `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=${key}`,
  //   headers: { }
  // };

  const [place,setPlace] = useState('park');
  const [markerData,setMarkerData] = useState([]);



  useEffect(()=>{
    // console.log(google)
    initialize();
    console.log(window.location.hostname);
  //   Axios(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=21.81630338504989%2C80.1845787138697&radius=2000&type=${place}&key=AIzaSyCPJ10SOVXGlrVsdru1ajSJ5_wqIbD6G2s`)
  // .then( (response)=> {
  //   console.log(response)
  //   console.log(JSON.stringify(response.data));
  // })
  // .catch( (error)=> {
  //   console.log(error);
  // });
  },[place]);
  

  var map;
var service;
var infowindow;

async function initialize() {
  const google  = window.google;
  console.log(google);
  var pyrmont = new  window.google.maps.LatLng(parseFloat(lat),parseFloat(lng));
  map = new  window.google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 12,
    });
  var request = {
    location: pyrmont,
    radius: '1500',
    type: place
  };

  service = new window.google.maps.places.PlacesService(map);
  console.log(service)
  service.nearbySearch(request, (results,status)=>{
    console.log(request,results,status)
    if(status === 'OK' && results)
      setMarkerData(results)
  });
}

// function callback(results, status) {
//   if (status == google.places.PlacesServiceStatus.OK) {
//     console.log(results);
//     // for (var i = 0; i < results.length; i++) {
//     //   // createMarker(results[i]);
      
//     // }
//   }
// }
  
  
    console.log(parseFloat(21.81630338504989),"21.81630338504989");
    return(
        <Box mb={5} sx={{display: expand ? "block" : "none"}}>
            <Paper sx={{padding: "20px 15px",border: "1px solid #e5e5e5"}} elevation={3}>
                <Typography sx={{fontSize: "22px"}}>Explore Locality</Typography>
                <Divider sx={{my: 2}} />
                <div id="map"></div>
                <MyMapComponent 
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCPJ10SOVXGlrVsdru1ajSJ5_wqIbD6G2s&v=3.exp&libraries=geometry,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                // Lat={21.81630338504989}
                // Lng={80.1845787138697}
                markerData={markerData}
                place={place}
                Lng={parseFloat(lng)}
                Lat={parseFloat(lat)}
                 />
                {/* <MyMapComponent isMarkerShown={false} /> */}
                <GridContainer container columnSpacing={3} rowSpacing={4}>
                    <Grid item xs={2}>
                       <Button variant="outlined" onClick={()=>setPlace('park')}>Park</Button>
                    </Grid>
                    <Grid item xs={2}>
                       <Button variant="outlined" onClick={()=>setPlace('bank')}>Bank</Button>
                    </Grid>
                    <Grid item xs={2}>
                       <Button variant="outlined"  onClick={()=>setPlace('school')}>School</Button>
                    </Grid>
                    <Grid item xs={2}>
                       <Button variant="outlined" onClick={()=>setPlace('hospital')}>Hospital</Button>
                    </Grid>
                    <Grid item xs={2}>
                       <Button variant="outlined" onClick={()=>setPlace('restaurant')}>Restaurant</Button>
                    </Grid>

                    {/* {
                        data && data.length>0 && data.map((val,i)=>{
                            return(
                            <Grid item xs={3}>
                                <GridBox>
                                    <img  src={images[val.feature]} alt="home" style={{borderRadius:"10px 0 0 10px",width: "70px"}} />
                                    <Box sx={{p: 1,minHeight: "48px",maxHeight: "48px",overflowY: "hidden",'&:hover': {overflowY: 'scroll'}}}>
                                        <Typography sx={{fontSize :"13px",lineHeight: "14px"}}>{val.featureName}</Typography>
                                        <Typography sx={{fontSize: "10px",lineHeight: "12px"}}>{val.featureDistance} km</Typography>
                                    </Box>
                                </GridBox>
                            </Grid>
                            )
                        })
                    }                    */}

                </GridContainer>
            </Paper>
        </Box>
    )
}

export default AboutLocation;