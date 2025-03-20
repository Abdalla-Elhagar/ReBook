export const localUsers = [
  {
    id: 1,
    name: "abdalla",
    email: "nanoelhgar@gmail.com",
    phone:"01129352754",
    password: "222222",
    confirmPassword: "222222",
    books: [
      {
        id: Math.floor(Math.random()*100000000),
        bookName: "Animal Farm",
        author: "George Orwell",
        description:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        imageUrl:
          "https://prodimage.images-bn.com/pimages/9789390909001_p0_v1_s600x595.jpg",
      },
      {
        id: Math.floor(Math.random()*100000000),
        bookName: "A tale of two cities",
        author: "Charles Dickens",
        description:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        imageUrl:
          "https://cdn.kobo.com/book-images/b6cc787d-79b3-4322-bfae-7bbf6ed59a77/353/569/90/False/a-tale-of-two-cities-431.jpg",
      },
    ],
  },
];
