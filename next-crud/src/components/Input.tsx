interface InputProps {
  type?: "text" | "number";
  text: string;
  value: any;
  onlyRead?: boolean;
  className?: string
  valueChange?: (value:any) => void 
}

export default function Input(props: InputProps) {
  return (
    <div
      className={`
        flex
        flex-col
        ${props.className}
        `}
    >
    <label className="mt-2"
      >{props.text}</label>
      <input
        type={props.type ?? "text"}
        value={props.value}
        readOnly={props.onlyRead}
        onChange={e=> props.valueChange?.(e.target.value)}
        className={`
        border border-purple-400
        rounded-lg
        focus:outline-none
        bg-gray-50
        px-2 py -1
        ${props.onlyRead ? 'bg-opacity-30' : 'focus:bg-white'}
        `}
      />
    </div>
  );
}
