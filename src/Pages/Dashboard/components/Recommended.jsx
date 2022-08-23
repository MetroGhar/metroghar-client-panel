import React from 'react';
import Card from './Card';
import { PropWrapper } from './styles';

const data = [{
    id: "BYiypbhkrAcDDbbdTa8Z",
    mainImageUrls: ["https://firebasestorage.googleapis.com/v0/b/metroghar-5208e-test.appspot.com/o/images%2FSNR%20Magnolia%20Park%2FmainImages%2Fsidekix-media-wRzBarqn3hs-unsplash.jpg?alt=media&token=e707d3af-21e8-40f7-b9d3-e445bc58632a"],
    propertyName: "SNR Magnolia Park",
    ownerAddress: "Office no 307, Shivai Plaza, Marol Cooperative Industrial Estate Rd, Gamdevi, Marol, Andheri East",
    position: "Upcoming Project",
    minspace: 750,
    maxspace: 1000,
    type: "flat",
    configuration: [{label: '1 BHK', value: '1bhk'}, {value: '2bhk', label: '2 BHK'}, {value: '3bhk', label: '3 BHK'}],
    minPriceAmount: 3000000,
    maxPriceAmount: 300000000
},
{
    id: "BYiypbhkrAcDDbbdTa8Z",
    mainImageUrls: ["https://firebasestorage.googleapis.com/v0/b/metroghar-5208e-test.appspot.com/o/images%2FSNR%20Magnolia%20Park%2FmainImages%2Fsidekix-media-wRzBarqn3hs-unsplash.jpg?alt=media&token=e707d3af-21e8-40f7-b9d3-e445bc58632a"],
    propertyName: "SNR Magnolia Park",
    ownerAddress: "Office no 307, Shivai Plaza, Marol Cooperative Industrial Estate Rd, Gamdevi, Marol, Andheri East",
    position: "Upcoming Project",
    minspace: 767,
    maxspace: 1000,
    type: "flat",
    configuration: [{label: '1 BHK', value: '1bhk'}, {value: '2bhk', label: '2 BHK'}, {value: '3bhk', label: '3 BHK'}],
    minPriceAmount: 3000000,
    maxPriceAmount: 300000000
},
{
    id: "BYiypbhkrAcDDbbdTa8Z",
    mainImageUrls: ["https://firebasestorage.googleapis.com/v0/b/metroghar-5208e-test.appspot.com/o/images%2FSNR%20Magnolia%20Park%2FmainImages%2Fsidekix-media-wRzBarqn3hs-unsplash.jpg?alt=media&token=e707d3af-21e8-40f7-b9d3-e445bc58632a"],
    propertyName: "SNR Magnolia Park",
    ownerAddress: "Office no 307, Shivai Plaza, Marol Cooperative Industrial Estate Rd, Gamdevi, Marol, Andheri East",
    position: "Upcoming Project",
    minspace: 767,
    maxspace: 1000,
    type: "flat",
    configuration: [{label: '1 BHK', value: '1bhk'}, {value: '2bhk', label: '2 BHK'}, {value: '3bhk', label: '3 BHK'}],
    minPriceAmount: 3000000,
    maxPriceAmount: 300000000
}]

const Recommended = () => {
    return(
        <PropWrapper>
            {
                data && data.length > 0 && data.map((val,i)=>{
                    console.log(val)
                    return(
                        <Card data={val} recent="recommend" />
                    )
                })
            }
        </PropWrapper>
    )
}

export default Recommended;