import programmingImage from "./images/programmingImage.webp";
import EducationalImage from "./images/Educational.webp";
import MedicalImage from "./images/MedicalImage.webp";
import StoriesImage from "./images/Stories.webp";
import { FaArrowRightLong } from "react-icons/fa6";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { sendCategoryName } from "../../../slices/dataControl";
import { useDispatch } from "react-redux";
import { Autoplay, Pagination } from "swiper/modules";

const categorySliderList = [
  {
    categoryId: "1",
    categoryTitle: "Programming",
    categoryImage: programmingImage,
    categoryText:
      "Programming empowers you to turn ideas into tangible reality.",
  },
  {
    categoryId: "2",
    categoryTitle: "Scientific",
    categoryImage:
      "https://i.pinimg.com/736x/66/68/70/6668703eb90d5d229124ec68a0d0dd22.jpg",
    categoryText:
      "Science is the key to exploring the mysteries of the universe and understanding the world around us.",
  },
  {
    categoryId: "3",
    categoryTitle: "Educational",
    categoryImage: EducationalImage,
    categoryText:
      "Education is the pathway to new horizons and achieving success.",
  },
  {
    categoryId: "4",
    categoryTitle: "Medical",
    categoryImage: MedicalImage,
    categoryText:
      "Medicine is a continuous journey towards better health and disease treatment.",
  },
  {
    categoryId: "5",
    categoryTitle: "Stories",
    categoryImage: StoriesImage,
    categoryText:
      "Stories inspire us and teach us life lessons in a profound way.",
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
        className="mySwiper min-h-fit"
      >
        {categorySliderList.map((category: any) => (
          <SwiperSlide key={category.categoryId} className=" min-h-fit">
            <div className="  flex justify-between max-sm:justify-start max-sm:min-h-[620px] min-h-fit max-sm:flex-col items-center bg-black relative text-white pr-5">
              <img
                className="w-5/8 h-[500px] max-sm:w-full"
                src={category.categoryImage}
                alt="category image"
              />
              <div className="text-sm pb-2 max-sm:h-20 h-fit max-lg:h-full max-sm:w-full max-sm:pl-5 max-sm:pt-0 items-start flex flex-col justify-start">
                <h3 className="text-xl max-lg:text-lg w-full font-bold">
                  {category.categoryTitle} Books
                </h3>
                <p>{category.categoryText}</p>
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
