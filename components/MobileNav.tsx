"use client";
import Image from "next/image";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "./ui/sheet";
import Link from "next/link";
import { sidebarElements } from "@/constants/sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="ham"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={30}
              height={30}
              className="max-sm:size-10"
            />
            <p className="text-[26px] text-white max-sm:hidden">MATTUM</p>
          </Link>

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarElements.map((el) => {
                  const isAct =
                    pathName === el.route;

                  return (
                    <SheetClose asChild key={el.route}>
                      <Link
                        href={el.route}
                        key={el.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          { "bg-blue-1": isAct }
                        )}
                      >
                        <Image
                          src={el.imgUrl}
                          alt={el.label}
                          width={20}
                          height={20}
                        />
                        <p className="font-semibold">{el.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
