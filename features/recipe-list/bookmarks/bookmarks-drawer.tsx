import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useBookmarksStore } from "./bookmark-store";
import { CloseButton } from "@/components/ui/close-button";
import Image from "next/image";

interface BookmarksDrawerProps {
  triggerElement: React.ReactNode;
}

export function BookmarksDrawer({ triggerElement }: BookmarksDrawerProps) {
  const bookmarks = useBookmarksStore((state) => state.bookmarkedRecipes);
  const removeBookmark = useBookmarksStore((state) => state.removeRecipe);

  return (
    <Drawer>
      <DrawerTrigger>{triggerElement}</DrawerTrigger>
      <DrawerContent className="max-w-[355px] m-auto">
        <DrawerClose className="flex ml-auto pr-2 pt-4">
          <CloseButton />
        </DrawerClose>
        <div className="max-w-sm mx-auto text-white">
          {bookmarks.size === 0 ? (
            <div className="text-xs pb-6">{`You haven't bookmarked any recipes`}</div>
          ) : (
            <ul className="p-4">
              {Array.from(bookmarks).map(([key, b]) => (
                <li
                  key={key}
                  className="flex justify-start items-center text-xs"
                >
                  <div className="w-[55px] h-[55px] relative mb-2 shrink-0 mr-3">
                    <Image
                      src={b.image[0].url}
                      alt={b.image[0].title}
                      fill
                      style={{ objectFit: "cover", borderRadius: 12 }}
                    />
                  </div>
                  <div className="mr-2">{b.title}</div>

                  <button
                    className="ml-auto bg-[#3F3F46] rounded-xl px-2 py-1"
                    onClick={() => removeBookmark(b.id)}
                  >{`Remove`}</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
