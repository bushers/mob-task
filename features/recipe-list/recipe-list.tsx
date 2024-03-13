"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { useBookmarksStore } from "@/features/recipe-list/bookmarks/bookmark-store";
import { BookmarkCircle } from "./bookmarks/bookmark-icons";

export interface Recipe {
  id: number;
  title: string;
  slug: string;
  image: Array<{
    id: number;
    title: string;
    url: string;
    width: string;
    height: string;
  }>;
}

interface RecipesApiResponse {
  recipes: Array<Recipe>;
}

export function RecipeList() {
  const [recipesData, setRecipesData] = useState<Array<Recipe>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.mob.co.uk/task/recipes.json");
        const data: RecipesApiResponse = await response.json();
        setRecipesData(data.recipes);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        } else {
          console.log(`There has been an error: ${error}`);
        }
      }
    };
    fetchData();
  }, []);

  const bookmarks = useBookmarksStore((state) => state.bookmarkedRecipes);
  const addBookmark = useBookmarksStore((state) => state.addRecipe);
  const removeBookmark = useBookmarksStore((state) => state.removeRecipe);

  console.log(bookmarks);

  return (
    <ul className="flex flex-wrap justify-between items-center">
      {recipesData.map((r) => (
        <li key={r.id} className="basis-[166px] mb-5">
          <div className="w-[166px] h-[166px] relative mb-2">
            <Image
              src={r.image[0].url}
              alt={r.image[0].title}
              fill
              style={{ objectFit: "cover", borderRadius: 12 }}
            />
          </div>
          <div className="flex justify-between items-start">
            <span className="text-xs">{r.title}</span>
            <button
              onClick={() => {
                if (bookmarks.get(r.id)) {
                  removeBookmark(r.id);
                } else {
                  addBookmark(r);
                }
              }}
            >
              <BookmarkCircle isSelected={bookmarks.has(r.id)} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
