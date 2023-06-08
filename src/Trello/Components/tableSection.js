import React from "react";
import { useState } from "react";
import "../style.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export function TableSection(props) {
  const { tableTitle, data } = props;

  return (
    <MDBCard className="table-section">
      <MDBCardHeader className="tableTitle">{tableTitle}</MDBCardHeader>
      <MDBCardBody>
        <MDBRow className="tableSection-body h-60">
          <MDBCol>{data}</MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}
