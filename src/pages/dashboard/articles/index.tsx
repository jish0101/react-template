import ArticlesTabs from "@/components/dashboard/articles/ArticlesTabs";
import H2 from "@/components/typography/H2";
import { Outlet } from "react-router";

const Articles = () => {
  return (
    <div className="px-2 py-4">
      <div className="flex flex-col justify-center items-center space-y-4">
        <H2 className="font-bold">Articles</H2>
        <ArticlesTabs />
      </div>
      <Outlet />
    </div>
  );
};

export default Articles;
