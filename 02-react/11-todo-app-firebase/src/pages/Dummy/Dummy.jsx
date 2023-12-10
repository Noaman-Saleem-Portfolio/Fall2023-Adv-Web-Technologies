import React from "react";

const Product = () => {
  return (
    <>
      <h1>Create Product</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Todo Title" />
        <input type="text" placeholder="Todo Description" />

        <button>Create</button>
      </form>
    </>
  );
};

export default Product;
