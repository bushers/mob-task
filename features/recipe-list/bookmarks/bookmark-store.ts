import { create } from "zustand";

import type { Recipe } from "../recipe-list";

interface BookmarksState {
  bookmarkedRecipes: Map<number, Recipe>;
  addRecipe: (recipe: Recipe) => void;
  removeRecipe: (recipeId: number) => void;
}

const useBookmarksStore = create<BookmarksState>()((set) => ({
  bookmarkedRecipes: new Map(),
  addRecipe: (recipe: Recipe) =>
    set((state) => {
      if (!state.bookmarkedRecipes.get(recipe.id)) {
        return {
          bookmarkedRecipes: new Map(state.bookmarkedRecipes).set(
            recipe.id,
            recipe
          ),
        };
      }
      return state;
    }),
  removeRecipe: (recipeId: number) =>
    set((state) => {
      const newBookmarks = new Map(state.bookmarkedRecipes);
      if (newBookmarks.delete(recipeId)) {
        return {
          bookmarkedRecipes: newBookmarks,
        };
      }
      return state;
    }),
}));

export { useBookmarksStore };
