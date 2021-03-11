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
  const [clients, setClients] = useState([]);
  const [clientEditStatus, setClientEditStatus] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);

  const [clientEdit, setClientEdit] = useState({
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

    fetch(`http://localhost:3001/api/clients/${clientEdit.id}`, 
    { 
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: clientEdit.name, address: clientEdit.address, }) 
    })
      .then(res => res.json())
      .then(
        (result) => {
          if (result.status === "success") {
            setStatus("success");
            searchClient(clientEdit.id);
            loadAll();
          }
        }
      )
  }

  const toggle = (id) => {
    if (modalStatus === false) {
      searchClient(id);
      setModal(!modal);
      setModalStatus(true);
    } else {
      setModal(!modal);
      setModalStatus(false);
      setStatus(false);
      setClientEditStatus(false);
    }
  }

  const deleteClient = (id) => {
    fetch(`http://localhost:3001/api/clients/${id}`, { method: 'DELETE', body: '' })
      .then(res => res.json())
      .then(
        (result) => {
          if (result.status === "success") {
            loadAll();
          }
        }
      )
  }

  const searchClient = (id) => {
    fetch(`http://localhost:3001/api/clients/${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setClientEdit({
            id: result.id,
            name: result.name,
            address: result.address
          });
          setClientEditStatus(true);
        },
        (error) => {
          setIsLoaded(true);
          setIsError(true);
          setClientEdit('Nada encontrado');
        }
      )
  }

  useEffect(() => loadAll(), [])

  const loadAll = () => {
    setIsLoaded(false);
    fetch("http://localhost:3001/api/clients")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setClients(result);
        },
        (error) => {
          setIsLoaded(true);
          setIsError(true);
          setClients('Nada encontrado');
        }
      )
  }

  const handleChange = (e) => {
    setClientEdit(state => (
      { ...state, [e.target.name]: e.target.value }
    ));
  };

  return (
    <>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <h3 className="mb-0">Clientes</h3>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Cliente</th>
                  <th scope="col">Endereço</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {isLoaded && !isError ? (
                  clients.map(client => (
                    <tr key={client.id}>
                      <th scope="row">
                        <Media className="align-items-center">
                          <Media>
                            <span className="mb-0 text-sm">
                              {client.name}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>{client.address}</td>
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
                            <DropdownItem onClick={() => toggle(client.id)}>
                              Editar
                            </DropdownItem>
                            <DropdownItem onClick={() => deleteClient(client.id)}>
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
          <ModalHeader toggle={toggle}>Editar Cliente</ModalHeader>
          <form className="px-4" ref={form} onSubmit={submit}>
            <ModalBody>
              {clientEditStatus === true ? (
                <>
                  <div className="form-group">
                    <label htmlFor="name">Nome completo</label>
                    <input type="text" id="name" name="name" className="form-control" placeholder="Ex: José Almeida" value={clientEdit.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Endereço</label>
                    <input type="text" id="address" name="address" className="form-control" placeholder="Ex: Av. Paulista 997 - São Paulo" value={clientEdit.address} onChange={handleChange} required />
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
