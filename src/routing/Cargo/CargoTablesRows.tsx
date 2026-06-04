export interface Cargo {
  id: number;
  title: string;
  origin: string;
  destination: string;
  vehicle: string;
  tonnage: string;
  price: string;
  phone?: string;
  description?: string;
}

interface Props {
  cargoData: Cargo[];
}

const CargoTablesRows = ({ cargoData }: Props) => {
  return (
    <>
      {cargoData.map((cargo) => (
        <tr key={cargo.id}>
          <td className="text-center">{cargo.title}</td>

          <td className="text-center">
            <div className="bg-[#dbfde5] text-green-700 rounded-full">
              {cargo.origin}
            </div>
          </td>

          <td className="text-center">
            <div className="bg-[#fef3ef] text-red-700 rounded-full">
              {cargo.destination}
            </div>
          </td>

          <td className="text-center">{cargo.vehicle}</td>

          <td className="text-center">{cargo.tonnage}</td>

          <td className="text-center">{cargo.price}</td>

          <td className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </td>
        </tr>
      ))}
    </>
  );
};

export default CargoTablesRows;
