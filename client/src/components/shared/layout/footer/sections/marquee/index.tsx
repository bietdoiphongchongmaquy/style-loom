import { Marquee } from "@/components/ui/marquee";
import ICSeparator from "@/components/icons/ic-separator";

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
    <div className="relative w-full border-t border-dark-15">
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
              <div className="flex size-[2.5rem] items-center justify-center md:size-[3.125rem]">
                <ICSeparator className="size-[2.5rem] text-brown-60 md:size-[3.125rem]" />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default FooterMarqueeSection;
