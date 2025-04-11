export const localUsers = [
  {
    id: 1,
    name: "abdalla",
    email: "nanoelhgar@gmail.com",
    phone: "01129352754",
    password: "222222",
    confirmPassword: "222222",
    books: [
      {
        id: Math.floor(Math.random() * 100000000),
        bookName: "Animal Farm",
        author: "George Orwell",
        description:
          "Animal Farm is a satirical allegorical novella, in the form of a beast fable, by George Orwell, first published in England on 17 August 1945. It tells the story of a group of anthropomorphic farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy.",
        imageUrl:
          "https://prodimage.images-bn.com/pimages/9789390909001_p0_v1_s600x595.jpg",
      },
      {
        id: Math.floor(Math.random() * 100000000),
        bookName: "A tale of two cities",
        author: "Charles Dickens",
        description:
          "The novel tells the story of the French Doctor Manette, his 18-year-long imprisonment in the Bastille in Paris, and his release to live in London with his daughter Lucie whom he had never met. The story is set against the conditions that led up to the French Revolution and the Reign of Terror.",
        imageUrl:
          "https://cdn.kobo.com/book-images/b6cc787d-79b3-4322-bfae-7bbf6ed59a77/353/569/90/False/a-tale-of-two-cities-431.jpg",
      },
      {
        author: "Paulo Coelho",
        bookName: "The Alchemist (O Alquimista)",
        description:
          "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined.",
        id: 75389297,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/c/c4/TheAlchemist.jpg",
      },
      {
        author: "J. K. Rowling",
        bookName: "Harry Potter and the Philosopher's Stone",
        description:
          "Harry Potter and the Philosopher's Stone is an enthralling start to Harry's journey toward coming to terms with his past and facing his future. It was the first book written by Rowling, and she was praised for creating well-rounded characters and a fully realized wizard universe that coexisted with the present world.",
        id: 70515183,
        imageUrl:
          "https://img1.od-cdn.com/ImageType-400/3450-1/%7B9D9C97E1-38D8-42C1-AF4D-CC20765FB439%7DIMG400.JPG",
      },
      {
        id: Math.floor(Math.random() * 100000000),
        bookName: "To Kill a Mockingbird",
        author: "Harper Lee",
        description:
          "To Kill a Mockingbird is a 1960 Southern Gothic novel by American author Harper Lee. It became instantly successful after its release; in the United States, it is widely read in high schools and middle schools. To Kill a Mockingbird won the Pulitzer Prize a year after its release, and it has become a classic of modern American literature.", // Source: Wikipedia :contentReference[oaicite:0]{index=0}
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780060935467-L.jpg", // Source: Open Library Covers API :contentReference[oaicite:1]{index=1}
      },
      {
        id: Math.floor(Math.random() * 100000000),
        bookName: "1984",
        author: "George Orwell",
        description:
          "Nineteen Eighty‑Four (also published as 1984) is a dystopian novel and cautionary tale by English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final completed book. Thematically, it centres on the consequences of totalitarianism, mass surveillance, and repressive regimentation of people and behaviours within society.", // Source: Wikipedia :contentReference[oaicite:2]{index=2}
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg", // Source: Open Library Covers API :contentReference[oaicite:3]{index=3}
      },
      {
        id: Math.floor(Math.random() * 100000000),
        bookName: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description:
          "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first‑person narrator Nick Carraway's interactions with Jay Gatsby, a mysterious millionaire with an obsession to reunite with his former lover, Daisy Buchanan.", // Source: Wikipedia :contentReference[oaicite:4]{index=4}
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg", // Source: Open Library Covers API :contentReference[oaicite:5]{index=5}
      },
      {
        id: Math.floor(Math.random() * 100000000),
        bookName: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        description:
          "Sapiens: A Brief History of Humankind is a book by Yuval Noah Harari, based on lectures he taught at The Hebrew University of Jerusalem. First published in Hebrew in 2011 and in English in 2014, it focuses on Homo sapiens and surveys the history of humankind from the Stone Age to the 21st century, situating the account within a framework that intersects natural sciences with social sciences.", // Source: Wikipedia :contentReference[oaicite:6]{index=6}
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg", // Source: Open Library Covers API :contentReference[oaicite:7]{index=7}
      },
      {
        id: Math.floor(Math.random() * 100000000),
        bookName: "The Alchemist",
        author: "Paulo Coelho",
        description:
          "The Alchemist is a novel by Brazilian author Paulo Coelho, first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. The story follows the shepherd boy Santiago in his journey across North Africa to the Egyptian pyramids after he dreams of finding treasure there.", // Source: Wikipedia :contentReference[oaicite:8]{index=8}
        imageUrl: "https://covers.openlibrary.org/b/isbn/0062502174-L.jpg", // Source: Open Library Covers API :contentReference[oaicite:9]{index=9}
      },
      {
        id: Math.floor(Math.random() * 100000000),
        bookName: "Pride and Prejudice",
        author: "Jane Austen",
        description:
          "Pride and Prejudice is the second novel by English author Jane Austen, published in 1813. A novel of manners, it follows the character development of Elizabeth Bennet, the protagonist of the book, who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.", // Source: Wikipedia :contentReference[oaicite:0]{index=0}
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg", // Source: Open Library Covers API :contentReference[oaicite:1]{index=1}
      },
      {
        id: Math.floor(Math.random() * 100000000),
        bookName: "Moby‑Dick; or, The Whale",
        author: "Herman Melville",
        description:
          "Moby‑Dick; or, The Whale is an 1851 epic novel by American writer Herman Melville. The book is centered on the sailor Ishmael’s narrative of the maniacal quest of Ahab, captain of the whaling ship Pequod, for vengeance against Moby Dick, the giant white sperm whale that bit off his leg on the ship’s previous voyage.", // Source: Wikipedia :contentReference[oaicite:2]{index=2}
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780142437247-L.jpg", // Source: Open Library Covers API :contentReference[oaicite:3]{index=3}
      },
      {
        id: Math.floor(Math.random() * 100000000),
        bookName: "Brave New World",
        author: "Aldous Huxley",
        description:
          "Brave New World is a dystopian novel by English author Aldous Huxley, written in 1931 and published in 1932. Largely set in a futuristic World State whose citizens are genetically engineered into an intelligence‑based social hierarchy, the novel anticipates huge scientific advancements in reproductive technology, sleep‑learning, psychological manipulation and classical conditioning.", // Source: Wikipedia :contentReference[oaicite:4]{index=4}
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780060850524-L.jpg", // Source: Open Library Covers API :contentReference[oaicite:5]{index=5}
      },
      {
        id: Math.floor(Math.random() * 100000000),
        bookName: "The Catcher in the Rye",
        author: "J. D. Salinger",
        description:
          "The Catcher in the Rye is a novel by American author J. D. Salinger, partially published in serial form in 1945–46 before being novelized in 1951. Originally intended for adults, it is often read by adolescents for its themes of angst and alienation and as a critique of superficiality in society.", // Source: Wikipedia :contentReference[oaicite:6]{index=6}
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780316769488-L.jpg", // Source: Open Library Covers API :contentReference[oaicite:7]{index=7}
      },
      {
        id: Math.floor(Math.random() * 100000000),
        bookName: "The Hobbit",
        author: "J. R. R. Tolkien",
        description:
          "The Hobbit, or There and Back Again is a children’s fantasy novel by English author J. R. R. Tolkien, published in 1937 to wide critical acclaim. The book is recognized as a classic of children’s literature and one of the best‑selling books of all time, with over 100 million copies sold.", // Source: Wikipedia :contentReference[oaicite:8]{index=8}
        imageUrl: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg", // Source: Open Library Covers API :contentReference[oaicite:9]{index=9}
      },
    ],
  },
];
