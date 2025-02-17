"use client";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
interface ITable {
  title: string;
  desc: string;
}

const PersonalRoom = () => {
  const { user } = useUser();
  const meetingId = user?.id;
  const { call } = useGetCallById(meetingId!);
  const client = useStreamVideoClient();
  const router = useRouter()
  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;
  const startRoom = async () => {
    if (!client || !user) return;
    if (!call) {
      const newCall = client.call("default", meetingId!);
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }
    async () => await router.push(`/meeting/${meetingId}?personal=true`)
  };
  const Table = ({ title, desc }: ITable) => (
    <div className="flex flex-col items-start gap-2 xl:flex-row">
      <h1 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
        {title}:
      </h1>
      <h2 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
        {desc}
      </h2>
    </div>
  );
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Personal Room</h1>

      <div className="flex w-ful flex-col gap-8 xl:max-w-[900px]">
        <Table title="Topic" desc={`${user?.username}'s room`} />
        <Table title="Meeting ID" desc={meetingId!} />
        <Table title="Meeting link" desc={meetingLink} />
      </div>
      <div className="flex gap-5">
        <Button className="bg-blue-1" onClick={startRoom}>
          start Meeting
        </Button>
        <Button
          className="bg-dark-3"
          onClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({
              title: "Link Copied",
            });
          }}
        >
          Copy Invitation
        </Button>
      </div>
    </section>
  );
};

export default PersonalRoom;
