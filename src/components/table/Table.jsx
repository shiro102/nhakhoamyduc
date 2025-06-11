import React, { useState, useMemo, useEffect } from "react";
import { Search } from "lucide-react";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

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

  const onSubmit = async (data) => {
    const response = await fetch("https://nhakhoamyduc-api.onrender.com/api/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
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
      const refreshResponse = await fetch("https://nhakhoamyduc-api.onrender.com/api/clients");
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

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowAddClientModal(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={handleOverlayClick}>
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
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
////////////////////////////////////////////////////////////
const Pagination = ({
  currentPage,
  totalNumberOfPages,
  handlePageChange,
  maxPageNumbers = 5,
}) => {
  const pageNumbers = Array.from(
    { length: totalNumberOfPages },
    (_, index) => index + 1
  );

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
////////////////////////////////////////////////////////////
const Table = ({ headers, data, isLoading, loadingTag, onDataUpdate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [searchDatabase, setSearchDatabase] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortColumn, setSortColumn] = useState(headers[3].column);
  const [sortDirection, setSortDirection] = useState("desc");
  const [showAddClientModal, setShowAddClientModal] = useState(false);
  const [columnWidths, setColumnWidths] = useState({});

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      headers.some((header) =>
        String(item[header.column] ?? "")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
    );
  }, [data, headers, searchValue]);

  const totalNumberOfPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Set initial widths for columns
  React.useEffect(() => {
    const initialWidths = {};
    headers.forEach((header) => {
      if (header.initialWidth) {
        initialWidths[header.column] = header.initialWidth;
      }
    });
    setColumnWidths(initialWidths);
  }, [headers]);

  const handleSortColumnChange = (column) => {
    if (sortColumn === column) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    setCurrentPage(1);
  };

  const handleSearchDatabase = () => {
    const fetchData = async () => {
      const response = await fetch(
        `https://nhakhoamyduc-api.onrender.com/api/clients?search=${searchDatabase}`
      );
      if (response.ok) {
        const newData = await response.json();
        console.log(newData);
        onDataUpdate(newData);
      } else {
        console.log(response);
        console.error("Failed to fetch data");
      }
    };
    fetchData();
    setCurrentPage(1);
  };

  const handleAddClient = () => {
    console.log("Add client");
    setShowAddClientModal(true);
  };

  const handleColumnResize = (column, width) => {
    setColumnWidths(prev => ({
      ...prev,
      [column]: width
    }));
  };

  return (
    <div className="w-full p-4 relative">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-700 mt-4">
        Client Table
      </h1>

      {/* Top Controls */}
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
          className="bg-blue-400 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-500"
          onClick={handleAddClient}
        >
          <Plus className="w-4 h-4" />
          Add Client
        </button>
      </div>

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
          />
        </table>
      </div>

      {/* Loading Tag (extra) */}
      {isLoading && (
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
        <AddClientForm setShowAddClientModal={setShowAddClientModal} onDataUpdate={onDataUpdate} />
      )}
    </div>
  );
};

export default Table;
