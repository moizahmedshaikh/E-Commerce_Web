"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { urlFor } from "@/sanity/lib/image";

interface ProductCartProps {
  name: string;
  price: number;
  images: string;
  displayName: string
}

const AddToCart = ({ name, price, images, displayName }: ProductCartProps) => {
  const { addItem } = useShoppingCart();

  const product = {
    name: name,
    price: price,
    image: urlFor(images).url(),
    sku: `${name}-${price}`,
    currency: "USD",
  };

  return (
    <div>
      <Button
        onClick={() => {
          console.log(product); // Debug product object
          addItem(product);
          alert("Product added to cart successfully!")
        }}
      >
        {displayName}
      </Button>
      
    </div>
  );
};

export default AddToCart;
