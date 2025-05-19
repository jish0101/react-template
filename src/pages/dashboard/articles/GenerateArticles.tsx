import { useEffect, useState } from "react";
import type { Pagination } from "@/types/api";
import DataTable from "@/components/table/data-table";
import TablePagination from "@/components/table/Pagination";
import type { ColumnDef } from "@tanstack/react-table";
import type { Article } from "@/types/articles";
import { Button } from "@/components/ui/button";
import getData from "./temp";
import { Input } from "@/components/ui/input";

type SearchFilters = {
  query: string;
  order: "asc" | "desc";
  sortBy: "traffic" | "createdOn" | "words";
};

const GenerateArticles = () => {
  // I use reat-query for a serious app.
  // Since i do filters and sorting on api level so i have handle it here manually.
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    query: "",
    order: "desc",
    sortBy: "traffic",
  });

  const [articles, setArticles] = useState<Article[]>();
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 5,
    total: 100,
  });

  const columns: ColumnDef<Article>[] = [
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => (
        <div className="font-medium max-w-[400px] min-w-[150px]">
          <p className="text-wrap">{row.getValue("title") as string}</p>
        </div>
      ),
    },
    {
      id: "traffic",
      accessorKey: "traffic",
      header: "Keyword [Traffic]",
      enableSorting: true,
      cell: ({ row }) => {
        const keyword = row.original.keyword;
        const traffic = row.original.traffic;
        return (
          <div className="font-medium">
            <p className="text-wrap min-w-[125px]">
              {keyword} [{traffic.toLocaleString()}]
            </p>
          </div>
        );
      },
    },
    {
      id: "words",
      accessorKey: "words",
      enableSorting: true,
      header: "Words",
      cell: ({ row }) => (
        <div className="font-medium min-w-[100px]">
          {(row.getValue("words") as number).toLocaleString()}
        </div>
      ),
    },
    {
      accessorKey: "createdOn",
      header: "Created On",
      cell: ({ row }) => {
        const value = row.getValue("createdOn") as string | null;
        return <div className="font-medium min-w-[100px]">{value || "—"}</div>;
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        return (
          <Button
            variant="outline"
            className="border-green-400 text-green-400 lg:px-8"
            onClick={() => {
              console.log("Publish clicked for:", row.original.title);
            }}
          >
            View
          </Button>
        );
      },
    },
    {
      id: "publish",
      header: "Publish",
      cell: ({ row }) => {
        return (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              console.log("Publish clicked for:", row.original.title);
            }}
          >
            <img className="w-6" src="/wordpress-icon.svg" />
          </Button>
        );
      },
    },
  ];

  const onSortChange = (columnId: string) => {
    setSearchFilters((prev) => ({
      ...prev,
      sortBy: columnId as SearchFilters["sortBy"],
      order: prev.sortBy === columnId && prev.order === "desc" ? "asc" : "desc",
    }));
  };

  useEffect(() => {
    (async () => {
      const { data, total } = await getData({
        page: pagination.page,
        limit: pagination.limit,
        sortBy: searchFilters.sortBy,
        order: searchFilters.order,
        query: searchFilters.query,
      });

      setArticles(data);
      setPagination((prev) => ({ ...prev, total }));
    })();
  }, [pagination.page, pagination.limit, searchFilters]);

  return (
    <div className="space-y-4">
      <Input
        value={searchFilters.query}
        className="w-fit min-w-[300px]"
        placeholder="Search for title & keywords.."
        onChange={(e) =>
          setSearchFilters({ ...searchFilters, query: e.target.value })
        }
      />
      <DataTable
        data={articles || []}
        columns={columns}
        onSortChange={onSortChange}
        sortBy={searchFilters.sortBy}
      />

      <TablePagination
        total={pagination.total}
        pageSize={pagination.limit}
        currentPage={pagination.page}
        onPageChange={(page) => setPagination({ ...pagination, page })}
        onPageSizeChange={(limit: string) =>
          setPagination((prev) => ({ ...prev, limit: Number(limit), page: 1 }))
        }
      />
    </div>
  );
};

export default GenerateArticles;
