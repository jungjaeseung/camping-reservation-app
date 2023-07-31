"use client";

import { GiBarracksTent } from "react-icons/gi";
import { PiTentFill, PiTreePalmFill } from "react-icons/pi";
import { usePathname, useSearchParams } from "next/navigation";

import Container from "../Container";
import CategoryBox from "./CategoryBox";

export const categories = [
  {
    label: "캠핑",
    value: "camping",
    icon: PiTentFill,
    description: "직접 텐트를 설치하는 캠핑입니다.",
  },
  {
    label: "글램핑",
    value: "glamping",
    icon: GiBarracksTent,
    description: "텐트와 장비가 제공되는 글램핑입니다.",
  },
  {
    label: "캠크닉",
    value: "camcnic",
    icon: PiTreePalmFill,
    description: "당일로 캠핑장을 이용하는 캠크닉입니다.",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-evenly overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            value={item.value}
            selected={category === item.value}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
