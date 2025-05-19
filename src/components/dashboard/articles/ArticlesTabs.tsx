import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ArticlesTabs = () => {
  const tabsLinks = {
    "1": "generated-articles",
    "2": "published-articles",
    "3": "scheduled-articles",
    "4": "archived-articles",
  };

  return (
    <Tabs defaultValue={tabsLinks[1]}>
      <TabsList>
        <TabsTrigger value={tabsLinks[1]}>
          <Link to={tabsLinks[1]}>Generated Articles</Link>
        </TabsTrigger>
        <TabsTrigger value={tabsLinks[2]}>
          <Link to={tabsLinks[2]}>Published Articles</Link>
        </TabsTrigger>
        <TabsTrigger value={tabsLinks[3]}>
          <Link to={tabsLinks[3]}>Scheduled Articles</Link>
        </TabsTrigger>
        <TabsTrigger value={tabsLinks[4]}>
          <Link to={tabsLinks[4]}>Archived Articles</Link>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ArticlesTabs;
