export default function Banners() {
    return (
      <section className="m-10">
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
  