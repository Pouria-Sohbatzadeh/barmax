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

          <td className="text-center relative">
            <div className="bg-[#f8faf9] font-bold p-2 rounded-full w-[130px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              95 | 599 الف32
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
