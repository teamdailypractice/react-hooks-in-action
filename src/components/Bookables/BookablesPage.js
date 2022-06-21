import { useEffect } from "react";
import BookablesList from "./BookablesList"

export default function BookablesPage() {
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `Bookables`;
      });
    return (
        <main className="bookables-page">
            <BookablesList />
        </main>
    );
}