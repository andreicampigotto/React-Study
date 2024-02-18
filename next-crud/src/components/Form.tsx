import { useState } from "react";
import Customer from "../core/Customer";
import Input from "./Input";
import Button from "./Button";

interface FormProps {
  customer: Customer;
customerChange?:(customer: Customer) => void
  canceled?: () => void;
}

export default function Form(props: FormProps) {
  const id = props.customer?.id;
  const [name, setName] = useState(props.customer?.name ?? "");
  const [age, setAge] = useState(props.customer?.age ?? 0);
  return (
    <div>
      {id ? <Input onlyRead text="Cod" value={id} /> : false}
      <Input text="Name" value={name} valueChange={setName} className="mb-1" />
      <Input
        text="Age"
        type="number"
        value={age}
        valueChange={setAge}
        className="mb-1"
      />
      <div
        className={`
        flex justify-end mt-5
    `}
      >
        <Button color="bg-blue-400" clasName="mr-2"
        onClick={()=> props.customerChange?.(new Customer(name, +age , id))}
        >
          {id ? "Change" : "Save"}
        </Button>
        <Button onClick={props.canceled}>Cancel</Button>
      </div>
    </div>
  );
}
