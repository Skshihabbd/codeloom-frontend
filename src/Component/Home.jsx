import { useEffect, useState } from "react";
import End_nav from "../shared component/End_nav";
import { DateRangePicker } from "react-date-range";
import Nav_start from "../shared component/Nav_start";
import { IoSearch } from "react-icons/io5";
import "animate.css";
import { CiCirclePlus } from "react-icons/ci";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { CiCircleMinus } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { addDays } from "date-fns";

import { categories } from "../shared component/Category";
import Categories from "../shared component/Categories";
import { Link, useSearchParams } from "react-router-dom";
import Alldata from "./Alldata";
import useData from "./useData";
const Home = () => {
  const [params, setParams] = useSearchParams();
  // value for grab
  const category = params.get("category");
  // value for grab

  const [isScrolled, setIsScrolled] = useState(false);
  const [bgRed, setBgRed] = useState(false);
  const [marzin, setMarzin] = useState(false);
  const [destination, setDestination] = useState(false);
  const [scrolls, setScrolls] = useState(false);
  const [position, setPosition] = useState(false);
  const [guest, setGuest] = useState(false);
  const [calenderday, setCalenderDay] = useState(false);

  // guest state
  const [adult, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  // value for grab
  const [adultChild, setAdultsChild] = useState(adult + children);
  const [infants, setInfants] = useState(0);
  const [pet, setPet] = useState(0);
  // value for grab
  const [isCondition, setIsCondition] = useState(false);

  useEffect(() => {
    if ((infants > 0 || pet > 0) && !isCondition && adultChild === 0) {
      setAdults(1);
      setIsCondition(true);
    }
  }, [infants, pet, isCondition]);
  // guest state
  useEffect(() => {
    setAdultsChild(adult + children);
  }, [adult, children, infants, pet]);

  const handleGuest = () => {
    setGuest(!guest);
    setDestination(false);
    setCalenderDay(false);
  };
  const handleAllstateadult = () => {
    setAdultsChild(0);
    setAdults(0);
    setChildren(0);
    setPet(0);
    setInfants(0);
    setIsCondition(false);
  };

  const handleCalender = () => {
    setCalenderDay(!calenderday);
    setDestination(false);
    setGuest(false);
  };

  // react calender date

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  });

  const handleSelectDate = (item) => {
    setState([item.selection]); // Update the DateRangePicker's state

    // Extract startDate and endDate, then update the new state
    const { startDate, endDate } = item.selection;
    setSelectedDates({
      startDate: startDate,
      endDate: endDate,
    });
  };

  const resetDates = () => {
    setSelectedDates({
      startDate: null,
      endDate: null,
    });

    setState([
      {
        startDate: null,
        endDate: null,
        key: "selection",
      },
    ]);
  };

  // react calender date

  const handleOnMouse = () => {
    setScrolls(true);
    // document.body.style.overflow = "";
  };
  // console.log(scrolls);
  const handleOnMouseRemove = () => {
    setScrolls(false);
    // document.body.style.overflow = "";
  };

  const handleDestination = () => {
    setDestination(!destination);
    setCalenderDay(false);
    setGuest(false);
  };
  const handleDestination1 = () => {
    // setDestination(false);
  };
  const handleSetBg = () => {
    setBgRed(true);
  };

  const handleRemoveBg = () => {
    setBgRed(false);
  };

  // handle marzin
  const handleMarzin = () => {
    setMarzin(!marzin);
  };

  console.log("pet", pet);
  console.log("adult", adultChild);
  console.log("infant", infants);
  // handle marzin
  // Function to handle scroll event
  const handleScroll = () => {
    if (document.documentElement.scrollTop > 1) {
      setIsScrolled(true);
      setDestination(false);
      setPosition(true);
      setCalenderDay(true);
      setGuest(true);
    } else {
      setIsScrolled(false);
      setPosition(false);
      setCalenderDay(false);
      setGuest(false);
    }
  };

  const handleChildDivClick = (e) => {
    e.stopPropagation();
    // setIsScrolled(false);
  };
  // console.log(isScrolled);

  // Use effect to attach the scroll event listener
  useEffect(() => {
    window.onscroll = handleScroll;

    return () => {
      window.onscroll = null; // Clean up on component unmount
    };
  }, []);

  // value for grab
  const [startDates, setFullStartDate] = useState("");
  const [endDates, setFullEndDate] = useState("");
  // value for grab
  useEffect(() => {
    if (selectedDates.endDate) {
      setFullEndDate(
        selectedDates.endDate.toLocaleDateString("en-US", {
          month: "short", // Short month name (e.g., Oct)
          day: "numeric", // Numeric day (e.g., 8)
        })
      );
    } else {
      setFullEndDate(""); // Clear fullDate if endDate is not available
    }
  }, [selectedDates]);
  useEffect(() => {
    if (selectedDates.startDate) {
      setFullStartDate(
        selectedDates.startDate.toLocaleDateString("en-US", {
          month: "short", // Short month name (e.g., Oct)
          day: "numeric", // Numeric day (e.g., 8)
        })
      );
    } else {
      setFullStartDate("");
    }
  }, [selectedDates]);

  console.log(startDates, endDates);
  const today = new Date();

  // data handelling all query setup

  const { hotel } = useData();
  console.log(hotel);

  return (
    <div className={`w-full relative   `}>
      <div className="   fixed py-3 md:py-0 md:top-0 md:left-0 z-30 w-full bg-white">
        <div
          className={`md:pt-4 md:pb-8 justify-center  lg:py-9 flex mx-auto w-11/12 md:justify-between items-center flex-wrap `}
        >
          <div className="hidden md:block">
            <Nav_start />
          </div>

          {/* First Navbar */}
          <div className={``}>
            <div>
              <div
                className={`flex   justify-center animate__animated animate__flipInX  ${
                  isScrolled ? "hidden " : ""
                }`}
              >
                <button className="mr-4 text-2xl">Stays|shiahb</button>
                <button className="text-2xl">Experiences</button>
              </div>

              {/* Second Nav */}
              <div
                onClick={handleChildDivClick}
                className={`py-2 px-2 md:px-4   flex shadow-xl justify-between   items-center  bg-white border-[1px]  rounded-[30px] gap-1  md:gap-3   text-lg ${
                  isScrolled ? "" : " md:hidden"
                }`}
              >
                <button
                  onClick={() => {
                    setDestination(true),
                      setCalenderDay(false),
                      setGuest(false);
                    setIsScrolled(false);
                  }}
                  className="md:pl-3 "
                >
                  AnyWhere
                </button>
                <hr className="h-5  w-[1px] bg-black  " />
                <button
                  onClick={() => {
                    setDestination(false),
                      setCalenderDay(true),
                      setGuest(false);
                    setIsScrolled(false);
                  }}
                  className=" "
                >
                  AnyDate
                </button>
                <hr className="h-5  w-[1px] bg-slate-900 " />
                <button
                  className="md:px-3"
                  onClick={() => {
                    setDestination(false),
                      setCalenderDay(false),
                      setGuest(true);
                    setIsScrolled(false);
                  }}
                >
                  <p> Add guests</p>
                </button>
                <button
                  onClick={() => {
                    setDestination(false),
                      setCalenderDay(false),
                      setGuest(true);
                    setIsScrolled(false);
                  }}
                  className="bg-red-600 hidden md:block  p-2 rounded-full"
                >
                  <IoSearch className="text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <End_nav />
          </div>
        </div>
      </div>
      <div className="">
        {/* Second Navbar */}
        <div
          className={`bg-white hidden md:block  fixed w-full animate__animated animate__zoomIn   z-30 top-24 py-10 ${
            isScrolled ? "md:hidden " : ""
          } `}
        >
          <div
            className={` .divi ${
              bgRed ? "bg-[#DDDDDD]" : ""
            }    shadow-lg  h-16 border-2 md:w-[664px]  lg:w-[784px] mx-auto rounded-r-[30px] rounded-l-[30px]   `}
          >
            <button
              onClick={handleDestination}
              onFocus={handleSetBg}
              className="md:w-[220px]  lg:w-[260px] bordersks comon focus:bg-white focus:shadow-xl h-full hover:bg-[#EBEBEB]  hover:rounded-r-[30px] hover:rounded-l-[28px] focus:rounded-r-[30px] focus:rounded-l-[30px]"
            >
              <p className="text-left pl-10">Where</p>

              <input
                onFocus={(e) => ((e.target.value = ""), handleSetBg)}
                onBlur={handleRemoveBg}
                type="text"
                name=""
                id=""
                placeholder="Search destination"
                className={`outline-none ${bgRed ? "bg-[#DDDDDD]" : ""} input`}
              />
            </button>

            <button
              onClick={handleCalender}
              className="md:w-[110px] lg:w-[130px] bordersk h-full comon hover:bg-[#EBEBEB] hover:rounded-r-[30px] hover:rounded-l-[30px] "
            >
              <p>Check in</p>
              <p>
                {selectedDates.startDate !== null ? (
                  <div className="flex justify-around flex-row">
                    <p className="overflow-auto font-bold ">
                      {selectedDates.startDate
                        ? selectedDates.startDate.toLocaleDateString("en-US", {
                            month: "short", // Full month name (e.g., October)
                            day: "numeric", // Numeric day (e.g., 8)
                          })
                        : ""}
                    </p>
                    <button onClick={resetDates}>
                      <RxCross2 />
                    </button>
                  </div>
                ) : (
                  "Add date"
                )}
              </p>
            </button>
            <button
              onClick={handleCalender}
              className=" md:w-[110px] lg:w-[130px] comon borderthird h-full hover:bg-[#EBEBEB] hover:rounded-r-[30px] hover:rounded-l-[30px]"
            >
              <p>Check Out</p>
              <p>
                {selectedDates.endDate !== null ? (
                  <div className="flex justify-around flex-row">
                    <p className="overflow-auto font-bold ">
                      {selectedDates.endDate
                        ? selectedDates.endDate.toLocaleDateString("en-US", {
                            month: "short", // Full month name (e.g., October)
                            day: "numeric", // Numeric day (e.g., 8)
                          })
                        : ""}
                    </p>
                    <button onClick={resetDates}>
                      <RxCross2 />
                    </button>
                  </div>
                ) : (
                  "Add date"
                )}
              </p>
            </button>

            <button
              onClick={handleGuest}
              className="md:w-[220px] relative lg:w-[260px] border2 h-full comon hover:bg-[#EBEBEB] hover:rounded-r-[28px] hover:rounded-l-[30px]"
            >
              <p className="text-left pl-2">
                Who <br />
                <span className="">
                  {adultChild !== 0 || pet !== 0 || infants !== 0 ? (
                    <>
                      <div className="flex">
                        <p className="flex overflow-hidden w-20">
                          {adultChild !== 0 && <p>adult{adultChild}</p>}
                          {pet !== 0 && <p>pet{pet}</p>}
                          {infants !== 0 && <p>infants{infants}</p>}
                        </p>
                        <button
                          onFocus={() => setGuest(false)}
                          onClick={handleAllstateadult}
                          className="ml-2 hover:bg-red-400 rounded-full p-1"
                        >
                          <RxCross2 />
                        </button>
                      </div>
                    </>
                  ) : (
                    <p>Add guest</p>
                  )}
                </span>
              </p>
              <button
                onMouseEnter={handleSetBg}
                onMouseLeave={handleRemoveBg}
                className="bg-red-500    rounded-full absolute top-3 right-8 texts p-3"
              >
                <IoSearch className="  text-white  " />
              </button>
            </button>

            {/* search button */}
          </div>

          {/* search div bar mega menu */}
          <div
            onMouseEnter={handleOnMouse}
            onMouseLeave={handleOnMouseRemove}
            className={` ${marzin ? "h-96" : "h-72"} ${
              destination ? "" : "hidden"
            }  bg-white md:w-[320px] lg:w-[390px]   border-b-2 shadow-2xl md:left-16 lg:left-72 2xl:left-[550px] z-50 rounded-xl absolute  h-96`}
          >
            <div className="overflow-y-auto scroll-bar md:w-[315px]  lg:w-[385px] h-full">
              <div className="flex justify-between flex-col gap-8 mx-4 ">
                {hotel?.map((item, idx) => (
                  <button
                    className="bg-gray-400 hover:bg-gray-300 py-3 px-1 rounded-r-[20px]  rounded-l-[20px] "
                    key={idx}
                  >
                    {item.location}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* search div bar mega menu */}

          {/* date calender menu */}
          <div
            className={`mt-4 w-[760px] h-96 rounded-2xl bg-white absolute lg:left-[300px] 2xl:left-[550px]   ${
              calenderday ? "" : "hidden"
            }  `}
          >
            <div className="overflow-y-auto scroll-bar w-[730px] px-4  h-[350px]">
              <div className="  ">
                <DateRangePicker
                  onChange={handleSelectDate}
                  ranges={state}
                  months={2}
                  direction="horizontal"
                  minDate={today}
                />
                ;
              </div>
            </div>
          </div>
          {/* date calender menu */}
          {/* who is guest children father */}
          <div
            className={`mt-4 ${
              guest ? "" : "hidden"
            }  lg:w-[390px] h-96 absolute md:right-10 lg:right-72 2xl:right-[550px]  rounded-2xl  bg-white`}
          >
            {/* child parent div  */}
            <div className="overflow-y-auto scroll-bar w-[370px] h-[360px] ">
              <div className="flex flex-col   mt-10 mx-6 justify-between gap-10 ">
                {/* 1st div */}
                <div className="flex justify-between  items-center">
                  <div>
                    <p className="text-xl font-bold">Adults</p>
                    <p className="text-gray-400">Age 13 or above</p>
                  </div>

                  <div className="flex justify-center items-center gap-2 ">
                    <button
                      disabled={adult === 0}
                      onClick={() => setAdults(adult - 1)}
                      className="text-2xl "
                    >
                      <CiCircleMinus />
                    </button>
                    <p className="text-xl  w-6">{adult}</p>
                    <button
                      disabled={adult === 16 || adultChild === 16}
                      onClick={() => setAdults(adult + 1)}
                    >
                      <CiCirclePlus className="text-2xl" />
                    </button>
                  </div>
                </div>
                <hr className="h-[1px] bg-black" />
                {/* 2nd div */}
                <div className="flex justify-between  items-center">
                  <div>
                    <p className="text-xl font-bold">Children</p>
                    <p className="text-gray-400">Ages 2 – 12</p>
                  </div>

                  <div className="flex justify-center items-center gap-2">
                    <button
                      disabled={children === 0}
                      onClick={() => setChildren(children - 1)}
                      className="text-2xl"
                    >
                      <CiCircleMinus />
                    </button>
                    <p className="text-xl w-6">{children}</p>
                    <button
                      disabled={children === 13 || adultChild === 16}
                      onClick={() => setChildren(children + 1)}
                    >
                      <CiCirclePlus className="text-2xl" />
                    </button>
                  </div>
                </div>
                <hr className="h-[1px] bg-black" />
                {/* 3rd div */}
                <div className="flex justify-between  items-center">
                  <div>
                    <p className="text-xl font-bold">Infants</p>
                    <p className="text-gray-400">Under 2</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <button
                      disabled={infants === 0}
                      onClick={() => setInfants(infants - 1)}
                      className="text-2xl"
                    >
                      <CiCircleMinus />
                    </button>
                    <p className="text-xl w-6">{infants}</p>
                    <button
                      disabled={infants === 5}
                      onClick={() => setInfants(infants + 1)}
                    >
                      <CiCirclePlus className="text-2xl" />
                    </button>
                  </div>
                </div>
                <hr className="h-[1px] bg-black" />
                {/* 4th div */}
                <div className="flex justify-between  items-center">
                  <div>
                    <p className="text-xl font-bold">Pets</p>
                    <Link className="text-gray-400 border-b-[1px] border-gray-400">
                      Bringing a service animal?
                    </Link>
                  </div>

                  <div className="flex justify-center items-center gap-2">
                    <button
                      disabled={pet === 0}
                      onClick={() => setPet(pet - 1)}
                      className="text-2xl"
                    >
                      <CiCircleMinus />
                    </button>
                    <p className="text-xl w-6">{pet}</p>
                    <button
                      disabled={pet === 5}
                      onClick={() => setPet(pet + 1)}
                    >
                      <CiCirclePlus className="text-2xl" />
                    </button>
                  </div>
                </div>
                {/* 4th div end */}
              </div>
            </div>
            {/* child parent divend  */}
          </div>
          {/* who is guest children father */}
        </div>
        {/* Second Navbar */}
      </div>
      {/* category */}
      <div
        className={`w-full fixed z-20  bg-white h-32 py-6 ${
          position ? "top-16 md:top-24 lg:top-28" : "top-24 md:top-60"
        }`}
      >
        <hr className="h-[1px] w-full bg-black" />
        <div className="  ">
          <Categories categories={categories}></Categories>
        </div>
      </div>
      {/* category */}
      <div className=" absolute w-full top-96    ">
        <div className="  w-11/12 mx-auto   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  2xl:grid-cols-5 md:gap-2 space-y-4 md:space-y-3  ">
          {hotel?.map((info, idx) => (
            <Alldata key={idx} info={info}></Alldata>
          ))}
        </div>
      </div>
      <div className="fixed w-full bottom-0 border-2 bg-white py-6  z-30  ">
        <footer className="flex justify-between h-3 bg-white w-11/12 mx-auto">
          <p>© 2024 Airbnb, Inc.</p>
          <p>Support & resources</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
