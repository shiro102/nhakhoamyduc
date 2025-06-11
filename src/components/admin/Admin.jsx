import { useEffect, useState } from "react";
import Table from "../table/Table";
import useScript from "../../functions/useScript";
import scriptUrlList from "../../scripts/scriptUrl";
import scriptTextList from "../../scripts/scriptText";
import useLink from "../../functions/useLink";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { LogOut } from "lucide-react";

const Admin = () => {
  useScript(scriptUrlList, scriptTextList);
  useLink("css/util.css", "app");
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]); // Initial data
  const navigate = useNavigate();

  const fetchClients = async () => {
    const response = await fetch(
      "https://nhakhoamyduc-api.onrender.com/api/clients"
    );
    const data = await response.json();
    setTableData(data);
    setLoading(false);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(
        "https://nhakhoamyduc-api.onrender.com/api/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (response.ok) {
        toast.success("Logged out successfully");
        navigate("/");
      } else {
        toast.error("Logout failed");
      }
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div>
      <div className="flex justify-start my-4 mx-4">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-700 px-4 py-2 rounded-md transition-all duration-200 shadow-sm border border-red-200"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
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
          {
            column: "clientDocument",
            label: "Patient Document",
            initialWidth: "700px",
          },
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
