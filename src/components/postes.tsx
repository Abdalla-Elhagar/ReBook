import { BooksTypes } from "../types/dataTypes";
import BookCard from "./bookCard";


export default function Postes({books}:{books:BooksTypes[]}) {


  
  return (
    <section className="postes">
      <div className="container max-sm:px-[10px!important] max-md:flex-col flex-wrap max-md:items-center">
        {[...books].reverse().map((book: BooksTypes) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </section>
  );
}
