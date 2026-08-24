import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";
import Image from "next/image";
import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";

const Home = () => 
    <>
    <BookOverview />
    <BookList /> 
    </>;


export default Home;