import Image from "next/image";

interface CategoryProps {
  name: string;
  img: string;
  description?: string;
}

interface props {
  product: CategoryProps[];
  className1: string;
}

function Category({ product, className1 }: props) {
  return (
    <div className=" flex flex-wrap justify-center space-x-24 items-center">
      <div
        className={
          "mx-auto cursor-pointer max-w-[1170px] mb-10 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 md:gap-x-3 md:gap-y-10  sm:grid-cols-2  gap-x-14 gap-y-6 "
        }
      >
        {product.map((item, i) => {
          return (
            <div
              key={i}
              className={`${className1} ${
                item.name === "camera" ? "bg-red-500 text-white" : ""
              }`}
            >
              <Image
                className="md:w-[56px] w-[40px]"
                src={item.img}
                alt={item.name}
                width={1000}
                height={1000}
              />
              <p className="text-[16px] pt-3"> {item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
