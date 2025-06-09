import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { ArrowUpAZ, ArrowDownAZ, Plus } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const addClientSchema = z.object({
  fullName: z.string().min(1),
  firstName: z.string().min(1),
  birthYear: z.number().min(1900),
  email: z.string().email("Invalid email").or(z.literal("")),
  phone: z.string().min(1).or(z.literal("")),
  address: z.string().or(z.literal("")),
  clientDocument: z.string().or(z.literal("")),
});

const AddClientForm = ({ setShowAddClientModal }) => {
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
    const response = await fetch("http://localhost:5000/api/clients", {
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
    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={handleOverlayClick}>
      <div className="bg-white p-4 rounded-md" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-4">Add Client</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:!grid md:!grid-cols-2 gap-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Full Name*</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-1 text-sm"
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
              className="w-full border rounded px-3 py-1 text-sm"
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
              className="w-full border rounded px-3 py-1 text-sm"
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
              className="w-full border rounded px-3 py-1 text-sm"
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
              className="w-full border rounded px-3 py-1 text-sm"
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
              className="w-full border rounded px-3 py-1 text-sm"
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
              className="w-full border rounded px-3 py-1 text-sm min-h-[100px] resize-y"
              {...register("clientDocument")}
            />
            {errors.clientDocument && (
              <span className="text-red-500 text-sm">
                {errors.clientDocument.message}
              </span>
            )}
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add Client
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const TableHeader = ({
  headers,
  onSortColumnChange,
  sortColumn,
  sortDirection,
  columnWidths = {},
  onColumnResize = (column, width) => {},
}) => {
  const [resizingColumn, setResizingColumn] = useState(null);
  const [startX, setStartX] = useState(0);
  const [startWidth, setStartWidth] = useState(0);

  const handleHeaderClick = (column) => {
    onSortColumnChange(column);
  };

  const handleResizeStart = (e, column) => {
    e.preventDefault();
    setResizingColumn(column);
    setStartX(e.pageX);
    setStartWidth(columnWidths[column] || 150); // Default width if not set
  };

  const handleResizeMove = (e) => {
    if (!resizingColumn) return;

    const diff = e.pageX - startX;
    const newWidth = Math.max(50, startWidth + diff); // Minimum width of 50px
    onColumnResize(resizingColumn, newWidth);
  };

  const handleResizeEnd = () => {
    setResizingColumn(null);
  };

  React.useEffect(() => {
    if (resizingColumn) {
      window.addEventListener('mousemove', handleResizeMove);
      window.addEventListener('mouseup', handleResizeEnd);
      return () => {
        window.removeEventListener('mousemove', handleResizeMove);
        window.removeEventListener('mouseup', handleResizeEnd);
      };
    }
  }, [resizingColumn, startX, startWidth]);

  return (
    <thead className="bg-gray-100">
      <tr>
        {headers.map((header) => (
          <th
            key={header.column}
            className="px-4 py-2 text-left cursor-pointer select-none border-r last:border-r-0 border-gray-200 relative"
            style={{ width: columnWidths[header.column] || 'auto' }}
            onClick={() => handleHeaderClick(header.column)}
          >
            <div className="flex items-center justify-between">
              {header.label}
              <span className="absolute right-1">
                {sortDirection === "desc" && (
                  <ArrowUpAZ
                    className={`w-4 h-4 ${
                      sortColumn === header.column
                        ? "text-blue-500"
                        : "text-gray-400"
                    }`}
                  />
                )}
                {sortDirection === "asc" && (
                  <ArrowDownAZ
                    className={`w-4 h-4 ${
                      sortColumn === header.column
                        ? "text-blue-500"
                        : "text-gray-400"
                    }`}
                  />
                )}
              </span>
            </div>
            <div
              className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-blue-500"
              onMouseDown={(e) => handleResizeStart(e, header.column)}
            />
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableBody = ({
  headers,
  data,
  currentPage,
  itemsPerPage,
  sortColumn,
  sortDirection,
  isLoading,
  loadingTag,
  onDataUpdate,
  columnWidths = {},
}) => {
  const [editingCell, setEditingCell] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [highlightedRowId, setHighlightedRowId] = useState(null);

  const currentDateTime = new Date().toLocaleString();

  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const sortedData = [...data].sort((a, b) => {
    const valA = a[sortColumn];
    const valB = b[sortColumn];

    if (valA < valB) return sortDirection === "asc" ? -1 : 1;
    if (valA > valB) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const paginatedData = sortedData.slice(startIdx, endIdx);

  const handleCellClick = (itemId, column, value) => {
    if (column === "clientId") {
      setHighlightedRowId(highlightedRowId === itemId ? null : itemId);
      console.log(highlightedRowId);
      return;
    }
    if (column === "updatedAt") {
      return;
    }
    console.log("Cell clicked:", { itemId, column, value }); // Debug log
    setEditingCell({ itemId, column });
    setEditValue(value?.toString() || "");
  };

  const handleInputChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleInputBlur = () => {
    setEditingCell(null);
  };

  const handleInputKeyDown = async (e, item) => {
    if (e.key === "Enter") {
      setEditingCell(null);
      // update cell value
      console.log(editValue);

      try {
        const response = await fetch(`http://localhost:5000/api/clients`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: item.id,
            [editingCell?.column]: editValue,
          }),
        });

        if (response.ok) {
          // update the data in the UI
          const updatedData = data.map((row) =>
            row.id === item.id
              ? { ...row, [editingCell?.column]: editValue }
              : row
          );
          onDataUpdate(updatedData);

          // show success toast
          toast.success("Client info updated successfully", {
            description: (
              <span style={{ color: "var(--muted-foreground)" }}>
                {currentDateTime}
              </span>
            ),
            style: {
              color: "#22c55e", // green-500 color
            },
          });
        } else {
          toast.error(
            "Failed to update client info. Please note that clientId and email should be unique.",
            {
              description: (
                <span style={{ color: "var(--muted-foreground)" }}>
                  {currentDateTime}
                </span>
              ),
              style: {
                color: "#ef4444", // red-500 color
              },
            }
          );
        }
      } catch (error) {
        console.error("Error in /api/clients:", error);
        toast.error(
          "Failed to update client info. Please note that clientId and email should be unique.",
          {
            description: (
              <span style={{ color: "var(--muted-foreground)" }}>
                {currentDateTime}
              </span>
            ),
            style: {
              color: "#ef4444", // red-500 color
            },
          }
        );
      }
    }
  };

  return (
    <tbody>
      {!isLoading ? (
        paginatedData.map((item) => (
          <tr
            key={item.id}
            className={`${
              highlightedRowId === item.id
                ? "!bg-blue-50 hover:!bg-blue-100"
                : "odd:bg-white even:bg-gray-50 hover:bg-gray-100"
            } transition-colors duration-200`}
          >
            {headers.map((header) => {
              const isEditing =
                editingCell?.itemId === item.id &&
                editingCell?.column === header.column;

              return (
                <td
                  key={header.column}
                  className={`px-4 py-2 border-r last:border-r-0 border-gray-200 cursor-pointer ${
                    highlightedRowId === item.id
                      ? "!bg-blue-50 hover:!bg-blue-100"
                      : ""
                  }`}
                  onClick={() =>
                    handleCellClick(item.id, header.column, item[header.column])
                  }
                >
                  {isEditing ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      onKeyDown={(e) => handleInputKeyDown(e, item)}
                      className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
                      autoFocus
                    />
                  ) : (
                    <div className="min-h-[24px]">
                      {header.column === "updatedAt"
                        ? new Date(item[header.column]).toLocaleDateString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                              second: "2-digit",
                              hour12: false,
                            }
                          )
                        : header.column === "clientDocument"
                        ? (
                            <div className="whitespace-pre-wrap break-words">
                              {item[header.column]?.toString() || ""}
                            </div>
                          )
                        : item[header.column]?.toString() || ""}
                    </div>
                  )}
                </td>
              );
            })}
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={headers.length} className="text-center px-4 py-4">
            {loadingTag}
          </td>
        </tr>
      )}
    </tbody>
  );
};

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
        `http://localhost:5000/api/clients?search=${searchDatabase}`
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

  const handleAddClientSubmit = (e) => {
    e.preventDefault();
    console.log("Add client");
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
        <AddClientForm setShowAddClientModal={setShowAddClientModal} />
      )}
    </div>
  );
};

export default Table;
