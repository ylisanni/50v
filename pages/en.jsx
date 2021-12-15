import Header from '../components/header'
import { Container, Row, Card, Button, Navbar } from 'react-bootstrap'
import HeadSection from '../components/head-section'

export default function Home() {
  return (
    <Container fluid className="main-container">
      <HeadSection></HeadSection>
      <Header></Header>
      <div>

        <p>Welcome to celebrate the 50th anniversary of our cherished student organization Asteriski ry on Saturday 26.02.2022. The annual party will be preceded by the annual party week 21.2.-24.2. The schedule can be found here</p>

        <p>Asteriski ry celebrates its 50th anniversary with the grand annual ball on Saturday 26th of February 2022. The annual ball begins with the cocktail party, which is hosted in the lounge of Agora building at the University of Turku. The cocktail party is followed by the main event at Turku VPK house and the afterparty is held in a secret location. Traveling between the destinations will be done via organized bus rides. </p>

        <p>On the following morning on Sunday 27th of February 2022 the herring breakfast will be taking place in a secret location. Transportation to the herring breakfast will leave from X at X. </p>

        <p>The dress code of the annual ball is a white tie or dark lounge suit for men and an evening gown for women as well as academic medals or ribbons. </p>

        <h2>The program</h2>

        <h3>Cocktail Party</h3>

        <p>The cocktail party will be held in the lounge of Agora (Vesilinnantie 3, Turku) starting at 13:37. Reception of greetings will begin at 14:00. The cocktail party consists of the welcome toast, appetizers, and greetings from invited guests. All participants of the annual ball are welcome to attend the event. Transportation to the main event will be arranged.</p> 


        <h3>Main Event</h3>

        <p>The main event will take place in Turku VPK house (Eskelinkatu 5, 20100 Turku). Doors open at xx:xx and the event will start at 18:00. During the main event, we will honor our cherished student organization with speeches and greetings. We will enjoy a three-course dinner and acknowledge the people who have taken part in shaping Asteriski into what it is today. The dinner is followed by a ballroom dance. </p>

        <h3>Afterparty</h3>

        <p>Bus transportation will take us to the afterparty in a secret location after the main event has ended. </p>

        <h3>Herring Breakfast</h3>

        <p>The herring breakfast aka “sillis” is organized the following day on Sunday 27th of February 2022. In a mysterious location, you will be welcomed with plentiful breakfast and drinks! You don’t want to miss this!</p>
        <p>The dress code is more relaxed, theme-appropriate outfits or overalls are accepted. We recommend bringing a swimsuit and a towel. </p>

        <p>Transportation will leave from X at X. Be on time!</p>
      </div>
      <div id="sponsorit">
        <h1>Sponsorit</h1>
        <ul>
          <li>Nitor</li>
          <li>Mehiläinen</li>
          <li>Sofokus</li>
          <li>Solita</li>
          <li>ATR soft</li>
        </ul>
      </div>
    </Container>
  )
}
