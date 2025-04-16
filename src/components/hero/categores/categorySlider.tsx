import programmingImage from "./images/programmingImage.png";
import EducationalImage from "./images/Educational.png";
import MedicalImage from "./images/MedicalImage.png";
import StoriesImage from "./images/Stories.png";
import { FaArrowRightLong } from "react-icons/fa6";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router";
import { sendCategoryName } from "../../../slices/dataControl";
import { useDispatch } from "react-redux";
import { Autoplay, Pagination } from "swiper/modules";

const categorySliderList = [
  {
    categoryId: "1",
    categoryTitle: "Programming",
    categoryImage: programmingImage,
  },
  {
    categoryId: "2",
    categoryTitle: "Scientific",
    categoryImage:
      "https://i.pinimg.com/736x/66/68/70/6668703eb90d5d229124ec68a0d0dd22.jpg",
  },
  {
    categoryId: "3",
    categoryTitle: "Educational",
    categoryImage: EducationalImage,
  },
  {
    categoryId: "4",
    categoryTitle: "Medical",
    categoryImage: MedicalImage,
  },
  {
    categoryId: "5",
    categoryTitle: "Stories",
    categoryImage: StoriesImage,
  },
];

export default function CategorySlider() {
  const dispatch = useDispatch();
  function handleCategory(categoryName: string) {
    dispatch(sendCategoryName(categoryName));
  }
  return (
    <>
      <Swiper
        loop={true}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper min-h-[400px] max-sm:h-fit max-sm:min-h-[525px]"
      >
        {categorySliderList.map((category: any) => (
          <SwiperSlide key={category.categoryID} className=" max-sm:h-fit">
            <div className="  flex justify-between max-sm:justify-start max-sm:flex-col items-center bg-black relative text-white pr-5">
              <img
                className="w-5/8 h-[500px] max-sm:w-full"
                src={category.categoryImage}
                alt="category image"
              />
              <div className="text-sm pb-2 max-sm:h-20 h-full max-lg:h-full max-sm:w-full max-sm:pl-5 max-sm:flex-row max-sm:pt-0 items-end flex flex-col justify-between">
                <h3 className="text-xl max-lg:text-lg font-bold">
                  {category.categoryTitle} Books
                </h3>
                <Link
                  className="flex absolute bottom-2 right-5 cursor-pointer items-center gap-1"
                  onClick={() => handleCategory(category.categoryTitle)}
                  to={"/categoryPage"}
                >
                  show
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
