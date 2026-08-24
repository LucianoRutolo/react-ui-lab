import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState, type ComponentPropsWithoutRef } from "react";

const ITEMS_PER_PAGE_OPTIONS = [10, 20, 50, 100];

interface DataTableProps extends ComponentPropsWithoutRef<"table"> {
  data: Record<string, unknown>[];
  isLoading?: boolean;
  paginate?: boolean;
}

export const DataTable = ({
  data,
  isLoading,
  paginate,
  className,
  ...props
}: DataTableProps) => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const dataColumns = useMemo(() => {
    const columns = new Set<string>();
    data.forEach((row) => {
      Object.keys(row).forEach((key) => columns.add(key));
    });
    return Array.from(columns);
  }, [data]);

  const paginatedData = useMemo(() => {
    if (!paginate) return data;
    const minIndex = itemsPerPage * currentPage - itemsPerPage;
    const maxIndex = minIndex + itemsPerPage;
    return data.filter((_, index) => index >= minIndex && index <= maxIndex);
  }, [data, itemsPerPage, currentPage]);

  return (
    <div className="bg-white flex flex-col">
      <div className="overflow-x-auto">
        <table className={`table-auto border-collapse ${className}`} {...props}>
          <thead>
            <tr>
              {dataColumns.map((column) => (
                <th className="border border-gray-300 px-4 py-2" key={column}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {dataColumns.map((column) => (
                  <td className="border border-gray-300 px-4 py-2" key={column}>
                    {String(row[column] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>

      {paginate && (
        <div className="h-10 flex items-center justify-between px-2">
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex items-center gap-2">
            <button
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              <ChevronLeft />
            </button>

            <button
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              <ChevronRight />
            </button>
          </div>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            {ITEMS_PER_PAGE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};
