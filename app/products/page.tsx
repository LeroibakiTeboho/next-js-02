import Link from "next/link";
import React from "react";

function ProductList() {
  const productId = 100;

  return (
    <>
      <h1>iphone List</h1>
      <Link href="products/1">
        <h2>Product 1</h2>
      </Link>
      <Link href="products/2">
        <h2>Product 2</h2>
      </Link>
      <Link href="products/3" replace>
        <h2>Product 3</h2>
      </Link>
      {/* 'replace' prop replaces the current history instead of adding new URL to this stag*/}

      {/* Hard-coding ids is not recommended */}
      <Link href={`products/${productId}`}>
        <h2>Product {productId}</h2>
      </Link>
    </>
  );
}

export default ProductList;
