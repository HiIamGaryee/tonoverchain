import { useInfiniteQuery, QueryKey } from "@tanstack/react-query";

type Paginated<T> = {
  collection: T[];
  pagination: {
    page: number;
    total_page: number;
    total: number;
    limit: number;
  };
};

type BlogParams = {
  type?: "latest" | "trending";
  limit?: number;
};

type FetchPage<T, P extends BlogParams> = (
  p: P & { pageParam?: number }
) => Promise<Paginated<T>>;

export function usePaginatedQuery<T, P extends BlogParams>(
  key: QueryKey,
  fetchFn: FetchPage<T, P>,
  params: P
) {
  return useInfiniteQuery({
    queryKey: [...key, params],
    queryFn: ({ pageParam = 1 }) => fetchFn({ ...params, pageParam }),
    initialPageParam: 1,
    getNextPageParam: (last) => {
      const typed = last as Paginated<T>;
      return typed.pagination.page < typed.pagination.total_page
        ? typed.pagination.page + 1
        : undefined;
    },
  });
}
