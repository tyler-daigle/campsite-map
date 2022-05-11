import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Container from '../components/Container';
import Button from '../components/Button';
import CampsiteSelector from '../components/CampsiteSelector';
import AvailableSites from '../components/AvailableSites';
import Navbar from '../components/Navbar';

import { useState } from "react";

export default function Home() {
  const [campsiteChoices, setCampsiteChoices] = useState([
    { id: 0, text: "Full Hookup" },
    { id: 1, text: "Water, Electric, Sewer" },
    { id: 2, text: "Riverfront - Water, Electric" },
    { id: 3, text: "Water, Electric" },
    { id: 4, text: "No Hookup" },
  ]);

  const [selectedCampsiteChoice, setSelectedCampsiteChoice] = useState(2);

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
            <CampsiteSelector onSelectionChange={setSelectedCampsiteChoice} choices={campsiteChoices} selectedIndex={selectedCampsiteChoice} />

            <h3>Available Sites</h3>

            <AvailableSites />

            <Button text="Continue With Reservation" />
          </form>
        </main>
      </Container>
    </>
  );
}
