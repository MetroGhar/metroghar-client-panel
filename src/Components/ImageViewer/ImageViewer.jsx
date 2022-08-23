import React, { useEffect, useRef, useState } from 'react'
import {
    Modal,
    Box,
    Button,
    Divider
} from '@mui/material';
import { HeaderIV, ImageIV, PaginImageIV } from './styles';
import CloseIcon from '@mui/icons-material/Close';
import Carousel,{consts} from 'react-elastic-carousel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { GifBoxTwoTone } from '@mui/icons-material';
import { height } from '@mui/system';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const ZoomFun = (props) =>{
    return(        
    <TransformWrapper>
            {({zoomIn,zoomOut,resetTransform,...rest}) => (
                <div style={{
                    position: 'relative'
                }}>
                <div style={{
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    right: '-30px',
                    bottom: '0'
                }}>
              <button onClick={() => zoomIn()}>+</button>
              <button onClick={() => zoomOut()}>-</button>
              <button onClick={() => resetTransform()}>x</button>
            </div> 
                <TransformComponent>
                {props.children}
                </TransformComponent>
                </div>
            )}
    </TransformWrapper>
    )
}


function useImageZoom(maxZoomLevel = 9) {
    const minZoomLevel = 1;
  
    const [zoomLevel, setZoomLevel] = React.useState(minZoomLevel);
  
    function zoomIn() {
      setZoomLevel(zoomLevel =>
        zoomLevel < maxZoomLevel ? zoomLevel + 1 : zoomLevel
      );
    }
  
    function zoomOut() {
      setZoomLevel(zoomLevel =>
        zoomLevel > minZoomLevel ? zoomLevel - 1 : minZoomLevel
      );
    }
  
    function resetZoom() {
      setZoomLevel(minZoomLevel);
    }
  
    const zoomStyles = {
      transform: `scale(1.${zoomLevel})`,
    };
  
    const handlers = {
      zoomIn,
      zoomOut,
      resetZoom
    }
  
    return [zoomStyles, handlers];
  }
  

const backArrow = {
    color: '#FEAA7B',
    fontSize: "40px",
    position: "absolute",
    left: "40px",
    top: "40vh",
    cursor: "pointer",
    zIndex: 10,
    ":hover": {
        color: "#1ADDFF"
    }
}

const tbbackArrow = {
    color: '#FEAA7B',
    fontSize: "14px",
    position: "absolute",
    left: "4px",
    bottom: "10px",
    cursor: "pointer",
    zIndex: 10,
    border: '2px solid #FEAA7B',
    height: "70px",
    padding: "0 10px",
    background: "#171717",
    ":disabled": {
        visibility: "hidden"
    },
    ":hover": {
        color: "#1ADDFF"
    }
}

const forwardArrow = {
    color: '#FEAA7B',
    fontSize: "40px",
    position: "absolute",
    right: "40px",
    top: "40vh",
    cursor: "pointer", 
    ":hover": {color: "#1ADDFF"}
}
const tbforwardArrow = {
    color: '#FEAA7B',
    fontSize: "10px",
    position: "absolute",
    right: "4px",
    bottom: "10px",
    cursor: "pointer", 
    border: '2px solid #FEAA7B',
    height: "70px",
    padding: "0 10px",
    background: "#171717",
    ":hover": {color: "#1ADDFF"},
    ":disabled": {
        visibility: "hidden"
    }
}

