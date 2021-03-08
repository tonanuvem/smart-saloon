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
import React, { useState, useRef } from "react";

// reactstrap components
import {
    Card,
    CardHeader,
    Row,
    Container,
} from "reactstrap";

// core components
import Header from "../../components/Headers/HeaderAlt.js";

const Tables = () => {
    const [status, setStatus] = useState('');
    const form = useRef(null);

    const submit = e => {
        e.preventDefault();

        const data = new FormData(form.current)
        fetch('http://localhost:3001/api/employees', { method: 'POST', body: data })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    if (result.status === "success") {
                        setStatus("success");
                    }
                }
            )
    }

    return (
        <>
            <Header />
            {/* Page content */}
            <Container className="mt--8" fluid>
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">Cadastro do novo funcionário</h3>
                            </CardHeader>
                            <form className="px-4" ref={form} onSubmit={submit}>
                                <div className="form-group">
                                    <label htmlFor="name">Nome completo</label>
                                    <input type="text" id="name" name="name" className="form-control" placeholder="Ex: José Almeida" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Endereço</label>
                                    <input type="text" id="address" name="address" className="form-control" placeholder="Ex: Av. Paulista 997 - São Paulo" required />
                                </div>
                                {status === 'success' ? (
                                    <>
                                        <div className="alert alert-success" role="alert">
                                            Cadastrado com sucesso!
                                        </div>
                                        <div className="form-group">
                                            <a href="employees" className="btn btn-default">Visualizar Funcionários</a>
                                        </div>
                                    </>
                                ) : (
                                        <div className="form-group">
                                            <button className="btn btn-success btn-lg">Cadastrar</button>
                                        </div>
                                    )}
                            </form>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Tables;
