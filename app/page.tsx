"use client";

import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RecipeList } from "@/features/recipe-list/recipe-list";

export default function Home() {
  return (
    <main className="flex h-dvh flex-col items-center justify-between">
      <div className="py-12 w-[355px] h-screen">
        <div className="flex justify-center items-center relative">
          <Heading text="Recipebox" />
        </div>

        <ScrollArea className="h-full">
          <RecipeList />
        </ScrollArea>
      </div>
    </main>
  );
}
