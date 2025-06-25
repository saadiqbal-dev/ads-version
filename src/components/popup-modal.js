import React from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import QuoteButton from "./quoteButton";
import { DialogTitle } from "@radix-ui/react-dialog";

const TimerBox = ({ value, label }) => {
  return (
    <div className="flex shrink-0 flex-col items-center gap-2">
      <div
        className="flex size-[64px] shrink-0 items-center justify-center rounded-[8px] bg-[#1F1D1D] p-3 font-[Satoshi-Medium] text-[32px] text-white"
        style={{
          boxShadow:
            "0px 3.015px 3.015px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(255, 255, 255, 0.30) inset",
        }}
      >
        {value}
      </div>
      <p className="font-[Satoshi-Medium] text-sm text-black">{label}</p>
    </div>
  );
};

export function PopupModal() {
  return (
    <Dialog defaultOpen>
      <DialogContent
        className="flex aspect-[1811/2711] min-h-[675px] max-w-[400px] flex-col border-0 bg-transparent bg-[url(/assets/UnionMobile.png)] bg-contain bg-center bg-no-repeat px-16 shadow-none md:max-w-[400px] md:bg-[url(/assets/Union.png)] md:px-8"
        hideCloseButton
      >
        <DialogHeader className="sr-only" />
        <DialogDescription className="sr-only" />
        <DialogTitle className="sr-only" />

        <h2 className="trim mb-2 text-center text-[32px] leading-[1] text-black">
          South Florida Summer Special –{" "}
          <span className="bg-gradient-to-b from-[#EC7F58] via-[#EC7B56] to-[#EB7753] bg-clip-text text-transparent">
            $59 Off
          </span>
        </h2>
        <p className="mx-auto w-[272px] text-center font-[Satoshi-medium] text-sm font-medium tracking-[0.96px] md:w-[352px] md:text-base">
          We’re opening up limited spots for first-time clients this June.
        </p>

        <div className="mt-3 mb-2 flex flex-col gap-[24px]">
          <p className="w-[352px] text-center font-[Satoshi-medium] text-base font-medium tracking-[0.96px]">
            ⏳ Offer ends in:
          </p>
          <div className="flex items-center justify-center gap-5">
            <TimerBox label={"DAYS"} value={"07"} />
            <TimerBox label={"DAYS"} value={"07"} />
            <TimerBox label={"DAYS"} value={"07"} />
            <TimerBox label={"DAYS"} value={"07"} />
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 h-[1px] w-[calc(100%-32px)] -translate-x-1/2 -translate-y-1/2 bg-[url(/assets/dashes-ticket.png)] object-cover" />

        <div className="mt-8 flex flex-col rounded-[12px] border border-black p-2 md:mt-10">
          <div className="flex flex-col rounded-[8px] border border-black">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <p className="trim bg-gradient-to-b from-[#EC7F58] via-[#EC7B56] to-[#EB7753] bg-clip-text py-4 text-right text-[96px] text-transparent">
                $59
              </p>
              <p className="trim text-left text-[24px] leading-[1] tracking-wide">
                OFF <br />
                <span className="text-[#AE9D8A]">
                  FIRST WINDOW <br /> CLEANING
                </span>
              </p>
            </div>
            <div className="h-[1px] w-full bg-[#CCCACA]" />
            <p className="px-[6px] py-[15px] text-center font-[Satoshi-medium] text-sm font-medium tracking-[0.96px] md:text-base">
              Just in time for summer entertaining. <br />
              Expires June 30th. Countdown’s ticking.
            </p>
          </div>
        </div>
        <DialogClose asChild>
          <QuoteButton className="quote-button py-4! text-[24px]! md:py-6!">
            Get My Quote
          </QuoteButton>
        </DialogClose>
        <DialogFooter />
      </DialogContent>
    </Dialog>
  );
}
