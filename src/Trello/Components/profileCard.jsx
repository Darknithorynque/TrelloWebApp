import React from "react";
import { 
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCardFooter,
    MDBRipple,
    MDBRow,
    MDBCol
 } from "mdb-react-ui-kit";

 import "../style.css"




export function ProfileCard(props) {

    const {cardPicUrl,countryName,id} = props

    function dragStart(event) {
      event.dataTransfer.setData('card',id);
    }
    function dragOver(event) {
      event.preventDefault();
    }
   

    return(
        <MDBCard id={id} onDragStart={dragStart} onDragOver={dragOver} className="profileCard-card" draggable="true"
            alignment='center'>
            <MDBCardImage className="profileCard-pic" src={cardPicUrl} position="top" fluid alt='...' />
            <MDBCardFooter>{countryName}</MDBCardFooter>
        </MDBCard>
    )

}