"use client";

import { Search } from "lucide-react";
import Link from "next/link";

import { Input } from "~/components/common/input";
import FaqAccordion from "~/components/layouts/accordion/FaqsAccordion";
import TopicsAccordions from "~/components/layouts/accordion/TopicAccordion";
import { faqData } from "~/constants/faqsdata";

//

const HelpCenter = () => {
  //

  return (
    <div className="w-full bg-background container md:px-20">
      <div className="mx-auto w-full max-w-[1349px]">
        <section
          className="py-[24px] text-center md:px-0 md:py-9"
          aria-labelledby="help-center-heading"
        >
          <span
            id="help-center-heading"
            className="font-inter rounded-lg bg-[#F1F1F1] p-[10px] text-xl text-neutral-dark-1"
          >
            Help Center
          </span>

          <h1
            className="my-6 text-4xl font-bold text-neutral-dark-2 md:text-5xl lg:text-6xl"
            role="heading"
            aria-level={1}
          >
            How can <span className="text-primary">we</span> help You?
          </h1>
          <p className="text-center text-base font-normal text-neutral-dark-1 md:text-lg">
            Find advice and answers from our support team
          </p>
          <div className="mx-auto mt-11 md:mt-16 flex w-full items-center justify-start overflow-hidden rounded-full border border-slate-300 px-6 py-1 md:py-2 text-neutral-dark-1 focus-within:ring-1 focus-within:ring-primary focus-within:ring-offset-0 md:w-[644px]">
            <Search className="h-6 w-6 text-neutral-dark-1" />
            <Input
              isButtonVisible={false}
              className="-ml-2 w-full border-none bg-transparent placeholder:text-xs focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              type="text"
              placeholder="Search on any topic..."
              aria-label="Search on any topic"
            />
          </div>
        </section>
      </div>

      <section
        className="mt-12 md:mt-16"
      >
        <h3
          className="mb-7 text-center text-[28px] font-bold text-primary"
        >
          Browse by topics
        </h3>

        <TopicsAccordions />
      </section>

      <section className="my-28">
        <div className="grid w-full grid-cols-1 gap-y-10 lg:grid-cols-2">
          <div className="">
            <h1
              className="mb-2 text-2xl md:text-4xl font-semibold text-neutral-dark-1"
              role="heading"
              aria-level={1}
            >
              Frequently Asked Questions
            </h1>

            <p className="mb-6 md:text-[18px] text-neutral-dark-1">
              We couldn’t answer your question?
            </p>

            <Link
              href="/contact-us"
              className="justify-center rounded-md bg-primary py-2 px-5 md:py-3 md:px-7 text-background"
            >
              Contact us
            </Link>
          </div>

          <FaqAccordion faqs={faqData} containerClassName="px-0 py-0 " />
        </div>
      </section>

      <div className="mt-16 md:mt-20 mb-24">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-10 lg:px-10 xl:px-10">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">
            Didn’t find an answer?
          </h1>
          <p className="mt-4 mb-6 md:text-lg font-normal text-neutral-dark-1">
            Contact us for more inquiries and information about our services.
          </p>
          <Link
              href="/contact-us"
              className="justify-center rounded-md bg-primary py-2 px-5 md:py-3 md:px-7 text-background"
            >
              Contact us
            </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
