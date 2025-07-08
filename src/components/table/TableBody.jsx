import { useState } from "react";
import { toast } from "sonner";
import { Undo2, Eye, EyeOff } from "lucide-react";

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
        className="bg-white p-6 rounded-lg shadow-xl max-w-3xl w-full mx-4 h-[80vh] overflow-y-auto flex flex-col"
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
        <div className="flex-1 mb-4">
          <textarea
            value={document}
            onChange={(e) => setEditValue(e.target.value)}
            className="w-full h-full border rounded px-3 py-2 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-blue-400"
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
  isLoadingSave,
  setIsLoadingSave,
}) => {
  const [editingCell, setEditingCell] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [highlightedRowId, setHighlightedRowId] = useState(null);
  const [documentModalOpen, setDocumentModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [expandedCells, setExpandedCells] = useState(new Set());
  const [lastEditedCell, setLastEditedCell] = useState(null);
  const [lastEditedValue, setLastEditedValue] = useState(null);
  const [showCell, setShowCell] = useState(false);

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
      setSelectedItem(item);
      setDocumentModalOpen(true);
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
        setIsLoadingSave(true);
        const response = await fetch(
          `https://nhakhoamyduc-api.onrender.com/api/clients`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: item.id,
              [editingCell?.column]:
                editingCell?.column === "birthYear"
                  ? Number(editValue)
                  : editValue,
            }),
          }
        );
        setIsLoadingSave(false);

        if (response.ok) {
          setLastEditedCell({ column: editingCell?.column, itemId: item.id });
          setLastEditedValue(
            data.find((row) => row.id === item.id)[editingCell?.column]
          );

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
            "Failed to update client info. Please note that birthYear should be a number between 1900 and current year.",
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
          "Failed to update client info. Please note that birthYear should be a number between 1900 and current year.",
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
                  className={`px-4 py-2 border-r last:border-r-0 border-gray-200 cursor-pointer relative ${
                    highlightedRowId === item.id
                      ? "!bg-blue-50 hover:!bg-blue-100"
                      : ""
                  }`}
                  style={{
                    overflow: "hidden",
                    wordBreak: ["email", "phone", "address"].includes(
                      header.column
                    )
                      ? "break-word"
                      : "normal",
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
                  {/* Last edited value */}
                  {lastEditedCell?.column === header.column &&
                    lastEditedCell?.itemId === item.id &&
                    lastEditedValue !== item[header.column] && (
                      <div className="absolute top-0 right-0 z-10 bg-white/80 backdrop-blur-sm rounded-bl-lg p-1">
                        <button
                          className="text-blue-500 hover:text-blue-700 font-medium flex items-center gap-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingCell({
                              itemId: item.id,
                              column: header.column,
                            });
                            setEditValue(lastEditedValue);
                            handleInputKeyDown({ key: "undoCellEdit" }, item);
                          }}
                        >
                          <Undo2 className="w-3 h-3" />
                          <span className="text-[10px]">Undo</span>
                        </button>
                      </div>
                    )}

                  {/* Editing cell */}
                  {isEditing ? (
                    header.column !== "clientDocument" && (
                      <input
                        type="text"
                        value={editValue}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        onKeyDown={(e) => handleInputKeyDown(e, item)}
                        className="w-full h-12 px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
                        autoFocus
                      />
                    )
                  ) : (
                    // Normal cell
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
                        <div className="whitespace-pre-wrap break-words">
                          <div className="cursor-pointer hover:text-blue-500 flex flex-col gap-2">
                            {expandedCells.has(item.id)
                              ? item[header.column]?.toString()
                              : item[header.column]
                                  ?.toString()
                                  .split("\n")
                                  .slice(0, 8)
                                  .join("\n")}
                            {!expandedCells.has(item.id) &&
                              item[header.column]?.toString().split("\n")
                                .length > 8 && (
                                <>
                                  <span>...</span>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setExpandedCells(
                                        (prev) => new Set([...prev, item.id])
                                      );
                                    }}
                                    className="text-blue-500 hover:text-blue-700 font-medium underline"
                                  >
                                    Show more
                                  </button>
                                </>
                              )}
                            {expandedCells.has(item.id) && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setExpandedCells((prev) => {
                                    const newSet = new Set(prev);
                                    newSet.delete(item.id);
                                    return newSet;
                                  });
                                }}
                                className="text-blue-500 hover:text-blue-700 font-medium underline"
                              >
                                Show less
                              </button>
                            )}
                          </div>
                        </div>
                      ) : header.column === "email" ||
                        header.column === "address" ? (
                        item[header.column] ? (
                          showCell ? (
                            item[header.column].toString()
                          ) : (
                            item[header.column].toString().slice(0, 4) + "..."
                          )
                        ) : (
                          ""
                        )
                      ) : (
                        item[header.column]?.toString() || ""
                      )}

                      {(header.column === "email" ||
                        header.column === "address") &&
                        item[header.column] &&
                        item[header.column].toString().length > 4 && (
                          <button
                            className="text-blue-500 hover:text-blue-700 font-medium flex items-center gap-1 absolute top-1 right-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowCell(!showCell);
                            }}
                          >
                            {showCell ? (
                              <EyeOff className="w-3 h-3" />
                            ) : (
                              <Eye className="w-3 h-3" />
                            )}
                          </button>
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

      {/* Loading tag for adding new client */}
      {isLoadingSave && (
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
