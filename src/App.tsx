import { DataTable } from "./DataTable";
import { Header } from "./Header";
import dataTableSource from "./DataTable.tsx?raw";
import { CopyCodeButton } from "./CopyCodeButton";

const DATA_TABLE_SAMPLE = [
  {
    name: "John Lennon",
    email: "johnlennon@email.com",
    balance: 5000,
  },
  {
    name: "Paul McCartney",
    email: "paulmccartney@email.com",
    balance: 12500,
  },
  {
    name: "George Harrison",
    email: "georgeharrison@email.com",
    balance: 3200,
  },
  {
    name: "Ringo Starr",
    email: "ringostarr@email.com",
    balance: 8750,
  },
  {
    name: "Freddie Mercury",
    email: "freddiemercury@email.com",
    balance: 15400,
  },
  {
    name: "David Bowie",
    email: "davidbowie@email.com",
    balance: 6800,
  },
  {
    name: "Elvis Presley",
    email: "elvispresley@email.com",
    balance: 21300,
  },
  {
    name: "Michael Jackson",
    email: "michaeljackson@email.com",
    balance: 9700,
  },
  {
    name: "Bob Dylan",
    email: "bobdylan@email.com",
    balance: 4500,
  },
  {
    name: "Stevie Wonder",
    email: "steviewonder@email.com",
    balance: 11200,
  },
  {
    name: "Paul Simon",
    email: "paulsimon@email.com",
    balance: 3900,
  },
  {
    name: "Bruce Springsteen",
    email: "brucespringsteen@email.com",
    balance: 18750,
  },
  {
    name: "Mick Jagger",
    email: "mickjagger@email.com",
    balance: 7200,
  },
  {
    name: "Eric Clapton",
    email: "ericclapton@email.com",
    balance: 5600,
  },
  {
    name: "James Taylor",
    email: "jamestaylor@email.com",
    balance: 13400,
  },
  {
    name: "Billy Joel",
    email: "billyjoel@email.com",
    balance: 8200,
  },
  {
    name: "Phil Collins",
    email: "philcollins@email.com",
    balance: 10100,
  },
  {
    name: "Sting",
    email: "sting@email.com",
    balance: 6400,
  },
  {
    name: "Rod Stewart",
    email: "rodstewart@email.com",
    balance: 14900,
  },
  {
    name: "George Michael",
    email: "georgemichael@email.com",
    balance: 2750,
  },
];

function App() {
  return (
    <div className="min-w-dvw min-h-dvh bg-gray-900">
      <Header />
      <div className="flex items-center justify-center min-w-0 max-w-full overflow-x-hidden p-4">
        <div className="relative">
          <DataTable data={DATA_TABLE_SAMPLE} paginate />

          <CopyCodeButton
            className="absolute -right-11 top-0"
            code={dataTableSource}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
