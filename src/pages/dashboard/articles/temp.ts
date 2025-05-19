// This will simulate api for data searching and sorting..

import { wait } from "@/lib/utils";
import type { Article } from "@/types/articles";

type GetDataParams = {
  page?: number;
  limit?: number;
  sortBy?: keyof Article;
  order?: "asc" | "desc";
  query?: string;
};

const allData: Article[] = [
  {
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends",
    traffic: 2240000,
    words: 4575,
    createdOn: "20 hours ago",
  },
  {
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends",
    traffic: 2240000,
    words: 3480,
    createdOn: "21 hours ago",
  },
  {
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends",
    traffic: 2240000,
    words: 2676,
    createdOn: "a day ago",
  },
  {
    title: "Top Virtual Executive Assistant Services (2024)",
    keyword: "virtual executive assistant",
    traffic: 2900,
    words: 2408,
    createdOn: "1 Oct, 24",
  },
  {
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services",
    traffic: 390,
    words: 1793,
    createdOn: null,
  },
  {
    title: "Top Amazon Payment Methods for Quick Access to Funds",
    keyword: "amazon payment methods",
    traffic: 3600,
    words: 2647,
    createdOn: null,
  },
  {
    title:
      "Backlinks 101: What are backlinks and why they're important [Free template]",
    keyword: "backlinks",
    traffic: 8100,
    words: 2261,
    createdOn: null,
  },
  {
    title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
    keyword: "ai seo software",
    traffic: 880,
    words: 1543,
    createdOn: null,
  },
  {
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services",
    traffic: 390,
    words: 1974,
    createdOn: null,
  },
];

export default async function getData({
  page = 1,
  limit = 5,
  sortBy,
  order = "asc",
  query = "",
}: GetDataParams = {}): Promise<{ data: Article[]; total: number }> {
  await wait(300);

  let filtered = allData.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.keyword.toLowerCase().includes(query.toLowerCase())
  );

  if (sortBy) {
    filtered = filtered.sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];

      if (aValue == null) return 1;
      if (bValue == null) return -1;

      if (typeof aValue === "string" && typeof bValue === "string") {
        return order === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return order === "asc" ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });
  }

  const total = filtered.length;
  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + limit);

  return { data: paginated, total };
}
