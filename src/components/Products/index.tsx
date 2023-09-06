"use client";

import React from "react";
import { ProductContext } from "@/store/product/context";

export default function Products() {
  const context = React.useContext(ProductContext);

  return (
    <div className="w-full text-left mx-4">
      <h1 className="text-4xl">
        Products <span className="text-blue-300">({context?.count})</span>
      </h1>
      <table width={"100%"} className="my-5 border">
        <thead>
          <tr>
            <th className="p-4">ID</th>
            <th className="p-4">Name</th>
            <th className="p-4">Description</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {context?.products.map((product) => (
            <tr key={product.id}>
              <td className="p-4">{product.id}</td>
              <td className="p-4">{product.name}</td>
              <td className="p-4">{product.description}</td>
              <td className="p-4">
                <button
                  className="btn btn-danger"
                  onClick={() => context?.deleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
