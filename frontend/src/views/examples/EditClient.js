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
    Container,
    Row,
} from "reactstrap";
// core components
import Header from "../../components/Headers/Header.js";

const Tables = () => {
    const [clients, setClients] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3001/api/clients")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    console.log(result);
                    setClients(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setClients('Nada encontrado');
                }
            )
    }, [])

    return (
        <>
            <Header />
            {/* Page content */}
            <Container className="mt--7 mb-4" fluid>
                {/* Table */}
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">Clientes</h3>
                            </CardHeader>
                            <form className="p-4">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">Example select</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlSelect2">Example multiple select</label>
                                    <select multiple className="form-control" id="exampleFormControlSelect2">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Example textarea</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </form>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Tables;
