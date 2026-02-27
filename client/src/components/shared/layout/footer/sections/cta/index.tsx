import { Fragment } from "react";
import Link from "next/link";

import ICArrow from "@/components/icons/ic-arrow";
import { mainNavigation } from "@/data/mocks";

const FooterCTASection = () => {
  return (
    <div className="relative w-full border-t border-dark-15">
      <div className="container flex w-full flex-col gap-[1.875rem] py-[2.5rem] md:flex-row md:items-center md:justify-between md:gap-[3.125rem] md:py-[3.75rem]">
        <nav className="flex w-full flex-col gap-[1.875rem] md:flex-row md:items-center md:gap-[3.125rem]">
          {mainNavigation.map((item) => {
            const children = item.children ?? [];

            return (
              <div
                key={item.id}
                className="flex flex-col items-start gap-[1.25rem] md:gap-[1.5rem]"
              >
                <p className="text-[1rem] font-medium text-white md:text-[1.125rem]">
                  {item.label}
                </p>

                <div className="flex w-full items-center gap-[.625rem] md:gap-[.75rem]">
                  {item.children?.map((childItem, index) => {
                    const isLast = index === children.length - 1;

                    return (
                      <Fragment key={childItem.id}>
                        <Link
                          href={childItem.href}
                          className="font-mono text-[.875rem] leading-[1.5] whitespace-nowrap text-grey-40 md:text-[1rem]"
                        >
                          {childItem.label}
                        </Link>

                        {!isLast && (
                          <div className="size-[.375rem] rounded-full bg-dark-15" />
                        )}
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex w-full flex-col gap-[1.25rem] md:gap-[1.5rem]">
          <p className="text-[1rem] font-medium text-white md:text-[1.125rem]">
            Subscribe to Newsletter
          </p>

          <div className="flex w-full items-center justify-between gap-[.625rem] rounded-[.4375rem] bg-dark-10 px-[1.25rem] py-[.875rem]">
            <input
              type="text"
              placeholder="Your Email"
              className="w-full font-mono text-[.875rem] leading-[1.5] text-white placeholder:text-grey-40 focus-visible:outline-0"
            />

            <button
              type="submit"
              className="flex size-[1.25rem] cursor-pointer items-center justify-center"
            >
              <ICArrow className="size-[.9375rem] text-brown-60" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCTASection;
