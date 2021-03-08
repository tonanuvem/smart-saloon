/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const Header = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="12" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <a href="clients-add">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle tag="h2" className="text-muted mt-2 mb-0">
                          Cadastrar Cliente
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="ni ni-single-02" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  </a>
                </Card>
              </Col>
              <Col lg="12" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <a href="employees-add">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle tag="h2" className="text-muted mt-2 mb-0">
                            Cadastrar Funcionário
                        </CardTitle>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i className="ni ni-scissors" />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </a>
                </Card>
              </Col>
              <Col lg="12" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <a href="appointments-add">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle tag="h2" className="text-muted mt-2 mb-0">
                            Realizar Agendamento
                        </CardTitle>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                            <i className="ni ni-calendar-grid-58" />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </a>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
