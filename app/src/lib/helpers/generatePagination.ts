export const generatePagination = (currentPage: number, totalPages: number) => {
  const pageNumbers = [];

  // Jeśli jest mniej niż 5 stron, pokaż wszystkie
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    // Dodaj pierwszą stronę
    pageNumbers.push(1);

    // Dodaj kropki, jeśli trzeba
    if (currentPage > 3) {
      pageNumbers.push("...");
    }

    // Dodaj strony wokół obecnej strony
    const start = Math.max(currentPage - 1, 2); // minimalnie 2
    const end = Math.min(currentPage + 1, totalPages - 1); // maksymalnie przed ostatnią stroną

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }

    // Dodaj kropki, jeśli trzeba
    if (currentPage < totalPages - 2) {
      pageNumbers.push("...");
    }

    // Dodaj ostatnią stronę
    pageNumbers.push(totalPages);
  }

  return pageNumbers;
};
