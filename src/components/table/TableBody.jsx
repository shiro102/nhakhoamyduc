import { useState, useEffect } from "react";
import { toast } from "sonner";

////////////////////////////////////////////////////////////
// Document Modal
////////////////////////////////////////////////////////////
const DocumentModal = ({
  isOpen,
  onClose,
  document,
  item,
  handleInputKeyDown,
  setEditValue,
}) => {
  const handleSave = () => {
    handleInputKeyDown({ key: "clientDocument" }, item);
    onClose();
  };

  const handleClose = () => {
    setEditValue(document); // Reset to original value
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-center z-[99999]"
      onClick={handleClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Patient Document for {item.fullName}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="mb-4">
          <textarea
            value={document}
            onChange={(e) => setEditValue(e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm min-h-[300px] resize-y focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="Enter client document details..."
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={handleClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

////////////////////////////////////////////////////////////
// Table Body
////////////////////////////////////////////////////////////
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
  const [documentModalOpen, setDocumentModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const currentDateTime = new Date().toLocaleString();

  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const sortedData = [...data].sort((a, b) => {
    const valA = a[sortColumn];
    const valB = b[sortColumn];

    // Handle null/undefined values
    if (valA == null) return sortDirection === "asc" ? -1 : 1;
    if (valB == null) return sortDirection === "asc" ? 1 : -1;

    // Check if values are numbers
    const numA = Number(valA);
    const numB = Number(valB);

    if (!isNaN(numA) && !isNaN(numB)) {
      // Numeric comparison
      return sortDirection === "asc" ? numA - numB : numB - numA;
    } else {
      // String comparison
      const strA = String(valA).toLowerCase();
      const strB = String(valB).toLowerCase();
      return sortDirection === "asc"
        ? strA.localeCompare(strB)
        : strB.localeCompare(strA);
    }
  });

  const paginatedData = sortedData.slice(startIdx, endIdx);

  const handleCellClick = (itemId, column, value, item) => {
    if (column === "clientId") {
      setHighlightedRowId(highlightedRowId === itemId ? null : itemId);
      return;
    }
    if (column === "updatedAt") {
      return;
    }
    if (column === "clientDocument") {
      setEditingCell({ itemId, column });
      setSelectedItem(item);
      setDocumentModalOpen(true);
      setEditValue(value?.toString() || "");
      return;
    }
    setEditingCell({ itemId, column });
    setEditValue(value?.toString() || "");
  };

  const handleInputChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleInputBlur = () => {
    // clientDocument will use modal, therefore it will be blur before submitting the form
    if (editingCell?.column !== "clientDocument") {
      setEditingCell(null);
    }
  };

  const handleInputKeyDown = async (e, item) => {
    // console.log("handleInputKeyDown", e, item);
    if (e.key === "Enter" || e.key === "clientDocument") {
      console.log(editingCell?.column);
      console.log(editValue);
      try {
        const response = await fetch(
          `https://nhakhoamyduc-api.onrender.com/api/clients`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: item.id,
              [editingCell?.column]: editValue,
            }),
          }
        );

        if (response.ok) {
          const updatedData = data.map((row) =>
            row.id === item.id
              ? { ...row, [editingCell?.column]: editValue }
              : row
          );
          onDataUpdate(updatedData);
          setEditingCell(null);

          toast.success("Client info updated successfully", {
            description: (
              <span style={{ color: "var(--muted-foreground)" }}>
                {currentDateTime}
              </span>
            ),
            style: {
              color: "#22c55e",
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
                color: "#ef4444",
              },
            }
          );
          setEditingCell(null);
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
              color: "#ef4444",
            },
          }
        );
      }
    }
  };

  const handleModalClose = () => {
    setDocumentModalOpen(false);
    setEditingCell(null);
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
                  style={{
                    overflow: "hidden",
                    wordBreak: "break-word",
                    whiteSpace: "normal",
                  }}
                  onClick={() =>
                    handleCellClick(
                      item.id,
                      header.column,
                      item[header.column],
                      item
                    )
                  }
                >
                  {isEditing ? (
                    header.column !== "clientDocument" && (
                      <input
                        type="text"
                        value={editValue}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        onKeyDown={(e) => handleInputKeyDown(e, item)}
                        className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
                        autoFocus
                      />
                    )
                  ) : (
                    <div className="min-h-[24px]">
                      {header.column === "updatedAt" ? (
                        new Date(item[header.column]).toLocaleDateString(
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
                      ) : header.column === "clientDocument" ? (
                        <div className="whitespace-pre-wrap break-words cursor-pointer hover:text-blue-500">
                          {item[header.column]?.toString()}
                        </div>
                      ) : (
                        item[header.column]?.toString() || ""
                      )}
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

      <DocumentModal
        isOpen={documentModalOpen}
        onClose={handleModalClose}
        document={editValue}
        item={selectedItem}
        handleInputKeyDown={handleInputKeyDown}
        setEditValue={setEditValue}
      />
    </tbody>
  );
};

export default TableBody;
