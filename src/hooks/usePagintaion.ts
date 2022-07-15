import { useState } from "react";
import { TaskObjectType } from "../interfaces/date.inteface";

const usePagination = (data: Array<TaskObjectType>, itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / (itemsPerPage || 1))

  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    
    return data.slice(begin, end);
  }

  const jump = (page: number) => {
    const pageNumber = Math.max(1, page);

    setCurrentPage(() => Math.min(pageNumber, maxPage));
  }

  const next = () => {
    setCurrentPage(currentPage => jump(currentPage + 1) as unknown as number);
  }

  const prev = () => {
    setCurrentPage(currentPage => jump(currentPage - 1) as unknown as number);
  }

  return { next, prev, jump, currentData, currentPage, maxPage };
}

export default usePagination;
