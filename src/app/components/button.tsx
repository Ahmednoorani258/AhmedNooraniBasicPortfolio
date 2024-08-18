interface ButtonProps {
  prop: string;
  color: string;
  bordercolor?: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  prop,
  color,
  bordercolor,
}) => {
  return (
    <div
      className="text-black font-bold text-2xl lg:text-2xl ml-4 w-32 flex justify-center align-center border-[3px] h-14 rounded-3xl cursor-pointer"
      style={{ backgroundColor: color, borderColor: bordercolor }}
    >
      <button>{prop}</button>
    </div>
  );
};

export default ButtonComponent;
