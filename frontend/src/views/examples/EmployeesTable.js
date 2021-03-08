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

// reactstrap components
import {
  Card,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Table,
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

const Tables = (props) => {
  const [status, setStatus] = useState('')
  const [employees, setEmployees] = useState([]);
  const [employeeEditStatus, setEmployeeEditStatus] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);

  const [employeeEdit, setEmployeeEdit] = useState({
    id: "",
    name: "",
    address: ""
  });

  const {
    className
  } = props;

  const form = useRef(null);

  const submit = e => {
    e.preventDefault();

    fetch(`http://localhost:3001/api/employees/${employeeEdit.id}`, 
    { 
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: employeeEdit.name, address: employeeEdit.address, }) 
    })
      .then(res => res.json())
      .then(
        (result) => {
          if (result.status === "success") {
            setStatus("success");
            searchEmployee(employeeEdit.id);
            loadAll();
          }
        }
      )
  }

  const toggle = (id) => {
    if (modalStatus === false) {
      searchEmployee(id);
      setModal(!modal);
      setModalStatus(true);
    } else {
      setModal(!modal);
      setModalStatus(false);
      setStatus(false);
      setEmployeeEditStatus(false);
    }
  }

  const deleteEmployee = (id) => {
    fetch(`http://localhost:3001/api/employees/${id}`, { method: 'DELETE', body: '' })
      .then(res => res.json())
      .then(
        (result) => {
          if (result.status === "success") {
            loadAll();
          }
        }
      )
  }

  const searchEmployee = (id) => {
    fetch(`http://localhost:3001/api/employees/${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setEmployeeEdit({
            id: result.id,
            name: result.name,
            address: result.address
          });
          setEmployeeEditStatus(true);
        },
        (error) => {
          setIsLoaded(true);
          setIsError(true);
          setEmployeeEdit('Nada encontrado');
        }
      )
  }

  useEffect(() => loadAll(), [])

  const loadAll = () => {
    setIsLoaded(false);
    fetch("http://localhost:3001/api/employees")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setEmployees(result);
        },
        (error) => {
          setIsLoaded(true);
          setIsError(true);
          setEmployees('Nada encontrado');
        }
      )
  }

  const handleChange = (e) => {
    setEmployeeEdit(state => (
      { ...state, [e.target.name]: e.target.value }
    ));
  };

  return (
    <>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <h3 className="mb-0">Employees</h3>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Employee</th>
                  <th scope="col">Endereço</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {isLoaded && !isError ? (
                  employees.map(employee => (
                    <tr key={employee.id}>
                      <th scope="row">
                        <Media className="align-items-center">
                          <Media>
                            <span className="mb-0 text-sm">
                              {employee.name}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>{employee.address}</td>
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
                            <DropdownItem onClick={() => toggle(employee.id)}>
                              Editar
                            </DropdownItem>
                            <DropdownItem onClick={() => deleteEmployee(employee.id)}>
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

      <div>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <form className="px-4" ref={form} onSubmit={submit}>
            <ModalBody>
              {employeeEditStatus === true ? (
                <>
                  <div className="form-group">
                    <label htmlFor="name">Nome completo</label>
                    <input type="text" id="name" name="name" className="form-control" placeholder="Ex: José Almeida" value={employeeEdit.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Endereço</label>
                    <input type="text" id="address" name="address" className="form-control" placeholder="Ex: Av. Paulista 997 - São Paulo" value={employeeEdit.address} onChange={handleChange} required />
                  </div>
                  {status === 'success' ? (
                    <>
                      <div className="alert alert-success" role="alert">
                        Editado com sucesso!
                    </div>
                    </>
                  ) : (
                      <></>
                    )}
                </>
              ) : (
                  <p>Carregando</p>
                )}
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

export default Tables;
