import React, { useState } from "react";

export function Body() {
    const [quoteData, setQuoteData] = useState("");

    const getQuote = () => {
        fetch("https://dummyjson.com/quotes")
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched Data:", data);
                const randomgen = Math.floor(Math.random() * data.quotes.length);
                const selectedQuote = data.quotes[randomgen];
                
                setQuoteData({ quote: selectedQuote.quote, author: selectedQuote.author });
            })
            .catch((error) => {
                console.error("error", error);
            });
    };

    return (
        <div className="container">
            <div className="quote-box">
                <p className="quote-text">"{quoteData.quote}"</p>
                <p className="author-text">- {quoteData.author}</p>
                <button onClick={getQuote} className="quote-button">
                    Get Quote
                </button>
            </div>
        </div>
    );
}
