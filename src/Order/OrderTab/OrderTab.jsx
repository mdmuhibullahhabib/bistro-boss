import FoodCard from "../../components/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from 'swiper/modules';

const OrderTab = ({ items }) => {
  console.log(items);

  const chunkArray = (array, size) => {
    const chunks = []; // এখানে ভাগ করা গ্রুপগুলো রাখা হবে
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size)); // প্রতি ৬টি আইটেম একসাথে নিয়ে একটি গ্রুপ বানানো
    }
    return chunks; // ভাগ করা গ্রুপগুলো রিটার্ন করবে
  };

  // Items-কে ভাগ করা (৬টি করে)
  const chunkedItems = chunkArray(items, 6);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div>
      <Swiper
        pagination={pagination} // Swiper-এর pagination চালু
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* chunkedItems থেকে প্রতিটি গ্রুপের জন্য একটি স্লাইড তৈরি */}
        {chunkedItems.map((chunk, index) => (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-3 gap-10">
              {chunk.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;