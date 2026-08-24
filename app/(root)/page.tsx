import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";
import Image from "next/image";
import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";

const Home = () => 
    <>
    <BookOverview{... sampleBooks[0]} />
    <BookList 
        title = "Latest Books"
        books = {sampleBooks}
        containerClassName = "mt-10"
    /> 
    </>;


export default Home;