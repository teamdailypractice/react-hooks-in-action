import { useEffect } from "react";

export default function UsersPage() {
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `Users`;
      });

    return (
        <main className="users-page">
            <p>Users!</p>
        </main>
    );
}