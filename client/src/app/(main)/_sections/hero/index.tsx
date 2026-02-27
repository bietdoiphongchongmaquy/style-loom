import Image from "next/image";
import Link from "next/link";

import { chunk } from "@/lib/utils";
import ICLink from "@/components/icons/ic-link";
import { BrandButton } from "@/components/shared/brand/button";

const HERO_DATA = {
  categories: ["All", "Mens", "Womens"],
  title: "Elevate Your Style with StyleLoom",
  description:
    "Explore a world of fashion at StyleLoom, where trends meet affordability. Immerse yourself in the latest styles and seize exclusive promotions.",
  image: "/hero.png",
  buttonText: "shop now",
  highlights: [
    {
      label: "1,500 +",
      value: "Fashion Products",
    },
    {
      label: "50 +",
      value: "New arrivals every month.",
    },
    {
      label: "30%",
      value: "OFF on select items.",
    },
    {
      label: "95%",
      value: "Customer Satisfaction Rate",
    },
  ],
};

const HeroSection = () => {
  const highlightRows = chunk(HERO_DATA.highlights, 2);

  return (
    <section className="container mt-[30px] w-full overflow-hidden">
      <div className="flex w-full flex-col rounded-[14px] border border-dark-15 md:rounded-[16px]">
        {/* Image Container */}
        <div className="relative flex w-full flex-col">
          <div className="relative h-[250px] w-full md:h-[442px]">
            <Image
              src="/hero.png"
              alt="Hero Image"
              fill
              className="rounded-t-[14px] rounded-b-[2px] object-cover md:hidden"
            />
            <Image
              src="/hero-desktop.png"
              alt="Hero Image"
              fill
              className="hidden rounded-t-[16px] rounded-b-[2px] object-cover md:block"
            />
          </div>
          <div className="absolute bottom-[-27px] flex w-full items-center justify-center">
            <div className="z-[2] rounded-[20px] bg-dark-06 p-[10px_11px_1px_11px] md:p-[13px_15px_1px_15px]">
              <Link href="/products">
                <BrandButton
                  variant="dashed"
                  iconPosition="end"
                  icon={<ICLink className="size-[.8594rem] text-current" />}
                >
                  shop now
                </BrandButton>
              </Link>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="mt-[27px] flex w-full flex-col md:mt-0 md:flex-row md:items-end">
          <div className="flex w-full flex-col items-start gap-[16px] px-[20px] pt-[40px] pb-[20px] md:w-1/2 md:gap-[20px] md:px-[60px] md:pt-[80x] md:pb-[60px]">
            <div className="flex items-center gap-[10px]">
              {["All", "Mens", "Womens"].map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={`/${item.toLowerCase()}`}
                    className="rounded-[8px] border border-dark-15 px-[20px] py-[12px] font-mono text-[14px] leading-[1.5] text-grey-70"
                  >
                    {item}
                  </Link>
                );
              })}
            </div>

            <h1 className="text-[28px] font-medium text-white uppercase md:text-[38px]">
              Elevate Your Style with StyleLoom
            </h1>

            <p className="text-[14px] leading-[1.5] text-grey-40 md:text-[16px]">
              Explore a world of fashion at StyleLoom, where trends meet
              affordability. Immerse yourself in the latest styles and seize
              exclusive promotions.
            </p>
          </div>

          <div className="flex w-full flex-col md:w-1/2 md:border-l md:border-dark-15">
            {highlightRows.map((row, rowIndex) => {
              return (
                <div
                  key={rowIndex}
                  className="mt-0 flex w-full items-stretch justify-center border-t border-dark-15 md:first:border-t-0"
                >
                  {row.map((col, colIndex) => (
                    <div
                      key={colIndex}
                      className={`flex w-1/2 shrink-0 grow-0 flex-col items-start gap-[10px] border-r border-dark-15 p-[30px] last:border-r-0 md:gap-[12px] md:p-[50px] ${rowIndex === 0 ? "md:pt-[100px]" : ""}`}
                    >
                      <p className="text-[30px] leading-[1.5] font-medium text-white md:text-[34px]">
                        {col.label}
                      </p>
                      <p className="text-[14px] leading-[1.5] text-grey-50 md:text-[16px]">
                        {col.value}
                      </p>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
