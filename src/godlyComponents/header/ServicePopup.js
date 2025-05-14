// src/godlyComponents/header/ServicePopup.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useGodlyContext } from "@/context/godlyContext";
import { citiesMap } from "./CitiesPopup";

const ServicePopup = ({ open, onOpenChange, services }) => {
  const { city } = useGodlyContext();

  const cityKey = Object.keys(citiesMap).find((key) => citiesMap[key] === city);

  return (
    <Dialog open={open} onOpenChange={onOpenChange} className="">
      <DialogHeader>
        <DialogTitle className="hidden">Our Services</DialogTitle>
      </DialogHeader>
      <DialogContent
        hideCloseButton
        className="paper-bg-16 z-100 overflow-y-auto border-none bg-[#fff9f3] p-4 md:top-[280px] md:max-w-[1045px] md:p-6"
      >
        <div className="md:max-h-auto grid max-h-[calc(100vh-256px)] w-full grid-cols-2 sm:grid-cols-2 md:max-h-[calc(100vh-128px)] lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              href={`/${cityKey}/${service.link}`}
              key={index}
              className={cn(
                "group border-b-[1.5px] border-[#8d8477] hover:bg-[#2D2B2B]",
                index % 1 === 0 ? "md:mx-[20px]" : "",
              )}
              onClick={() => {
                onOpenChange(false);
              }} // Close popup on link click
            >
              <div
                key={index} // Consider removing duplicate key if Link key is sufficient
                className="flex min-h-18 flex-row items-start gap-[6px] gap-y-0 p-2 text-[#2D2B2B] transition-all group-hover:text-[#FDE4C8]"
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  width={27}
                  height={27}
                  className="size-[27px] object-contain group-hover:filter-[invert(1)]"
                />
                <div className="flex flex-col gap-[6px]">
                  <h3 className="text-sm leading-tight font-normal">
                    {service.name}
                  </h3>
                  <p className="font-['satoshi-light'] text-xs font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServicePopup;
