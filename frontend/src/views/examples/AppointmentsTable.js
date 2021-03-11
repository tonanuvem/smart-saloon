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
import {
  Card,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Table,
  Row
} from "reactstrap";

const Tables = () => {
  const [appointments, setAppointments] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const deleteAppointment = (id) => {
    fetch(`http://localhost:3001/api/appointments/${id}`, { method: 'DELETE', body: '' })
      .then(res => res.json())
      .then(
        (result) => {
          if (result.status === "success") {
            loadAll();
          }
        }
      )
  }

  useEffect(() => loadAll(), []);

  const loadAll = () => {
    setIsLoaded(false);
    fetch("http://localhost:3001/api/appointments")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setAppointments(result);
        },
        (error) => {
          setIsLoaded(true);
          setIsError(true);
          setAppointments('Nada encontrado');
        }
      )
  }

  return (
    <>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <h3 className="mb-0">Agendamentos</h3>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Cliente</th>
                  <th scope="col">Funcionário</th>
                  <th scope="col">Data do Agendamento</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {isLoaded && !isError ? (
                  appointments.map(appointment => (
                    <tr key={appointment.id}>
                      <th scope="row">{appointment.name_client}</th>
                      <td>{appointment.name_employee}</td>
                      <td>{appointment.date_current}</td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#link"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem onClick={() => deleteAppointment(appointment.id)}>
                              Excluir
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  ))
                ) : (
                    <tr>
                      <td className="text-center" colSpan="3">
                        Carregando
                    </td>
                    </tr>
                  )}
              </tbody>
            </Table>
          </Card>
        </div>
      </Row>
    </>
  );
};

export default Tables;
