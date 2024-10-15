import { IoMdMenu } from "react-icons/io";

const End_nav = () => {
  return (
    <div>
      <div className="flex ">
        <button className="text-xl font-medium  ">Switch to home</button>
        <button className="ml-2 flex justify-between items-center transition ease-in-out duration-500  hover:shadow-lg  py-3 px-[1rem]  color  ">
          <IoMdMenu className="text-2xl" />

          <img
            className="w-6"
            src="https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default End_nav;
