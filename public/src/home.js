function totalBooksCount(books) {
  return books.length;
};

function totalAccountsCount(accounts) {
  return accounts.length;
};

function booksBorrowedCount(books) {
  let count = 0;
  for (let i=0; i<totalBooksCount(books); i++) {
    let book = books[i];
    if (book.borrows[0].returned === false) {
      count++
    } 
  }
  return count;
};

function mostCommonGenres(books) {
  const genreArray = books.map(book => book.genre);
  let finalArray = [];
  genreArray.forEach(value => {
    const genreObject = {name: value, count: 1};
    const index = finalArray.findIndex(indexNumber => indexNumber.name === value);
    index === -1 ? finalArray.push(genreObject) : finalArray[index].count++;
    });
  finalArray.sort((a,b) => (a.count < b.count ? 1:-1));
  return finalArray.slice(0,5);
  };

function mostPopularBooks(books) {
  const titleArray = books.map(book => book.title);
  let finalArray = [];
  titleArray.forEach(title => {
    const book = {name: title, count: 0};
    const index = finalArray.findIndex(indexNumber => indexNumber.name === title);
    if (index === -1) finalArray.push(book);
  });
  const borrowArray = books.map(book => book.borrows.length)
  for (let i=0; i<borrowArray.length; i++) {
    let borrowCount = borrowArray[i];
    finalArray[i].count = borrowCount;
  }
  finalArray.sort((a,b) => (a.count < b.count ? 1:-1));
  return finalArray.slice(0,5);
};

function mostPopularAuthors(books, authors) {
  let tempArray = [];
  authors.forEach(author => {
    books.forEach (book => {
      if (book.authorId === author.id ) {
        let authorObject = {name: null, count: 0};
        let authorfullName = `${author.name.first} ${author.name.last}`
        authorObject.name = authorfullName;
        let count = book.borrows.length;
        authorObject.count = count;
        tempArray.push(authorObject);
      }
    });
  });
  let finalArray = tempArray.reduce((accumulator, currentValue) => {
    let name = currentValue.name
    let found = accumulator.find(function(element) {
      return element.name === name
    })
    if (found) found.count += currentValue.count;
    else accumulator.push(currentValue);
    return accumulator
  }, [])
  return finalArray.sort((a,b) => a.count < b.count ? 1:-1).slice(0,5);
};

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  mostCommonGenres,
  mostPopularBooks,
  mostPopularAuthors,
}