function findAccountById(accounts, id) {
  const found = accounts.find((account) => account.id === id);
  return found;
};

function sortAccountsByLastName(accounts) {
  const found = accounts.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
  return found;
};

function numberOfBorrows(account, books) {
  let count = 0;
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    for (let j = 0; j < book.borrows.length; j++) {
      if (book.borrows[j].id === account.id) {
        count++;
      }
    }
  }
  return count;
};

function booksInPossession(account, books, authors) {
  let finalArray = [];
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    const id = book.id;
    const title = book.title;
    const genre = book.genre;
    const borrows = book.borrows;
    for (let j = 0; j < book.borrows.length; j++) {
      if (book.borrows[j].id === account.id && book.borrows[j].returned === false) {
        for (let x = 0; x < authors.length; x++) {
          let author = authors[x];
          if (author.id === book.authorId) {
            const tempBook = { id, title, genre, author, borrows };
            finalArray.push(tempBook);
          }
        }
      }
    }
  }
  return finalArray;
};

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  booksInPossession,
};
