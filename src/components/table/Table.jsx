import React, { useState, useMemo } from "react";
import { Search, Download, Plus, Settings, RefreshCcw } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { useTranslation } from "react-i18next";
import * as XLSX from "xlsx";
import { apiUrl } from "../../config/api";

// Zod schema describing and validating all fields in the "Add Client" form modal
const addClientSchema = z.object({
  fullName: z.string().min(1),
  firstName: z.string().min(1),
  birthYear: z.number().min(1900),
  email: z.string().email("Invalid email").or(z.literal("")),
  phone: z.string().min(1).or(z.literal("")),
  address: z.string().or(z.literal("")),
  clientDocument: z.string().or(z.literal("")),
});

////////////////////////////////////////////////////////////
// Add Client Form
// ---------------------------------------------------------
// This component renders a modal dialog that lets the user
// create a new client. It:
// - Uses react-hook-form with a Zod schema for validation
// - Submits the data to the backend API
// - Shows success / error toasts
// - Refreshes the table data via the onDataUpdate callback
// - Closes itself when the user clicks outside the modal
////////////////////////////////////////////////////////////
const AddClientForm = ({ setShowAddClientModal, onDataUpdate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(addClientSchema),
    defaultValues: {
      fullName: "",
      firstName: "",
      birthYear: 0,
      email: "",
      phone: "",
      address: "",
      clientDocument: "",
    },
  });

  const currentDateTime = new Date().toLocaleString();

  // Handle form submit: send data to API and refresh table on success
  const onSubmit = async (data) => {
    const response = await fetch(apiUrl("/api/clients"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      }
    );
    if (response.ok) {
      toast.success("Client added successfully", {
        description: (
          <span style={{ color: "var(--muted-foreground)" }}>
            {currentDateTime}
          </span>
        ),
        style: {
          color: "#22c55e", // green-500 color
        },
      });
      reset();
      setShowAddClientModal(false);

      // Refresh data without page reload
      const refreshResponse = await fetch(apiUrl("/api/clients"), {
        credentials: "include",
      });
      if (refreshResponse.ok) {
        const newData = await refreshResponse.json();
        onDataUpdate(newData);
      }
    } else {
      toast.error("Failed to add client", {
        description: (
          <span style={{ color: "var(--muted-foreground)" }}>
            {currentDateTime}
          </span>
        ),
        style: {
          color: "#ef4444", // red-500 color
        },
      });
    }
  };

  // Close the modal if the user clicks on the semi-transparent overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowAddClientModal(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Add Client</h2>
          <button
            onClick={() => setShowAddClientModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:!grid md:!grid-cols-2 gap-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Full Name*</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              {...register("fullName")}
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">
                {errors.fullName.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              First Name* (có dấu)
            </label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              {...register("firstName")}
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Birth Year*
            </label>
            <input
              type="number"
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              {...register("birthYear", { valueAsNumber: true })}
            />
            {errors.birthYear && (
              <span className="text-red-500 text-sm">
                {errors.birthYear.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              {...register("phone")}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                {errors.phone.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              {...register("address")}
            />
            {errors.address && (
              <span className="text-red-500 text-sm">
                {errors.address.message}
              </span>
            )}
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">
              Client Document
            </label>
            <textarea
              className="w-full border rounded px-3 py-2 text-sm min-h-[100px] resize-y focus:outline-none focus:ring-1 focus:ring-blue-400"
              {...register("clientDocument")}
            />
            {errors.clientDocument && (
              <span className="text-red-500 text-sm">
                {errors.clientDocument.message}
              </span>
            )}
          </div>
          <div className="col-span-2 flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={() => setShowAddClientModal(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add Client
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

////////////////////////////////////////////////////////////
// Pagination
// ---------------------------------------------------------
// Stateless pagination control used by the main Table:
// - Shows page numbers with optional "..." gaps
// - Disables boundary buttons when on first / last page
// - Delegates page changes to the parent via handlePageChange
////////////////////////////////////////////////////////////
const Pagination = ({
  currentPage,
  totalNumberOfPages,
  handlePageChange,
  maxPageNumbers = 5,
}) => {
  // Build an array of all page indices e.g. [1, 2, 3, ... totalNumberOfPages]
  const pageNumbers = Array.from(
    { length: totalNumberOfPages },
    (_, index) => index + 1
  );

  // Compute the list of page labels to show (numbers and "..." separators)
  const renderPageNumbers = () => {
    if (totalNumberOfPages <= maxPageNumbers) {
      return pageNumbers;
    }

    const middleIndex = Math.floor(maxPageNumbers / 2);

    if (currentPage <= middleIndex) {
      return [
        ...pageNumbers.slice(0, maxPageNumbers - 1),
        "...",
        totalNumberOfPages,
      ];
    } else if (currentPage >= totalNumberOfPages - middleIndex) {
      return [1, "...", ...pageNumbers.slice(-maxPageNumbers + 1)];
    } else {
      const startPage = currentPage - middleIndex + 1;
      const endPage = currentPage + middleIndex - 1;
      return [
        1,
        "...",
        ...pageNumbers.slice(startPage, endPage),
        "...",
        totalNumberOfPages,
      ];
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm">
      <div className="mb-2 sm:mb-0">
        Showing page {currentPage} of {totalNumberOfPages}
      </div>
      <ul className="flex space-x-1">
        <li>
          <button
            className={`px-3 py-1 rounded border ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
        </li>
        {renderPageNumbers().map((pageNumber, index) => (
          <li key={index}>
            {pageNumber === "..." ? (
              <span className="px-3 py-1 text-gray-400">...</span>
            ) : (
              <button
                className={`px-3 py-1 rounded border ${
                  currentPage === pageNumber
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            )}
          </li>
        ))}
        <li>
          <button
            className={`px-3 py-1 rounded border ${
              currentPage === totalNumberOfPages
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
            onClick={() => handlePageChange(totalNumberOfPages)}
            disabled={currentPage === totalNumberOfPages}
          >
            {">"}
          </button>
        </li>
      </ul>
    </div>
  );
};

////////////////////////////////////////////////////////////
// Table
// ---------------------------------------------------------
// High–level client table component responsible for:
// - Local text search across all visible columns
// - Remote search in the database by query string
// - Sorting, pagination, and adjustable page size
// - Column width persistence while resizing
// - Triggering full data download as an Excel file
// - Opening the "Add Client" modal and refreshing data
////////////////////////////////////////////////////////////
const Table = ({ headers, data, isLoading, loadingTag, onDataUpdate, onRefreshData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [searchDatabase, setSearchDatabase] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortColumn, setSortColumn] = useState(headers[3].column);
  const [sortDirection, setSortDirection] = useState("desc");
  const [showAddClientModal, setShowAddClientModal] = useState(false);
  const [columnWidths, setColumnWidths] = useState({});
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [isLoadingSave, setIsLoadingSave] = useState(false);
  const { t } = useTranslation();

  // Filter the in-memory data based on the local search box (searches across all headers)
  const filteredData = useMemo(() => {
    return data.filter((item) =>
      headers.some((header) =>
        String(item[header.column] ?? "")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
    );
  }, [data, headers, searchValue]);

  // Number of pages after filtering using the current itemsPerPage value
  const totalNumberOfPages = Math.ceil(filteredData.length / itemsPerPage);

  // When a new page is selected from the pagination component
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Set initial widths for columns based on optional header.initialWidth
  React.useEffect(() => {
    const initialWidths = {};
    headers.forEach((header) => {
      if (header.initialWidth) {
        initialWidths[header.column] = header.initialWidth;
      }
    });
    setColumnWidths(initialWidths);
  }, [headers]);

  // Toggle sort direction if the same column is clicked, otherwise switch sort column
  const handleSortColumnChange = (column) => {
    if (sortColumn === column) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  // Local (client-side) search input handler
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    setCurrentPage(1);
  };

  // Trigger a server-side search against the clients API using the searchDatabase value
  const handleSearchDatabase = async () => {
    const fetchData = async () => {
      const response = await fetch(
        apiUrl(`/api/clients?search=${encodeURIComponent(searchDatabase)}`),
        { credentials: "include" }
      );
      if (response.ok) {
        const newData = await response.json();
        onDataUpdate(newData);
      } else {
        console.log(response);
        console.error("Failed to fetch data");
      }
    };
    setIsLoadingSave(true);
    await fetchData();
    setCurrentPage(1);
    setIsLoadingSave(false);
  };

  // Open the Add Client modal
  const handleAddClient = () => {
    console.log("Add client");
    setShowAddClientModal(true);
  };

  // Update stored width for a given column when user resizes header
  const handleColumnResize = (column, width) => {
    setColumnWidths((prev) => ({
      ...prev,
      [column]: width,
    }));
  };

  // Fetch *all* clients from the API and export them to an .xlsx file using SheetJS
  const downloadFullData = async () => {
    try {
      const response = await fetch(apiUrl("/api/clients?mode=all"), {
        credentials: "include",
      });
      const data = await response.json();

      // Create a worksheet
      const ws = XLSX.utils.json_to_sheet(data);

      // Create a workbook
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Clients");

      // Generate Excel file
      XLSX.writeFile(wb, "clients_data.xlsx");

      toast.success("Data downloaded successfully", {
        description: "Excel file has been downloaded",
        style: {
          color: "#22c55e",
        },
      });
    } catch (error) {
      console.error("Error downloading data:", error);
      toast.error("Failed to download data", {
        description: "Please try again later",
        style: {
          color: "#ef4444",
        },
      });
    }
  };

  return (
    <div className="w-full p-4 relative">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-700 mt-4">
        Client Table
      </h1>
      {/* Top Controls */}
      <div className="flex justify-end mb-2">
        <button
          className="flex items-center justify-center gap-2 bg-blue-400 text-white px-2 py-1 rounded-md hover:bg-blue-500 transition-all duration-200 shadow-sm border border-blue-200"
          onClick={onRefreshData}
        >
          <RefreshCcw className="w-4 h-4" />
        </button>
      </div>
      <div className="flex justify-between items-center gap-4 mb-4">
        {/* Items per page */}
        <div className="flex items-center space-x-1">
          <label className="text-sm text-gray-700 mb-0 leading-none align-middle">
            Show
          </label>
          <select
            className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 appearance-none align-middle"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(parseInt(e.target.value, 10));
              setCurrentPage(1);
            }}
          >
            {[5, 10, 25, 50, 100].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <span className="text-sm text-gray-700 align-middle">entries</span>
        </div>

        {/* Search */}
        <div className="flex items-center space-x-1">
          <div className="relative md:w-40 lg:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              className="w-full border rounded pl-10 pr-3 py-1 text-sm"
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search all columns"
            />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevents page reload
              handleSearchDatabase();
            }}
            className="relative md:w-40 lg:w-64"
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              className="w-full border rounded pl-10 pr-3 py-1 text-sm"
              type="text"
              value={searchDatabase}
              onChange={(e) => setSearchDatabase(e.target.value)}
              placeholder="Search database"
            />
          </form>
        </div>
      </div>

      {/* Add button */}
      <div className="flex justify-end mb-4">
        <button
          className="bg-blue-400 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-500"
          onClick={handleAddClient}
        >
          <Plus className="w-4 h-4" />
          Add Client
        </button>
      </div>

      <span className="text-sm text-gray-400 italic">
        {t("addClientFormNote")}
      </span>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-sm">
          <TableHeader
            headers={headers}
            onSortColumnChange={handleSortColumnChange}
            sortColumn={sortColumn}
            sortDirection={sortDirection}
            columnWidths={columnWidths}
            onColumnResize={handleColumnResize}
          />
          <TableBody
            headers={headers}
            data={filteredData}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            sortColumn={sortColumn}
            sortDirection={sortDirection}
            isLoading={isLoading}
            loadingTag={loadingTag}
            onDataUpdate={onDataUpdate}
            columnWidths={columnWidths}
            isLoadingSave={isLoadingSave}
            setIsLoadingSave={setIsLoadingSave}
          />
        </table>
      </div>

      {/* Loading Tag (extra) */}
      {(isLoading || isLoadingSave) && (
        <div className="text-center text-sm text-gray-500 mt-4">
          {loadingTag}
        </div>
      )}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalNumberOfPages={totalNumberOfPages}
        handlePageChange={handlePageChange}
      />

      {/* Add Client Modal */}
      {showAddClientModal && (
        <AddClientForm
          setShowAddClientModal={setShowAddClientModal}
          onDataUpdate={onDataUpdate}
        />
      )}

      {/* Tools tab */}
      <div className="flex justify-end mb-4">
        {/* Settings Menu */}
        {showSettingsMenu && (
          <div className="fixed bottom-28 right-10 flex flex-col gap-4 z-50">
            <button
              className="bg-blue-300 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all transform hover:scale-110"
              onClick={async () => {
                setIsLoadingSave(true);
                await downloadFullData();
                setIsLoadingSave(false);
              }}
            >
              <Download className="w-4 h-4" />
            </button>
            {/* <button
              className="bg-blue-300 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all transform hover:scale-110"
              onClick={() => {
                // Add functionality for the second button here
                console.log("File text clicked");
              }}
            >
              <FileText className="w-4 h-4" />
            </button> */}
          </div>
        )}
        <button
          className="bg-blue-300 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-400 fixed bottom-10 right-10 z-50 transition-transform hover:rotate-90"
          onClick={() => setShowSettingsMenu(!showSettingsMenu)}
        >
          <Settings className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Table;
