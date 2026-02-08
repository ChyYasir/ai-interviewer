import { HomeView } from "@/modules/home/ui/views/home-view";

export default async function Home() {
  return (
    <div className="flex flex-col gap-4 max-w-sm mx-auto mt-20">
      <HomeView />
    </div>
  );
}
