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
import React, { useState, useEffect } from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const Header = () => {
  const [clientsNumber, setClientsNumber] = useState([]);
  const [employeesNumber, setEmployeesNumber] = useState([]);

  useEffect(() => {
    let hClientsMount = true;
    let hEmployeesMount = true;
    setClientsNumber('Carregando');
    setEmployeesNumber('Carregando');
    fetch("http://localhost:3001/api/clients")
      .then(res => res.json())
      .then(
        (result) => {
          if (hClientsMount) {
            setClientsNumber(Object.keys(result).length);
            hClientsMount = false;
          }
        },
        (error) => {
          setClientsNumber('Nada encontrado');
        }
      )
      fetch("http://localhost:3001/api/employees")
        .then(res => res.json())
        .then(
          (result) => {
            if (hEmployeesMount) {
              setEmployeesNumber(Object.keys(result).length);
              hEmployeesMount = false;
            }
          },
          (error) => {
            setEmployeesNumber('Nada encontrado');
          }
        )
  }, [])

  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="12" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Clientes
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {clientsNumber}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="ni ni-single-02" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="12" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Funcionários
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {employeesNumber}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="ni ni-scissors" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="12" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Agendamentos
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">924</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="ni ni-calendar-grid-58" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
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
