import Customer from "@/core/Customer";
import { EditIcon, TrashIcon } from "./Icons";

interface TableProps {
  customers: Customer[];
  selectedCustomer?: (customer: Customer) => void;
  deletedCustomer?: (customerclient: Customer) => void;
}

export default function Table(props: TableProps) {
  const showActions = props.deletedCustomer || props.selectedCustomer;

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-2">Cod</th>
        <th className="text-left p-2">Name</th>
        <th className="text-left p-2">Age</th>
        {showActions ? <th className="text-left p-2">Actions</th> : false}
      </tr>
    );
  }

  function renderData() {
    return props.customers?.map((customer, i) => {
      return (
        <tr
          key={customer.id}
          className={`
        ${i % 2 === 0 ? "bg-purple-300" : "bg-purple-200"} 
        `}
        >
          <td className="text-left p-2"> {customer.id} </td>
          <td className="text-left p-2"> {customer.name} </td>
          <td className="text-left p-2"> {customer.age} </td>
          {showActions ? renderActions(customer) : false}
        </tr>
      );
    });
  }

  function renderActions(customer: Customer) {
    return (
      <td className="flex justify-center">
        {props.selectedCustomer ? (
          <button
            onClick={() => props.selectedCustomer?.(customer)}
            className={`
          flex items-center
         text-green-700 
          rounded-full
          p-1
          hover:bg-purple-100
        `}
          >
            {EditIcon}
          </button>
        ) : (
          false
        )}
        {props.deletedCustomer ? (
          <button
            onClick={() => props.deletedCustomer?.(customer)}
            className={`
          flex items-center
          text-red-600 
           rounded-full
           p-1
           hover:bg-purple-100
        `}
          >
            {TrashIcon}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table
      className={`
      w-full
      rounded-xl
      overflow-hidden
      mb-2
    `}
    >
      <thead
        className={`
      text-gray-100
      bg-gradient-to-r from-purple-500 to-purple-800
      `}
      >
        {renderHeader()}
      </thead>

      <tbody>{renderData()}</tbody>
    </table>
  );
}
