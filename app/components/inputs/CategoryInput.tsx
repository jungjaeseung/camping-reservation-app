"use client";

import { IconType } from "react-icons";

interface CategoryInputProps {
  onClick: (value: string) => void;
  icon: IconType;
  label: string;
  selected?: boolean;
  value: string;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  onClick,
  icon: Icon,
  label,
  selected,
  value,
}) => {
  return (
    <div
      onClick={() => onClick(value)}
      className={`
      rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-black transition cursor-pointer
      ${selected ? "border-black" : "border-neutral-200"}
      `}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryInput;
