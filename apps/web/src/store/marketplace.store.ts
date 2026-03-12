import { create } from "zustand";

export type Category = "all" | "trading" | "defi" | "portfolio" | "analytics";

export type PriceFilter = {
  min?: number;
  max?: number;
};

export type SortOption = "trending" | "new" | "price" | "rating";

export type MarketplaceStore = {
  category: Category;
  query: string;
  priceFilter: PriceFilter;
  sortBy: SortOption;
  setCategory: (category: Category) => void;
  setQuery: (query: string) => void;
  setPriceFilter: (filter: PriceFilter) => void;
  setSortBy: (sortBy: SortOption) => void;
  reset: () => void;
};

const initialState = {
  category: "all" as Category,
  query: "",
  priceFilter: {},
  sortBy: "trending" as SortOption,
};

export const useMarketplaceStore = create<MarketplaceStore>((set) => ({
  ...initialState,
  setCategory: (category) => set({ category }),
  setQuery: (query) => set({ query }),
  setPriceFilter: (priceFilter) => set({ priceFilter }),
  setSortBy: (sortBy) => set({ sortBy }),
  reset: () => set(initialState),
}));
