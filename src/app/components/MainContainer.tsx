import { Row, Col, Container } from "react-bootstrap"

const MainContainer: React.FC = () => {

    return(
        <Container className="main-container">
            <Row>
                <Col lg={4}>
                    <strong>Main</strong>
                </Col>
            </Row>
        </Container>
    )
}

export default MainContainer;