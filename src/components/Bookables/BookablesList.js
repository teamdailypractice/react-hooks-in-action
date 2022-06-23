import { useState, Fragment } from "react";
import data from "../../static.json";
import { FaArrowRight } from "react-icons/fa"

export default function BookablesList() {

    const [bookableIndex, setBookableIndex] = useState(1);
    const [group, setGroup] = useState("Kit");
    const [hasDetails, setHasDetails] = useState(false);

    const bookables = data.bookables;
    const bookablesInGroup = bookables.filter(b => b.group === group);
    const groups = [...new Set(bookables.map(b => b.group))]

    const currentlySelectedBookable = bookablesInGroup[bookableIndex];


    function changeBookable(selectedIndex) {
        setBookableIndex(selectedIndex);
        console.log(selectedIndex);
    }
    function nextBookable() {
        setBookableIndex((bookableIndex + 1) % bookablesInGroup.length);
    }
    return (
        <Fragment>
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
            {currentlySelectedBookable && (
                <div className="bookable-details">
                    <div className="item">
                        <div className="item-header">
                            <h2>
                                {currentlySelectedBookable.title}
                            </h2>
                            <span className="controls">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={hasDetails}
                                        onChange={() => setHasDetails(has => !has)}
                                    />
                                    Show Details
                                </label>
                            </span>
                        </div>
                        <p>{currentlySelectedBookable.notes}</p>
                        {hasDetails && (
                            <div className="item-details">
                                <h3>Availability</h3>
                                <div className="bookable-availability">
                                    <ul>
                                        {
                                            currentlySelectedBookable.days
                                                .sort()
                                                .map(d => <li key={d}>{data.days[d]}</li>)
                                        }
                                    </ul>
                                    <ul>
                                        {
                                            currentlySelectedBookable.sessions
                                                .map(s => <li key={s}>{data.sessions[s]}</li>)
                                        }
                                    </ul>
                                </div>

                            </div>
                        )}
                    </div>
                </div>
            )}
        </Fragment>
    );
}