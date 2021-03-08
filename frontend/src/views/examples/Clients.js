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
  Container,
} from "reactstrap";
// core components
import Header from "../../components/Headers/Header.js";
import ClientsTable from "./ClientsTable.js";

const Tables = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="my--7" fluid>
        {/* Table */}
        <ClientsTable />
      </Container>
    </>
  );
};

export default Tables;
