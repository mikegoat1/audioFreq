import React, { useState, useEffect } from "react";
import { useAuth, user } from "../../utils/auth"
import API from "../../utils/axios/API"

import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import NavBar from "../../components/Navbar";
import PodCard from "../../components/PodCard";


function Home() {



    //setting our components initial state
    const [podcasts, setPodcasts] = useState([])
    const [podcast, setPodcast] = useState({})


    useEffect(() => {
        loadPodcast()
    }, [])
   

    function loadPodcast() {
        API.getDaPodcast()
          .then(users => {
            setPodcasts(users.data);
            setPodcast(users.data[0]);
            console.log(users.data[0])
          })
          .catch(err => console.log(err));
      }
    
      console.log(podcast.podcast)
      



    return (
        <div className="overflow-scroll" >
            <NavBar>
                Hello World
            </NavBar>
            <Container>
                <Row lg={3} >
                    <Col>
                        <PodCard title={podcast.title_original} image={podcast.image} />
                    </Col>
                    <Col>
                        <PodCard />
                    </Col>
                    <Col>
                        <PodCard />
                    </Col>
                    <Col>
                        <PodCard />
                    </Col>
                    <Col>
                        <PodCard />
                    </Col>
                    <Col>
                        <PodCard />
                    </Col>
                    <Col>
                        <PodCard />
                    </Col>

                </Row>
            </Container>
        </div>
    )
};

export default Home;