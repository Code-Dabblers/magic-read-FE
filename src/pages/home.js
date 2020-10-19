import React from "react";
import {
  Container
} from "@material-ui/core";
import BookCard from "../components/BookCard";


export default function Home() {
  return (
    <Container>
      Home page/Landing page
      <BookCard 
        book_title="Title for the book"
        author = "AuthAuth"
        rating={3}
        thumbnail= "https://images.unsplash.com/photo-1603005674855-b9f6334b7f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
      />
    </Container>
  );
}
