import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import Preloader from "../components/Preloader";

const View = () => {
  const [pageLoading, setPageLoading] = useState(true);
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(
        "https://api-test.innoloft.com/product/6781/"
      );

      setProduct(data);
      setPageLoading(false);
    };

    getProduct();
  }, []);

  return (
    <>
      {pageLoading ? (
        <Preloader />
      ) : (
        <div className="bg-[#F5F4F9] font-sans min-h-screen">
          <Header />
          <div className="w-[90%] mx-auto py-5">
            <Link
              className="bg-main text-white py-[5px] px-[10px] rounded-[6px] text-[14px]"
              to="/product/edit"
            >
              Edit
            </Link>

            <div className="bg-white mt-6 rounded-[6px] lg:flex lg:justify-between">
              <div className="lg:w-[55%]">
                <img src={product?.picture} alt="product" />
                <div className="p-[11px]">
                  <h1 className="text-[#374151] text-[16px] font-semibold mt-[20px]">
                    {product?.name}
                  </h1>
                  <h2 className="text-[#374151] text-[13px] font-medium">
                    {product?.type?.name}
                  </h2>
                  <p className="text-[14px] leading-[24px] text-[#6B7280]">
                    {product?.description}
                  </p>
                </div>
              </div>

              <div className="lg:w-[40%] lg:px-4">
                <div className="my-[40px] flex items-center">
                  <img
                    src={product?.user?.profilePicture}
                    alt="user"
                    className="w-[60px] h-[60px] rounded-[50%]"
                  />
                  <div className="ml-3">
                    <p className="text-[#6B7280] text-[14px]">
                      {product?.user?.firstName} {product?.user?.lastName}
                    </p>
                    <p className="text-[#6B7280] text-[14px]">
                      {product?.company?.name}
                    </p>
                  </div>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.78075107651!2d6.098311815632271!3d50.77963777147151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0995d36ff22ff%3A0x3a4248b50ce934de!2sJ%C3%BClicher%20Str.%2072a%2C%2052070%20Aachen%2C%20Germany!5e0!3m2!1sen!2sng!4v1679974511449!5m2!1sen!2sng"
                  height="200"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="map"
                  className="w-full"
                ></iframe>
              </div>
            </div>

            <div className="mt-[20px] py-[30px] px-[10px] bg-white rounded-[6px]">
              <h2 className="text-[#374151] text-[16px] font-semibold mb-[10px]">
                Video
              </h2>
              <video className="w-full lg:px-[210px]" controls>
                <source src={product?.video} type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </video>
            </div>

            <div className="mt-[20px] py-[20px] px-[10px] lg:px-[40px] bg-white rounded-[6px]">
              <h2 className="text-[#374151] text-[16px] font-semibold mb-[20px]">
                Offer Details
              </h2>
              <div className="lg:flex lg:justify-between">
                <div className="lg:w-[40%]">
                  <p className="text-[16px] text-[#6B7280] mb-[10px]">
                    Categories
                  </p>
                  {product?.categories?.map((category: any) => (
                    <span
                      className="py-[5px] px-[14px] bg-[#E5E7EB] text-[#6B7280] text-[14px] rounded-[20px] mr-3"
                      key={category.id}
                    >
                      {category.name}
                    </span>
                  ))}
                  <p className="text-[16px] text-[#6B7280] mt-[25px] mb-[10px]">
                    Business Models
                  </p>
                  {product?.businessModels?.map((category: any) => (
                    <span
                      className="py-[5px] px-[14px] bg-[#E5E7EB] text-[#6B7280] text-[12px] rounded-[20px] mb-1 flex flex-wrap lg:w-[150px]"
                      key={category.id}
                    >
                      {category.name}
                    </span>
                  ))}
                </div>
                <div className="lg:w-[40%]">
                  <p className="text-[16px] text-[#6B7280] mt-[25px] mb-[10px]">
                    Investment Effort
                  </p>
                  <span className="py-[5px] px-[14px] bg-[#E5E7EB] text-[#6B7280] text-[12px] rounded-[20px]">
                    {product?.investmentEffort}
                  </span>
                  <p className="text-[16px] text-[#6B7280] mt-[25px] mb-[10px]">
                    TRL
                  </p>
                  <span className="py-[5px] px-[14px] bg-[#E5E7EB] text-[#6B7280] text-[12px] lg:w-[280px] rounded-[20px] flex flex-wrap">
                    {product?.trl?.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default View;
