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
import React, { useState, useEffect, useRef } from "react";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter } from "reactstrap";

const Header = (props) => {
  const [status, setStatus] = useState('')
  const [modal, setModal] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [clientField, setClientField] = useState([]);
  const [employeeField, setEmployeeField] = useState([]);

  const { className } = props;
  const form = useRef(null);

  const toggle = (id) => {
    if (modalStatus === false) {
      searchEmployee(id);
      setModal(!modal);
      setModalStatus(true);
    } else {
      setModal(!modal);
      setModalStatus(false);
      setStatus(false);
    }
  }

  const searchEmployee = (id) => {
  }



  const submit = (e) => {
    e.preventDefault();

    // fetch(`http://localhost:3001/api/employees/${employeeEdit.id}`,
    //   {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ name: employeeEdit.name, address: employeeEdit.address, })
    //   })
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       if (result.status === "success") {
    //         setStatus("success");
    //         searchEmployee(employeeEdit.id);
    //         loadAll();
    //       }
    //     }
    //   )
  }

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
                    <CardBody onClick={() => toggle()}>
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
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Realizar Agendamento</ModalHeader>
          <form className="px-4" ref={form} onSubmit={submit}>
            <ModalBody>
              <div className="form-group">
                <label htmlFor="name_client">Cliente</label>
                <select name="name_client" id="name_client" className="form-control" required>
                  <option value="">Carregando</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="name_employee">Funcionário</label>
                <select name="name_employee" id="name_employee" className="form-control" required>
                  <option value="">Carregando</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="date_current">Horário</label>
                <Datetime input={false}/>
              </div>
            </ModalBody>
            <ModalFooter>
              {status === 'success' ? (
                <> </>
              ) : (
                  <Button color="success">Salvar</Button>
                )}
              <Button color="secondary" onClick={toggle}>Voltar</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default Header;
