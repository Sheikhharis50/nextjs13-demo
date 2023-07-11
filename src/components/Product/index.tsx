import React from "react";
import Image from "next/image";

export type ProductProps = {
  name: string;
  description?: string;
  imageSrc?: string;
};

export default function Product({
  name,
  description = "...",
  imageSrc = "https://dummyimage.com/640x360",
}: ProductProps) {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Image
        src={imageSrc}
        width={640}
        height={360}
        className="rounded-t-lg"
        alt=""
      />
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}
