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
        description:"Animal Farm is a satirical allegorical novella, in the form of a beast fable, by George Orwell, first published in England on 17 August 1945. It tells the story of a group of anthropomorphic farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy.",
        imageUrl:
          "https://prodimage.images-bn.com/pimages/9789390909001_p0_v1_s600x595.jpg",
      },
      {
        id: Math.floor(Math.random()*100000000),
        bookName: "A tale of two cities",
        author: "Charles Dickens",
        description:"The novel tells the story of the French Doctor Manette, his 18-year-long imprisonment in the Bastille in Paris, and his release to live in London with his daughter Lucie whom he had never met. The story is set against the conditions that led up to the French Revolution and the Reign of Terror.",
        imageUrl:
          "https://cdn.kobo.com/book-images/b6cc787d-79b3-4322-bfae-7bbf6ed59a77/353/569/90/False/a-tale-of-two-cities-431.jpg",
      },
    ],
  },
];
