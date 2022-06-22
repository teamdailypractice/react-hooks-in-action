import { useState } from "react";
import data from "../../static.json";
import { FaArrowRight } from "react-icons/fa"

export default function BookablesList() {

    const [bookableIndex, setBookableIndex] = useState(1);
    const [group, setGroup] = useState("Kit");


    const bookables = data.bookables;
    const bookablesInGroup = bookables.filter(b => b.group === group);
    const groups = [...new Set(bookables.map(b => b.group))]


    function changeBookable(selectedIndex) {
        setBookableIndex(selectedIndex);
        console.log(selectedIndex);
    }
    function nextBookable() {
        setBookableIndex((bookableIndex + 1) % bookablesInGroup.length);
    }
    return (
        <div>
            <select
                value={group}
                onChange={(e) => setGroup(e.target.value)}>
                {groups.map(g => <option key={g} value={g}>{g}</option>)}

            </select>
            <ul className="bookables items-list-nav">
                {bookablesInGroup.map((b, i) => {
                    return (
                        <li
                            key={b.id}
                            className={i === bookableIndex ? "selected" : null}
                        >
                            <button
                                className="btn"
                                onClick={() => changeBookable(i)}
                            >
                                {b.title}
                            </button>
                        </li>
                    );
                })
                }
            </ul>
            <p>
                <button
                    className="btn"
                    onClick={nextBookable}
                    autoFocus>
                    <FaArrowRight />
                    <span>Next</span>
                </button>

            </p>
        </div>
    );
}