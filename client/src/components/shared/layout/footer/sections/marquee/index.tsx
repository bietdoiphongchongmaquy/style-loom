import { Marquee } from "@/components/ui/marquee";
import { DashedLine } from "@/components/shared/brand/dashed-line";

const PRODUCTS_NAME = [
  "Henley Shirt",
  "Tank Top",
  "T-Shirt",
  "Long-Sleeve T-Shir",
  "Raglan Sleeve Shirt",
  "Crop Top",
  "V-Neck Shirt",
  "Muscle Shirt",
  "Polo Dress",
];

const FooterMarqueeSection = () => {
  return (
    <div className="relative w-full">
      <DashedLine
        color="var(--color-dark-15)"
        className="top-0 right-0 left-0"
      />
      <div className="w-full py-[1.875rem] md:py-[2.5rem]">
        <Marquee className="flex items-center gap-[.75rem]">
          {PRODUCTS_NAME.map((item) => (
            <div
              key={item}
              className="flex shrink-0 items-center gap-[.75rem]"
            >
              <p className="text-[1.25rem] leading-[1.2] uppercase md:text-[1.5rem]">
                {item}
              </p>
              <div className="flex size-[2.5rem] items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 40 40"
                >
                  <path
                    fill="#AE9B84"
                    d="m19.89 0 .533 14.928L24.05.437 21.466 15.15l6.56-13.42-5.586 13.853L31.646 3.82l-8.343 12.39 11.45-9.593-10.737 10.385L37.211 10l-12.662 7.926 14.363-4.106-14.033 5.12 14.902-1.03L24.99 20l14.79 2.09-14.902-1.03 14.033 5.12-14.363-4.106L37.211 30l-13.195-7.002 10.737 10.385-11.45-9.593 8.343 12.39-9.206-11.763 5.585 13.854-6.559-13.42 2.583 14.712-3.626-14.491L19.89 40l-.533-14.928-3.625 14.491 2.582-14.713-6.558 13.421 5.584-13.854L8.135 36.18l8.343-12.39-11.45 9.593 10.736-10.385L2.57 30l12.661-7.926L.87 26.18l14.033-5.12L0 22.09 14.79 20 0 17.91l14.902 1.03L.869 13.82l14.362 4.106L2.57 10l13.194 7.002L5.028 6.617l11.45 9.593L8.135 3.82l9.205 11.763L11.756 1.73l6.558 13.42L15.732.438l3.625 14.49L19.89 0Z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default FooterMarqueeSection;
