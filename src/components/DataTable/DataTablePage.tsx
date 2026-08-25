// src/pages/DataTablePage.tsx
import { DataTable, type ColumnType } from "@/components/DataTable/DataTable";
import dataTableSource from "./DataTable.tsx?raw";
import { CopyCodeButton } from "@/components/CopyCodeButton";

const DATA_TABLE_SAMPLE_DATA = [
  {
    name: "John Lennon",
    email: "johnlennon@email.com",
    birthday: "1940-10-09",
    balance: 5000,
  },
  {
    name: "Paul McCartney",
    email: "paulmccartney@email.com",
    birthday: "1942-06-18",
    balance: 12500,
  },
  {
    name: "George Harrison",
    email: "georgeharrison@email.com",
    birthday: "1943-02-25",
    balance: 3200,
  },
  {
    name: "Ringo Starr",
    email: "ringostarr@email.com",
    birthday: "1940-07-07",
    balance: 8750,
  },
  {
    name: "Freddie Mercury",
    email: "freddiemercury@email.com",
    birthday: "1946-09-05",
    balance: 15400,
  },
  {
    name: "David Bowie",
    email: "davidbowie@email.com",
    birthday: "1947-01-08",
    balance: 6800,
  },
  {
    name: "Elvis Presley",
    email: "elvispresley@email.com",
    birthday: "1935-01-08",
    balance: 21300,
  },
  {
    name: "Michael Jackson",
    email: "michaeljackson@email.com",
    birthday: "1958-08-29",
    balance: 9700,
  },
  {
    name: "Bob Dylan",
    email: "bobdylan@email.com",
    birthday: "1941-05-24",
    balance: 4500,
  },
  {
    name: "Stevie Wonder",
    email: "steviewonder@email.com",
    birthday: "1950-05-13",
    balance: 11200,
  },
  {
    name: "Paul Simon",
    email: "paulsimon@email.com",
    birthday: "1941-10-13",
    balance: 3900,
  },
  {
    name: "Bruce Springsteen",
    email: "brucespringsteen@email.com",
    birthday: "1949-09-23",
    balance: 18750,
  },
  {
    name: "Mick Jagger",
    email: "mickjagger@email.com",
    birthday: "1943-07-26",
    balance: 7200,
  },
  {
    name: "Eric Clapton",
    email: "ericclapton@email.com",
    birthday: "1945-03-30",
    balance: 5600,
  },
  {
    name: "James Taylor",
    email: "jamestaylor@email.com",
    birthday: "1948-03-12",
    balance: 13400,
  },
  {
    name: "Billy Joel",
    email: "billyjoel@email.com",
    birthday: "1949-05-09",
    balance: 8200,
  },
  {
    name: "Phil Collins",
    email: "philcollins@email.com",
    birthday: "1951-01-30",
    balance: 10100,
  },
  {
    name: "Sting",
    email: "sting@email.com",
    birthday: "1951-10-02",
    balance: 6400,
  },
  {
    name: "Rod Stewart",
    email: "rodstewart@email.com",
    birthday: "1945-01-10",
    balance: 14900,
  },
  {
    name: "George Michael",
    email: "georgemichael@email.com",
    birthday: "1963-06-25",
    balance: 2750,
  },
];

const DATA_TABLE_SAMPLE_COLUMNS: ColumnType[] = [
  {
    key: "birthday",
    label: "Birthday",
    type: "date",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "balance",
    label: "Balance",
    type: "currency",
  },
];

export function DataTablePage() {
  return (
    <div className="flex items-center justify-center min-w-0 max-w-full overflow-x-hidden p-4">
      <div className="relative flex flex-col">
        <DataTable
          className="h-150 w-200"
          data={DATA_TABLE_SAMPLE_DATA}
          columns={DATA_TABLE_SAMPLE_COLUMNS}
          paginate
        />
        <CopyCodeButton
          className="absolute -right-11 top-0"
          code={dataTableSource}
        />
      </div>
    </div>
  );
}