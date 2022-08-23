import React, { useCallback, useEffect, useState } from "react";
import { 
    Box,
    Typography,
    MenuItem,
    Button,
    Slider,
    Grid,
    styled,
    FormControl,
    // Select,
    InputBase,
    Pagination 
} from "@mui/material"
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PropertyCard from "../../Components/PropertyCard";
import InputLabel from '@mui/material/InputLabel';
import { alpha } from '@mui/material/styles';
import Select from 'react-select'
import {
    LandingWrapper,
    // StyledInput,
    StyledInput1,
    PropListingBox,
    // StyledLabel,
    FilterBox,
    StyledTypography,
    StyledBreadcrumbs,
    StyledLink
} from "./styles.js"
import KLC from "../../Components/Utilities/KLC";
import Axios from "axios";
import { RevolvingDot } from 'react-loader-spinner';


const marks = [
    // {
    //   value: 500000,
    //   label: KLC(500000),
    // },
    // {
    //   value: 250000000,
    //   label: KLC(250000000),
    // },
    // {
    //   value: 500000000,
    //   label: KLC(500000000),
    // },    
    // {
    //   value: 750000000,
    //   label: KLC(750000000),
    // },
    // {
    //   value: 1000000000,
    //   label: KLC(1000000000),
    // },
  ];

  const areaMarks = [
    // {
    //   value: 200,
    //   label: '200 sqft',
    // },
    // {
    //   value: 2500,
    //   label: '2500 sqft',
    // },
    // {
    //   value: 5000,
    //   label: '5000 sqft',
    // },
  ];

  const StyledInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: 20,
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #C4C4C4',
      fontSize: 16,
      width: '100%',
      padding: '5px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.15)} 0 0 0 0.15rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

const StyledLabel = styled(InputLabel)(()=>({
    fontSize: 20,
    color: "#000",
}))

const locationOptions = [
    {value: 'Bangalore', label: 'Bangalore'},
    {value: 'Bhopal', label: 'Bhopal'},
];

const maxBudgetOptions = [
    {value: 5000000, label: KLC(5000000)},
    {value: 10000000, label: KLC(10000000)},
    {value: 20000000, label: KLC(20000000)},
    {value: 30000000, label: KLC(30000000)},
    {value: 40000000, label: KLC(40000000)},
    {value: 50000000, label: KLC(50000000)},
    {value: 60000000, label: KLC(60000000)},
    {value: 70000000, label: KLC(70000000)},
    {value: 80000000, label: KLC(80000000)},
    {value: 90000000, label: KLC(90000000)},
    {value: 100000000, label: KLC(100000000)},
];

const minBudgetOptions = [    
    {value: 0, label: KLC(0)},
    {value: 5000000, label: KLC(5000000)},
    {value: 10000000, label: KLC(10000000)},
    {value: 20000000, label: KLC(20000000)},
    {value: 30000000, label: KLC(30000000)},
    {value: 40000000, label: KLC(40000000)},
    {value: 50000000, label: KLC(50000000)},
    {value: 60000000, label: KLC(60000000)},
    {value: 70000000, label: KLC(70000000)},
    {value: 80000000, label: KLC(80000000)},
    {value: 90000000, label: KLC(90000000)},
];

const propertyTypeOptions = [
    {value: 'apartment',label: 'Apartment'},
    {value: 'villa',label: 'Villa'},
    {value: 'flat',label: 'Flat'},
    {value: 'house',label: 'House'},
];

const possessionStatusOptions = [
    {value: 'Ready To Move', label: 'Ready To Move'},
    {value: 'Under Construction', label: 'Under Construction'},
    {value: 'Upcoming Project', label: 'Upcoming Project'},
]

const configurationOptions = [
    {value: '1bhk', label: '1 BHK'},
    {value: '2bhk', label: '2 BHK'},
    {value: '3bhk', label: '3 BHK'},
    {value: '4bhk', label: '4 BHK'},
    {value: '5bhk', label: '5 BHK'},
    {value: '6bhk', label: '6 BHK'},
    {value: '7bhk', label: '7 BHK'},
]

const minAreaOptions = [
    {label: '200 sqft',value: 200},
    {label: '500 sqft',value: 500},
    {label: '1000 sqft',value: 1000},
    {label: '2000 sqft',value: 2000},
    {label: '3000 sqft',value: 3000},
    {label: '4000 sqft',value: 4000},
]

