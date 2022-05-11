import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Container from '../components/Container';
import Button from '../components/Button';
import CampsiteSelector from '../components/CampsiteSelector';
import AvailableSites from '../components/AvailableSites';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Woodland Acres Campsite Selector</title>
      </Head>

      <Container>
        <Navbar />

        <main>
          <h1>Reserve Your Campsite</h1>
          <h2>Choose Your Campsite Features</h2>

          <CampsiteSelector />

          <h3>Available Sites</h3>

          <AvailableSites />

          <Button text="Continue With Reservation" />
        </main>
      </Container>
    </>
  );
}
