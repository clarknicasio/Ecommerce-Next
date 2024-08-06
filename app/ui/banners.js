export default function Banners() {
    return (
      <section className="m-5 lg:m-10">
        <div className="mb-5">
          <img
              src="/images/ads/ads6.webp"
              alt="Banner 4"
              className="w-full h-auto object-cover rounded-md shadow-md"
          />
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <img
              src="/images/ads/ads1.jpg"
              alt="Banner 1"
              className="w-full h-auto object-cover rounded-md shadow-md"
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <img
              src="/images/ads/ads2.jpg"
              alt="Banner 2"
              className="w-full h-auto object-cover rounded-md shadow-md"
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <img
              src="/images/ads/ads3.jpg"
              alt="Banner 3"
              className="w-full h-auto object-cover rounded-md shadow-md"
            />
          </div>
        </div>
      </section>
    );
}
  