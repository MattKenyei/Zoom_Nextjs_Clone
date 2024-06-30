"use client"

import Image from "next/image"

const MeetingTypeList = () => {
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div className="bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer">
            <div className="flex-center glassmorphism size-12 rounded-[10px]">
                <Image src='/icons/add-meeting.svg' alt="Meeting" width={20} height={20}/>
            </div>
        </div>
    </section>
  )
}

export default MeetingTypeList
