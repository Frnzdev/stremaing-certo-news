import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mt-4 ml-5 mr-5 bg-gray-200 py-6  rounded-2xl">
      <div className="flex items-center gap-8 px-6">
        <Image src="/conecta.png" alt="Logo" width={240} height={39} />
        <Tabs defaultValue="account" className="p-2 bg-slate-100 rounded-md">
          <TabsList>
            <TabsTrigger
              className="pt-3 pb-3 px-4 py-4 focus:bg-white focus:border-none"
              value="Esporte"
            >
              Esporte
            </TabsTrigger>
            <TabsTrigger
              className="pt-3 pb-3 px-4 py-4 focus:bg-white focus:border-none"
              value="Politica"
            >
              Política
            </TabsTrigger>
            <TabsTrigger
              className="pt-3 pb-3 px-4 py-4 focus:bg-white focus:border-none"
              value="Clima"
            >
              Clima
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex justify-end">
          <Link href="/login">
            <Button className="bg-black text-white">Login</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
