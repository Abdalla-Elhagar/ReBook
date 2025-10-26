import Postes from "../../components/postes";
import Hero from "../../components/hero/hero";
import { useQuery } from "@tanstack/react-query";
import { booksData } from "../../api/booksData";
import { ClipLoader } from 'react-spinners';

export default function Home() {
  const { data: books = [], isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: booksData,
  });

  return (
    <div className="home">
      {isLoading ? (
        <div className="w-screen h-[calc(100vh-70px)] flex justify-center items-center">
          <ClipLoader color="#0e7eff" loading size={50} speedMultiplier={1} />
        </div>
      ) : (
        <>
          <Hero />
          <Postes books={books} />
        </>
      )}
    </div>
  );
}
