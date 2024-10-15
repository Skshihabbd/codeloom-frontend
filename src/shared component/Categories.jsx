// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDropright,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
const Categories = ({ categories }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    let currentQuery = { category: e };

    const url = queryString.stringifyUrl({
      url: "/",
      query: currentQuery,
    });
    navigate(url);
  };

  useEffect(() => {
    // Assign the custom navigation buttons after Swiper is initialized
    const swiper = document.querySelector(".mySwiper")?.swiper;
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
    swiper.navigation.init();
    swiper.navigation.update();

    const productPerPage = swiper?.params.slidesPerView;
    const count = categories?.length;
    const pageCount = Math.ceil(count / productPerPage);
    // Check if there are more slides than can be displayed, then show navigation buttons
    // if (categories.length > ) {
    //   setShowNav(true);
    // } else {
    //   setShowNav(false);
    // }
  }, [prevRef, nextRef]);
  return (
    <div className="cursor-pointer mt-3 overflow-x-auto  mx-7  ">
      <>
        <div className={`left-2 top-12   absolute  shadow-xl `} ref={prevRef}>
          <IoIosArrowDropleftCircle className="text-3xl " />
        </div>
        <div
          className={`right-2 bottom-14 absolute shadow-2xl  `}
          ref={nextRef}
        >
          <IoIosArrowDroprightCircle className=" text-3xl" />
        </div>

        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 3, // For small devices like phones
              spaceBetween: 2,
            },
            760: {
              slidesPerView: 6, // For small tablets
              spaceBetween: 4,
            },
            1024: {
              slidesPerView: 15, // For medium devices
              spaceBetween: 5,
            },
            1440: {
              slidesPerView: 10, // For large devices
              spaceBetween: 30,
            },
          }}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEL: nextRef.current,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {categories.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className=" ">
                <item.icon />
                <p onClick={() => handleClick(item.label)}>{item.label}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Categories;
