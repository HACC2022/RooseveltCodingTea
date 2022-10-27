import Head from 'next/head'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import rd3 from 'react-d3-library'
import { LineChartComponent } from './components/LineChart'


export default function Home() {
  return (
    <div>
      <Container style={{backgroundColor: "#ADD8E6"}}>
        <h1>D3 Display</h1>
        <LineChartComponent />


      </Container>
     
    </div>
  )
}
