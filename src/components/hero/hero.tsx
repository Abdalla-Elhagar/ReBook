import CategoryList from "./categores/categoryList";
import CategorySlider from "./categores/categorySlider";

export default function Hero() {
  return (
    <section className="heroSection px-14 max-lg:px-0 -mt-5 md:-mt-3 lg:mt-0 pt-0 md:pt-6">
      <div className="container grid grid-cols-7 ">
        <div className="catrgoryList max-md:col-span-7 mb-5 col-span-2 max-md:border-none max-md:mr-0  border-r mr-10 border-black/25">
          <CategoryList />
        </div>
        <div className="catigorySlider col-span-5 max-md:col-span-7">
          <CategorySlider />
        </div>
      </div>
    </section>
  );
}
