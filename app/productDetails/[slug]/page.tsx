import { getData2 } from "@/app/page";
import AddToCart from "@/components/AddToCart";
import ImageGallery from "@/components/ImageGallery";
import Products from "@/components/Products";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

type Props = {
  name: string;
  rating: number;
  description: string;
  price: number;
  image: string;
};

const getData = async (slug: string) => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
  name,
    rating,
    description,
    price,
    "image": image.asset->url
}`;

  const data: Props = await client.fetch(query);
  return data;
};

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug);
  const data2 = await getData2();

  return (
    <div>
      <div className="bg-white my-32">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <ImageGallery image={data.image} />

            <div className="lg:w-2/3 space-y-4">
              <h1 className="text-3xl font-bold text-gray-800">{data?.name}</h1>
              <div className="flex items-center gap-2 text-yellow-500">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>&#9733;</span>
                  ))}
                </div>
                <span className="text-gray-500">{"1"} Rating</span>
                <span className="text-gray-400">| {"5"} Reviews</span>
              </div>
              <div className="text-2xl font-bold text-gray-800">
                ${data?.price}.00
              </div>
              <p className="text-gray-600 border-b-[2px] pb-4 line-clamp-5 ">
                {data.description}
              </p>

              <div className="flex items-center gap-4">
                <h2>Colours:</h2>
                <div className="flex gap-1 items-center">
                  <input name="btn" type="radio" className="text-gray-400" />
                  <input name="btn" type="radio" />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <h2>Size:</h2>
                <div className="flex gap-3 items-center">
                  <span className="px-3 py-1 hover:text-white cursor-pointer rounded-md font-semibold border-2 border-gray-500 hover:bg-[#DB4444]">
                    XS
                  </span>
                  <span className="px-3 py-1 hover:text-white cursor-pointer rounded-md font-semibold border-2 border-gray-500 hover:bg-[#DB4444]">
                    S
                  </span>
                  <span className="px-3 py-1 hover:text-white cursor-pointer rounded-md font-semibold border-2 border-gray-500 hover:bg-[#DB4444]">
                    M
                  </span>
                  <span className="px-3 py-1 hover:text-white cursor-pointer rounded-md font-semibold border-2 border-gray-500 hover:bg-[#DB4444]">
                    L
                  </span>
                  <span className="px-3 py-1 hover:text-white cursor-pointer rounded-md font-semibold border-2 border-gray-500 hover:bg-[#DB4444]">
                    XL
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link href={"/cart/checkout"}>
                  <AddToCart
                  displayName="Checkout Now"
                    name={data.name}
                    images={data.image}
                    price={data.price}
                  />
                  
                </Link>
                <AddToCart
                displayName="Add to Cart"
                  name={data.name}
                  images={data.image}
                  price={data.price}
                />
              </div>
            </div>
          </div>

          <div className="mt-20">
            <Products
              heading=""
              subHeading="Related Products"
              isTimer={false}
              action={<div className="flex gap-2 "></div>}
              isCarousel={false}
              products={data2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
