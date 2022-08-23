import React from 'react'

function useImageZoom(maxZoomLevel = 5) {
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
      transform: `scale(${zoomLevel})`,
    };
  
    const handlers = {
      zoomIn,
      zoomOut,
      resetZoom
    }
  
    return [zoomStyles, handlers];
  }
  