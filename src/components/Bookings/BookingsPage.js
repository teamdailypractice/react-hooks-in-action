import { useEffect } from "react";

export default function BookingsPage() {

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Bookings`;
  });

  return (
    <main className="bookings-page">
      <p>Bookings!</p>
    </main>
  );
}