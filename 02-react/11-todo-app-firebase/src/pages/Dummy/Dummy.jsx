import React from "react";

const Product = () => {
  return (
    <>
      <h1>Create Product</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name" />
        <input type="text" placeholder="Product Category" />

        <button>Create</button>
      </form>
    </>
  );
};

export default Product;
