import { Box, styled } from "@mui/material"
import React from "react"
import { CardTypo3, CardTypo2 } from "./styles"
 const Card4Wrapper = styled(Box)({
    width: "205px",
    height: "195px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    borderRadius: "5px",
 })

const Card4 = ({imgUrl,city}) => {
    return(
        <Card4Wrapper>
            <img src={imgUrl} />
            <CardTypo2>{city}</CardTypo2>
            <CardTypo3 mb={2}>{city==="Bangalore" ? "1300+ Properties" : "Coming Soon..."}</CardTypo3>
        </Card4Wrapper>
    )
}

export default Card4;