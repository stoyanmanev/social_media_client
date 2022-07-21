import { Row, Col, Container } from "react-bootstrap"

const HeaderContainer: React.FC = () => {

    return(
        <Container className="header-container">
            <Row>
                <Col lg={2}>
                    <img
                    src="/images/layout/winku.png"
                    alt="Winku Social Network Toolkit"
                    width={94}
                    height={34}
                  />
                </Col>
            </Row>
        </Container>
    )
}

export default HeaderContainer;