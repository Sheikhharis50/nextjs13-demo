"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ICreateProduct } from "@/interfaces/product";
import { ProductContext } from "@/store/product/context";

const schema = yup
  .object({
    name: yup.string().max(50).required(),
    description: yup.string().max(500).required(),
  })
  .required();

export default function CreateProduct() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const context = React.useContext(ProductContext);

  const onSubmit = (data: ICreateProduct) => {
    context?.createProduct(data);
    reset();
  };

  return (
    <div className="w-full max-w-xs text-left">
      <form
        className="bg-white dark:bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            {...register("name")}
            id="name"
            className="input focus:outline-none focus:shadow-outline"
            placeholder="Name"
          ></input>
          <p className="text-red-600">{errors.name?.message}</p>
        </div>

        <div className="mb-4">
          <label className="label" htmlFor="name">
            Description
          </label>
          <textarea
            {...register("description")}
            id="description"
            className="input focus:outline-none focus:shadow-outline"
            placeholder="Description"
          ></textarea>
          <p className="text-red-600">{errors.description?.message}</p>
        </div>

        <div className="flex justify-between">
          <button className="btn btn-primary" type="submit">
            Create
          </button>
          <button
            className="btn btn-danger"
            type="button"
            onClick={() => reset()}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