const ImageViewer = ({data, open,setOpen,currentImg}) => {
    // const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
    const [currImg, setCurrImg] = useState(currentImg);
    const [currImgPagi, setCurrPagi] = useState(0);
    const [height,setHeight] = useState(100);
    const [width,setWidth] = useState(100);
    const [zoomStyles, handlers] = useImageZoom();

    // const { amenitiesimages, othersimages, externalimages, internalimages } = data;

    function myArrow({ type, onClick, isEdge }) {       
        return type === consts.PREV ?  (
            <ArrowBackIosIcon onClick={onClick} sx={backArrow} />
        ) :
        (
            <ArrowForwardIosIcon onClick={onClick} sx={forwardArrow} />
        )
      }
    
      function thumbnailArrow({ type, onClick, isEdge }) {       
        return type === consts.PREV ?  (
            <ArrowBackIosIcon onClick={onClick} sx={tbbackArrow} />
        ) :
        (
            <ArrowForwardIosIcon onClick={onClick} sx={tbforwardArrow} />
        )
      }

      useEffect(()=>{
        if(open)
        {
            document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
        }else{
            document.body.style.position = '';
            document.body.style.top = '';
        }
      },[open])

      const imgRef = useRef(null);
      const carouselRef = useRef(null);
      let fi = JSON.parse(window.localStorage.getItem('floor_Plan_Imgs'));

      const goto = (target) => {
        carouselRef.current.goTo(target)
      }
    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                width: "100vw",
                height: "100vh",
                background: "#171717"
            }}>
                <HeaderIV>
                    <Box sx={{display: "flex"}}>
                        <Button onClick={()=>{
                            goto(0)
                            setCurrImg(0)}}>External ({data && data.externalimages.length})</Button>
                        <Divider orientation='vertical' sx={{background: "#8A8A8A"}}  />
                        <Button onClick={()=>goto(data.externalimages.length)}>Internal ({data && data.internalimages.length})</Button>
                        <Divider orientation='vertical' sx={{background: "#8A8A8A"}}  />
                        <Button onClick={()=>goto(data.externalimages.length + data.internalimages.length)}>Amenities ({data && data.amenitiesimages.length})</Button>
                        <Divider orientation='vertical' sx={{background: "#8A8A8A"}}  />
                        <Button onClick={()=>goto(data.externalimages.length + data.internalimages.length + data.othersimages.length + fi.length)}>Others ({data && data.othersimages.length})</Button>
                    </Box>
                    <Box sx={{px: 2}}>
                        <CloseIcon onClick={handleClose} sx={{color: "#FEAA7B",fontSize: "28px",height: "40px"}} />
                    </Box>
                </HeaderIV>
                {/* <HeaderIV>
                    <Box sx={{display: "flex"}}>
                        <Button>Property (10)</Button>
                        <Divider orientation='vertical' sx={{background: "#8A8A8A"}}  />
                        <Button>Society (5)</Button>
                    </Box>
                    <Box sx={{px: 2}}>
                        <CloseIcon onClick={handleClose} sx={{color: "#FEAA7B",fontSize: "28px",height: "40px"}} />
                    </Box>
                </HeaderIV> */}
                {/* <Button onClick={()=>handleZoomIn()}>Zoom In</Button>
                <Button onClick={()=>handleZoomOut()}>Zoom out</Button> */}
                <Box sx={{mt: 4,position: 'relative'}} >
                {/* <TransformWrapper>
                {({zoomIn,zoomOut,resetTransform}) => (
                <div style={{
                    position: 'relative'
                }}> */}
                <div style={{
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    right: '10px',
                    bottom: '120px',
                    zIndex: 1000
                    }}>
                <ZoomInIcon sx={{color: '#FEAA7B'}} onClick={() => {handlers.zoomIn()}} />
                <ZoomOutIcon sx={{color: '#FEAA7B'}} onClick={() => handlers.zoomOut()} />
                {/* <CloseRoundedIcon sx={{color: '#FEAA7B'}} onClick={() => resetTransform()} /> */}
                </div> 
                    <Carousel
                        ref={carouselRef}
                        className="gh"
                        itemsToShow={1}
                        renderArrow={myArrow}
                        initialActiveIndex={currentImg}
                        focusOnSelect={true}
                        renderPagination={({ pages, activePage, onClick }) => {
                            
                            return (
                            <Carousel
                                itemsToShow={12}
                                itemsToScroll={5}
                                renderArrow={thumbnailArrow}
                                pagination={false}
                                focusOnSelect={true}
                                >
                                {data && data.externalimages.map((val,page) => {
                                const isActivePage = activePage === page
                                return (
                                    <PaginImageIV 
                                        key={page}
                                        onClick={() => onClick(page)}
                                        active={isActivePage}
                                        sx={{
                                            opacity: isActivePage ? 1 : 0.4,
                                            borderColor: isActivePage ? "#1ADDFF" : "#737373"
                                            }}
                                    >
                                        <img 
                                            src={val.secure_url}
                                            alt="image"
                                            width="100%"
                                            height="100%"
                                        />
                                    </PaginImageIV>
                                )
                                })}
                                {data && data.internalimages.map((val,pag) => {
                                let page = pag + data.externalimages.length;
                                const isActivePage = activePage === page
                                return (
                                    <PaginImageIV 
                                        key={page}
                                        onClick={() => onClick(page)}
                                        active={isActivePage}
                                        sx={{
                                            opacity: isActivePage ? 1 : 0.4,
                                            borderColor: isActivePage ? "#1ADDFF" : "#737373"
                                            }}
                                    >
                                        <img 
                                            src={val.secure_url}
                                            alt="image"
                                            width="100%"
                                            height="100%"
                                        />
                                    </PaginImageIV>
                                )
                                })}
                                {data && data.amenitiesimages.map((val,pag) => {
                                    let page = pag + data.externalimages.length + data.internalimages.length;
                                const isActivePage = activePage === page
                                return (
                                    <PaginImageIV 
                                        key={page}
                                        onClick={() => onClick(page)}
                                        active={isActivePage}
                                        sx={{
                                            opacity: isActivePage ? 1 : 0.4,
                                            borderColor: isActivePage ? "#1ADDFF" : "#737373"
                                            }}
                                    >
                                        <img 
                                            src={val.secure_url}
                                            alt="image"
                                            width="100%"
                                            height="100%"
                                        />
                                    </PaginImageIV>
                                )
                                })}
                                {data && data.othersimages.map((val,pag) => {
                                    let page = pag + data.externalimages.length + data.internalimages.length + data.amenitiesimages.length;
                                const isActivePage = activePage === page
                                return (
                                    <PaginImageIV 
                                        key={page}
                                        onClick={() => onClick(page)}
                                        active={isActivePage}
                                        sx={{
                                            opacity: isActivePage ? 1 : 0.4,
                                            borderColor: isActivePage ? "#1ADDFF" : "#737373"
                                            }}
                                    >
                                        <img 
                                            src={val.secure_url}
                                            alt="image"
                                            width="100%"
                                            height="100%"
                                        />
                                    </PaginImageIV>
                                )
                                })}
                                {fi && fi.map((val,pag) => {
                                    let page = pag + data.externalimages.length + data.internalimages.length + data.amenitiesimages.length + data.othersimages.length;
                                const isActivePage = activePage === page
                                return (
                                    <PaginImageIV 
                                        key={page}
                                        onClick={() => onClick(page)}
                                        active={isActivePage}
                                        sx={{
                                            opacity: isActivePage ? 1 : 0.4,
                                            borderColor: isActivePage ? "#1ADDFF" : "#737373"
                                            }}
                                    >
                                        <img 
                                            src={val}
                                            alt="image"
                                            width="100%"
                                            height="100%"
                                        />
                                    </PaginImageIV>
                                )
                                })}
                            </Carousel>
                            )
                        }}
                    >
                        {
                           data && data.externalimages.map((val,i)=>{
                                return(
                                    <ImageIV key={i}>
                                        <img 
                                            ref={imgRef} 
                                            src={val.secure_url}
                                            alt="image"
                                            style={{ ...zoomStyles,
                                                minHeight: 'fit-content',
                                                maxHeight: '70vh'
                                             }}
                                            onClick={handlers.resetZoom}
                                        />
                                    </ImageIV>
                                    
                                )
                            })
                        }
                        {
                            data && data.internalimages.map((val,i)=>{
                                return(
                                    <ImageIV key={i}>
                                        <img 
                                            ref={imgRef} 
                                            src={val.secure_url}
                                            alt="image"
                                            style={{ ...zoomStyles,
                                                minHeight: 'fit-content',
                                                maxHeight: '70vh'
                                             }}
                                            onClick={handlers.resetZoom}
                                            
                                        />
                                    </ImageIV>
                                )
                            })
                        }
                        {
                            data && data.amenitiesimages.map((val,i)=>{
                                return(
                                    <ImageIV key={i}>
                                        <img 
                                            ref={imgRef} 
                                            src={val.secure_url}
                                            alt="image"
                                            style={{ ...zoomStyles,
                                                minHeight: 'fit-content',
                                                maxHeight: '70vh'
                                             }}
                                            onClick={handlers.resetZoom}
                                        />
                                    </ImageIV>
                                )
                            })
                        }
                        {
                            data && data.othersimages.map((val,i)=>{
                                return(
                                    <ImageIV key={i}>
                                        <img 
                                            ref={imgRef} 
                                            src={val.secure_url}
                                            alt="image"
                                            style={{ ...zoomStyles,                                            
                                                minHeight: 'fit-content',
                                                maxHeight: '70vh'}}
                                            onClick={handlers.resetZoom}
                                        />
                                    </ImageIV>
                                )
                            })
                        }
                        {
                            fi && fi.map((val,i)=>{
                                return(
                                    <ImageIV key={i}>
                                        <img 
                                            src={val}
                                            alt="image"
                                            style={{ ...zoomStyles,
                                                minHeight: 'fit-content',
                                                maxHeight: '70vh',
                                            }}
                                            onClick={handlers.resetZoom}
                                        />
                                    </ImageIV>
                                )
                            })
                        }
                    </Carousel>
                    
                {/* </div>
            )}
                </TransformWrapper> */}
                </Box>
            </Box>

        </Modal>
    )
}

export default ImageViewer;