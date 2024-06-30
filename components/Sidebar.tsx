"use client";
import { sidebarElements } from "@/constants/sidebar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarElements.map((el) => {
          const isAct = pathName === el.route || pathName.startsWith(`${el.route}/`);

          return (
            <Link
              href={el.route}
              key={el.label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                { "bg-blue-1": isAct }
              )}
            >
              <Image src={el.imgUrl} alt={el.label} width={20} height={20} />
              <p className="text-lg font-semibold max-lg:hidden">{el.label} </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
