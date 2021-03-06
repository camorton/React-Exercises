import React from "react";
import Quote from "./Quote";

function QuoteList() {
    const quotes = [
        {
          author: "Nelson Mandela",
          text: "It always seems impossible until it’s done.",
          date: "2001"
        },
        {
          author: "Yoda",
          text: "Do. Or do not. There is no try.",
          date: "A long time ago"
        },
        { author: "Bugs Bunny", text: "What's up, doc?" }
      ];
   return (
          <div className="QuoteList">
            <h3>Quote List</h3>
            {quotes.map((quote, i) => (
                <Quote 
                key={i}
                author={quote.author}
                text={quote.text}
                date={quote.date}
                /> 
            ))}
            
            </div>
      );
    } 
    
    export default QuoteList;