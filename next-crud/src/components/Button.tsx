interface ButtonProps {
  color?: "bg-green-400" | "bg-blue-400" | "bg-gray-400";
  children?: any;
  clasName?: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  let color = props.color ?? "bg-gray-400";
  return (
    console.log(color),
    (
      <button
        onClick={props.onClick}
        className={`
        ${color}
        text-white
        px-2 py-2
        mx-3 my-2
        rounded-md
        ${props.clasName}
        `}
      >
        {props.children}
      </button>
    )
  );
}
