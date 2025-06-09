import { useEffect, useState } from "react";
import Table from "../Table";
import useScript from "../../functions/useScript";
import scriptUrlList from "../../scripts/scriptUrl";
import scriptTextList from "../../scripts/scriptText";
import useLink from "../../functions/useLink";

const Admin = () => {
  useScript(scriptUrlList, scriptTextList)
  useLink("css/util.css", "app")
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]); // Initial data

  const fetchClients = async () => {
    const response = await fetch("https://nhakhoamyduc-api.onrender.com/api/clients");
    const data = await response.json();
    setTableData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div>
      <Table
        headers={[
          { column: "clientId", label: "Client ID" },
          { column: "fullName", label: "Full Name" },
          { column: "firstName", label: "First Name" },
          { column: "updatedAt", label: "Updated At" },
          { column: "birthYear", label: "Birth Year" },
          { column: "email", label: "Email" },
          { column: "phone", label: "Phone" },
          { column: "address", label: "Address" },
          { column: "clientDocument", label: "Client Document" },
        ]}
        data={tableData}
        isLoading={loading}
        loadingTag={<h1>Loading...</h1>}
        onDataUpdate={setTableData}
      />
    </div>
  );
};

export default Admin;
