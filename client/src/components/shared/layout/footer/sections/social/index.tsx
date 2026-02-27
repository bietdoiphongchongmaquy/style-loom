import Image from "next/image";
import Link from "next/link";

import { BrandIcon } from "@/components/shared/brand/icon";
import { mainSocials } from "@/data/mocks/socials/socials.data";

const FooterSocialSection = () => {
  return (
    <div className="relative w-full border-t border-dark-15">
      <div className="container flex w-full flex-col items-start gap-[1.875rem] py-[3.125rem] md:flex-row md:items-center md:justify-between md:py-[5rem]">
        <div className="pointer-events-none flex items-center justify-center">
          <Image
            src="/logo/footer.svg"
            alt="Style Loom Logo"
            width={357}
            height={66}
            priority
            className="object-contain md:hidden"
          />

          <Image
            src="/logo/footer.svg"
            alt="Style Loom Logo"
            width={630}
            height={116}
            priority
            className="hidden object-contain md:block"
          />
        </div>

        <div className="flex items-center justify-center gap-[1rem]">
          {mainSocials.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.href}
                className="flex items-center justify-center"
              >
                <BrandIcon variant="brown">
                  <item.icon />
                </BrandIcon>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FooterSocialSection;
