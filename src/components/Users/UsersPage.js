import { useEffect } from "react";
import UsersList from './UsersList'

export default function UsersPage() {
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `Users`;
    });

    return (
        <main className="users-page">
            <UsersList />
        </main>
    );
}