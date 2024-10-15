import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/pagination";
import { IoMdHeartEmpty } from "react-icons/io";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Alldata = ({ info }) => {
  const { image } = info;
  console.log(image);
  return (
    <div className="relative transform transition duration-300 hover:scale-110 ">
      <div className="md:w-72 md:h-72  mx-auto rounded-xl overflow-hidden  ">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          //   autoplay={{
          //     delay: 2500,
          //   }}
          loop={true}
          navigation={false}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {image.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                className="md:w-72 md:h-80   "
                src={img}
                alt={`Slide ${idx}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=" absolute top-6 right-10 z-10   ">
        <IoMdHeartEmpty className="text-white   text-3xl" />
      </div>
      <div>
        <p className="text-center text-2xl">{info.location}</p>
      </div>
    </div>
  );
};

export default Alldata;
