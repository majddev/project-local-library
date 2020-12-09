function findAuthorById(authors, id) {
  const found = authors.find((author) => author.id === id);
  return found;
};

function findBookById(books, id) {
  const found = books.find((book) => book.id === id);
  return found;
};

function partitionBooksByBorrowedStatus(books) {
  const returned = books.filter(book => book.borrows[0].returned === true);
  const notReturned = books.filter(book => book.borrows[0].returned === false);
  let finalArray = [notReturned, returned];
  return finalArray;
};

function getBorrowersForBook(book, accounts) {
  let finalArray = [];
  accounts.forEach((account) => {
    book.borrows.forEach((transaction) => {
      if (transaction.id === account.id) {
        let finalObject = { ...account };
        finalObject.returned = transaction.returned;
        finalArray.push(finalObject);
      }
    });
  });
  return finalArray.slice(0, 10);
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
