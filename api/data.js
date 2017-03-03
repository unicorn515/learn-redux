const data = {
  "data":{
    "authors":{
      "2":{
        "firstName":"Robert",
        "lastName":"Martin"
      },
      "4":{
        "firstName":"Peter",
        "lastName":"Seibel"
      },
      "15":{
        "firstName":"Frederick",
        "lastName":"Brooks"
      },
      "22":{
        "firstName":"Steve",
        "lastName":"Krug"
      },
      "44":{
        "firstName":"Andrew",
        "lastName":"Hunt"
      },
      "67":{
        "firstName":"Dave",
        "lastName":"Thomas"
      }
    },
    "books":[
      {
        "id": 1,
        "title":"Coders at Work: Reflections on the Craft of Programming",
        "price":2434,
        "authorId":4
      },
      {
        "id": 2,
        "title":"The Mythical Man-Month: Essays on Software Engineering",
        "price":2399,
        "authorId":15
      },
      {
        "id": 3,
        "title":"Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability",
        "price":2250,
        "authorId":22
      },
      {
        "id": 4,
        "title":"The Pragmatic Programmer: From Journeyman to Master",
        "price":3259,
        "authorIds":[
          44,
          67
        ]
      },
      {
        "id": 5,
        "title":"Clean Code: A Handbook of Agile Software Craftsmanship",
        "price":3224,
        "authorId":2
      }
    ]
  }
};

export const getBookList = () => {
  return [...data.data.books];
};

export const getAuthorInfo = (authorId) => {
  return {...data.data.authors[authorId]};
};

export const deleteBook = (bookId) => {
  // data.data.books
  const bookIndex = data.data.books.findIndex((book) => {
    return book.id === bookId;
  });

  data.data.books.splice(bookIndex, 1);

  console.log(data.data.books);
}
