"use client";

import { useAppSelector } from "@/store";
import { SimpleWidget } from "..";
import { IoCafeOutline } from "react-icons/io5";

const widgets = [
  {
    title: "Contador",
  },
];

export const WidgetGrid = () => {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={count.toString()}
        subtitle={"contador"}
        label={"Numero de articulos"}
        icon={<IoCafeOutline size={50} />}
        href="/dashboard/counter"
      />
    </div>
  );
};
