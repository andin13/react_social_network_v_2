export interface PaginatorProps {
    totalItemsCount: number;
    currentPage: number | undefined;
    onPageChanged: (pageNumber: number) => void;
    pageSize: number;
    baseUrl: string;
    portionSize: number,
  }
