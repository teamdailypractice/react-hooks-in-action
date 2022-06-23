import React, { useState } from "react";
import data from "../../static.json";

export default function UserPicker() {

    const [user, setUser] = useState("Mark");

    const users = data.users;

    return (
        <select
            value={user}
            onChange={(e) => setUser(e.target.value)}
        >
            {users.map((u, index) =>
                <option key={index} value={u.name}>{u.name}</option>
            )}

        </select>
    );
}