import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Container from '../components/Container';
import Button from '../components/Button';
import CampsiteSelector from '../components/CampsiteSelector';
import AvailableSites from '../components/AvailableSites';
import Navbar from '../components/Navbar';
import CampsiteTypes from "../common/campsiteTypes";

import { useState } from "react";

export default function Home() {
  const [campsiteChoices, setCampsiteChoices] = useState([
    { id: 0, text: "Full Hookup", type: CampsiteTypes.FULL_HOOKUP },
    { id: 1, text: "Water, Electric, Sewer", type: CampsiteTypes.WATER_ELECTRIC_SEWER },
    { id: 2, text: "Riverfront - Water, Electric", type: CampsiteTypes.RIVERFRONT_WATER_ELECTRIC },
    { id: 3, text: "Water, Electric", type: CampsiteTypes.WATER_ELECTRIC },
    { id: 4, text: "No Hookup", type: CampsiteTypes.NO_HOOKUP },
  ]);

  const [selectedCampsiteChoice, setSelectedCampsiteChoice] = useState(1);

  const updateSelectedCampsiteChoice = (campsiteChoiceId) => {
    const campsiteType = campsiteChoices[campsiteChoiceId].type;
    setSelectedCampsiteChoice(campsiteChoiceId);
    console.log(campsiteType);

  }
  return (
    <>
      <Head>
        <title>Woodland Acres Campsite Selector</title>
      </Head>

      <Navbar />
      <Container>

        <main>
          <h1>Reserve Your Campsite</h1>
          <h2>Choose Your Campsite Features</h2>

          <form>
            <CampsiteSelector onSelectionChange={updateSelectedCampsiteChoice} choices={campsiteChoices} selectedIndex={selectedCampsiteChoice} />

            <h3>Available Sites</h3>

            <AvailableSites />

            <Button text="Continue With Reservation" />
          </form>
        </main>
      </Container>
    </>
  );
}
