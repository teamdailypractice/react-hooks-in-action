import { useEffect } from "react";

export default function BookablesPage() {
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `Bookables`;
      });
    return (
        <main className="bookables-page">
            <p>Bookables!</p>
        </main>
    );
}