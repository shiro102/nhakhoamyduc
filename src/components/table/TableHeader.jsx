import { ArrowUpAZ, ArrowDownAZ } from "lucide-react";
import React, { useState } from "react";

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
      console.log("startWidth", startWidth)
      const newWidth = Math.max(50, startWidth + diff); // Minimum width of 50px
      console.log("newWidth", newWidth)
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
              style={{
                width: columnWidths[header.column] || 'auto',
                maxWidth: '100%',
                overflow: 'hidden',
                whiteSpace: 'normal'
              }}
              onClick={() => handleHeaderClick(header.column)}
            >
              <div className="flex items-center justify-between">
                {header.label}
                <span className="absolute right-1">
                  {sortDirection === "desc" && (
                    <ArrowUpAZ
                      className={`w-4 h-4 hover:text-blue-400 ${
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
  

  export default TableHeader;