"use client";

import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookmarkIcon } from "@/features/recipe-list/bookmarks/bookmark-icons";
import { useBookmarksStore } from "@/features/recipe-list/bookmarks/bookmark-store";
import { BookmarksDrawer } from "@/features/recipe-list/bookmarks/bookmarks-drawer";
import { RecipeList } from "@/features/recipe-list/recipe-list";

export default function Home() {
  const bookmarks = useBookmarksStore((state) => state.bookmarkedRecipes);

  return (
    <main className="flex h-dvh flex-col items-center justify-between">
      <div className="py-12 px-1 w-[355px] h-screen">
        <div className="flex justify-center items-center relative">
          <Heading text="Recipebox" />
          <BookmarksDrawer
            triggerElement={
              <div className="absolute right-0 top-0">
                <BookmarkIcon numberOfBookMarks={bookmarks.size} />
              </div>
            }
          />
        </div>

        <ScrollArea className="h-full">
          <RecipeList />
        </ScrollArea>
      </div>
    </main>
  );
}
