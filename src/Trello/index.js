import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ProfileCard } from "./Components/profileCard";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./style.css";
import { TableSection } from "./Components/tableSection";

export function Trello() {
  const [cards, setCards] = useState([
    {
      id: uuidv4(),
      countryName: "France",
      cardPicUrl: "https://www.worldometers.info/img/flags/fr-flag.gif",
      tableId: "dream",
    },
    {
      id: uuidv4(),
      countryName: "Netherlands",
      cardPicUrl: "https://www.worldometers.info/img/flags/nl-flag.gif",
      tableId: "dream",
    },
    {
      id: uuidv4(),
      countryName: "Belgium",
      cardPicUrl: "https://www.worldometers.info/img/flags/be-flag.gif",
      tableId: "dream",
    },
    {
      id: uuidv4(),
      countryName: "United States of America",
      cardPicUrl: "https://www.worldometers.info/img/flags/us-flag.gif",
      tableId: "best",
    },
    {
      id: uuidv4(),
      countryName: "Spain",
      cardPicUrl: "https://www.worldometers.info/img/flags/sp-flag.gif",
      tableId: "good",
    },
    {
      id: uuidv4(),
      countryName: "UK",
      cardPicUrl: "https://www.worldometers.info/img/flags/uk-flag.gif",
      tableId: "good",
    },
    {
      id: uuidv4(),
      countryName: "Germany",
      cardPicUrl: "https://www.worldometers.info/img/flags/gm-flag.gif",
      tableId: "good",
    },
    {
      id: uuidv4(),
      countryName: "Canada",
      cardPicUrl: "https://www.worldometers.info/img/flags/ca-flag.gif",
      tableId: "good",
    },
    {
      id: uuidv4(),
      countryName: "Sweden",
      cardPicUrl: "https://www.worldometers.info/img/flags/sw-flag.gif",
      tableId: "good",
    },
    {
      id: uuidv4(),
      countryName: "Ireland",
      cardPicUrl: "https://www.worldometers.info/img/flags/ei-flag.gif",
      tableId: "good",
    },
    {
      id: uuidv4(),
      countryName: "Chile",
      cardPicUrl: "https://www.worldometers.info/img/flags/ci-flag.gif",
      tableId: "intermediate",
    },
    {
      id: uuidv4(),
      countryName: "Croatia",
      cardPicUrl: "https://www.worldometers.info/img/flags/hr-flag.gif",
      tableId: "intermediate",
    },
    {
      id: uuidv4(),
      countryName: "Greece",
      cardPicUrl: "https://www.worldometers.info/img/flags/gr-flag.gif",
      tableId: "intermediate",
    },
    {
      id: uuidv4(),
      countryName: "Turkey",
      cardPicUrl: "https://www.worldometers.info/img/flags/tu-flag.gif",
      tableId: "hard",
    },
    {
      id: uuidv4(),
      countryName: "Afghanistan",
      cardPicUrl: "https://www.worldometers.info/img/flags/af-flag.gif",
      tableId: "hard",
    },
    {
      id: uuidv4(),
      countryName: "Iran",
      cardPicUrl: "https://www.worldometers.info/img/flags/ir-flag.gif",
      tableId: "hard",
    },
  ]);

  const tableData = {
    dream: { title: "Dream", cards: [] },
    best: { title: "Best", cards: [] },
    good: { title: "Good", cards: [] },
    intermediate: { title: "Intermediate", cards: [] },
    hard: { title: "Hard", cards: [] },
  };

  cards.forEach((card) => {
    if (tableData[card.tableId]) {
      tableData[card.tableId].cards.push(
        <ProfileCard
          key={card.id}
          id={card.id}
          countryName={card.countryName}
          cardPicUrl={card.cardPicUrl}
        />
      );
    }
  });

  function drop(event, tableId) {
    event.preventDefault();
    const cardId = event.dataTransfer.getData("card");
    const card = cards.find((card) => card.id === cardId);

    if (card) {
      const updatedCards = cards.map((c) => {
        if (c.id === cardId) {
          return { ...c, tableId };
        }
        return c;
      });

      setCards(updatedCards);
    }
  }

  function dragOver(event) {
    event.preventDefault();
  }

  console.log(Object.keys(tableData));

  //The tableId in map is already defined into tableData

  return (
    <div className="trello-container">
      <MDBRow>
        <MDBCol
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              marginBlockStart: "60px",
              fontFamily: "cursive",
              color: "#fff",
              fontSize: "35px",
            }}
          >
            Your Favorite Country to Live
          </h3>
          <p style={{ textAlign: "center" }}>
            (Pls drag the items / Lütfen kartları sürükleyin)
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="trello-content">
        {Object.keys(tableData).map((tableId) => (
          <MDBCol
            key={tableId}
            onDrop={(event) => drop(event, tableId)}
            onDragOver={dragOver}
          >
            <TableSection
              tableTitle={tableData[tableId].title}
              data={tableData[tableId].cards}
            />
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  );
}