const maxAreaOptions = [
    {label: '500 sqft',value: 500},
    {label: '1000 sqft',value: 1000},
    {label: '2000 sqft',value: 2000},
    {label: '3000 sqft',value: 3000},
    {label: '4000 sqft',value: 4000},
    {label: '5000 sqft',value: 5000},
]
const style = {
    width: '100%',
    height: 100,
    bgcolor: 'background.paper',
    borderRadius: "5px",
    boxShadow: 24,
    display: 'flex',
    justifyContent: 'center',
    p: 4,
  };

const FilterPage = () => {
    const [allProperties, setallProperties] = useState([]);
    const [filteredData,setFilteredData] = useState([]);
    const [page,setPage] = useState(1);
    const [sort,setSort] = useState(1);
    const [loader,setLoader] = useState(false);
    const filterValuesData = window.sessionStorage.getItem("filter Values")
    const prevFilter =JSON.parse(filterValuesData)
    const [filters,setFilters] =  useState({
        location: prevFilter.location,
        locality: prevFilter.locality,
        price: prevFilter.price,
        propertyType: prevFilter.propertyType,
        spaceType: prevFilter.spaceType,
        postedBy: prevFilter.postedBy,
        status: prevFilter.status,
        area: prevFilter.area,
        raraProperty: prevFilter.raraProperty,
        raraNumber: prevFilter.raraNumber,
        search: prevFilter.search,
        sort: sort,
        page: page
    });
    const [placeHolder,setPlaceHolder] = useState({
        location: {label: '',value: ''},
        locality: '',
        minPrice: {label: '',value: ''},
        maxPrice: {label: '',value: ''},
        propertyType: {label: '',value: ''},
        spaceType: {label: '',value: ''},
        postedBy: {label: '',value: ''},
        status: {label: '',value: ''},
        area: {label: '',value: ''},
        raraProperty: {label: '',value: ''},
        raraNumber: '',
        search: ''
    }) 
  
    const [totalCount,setTotalCount] = useState(0);
    const [data,setData] = useState([]);

    const getProperties = useCallback(async(queryParams,minP=0, maxP= 100000000,minA=200, maxA= 5000)=>{
        Axios.get(`/projects?projectminprice[gte]=${minP}&projectmaxprice[lte]=${maxP}&projectminspace[gte]=${minA}&projectmaxspace[lte]=${maxA}`,{
           params:  queryParams
        }).then(async(res)=>{
            console.log(res,queryParams);
            
            await setData(res.data.projects);
            await setTotalCount(res.data.filteredProjectNumber);
            setLoader(false)
        }).catch(err=>{
            console.log(err);
            setData([]);
            setTotalCount(0);
            setLoader(false)
        })
    },[])

    useEffect( () => {
        setLoader(true)
        const filterValuesData = window.sessionStorage.getItem("filter Values")
        const prevFilter =JSON.parse(filterValuesData)
        // setFilters({
        //     location: prevFilter.location,
        //     locality: prevFilter.locality,
        //     price: prevFilter.price,
        //     propertyType: prevFilter.propertyType,
        //     spaceType: prevFilter.spaceType,
        //     postedBy: prevFilter.postedBy,
        //     status: prevFilter.status,
        //     area: prevFilter.area,
        //     raraProperty: prevFilter.raraProperty,
        //     raraNumber: prevFilter.raraNumber,
        //     search: prevFilter.search,
        //     sort: sort,
        //     page: page
        // })

        setPlaceHolder({
            location: {label: capitalize(prevFilter.location),value: prevFilter.location},
            locality: capitalize(prevFilter.locality),
            minPrice: {label: KLC(prevFilter.price[0]),value: prevFilter.price[0]},
            maxPrice: {label: KLC(prevFilter.price[1]),value: prevFilter.price[1]},
            propertyType: {label: capitalize(prevFilter.propertyType),value: prevFilter.propertyType},
            spaceType: {label: capitalize(prevFilter.spaceType),value: prevFilter.spaceType},
            postedBy: {label: capitalize(prevFilter.postedBy),value: prevFilter.postedBy},
            status: {label: capitalize(prevFilter.status),value: prevFilter.status},
            minArea: {label: `${prevFilter.area[0]} sqft`,value: prevFilter.area[0]},
            maxArea: {label: `${prevFilter.area[1]} sqft`,value: prevFilter.area[1]},
            raraProperty: {label: capitalize(prevFilter.raraProperty),value: prevFilter.raraProperty},
            raraNumber: prevFilter.raraNumber,
            search: prevFilter.search
        })
        
        console.log(prevFilter);
        let queryParams = {
            projectlocation: prevFilter.location,
            search: prevFilter.search,
            page: page,
            sort: sort
        }
        getProperties(queryParams);     
       }, [])

       useEffect(()=>{
        setLoader(true)
        let queryParams = {
            page: page,
            sort: sort,
            projectlocation: filters.location,
            search: filters.search,
            projectlocality: filters.locality,
            // projectminprice: filters.price[0],
            // projectmaxprice: filters.price[1],
            // minprice[gte]: filters.price[0],
            // maxprice[lte]: filters.price[1],
            projectpossessionstatus: filters.status,
            projecttype: filters.propertyType,
            // projectminspace: filters.area[0],
            // projectmaxspace: filters.area[1],
            projectconfiguration: filters.spaceType
            
        }
        console.log("1 -",queryParams)
        Object.keys(queryParams).forEach(key =>{
            if(queryParams[key] === '' || queryParams[key] === undefined)
                delete queryParams[key];
        });
        console.log("2 - ",queryParams)
        getProperties(queryParams,filters.price[0],filters.price[1],filters.area[0],filters.area[1]); 
       },[filters, page])

       useEffect(()=>{
        console.log("dataaa: ",data);
        console.log("Filte: ",filters);
       },[data])

    const handleResetFilter=()=>{
    setFilters({
        location: "",
        locality: '',
        price: [0,100000000],
        propertyType: '',
        spaceType: '',
        postedBy: '',
        status: '',
        area: [200,5000],
        raraProperty: '',
        raraNumber: ''
    })
    window.sessionStorage.setItem("filter Values",JSON.stringify({
        location: "",
        locality: '',
        price: [0,100000000],
        propertyType: '',
        spaceType: '',
        postedBy: '',
        status: '',
        area: [200,5000],
        raraProperty: '',
        raraNumber: ''
    }))
    window.location.reload()
    }

    const applyFilter = () => {
        window.sessionStorage.setItem("filter Values",JSON.stringify(filters))
        window.location.reload();
    }

    function areaLabel(value){
        return `${value} sqft`
    }

    const capitalize = (str) =>{ return str.charAt(0).toUpperCase() + str.slice(1)}


    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleMinPrice = (event) => {
        setMinPrice(event.target.value);
    };
    const handleMaxPrice = (event) => {
        setMaxPrice(event.target.value);
    };
    return(
    <>
        <LandingWrapper></LandingWrapper>
        <StyledBreadcrumbs aria-label="breadcrumb">
            <StyledLink underline="hover"  color="inherit" to="/">
            Home
            </StyledLink>
            {/* <StyledLink
            underline="hover"
            color="inherit"
            to="/search"
            >
            Properties
            </StyledLink> */}
            <Typography color="text.primary">Properties in {filters.search} {filters.location}</Typography>
        </StyledBreadcrumbs>
        <Box p={5} sx={{display: "flex",justifyContent: "space-around"}}>
            <FilterBox sx={{p: 4}}>
                <StyledTypography>Filter <FilterAltOutlinedIcon sx={{fontSize: "38px"}} /></StyledTypography>
                <Grid  container columnSpacing={3} rowSpacing={3} >
                    <Grid item xs={12}>
                        <StyledLabel shrink htmlFor="status">Location</StyledLabel>
                        <Select value={placeHolder.location} options={locationOptions} onChange={(e)=>{
                            setPlaceHolder({...placeHolder,location: e});
                            setFilters({...filters,location: e.value})}} />
                    </Grid> 
                    <Grid item xs={12}>
                        <FormControl variant="standard" className='w-100'>
                            <StyledLabel shrink htmlFor="projectLocality">Locality</StyledLabel>
                            <StyledInput 
                                id="projectLocality" 
                                name="projectlocality"  
                                onChange={(e)=>{
                                    setPlaceHolder({...placeHolder,locality: e.target.value})
                                    setFilters({...filters,locality: e.target.value})}}  />
                        </FormControl>
                    </Grid> 
                    <Grid item xs={12}>
                        <FormControl variant="standard" className='w-100'>
                            <StyledLabel shrink htmlFor="projectLocality">Budget</StyledLabel>
                            <Slider 
                            getAriaLabel={()=>'Budget range'}
                            value={filters.price ?? [0,100000000]}
                            onChangeCommitted={(event, newValue) => {
                                setPlaceHolder({...placeHolder,
                                minPrice: {label: KLC(newValue[0]), value: newValue[0]},
                                maxPrice: {label: KLC(newValue[1]), value: newValue[1]},
                                })
                                setFilters({...filters,price: newValue})
                            }}
                            valueLabelDisplay="auto"
                            getAriaValueText={KLC}
                            valueLabelFormat={KLC}
                            disableSwap
                            step={5000000}
                            min={0}
                            max={100000000}
                            marks={marks}
                            sx={{
                                mt: 3,
                                '.MuiSlider-track': {
                                    color: "#1ADDFF"
                                }
                            }}
                         />
                        </FormControl>
                    </Grid> 
                    <Grid item xs={6}>
                            <StyledLabel shrink htmlFor="min">Min</StyledLabel>
                            <Select
                                // labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={placeHolder.minPrice}
                                onChange={(e)=>{
                                    setPlaceHolder({...placeHolder,minPrice: e})
                                    setFilters({...filters,price: [e.value,filters.price[1]]})}}
                                options={minBudgetOptions}
                            />
                    </Grid> 
                    <Grid item xs={6}>
                            <StyledLabel shrink htmlFor="max">Max</StyledLabel>
                            <Select
                                // labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={placeHolder.maxPrice}
                                onChange={(e)=>{
                                    setPlaceHolder({...placeHolder,maxPrice: e})
                                setFilters({...filters,price: [filters.price[0],e.value]})}}
                                options={maxBudgetOptions}
                            />
                    </Grid>
                    <Grid item xs={12}>
                            <StyledLabel shrink htmlFor="max">Property Type</StyledLabel>
                            <Select
                            // labelId="location-select-label"
                            id="location-select"
                            value={placeHolder.propertyType} 
                            onChange={(e)=>{
                                    setPlaceHolder({...placeHolder,propertyType: e});
                                    setFilters({...filters,propertyType: e.value})}}
                            options={propertyTypeOptions}
                            />
                    </Grid>
                    {/* <Grid item xs={12}>
                            <StyledLabel shrink htmlFor="max">Property SubType</StyledLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={filters.propertyType}
                                onChange={(e)=>setFilters({...filters,propertyType: e.value})}
                                options={propertyTypeOptions}
                            />
                    </Grid> */}
                    <Grid item xs={12}>
                        <FormControl variant="standard" className='w-100'>
                            <StyledLabel shrink htmlFor="projectLocality">Covered Area (sqft)</StyledLabel>
                            <Slider 
                            getAriaLabel={()=>'Budget range'}
                            value={filters.area ?? [200,5000]}
                            onChange={(event, newValue) => {
                                setPlaceHolder({...placeHolder,
                                minArea: {label: `${newValue[0]} sqft`, value: newValue[0]},
                                maxArea: {label: `${newValue[1]} sqft`, value: newValue[1]},
                                })
                                setFilters({...filters,area: newValue})
                            }}  
                            valueLabelDisplay="auto"
                            getAriaValueText={areaLabel}
                            valueLabelFormat={areaLabel}
                            disableSwap
                            step={200}
                            min={200}
                            max={5000}
                            marks={areaMarks}
                            sx={{
                                mt: 3,
                                '.MuiSlider-track': {
                                    color: "#1ADDFF"
                                }
                            }}
                         />
                        </FormControl>
                    </Grid> 
                    <Grid item xs={6}>
                            <StyledLabel shrink htmlFor="min">Min</StyledLabel>
                            <Select
                                // labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={placeHolder.minArea}
                                onChange={(e)=>{                                    
                                    setPlaceHolder({...placeHolder,minArea: e})
                                    setFilters({...filters,area: [e.value,filters.area[1]]})}}
                                options={minAreaOptions}
                            />
                    </Grid> 
                    <Grid item xs={6}>
                            <StyledLabel shrink htmlFor="max">Max</StyledLabel>
                            <Select
                                // labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={placeHolder.maxArea}
                                onChange={(e)=>{
                                    setPlaceHolder({...placeHolder,maxArea: e})
                                    setFilters({...filters,area: [filters.area[0],e.value]})}}
                                options={maxAreaOptions}
                            />
                    </Grid>
                    <Grid item xs={12}>
                            <StyledLabel shrink htmlFor="max">Configuration</StyledLabel>
                            <Select
                                // labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={placeHolder.spaceType}
                                onChange={(e)=>{
                                    setPlaceHolder({...placeHolder,spaceType: e});
                                    setFilters({...filters,spaceType: e.value})}}
                                options={configurationOptions}
                            />
                    </Grid>
                    <Grid item xs={12}>
                            <StyledLabel shrink htmlFor="max">Possession Status</StyledLabel>
                            <Select
                                // labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={placeHolder.status}
                                onChange={(e)=>{
                                    setPlaceHolder({...placeHolder,status: e})
                                    setFilters({...filters,status: e.value})}}
                                options={possessionStatusOptions}
                            />
                    </Grid>
                    {/* <Grid item xs={12}>
                            <StyledLabel shrink htmlFor="max">Property Facing</StyledLabel>
                            <Select
                                // labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={filters.status}
                                // onChange={(e)=>setFilters({...filters,status: e.value})}
                                options={possessionStatusOptions}
                            />
                    </Grid> */}
                    {/* <Grid item xs={12}>
                            <StyledLabel shrink htmlFor="max">Posted By</StyledLabel>
                            <Select
                                // labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={placeHolder.postedBy}
                                onChange={(e)=>{
                                    setPlaceHolder({...placeHolder,postedBy: e})
                                    setFilters({...filters,postedBy: e.value})}}
                                options={possessionStatusOptions}
                            />
                    </Grid> */}
                    {/* <Grid item xs={12}>
                            <StyledLabel shrink htmlFor="max">RERA Registered Property</StyledLabel>
                            <Select
                                // labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={filters.status}
                                onChange={(e)=>setFilters({...filters,status: e.value})}
                                options={possessionStatusOptions}
                            />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl variant="standard" className='w-100'>
                            <StyledLabel shrink htmlFor="projectLocality">RERA Property Number</StyledLabel>
                            <StyledInput placeholder='' id="projectLocality" name="projectlocality" onChange={(e)=>setFilters({...filters,locality: e.target.value})}  />
                        </FormControl>
                    </Grid> */}
                </Grid>
                <form style={{display: "none",flexDirection: "column",alignItems: "start"}}>
                    <div>
                        <StyledLabel id="location-select-label">Location</StyledLabel>
                        <Select
                            // labelId="location-select-label"
                            id="location-select"
                            defaultValue={filters.location.toLowerCase()}    
                            input={<StyledInput value={filters.location} />}
                            onChange={(e)=>setFilters({...filters,location: e.target.value})}
                            MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
                        >
                            <MenuItem value="bangalore">Bangalore</MenuItem>
                            <MenuItem value="bhopal">Bhopal</MenuItem>
                            <MenuItem value="mumbai">Mumbai</MenuItem>
                            <MenuItem value="delhi">Delhi</MenuItem>
                            <MenuItem value="lucknow">Lucknow</MenuItem>
                            <MenuItem value="hyderabad">Hyderabad</MenuItem>
                            <MenuItem value="pune">Pune</MenuItem>
                            <MenuItem value="chennai">Chennai</MenuItem>
                            <MenuItem value="gurgaon">Gurgaon</MenuItem>
                            <MenuItem value="noida">Noida</MenuItem>
                            <MenuItem value="kolkata">Kolkata</MenuItem>
                            <MenuItem value="ahmedabad">Ahmedabad</MenuItem>
                            <MenuItem value="thane">Thane</MenuItem>
                        </Select>
                    </div>
                    <div>
                        <StyledLabel id="locality-select-label">Locality</StyledLabel>
                        <StyledInput1
                            // labelId="locality-select-label"
                            id="locality-select"
                            value={filters.locality}  
                            onChange={(e)=>setFilters({...filters,locality: e.target.value})}
                            sx={{width: "304px"}}
                        />
                    </div>
                    <div style={{width: "95%"}}>
                        <StyledLabel id="budget-select-label">Budget</StyledLabel>
                        <Slider 
                            getAriaLabel={()=>'Budget range'}
                            value={filters.price ?? [0,100000000]}
                            onChangeCommitted={(event, newValue) => {
                                setFilters({...filters,price: newValue})
                            }}
                            valueLabelDisplay="auto"
                            getAriaValueText={KLC}
                            valueLabelFormat={KLC}
                            disableSwap
                            step={5000000}
                            min={0}
                            max={100000000}
                            marks={marks}
                            sx={{
                                '.MuiSlider-track': {
                                    color: "#1ADDFF"
                                }
                            }}
                         />
                        <FormControl sx={{width: "45%",mr: 2}}  size="small">
                            <InputLabel id="demo-simple-select-label">Min Budget</InputLabel>
                            <Select
                                // labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={filters.price && filters.price[0]}
                                label="Min Budget"
                                onChange={(e)=>setFilters({...filters,price: [e.target.value,filters.price[1]]})}
                            >
                                <MenuItem value={0}>{KLC(0)}</MenuItem>
                                <MenuItem value={5000000}>{KLC(5000000)}</MenuItem>
                                <MenuItem value={10000000}>{KLC(10000000)}</MenuItem>
                                <MenuItem value={20000000}>{KLC(20000000)}</MenuItem>
                                <MenuItem value={30000000}>{KLC(30000000)}</MenuItem>
                                <MenuItem value={40000000}>{KLC(40000000)}</MenuItem>
                                <MenuItem value={50000000}>{KLC(50000000)}</MenuItem>
                                <MenuItem value={60000000}>{KLC(60000000)}</MenuItem>
                                <MenuItem value={70000000}>{KLC(70000000)}</MenuItem>
                                <MenuItem value={80000000}>{KLC(80000000)}</MenuItem>
                                <MenuItem value={90000000}>{KLC(90000000)}</MenuItem>
                                <MenuItem value={100000000}>{KLC(100000000)}</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{width: "45%"}}  size="small">
                            <InputLabel id="demo-simple-select-label">Max Budget</InputLabel>
                            <Select
                                // labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={filters.price && filters.price[1]}
                                label="Max Budget"
                                onChange={(e)=>setFilters({...filters,price: [filters.price[0],e.target.value]})}
                                
                            >
                                <MenuItem value={5000000}>{KLC(5000000)}</MenuItem>
                                <MenuItem value={10000000}>{KLC(10000000)}</MenuItem>
                                <MenuItem value={20000000}>{KLC(20000000)}</MenuItem>
                                <MenuItem value={30000000}>{KLC(30000000)}</MenuItem>
                                <MenuItem value={40000000}>{KLC(40000000)}</MenuItem>
                                <MenuItem value={50000000}>{KLC(50000000)}</MenuItem>
                                <MenuItem value={60000000}>{KLC(60000000)}</MenuItem>
                                <MenuItem value={70000000}>{KLC(70000000)}</MenuItem>
                                <MenuItem value={80000000}>{KLC(80000000)}</MenuItem>
                                <MenuItem value={90000000}>{KLC(90000000)}</MenuItem>
                                <MenuItem value={100000000}>{KLC(100000000)}</MenuItem>
                            </Select>
                        </FormControl>
                        {/* <Select
                            sx={{display: }}
                            labelId="budget-select-label"
                            id="budget-select"
                            value={filters.price[0]}   
                            input={<StyledInput1 />}
                            onChange={(e)=>setFilters({...filters,minPrice: e.target.value})}
                        >
                            <MenuItem value="500000" selected>{KLC(500000)}</MenuItem>
                            <MenuItem value="1000000">{KLC(1000000)}</MenuItem>
                            <MenuItem value="10000000">{KLC(10000000)}</MenuItem>
                            <MenuItem value="100000000">{KLC(100000000)}</MenuItem>
                            <MenuItem value="1000000000">{KLC(1000000000)}</MenuItem>
                        </Select>
                        <Typography display={"inline"} mx={2} >To</Typography>
                        <Select
                            placeholder="Min"
                            labelId="budget-select-label"
                            id="budget-select"
                            value={filters.price[1]}   
                            input={<StyledInput1 placeholder="MIN" />}
                            onChange={(e)=>setFilters({...filters,maxPrice: e.target.value})}
                        >
                            <MenuItem value="5000000">{KLC(5000000)}</MenuItem>
                            <MenuItem value="10000000">{KLC(10000000)}</MenuItem>
                            <MenuItem value="100000000">{KLC(100000000)}</MenuItem>
                            <MenuItem value="1000000000">{KLC(1000000000)}</MenuItem>
                            <MenuItem value="10000000000" selected>{KLC(10000000000)}</MenuItem>
                        </Select> */}
                    </div>
                    <div>
                        <StyledLabel id="location-select-label">Property Type</StyledLabel>
                        <Select
                            // labelId="location-select-label"
                            id="location-select"
                            value={filters.propertyType}   
                            input={<StyledInput />}
                            onChange={(e)=>setFilters({...filters,propertyType: e.target.value})}
                        >
                            <MenuItem value="apartment">Apartment</MenuItem>
                            <MenuItem value="villa">Villa</MenuItem>
                            <MenuItem value="independent_house">Independent House</MenuItem>
                            <MenuItem value="flat">Flat</MenuItem>
                        </Select>
                    </div>
                    <div>
                        <StyledLabel id="location-select-label">Property Sub-Type</StyledLabel>
                        <Select
                            // labelId="location-select-label"
                            id="location-select"
                            value={filters.propertyType}   
                            input={<StyledInput />}
                            onChange={(e)=>setFilters({...filters,propertyType: e.target.value})}
                        >
                            <MenuItem value="apartment">Apartment</MenuItem>
                            <MenuItem value="villa">Villa</MenuItem>
                            <MenuItem value="independent_house">Independent House</MenuItem>
                            <MenuItem value="flat">Flat</MenuItem>
                        </Select>
                    </div>
                 
                    <div style={{width: "95%"}}>
                        <StyledLabel id="location-select-label">Covered Area(sqft)</StyledLabel>
                        <Slider 
                            getAriaLabel={()=>'Budget range'}
                            value={filters.area ?? [200,5000]}
                            onChange={(event, newValue) => {
                                setFilters({...filters,area: newValue})
                            }}  
                            valueLabelDisplay="auto"
                            getAriaValueText={areaLabel}
                            valueLabelFormat={areaLabel}
                            disableSwap
                            min={200}
                            max={5000}
                            marks={areaMarks}
                            sx={{
                                '.MuiSlider-track': {
                                    color: "#1ADDFF"
                                }
                            }}
                         />
                          <FormControl sx={{width: "45%",mr: 2}}  size="small">
                            <InputLabel id="demo-simple-select-label">Min Area</InputLabel>
                            <Select
                                // labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={minPrice}
                                label="Min Budget"
                                onChange={handleMinPrice}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{width: "45%"}}  size="small">
                            <InputLabel id="demo-simple-select-label">Max Area</InputLabel>
                            <Select
                                // labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={maxPrice}
                                label="Max Budget"
                                onChange={handleMaxPrice}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        {/* <Select
                            labelId="budget-select-label"
                            id="budget-select"
                            value={filters.minArea}   
                            input={<StyledInput1 defaultValue={"Min"} />}
                            onChange={(e)=>setFilters({...filters,minArea: e.target.value})}
                        >
                            <MenuItem value="100">100 sqft</MenuItem>
                            <MenuItem value="1000">1000 sqft</MenuItem>
                            <MenuItem value="10000">10000 sqft</MenuItem>
                            <MenuItem value="50000">50000 sqft</MenuItem>
                        </Select>
                        <Typography display={"inline"} mx={2} >To</Typography>
                        <Select
                            placeholder="Min"
                            labelId="budget-select-label"
                            id="budget-select"
                            value={filters.maxArea}   
                            input={<StyledInput1 placeholder="MIN" />}
                            onChange={(e)=>setFilters({...filters,maxArea: e.target.value})}
                        >
                            <MenuItem value="1000">1000 sqft</MenuItem>
                            <MenuItem value="10000">10000 sqft</MenuItem>
                            <MenuItem value="100000">100000 sqft</MenuItem>
                            <MenuItem value="500000">500000 sqft</MenuItem>
                        </Select> */}
                    </div>
                    <div>
                        <StyledLabel id="location-select-label">Space Type</StyledLabel>
                        <Select
                            // labelId="location-select-label"
                            id="location-select"
                            value={filters.spaceType}   
                            input={<StyledInput />}
                            onChange={(e)=>setFilters({...filters,spaceType: e.target.value})}
                        >
                            <MenuItem value="2bhk">2 BHK</MenuItem>
                            <MenuItem value="3bhk">3 BHK</MenuItem>
                            <MenuItem value="4bhk">4 BHK</MenuItem>
                            <MenuItem value="5bhk">5 BHK</MenuItem>
                            <MenuItem value="6bhk+">6 BHK+</MenuItem>
                        </Select>
                    </div>
                    <div>
                        <StyledLabel id="location-select-label">Posted By</StyledLabel>
                        <Select
                            // labelId="location-select-label"
                            id="location-select"
                            value={filters.postedBy}   
                            input={<StyledInput />}
                            onChange={(e)=>setFilters({...filters,postedBy: e.target.value})}
                        >
                            <MenuItem value="cp">Channel Partner (CP)</MenuItem>
                            <MenuItem value="builder">Builder</MenuItem>
                        </Select>
                    </div>
                    <div>
                        <StyledLabel id="location-select-label">Property Facing</StyledLabel>
                        <Select
                            // labelId="location-select-label"
                            id="location-select"
                            value={filters.postedBy}   
                            input={<StyledInput />}
                            onChange={(e)=>setFilters({...filters,postedBy: e.target.value})}
                        >
                            <MenuItem value="cp">Channel Partner (CP)</MenuItem>
                            <MenuItem value="builder">Builder</MenuItem>
                        </Select>
                    </div>
                    <div>
                        <StyledLabel id="location-select-label">Possession Status</StyledLabel>
                        <Select
                            // labelId="location-select-label"
                            id="location-select"
                            value={filters.status}   
                            input={<StyledInput />}
                            onChange={(e)=>setFilters({...filters,status: e.target.value})}
                        >
                            <MenuItem value="ready to move">Ready to move</MenuItem>
                            <MenuItem value="under construction">Under construction</MenuItem>
                            <MenuItem value="upcoming project">Upcoming project</MenuItem>
                        </Select>
                    </div>
                    <div>
                        <StyledLabel id="location-select-label">RARA Registered Property</StyledLabel>
                        <Select
                            disabled
                            // labelId="location-select-label"
                            id="location-select"
                            value={filters.raraProperty}   
                            input={<StyledInput />}
                            onChange={(e)=>setFilters({...filters,raraProperty: e.target.value})}
                        >
                            <MenuItem value="rera_approved_builder" >RERA approved Builder</MenuItem>
                            <MenuItem value="rera_approved_cp">RERA approved CP</MenuItem>
                        </Select>
                    </div>
                    <div>
                        <StyledLabel id="location-select-label">RARA Property Number</StyledLabel>
                        <Select
                            disabled
                            // labelId="location-select-label"
                            id="location-select"
                            value={filters.raraNumber}   
                            input={<StyledInput />}
                            onChange={(e)=>setFilters({...filters,raraNumber: e.target.value})}
                        >
                            <MenuItem>Banglore</MenuItem>
                            <MenuItem>Bhopal</MenuItem>
                            <MenuItem>Mumbai</MenuItem>
                            <MenuItem>Delhi</MenuItem>
                        </Select>
                    </div>
                    <div style={{width: "100%",display: "flex",justifyContent: 'space-around',marginTop: "10px"}}>
                        <Button variant="contained" onClick={applyFilter}>Apply</Button>
                        <Button variant="contained" onClick={handleResetFilter}>Clear</Button>
                    </div>                    
                </form>
            </FilterBox>
            <PropListingBox>
                <Box sx={{display: "flex",alignItems: "center",justifyContent: "space-between",width: "90%",borderBottom: "2px solid #E5E5E5",pb: 1}}>
                        <Typography sx={{fontSize: "18px"}}>{totalCount} Properties in {filters.search} {filters.location} for Sale</Typography>  
                        <Button variant="contained" endIcon={sort? <KeyboardArrowDownIcon />: <KeyboardArrowUpIcon />} onClick={()=>{
                            setSort(!sort);
                        }}>Sort By</Button>
                </Box>
                {data.length>0 ?  
                data.map((val,i)=>{
                    return <PropertyCard data={val} key={i} />
                }):
                    <Box><Typography variant="h3">No Property Available</Typography></Box>
                }
                {
                loader && <RevolvingDot wrapperStyle={style} />
                }
                {
                    totalCount>10 && <Pagination count={totalCount/10} page={page} onChange={(e,v)=>setPage(v)} />   
                }
                             
            </PropListingBox>
            
        </Box>
    </>
    )
}

export default FilterPage;