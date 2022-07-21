import { Row, Col, Container } from "react-bootstrap"

const FooterContainer: React.FC = () => {

    return(
        <Container className="footer-container">
            <Row>
                <Col lg={4}>
                    <strong>Footer</strong>
                </Col>
            </Row>
        </Container>
    )
}

export default FooterContainer;