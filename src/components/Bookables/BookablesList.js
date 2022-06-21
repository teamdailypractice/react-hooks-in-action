import { useState } from "react";
import data from "../../static.json";
import { FaArrowRight } from "react-icons/fa"

export default function BookablesList() {

    const [bookableIndex, setBookableIndex] = useState(1);

    const group = "Rooms";
    const bookables = data.bookables;
    const bookablesInGroup = bookables.filter(b => b.group === group);



    function changeBookable(selectedIndex) {
        setBookableIndex(selectedIndex);
        console.log(selectedIndex);
    }
    function nextBookable() {
        setBookableIndex((bookableIndex + 1) % bookablesInGroup.length);
    } 
    return (
        <div>
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