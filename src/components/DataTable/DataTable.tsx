import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useEffect,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
} from "react";
import Button from "../ui/Button";
import { Select } from "../ui/Select";

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

const ITEMS_PER_PAGE_OPTIONS = [10, 20, 50, 100];

export type ColumnType = {
  key: string;
  label: string;
  type?: "currency" | "date";
};

type ColumnTypeKey = NonNullable<ColumnType["type"]>;

const DEFAULT_COLUMN_CLASSNAME_CONFIG = "text-left";
const COLUMNS_CLASSNAME_CONFIG: Record<ColumnTypeKey, string> = {
  currency: "text-right",
  date: "text-center",
};

interface DataTableProps extends ComponentPropsWithoutRef<"table"> {
  data: Record<string, unknown>[];
  columns: ColumnType[];
  isLoading?: boolean;
  paginate?: boolean;
  totals?: boolean;
  wrapperClassName?: string;
}

export const DataTable = ({
  data,
  columns,
  isLoading,
  paginate,
  totals,
  className,
  wrapperClassName,
  ...props
}: DataTableProps) => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  useEffect(() => {
    setCurrentPage((prev) => Math.min(prev, Math.max(totalPages, 1)));
  }, [totalPages]);

  const paginatedData = useMemo(() => {
    if (!paginate) return data;
    const minIndex = itemsPerPage * currentPage - itemsPerPage;
    const maxIndex = minIndex + itemsPerPage;
    return data.filter((_, index) => index >= minIndex && index <= maxIndex);
  }, [data, itemsPerPage, currentPage]);

  const formattedData = useMemo(
    () =>
      paginatedData.map((item) =>
        Object.fromEntries(
          Object.entries(item).map(([key, value]) => {
            const column = columns.find((column) => column.key === key);
            if (column?.type === "currency" && typeof value === "number")
              return [key, formatCurrency(value)];
            return [key, value];
          }),
        ),
      ),
    [paginatedData],
  );

  return (
    <div className="bg-white flex flex-col">
      <div
        className={`overflow-auto flex-1 min-h-0 h-full ${wrapperClassName ?? ""}`}
      >
        <table
          className={`table-fixed border-collapse cursor-default ${className ?? ""}`}
          {...props}
        >
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  className="border border-gray-300 px-4 py-2 sticky top-0 bg-white z-10"
                  key={column.key}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {formattedData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => {
                  const config = column.type
                    ? COLUMNS_CLASSNAME_CONFIG[column.type]
                    : DEFAULT_COLUMN_CLASSNAME_CONFIG;

                  return (
                    <td
                      className={`border border-gray-300 px-4 py-2 truncate ${config}`}
                      key={column.key}
                      title={String(row[column.key] ?? "")}
                    >
                      {String(row[column.key] ?? "")}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>

      {paginate && (
        <div className="h-12 flex items-center justify-between px-2 border-t border-gray-300 mt-auto shrink-0">
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              <ChevronLeft />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              <ChevronRight />
            </Button>
          </div>
          <Select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            options={ITEMS_PER_PAGE_OPTIONS}
          />
        </div>
      )}
    </div>
  );
};
