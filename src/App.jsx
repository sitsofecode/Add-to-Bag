import { useEffect } from "react";
import { useState } from "react";

function App() {
  const theImagesStock = [
    {
      id: 1,
      link: "https://img01.ztat.net/article/spp-media-p1/e28e8cefc55b4489bab1911f4d4b0b79/64baffa6b4af491586b4a18b05520f29.jpg?imwidth=1800&filter=packshot",
    },
    {
      id: 2,
      link: "https://img01.ztat.net/article/spp-media-p1/1f47a4559de545808d912fc1ecbc9a59/8cc860e1ee704e078094089226541fbc.jpg?imwidth=1800&filter=packshot",
    },
    {
      id: 3,
      link: "https://img01.ztat.net/article/spp-media-p1/854524237d514f4993661177dd4be695/73704b5f8c2e492d8f2beb34f161f4dd.jpg?imwidth=1800&filter=packshot",
    },
  ];
  const [productImg, SetProductImg] = useState("");
  const [isFading, setIsFading] = useState(false);
  const handleMouseEnter = (link) => {
    setIsFading(true);
    setTimeout(() => {
      SetProductImg(link);
      setIsFading(false);
    }, 600);
  };
  const size = ["S", "M", "L", "XL", "XXL"];

  const [sizeChoosen, SetSizeChoosen] = useState("L");
  useEffect(() => {
    SetProductImg(theImagesStock[0].link);
  }, []);

  return (
    <main className=" font-[TrirongFont]  flex   justify-center bg-white w-full h-screen items-center">
      <div className=" flex  shadow-lg  shadow-gray-400 rounded-lg  p-4">
        <section id="imgContainer" className="flex ">
          <div>
            {theImagesStock.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(item.link)}
                className={` h-20 w-24 m-4 flex items-center shadow-lg  bg-[#F6F6F6] justify-center  rounded-lg ${
                  item.link === productImg &&
                  "border border-2 border-purple-500"
                }`}
              >
                <img
                  src={item.link}
                  alt={` image${item.id} error`}
                  className="h-16 "
                />
              </div>
            ))}
          </div>
          <div className="h-[50vh] bg-[#F6F6F6]">
            <img
              src={productImg}
              alt="image error"
              className={`transition-opacity duration-700 h-full ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </section>
        <section
          id="productInfo"
          className="  p-6 flex flex-col  space-y-5 h-full"
        >
          <h1 className=" text-xs font-bold  text-purple-500  ">POLO Shirt</h1>
          <h1 className="text-3xl font-bold  capitalize">
            Custom fit Polo bear Oxford shirt
          </h1>
          <p className="text-gray-400 font-semibold  text-sm ">
            POLO shirt with classic cut for men .Made of smoo th and soft
            cotton.
          </p>
          <h2 className=" font-[SofiaFont] flex items-center ">
            <span className="text-4xl font-bold m-2 mb-0 ">
              $ 99.00 <br />
              <p className=" font-[SofiaFont]   italic text-gray-300 line-through text-sm">
                $ 132,00
              </p>
            </span>
            <span className="bg-purple-200 h-5 text-xs font-bold mx-3 rounded text-purple-500 text-center items-center p-1">
              -25 %
            </span>
          </h2>
          <div className="flex">
            {size.map((item, index) => (
              <span
                onClick={() => SetSizeChoosen(item)}
                className={` text-center font-semibold  cursor-pointer p-2 m-2 text-sm ${
                  item === sizeChoosen && "bg-black text-white"
                }`}
                key={index}
              >
                {item}
              </span>
            ))}
          </div>
          <button className="w-full  bg-purple-500 hover:bg-purple-300 p-1 rounded-lg text-white font-semibold">
            ADD TO BAG
          </button>
        </section>
      </div>
    </main>
  );
}

export default App;
