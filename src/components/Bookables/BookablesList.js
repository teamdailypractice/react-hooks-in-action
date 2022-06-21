import data from "../../static.json";

export default function BookablesList() {

    const group = "Rooms";

    const bookables = data.bookables;

    const bookablesInGroup = bookables.filter(b => b.group === group);

    const bookableIndex = 1;

    return (
        <ul className="bookables items-list-nav">
            {bookablesInGroup.map((b, i) => {
                return (
                    <li
                        key={b.id}
                        className={i === bookableIndex ? "selected" : null}
                    >
                        <button
                            className="btn"
                        >
                            {b.title}
                        </button>
                    </li>
                );
            })
            }
        </ul>
    );
}