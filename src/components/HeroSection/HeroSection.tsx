import React from 'react'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import './HeroSection.scss'
interface Props {
    title: String
}

const HeroSection: React.FC<Props> = ({title}: Props) => {
    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                    {title && <h2>{title}</h2>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default HeroSection
