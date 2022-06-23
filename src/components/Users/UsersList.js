import { useState, Fragment } from "react";
import data from "../../static.json";

export default function UsersList() {

    const [userIndex, setUserIndex] = useState(0);

    const users = data.users;
    const user = users[userIndex];

    return (
        <Fragment>
            <ul className="users items-list-nav">
                {users.map((u, index) => {
                    const item =
                        < li
                            key={u.id}
                            className={index === userIndex ? "selected" : null}
                        >
                            <button
                                className="btn"
                                onClick={() => setUserIndex(index)}
                            >
                                {u.name}
                            </button>
                        </li>
                    return item;
                })}
            </ul>
            {user && (
                <div className="item user">
                    <div className="item-header">
                        <h2>{user.name}</h2>
                    </div>
                    <div className="user-details">
                        <h3>{user.title}</h3>
                        <p>{user.notes}</p>
                    </div>
                </div>
            )}
        </Fragment>
    )
}
