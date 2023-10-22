import "./Event.css";
import { mainEvents } from "../data/ApplicationData";
import { ClockIcon } from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";

function Events() {
  return (
    <section>
      <header className="events-header">
        <div className="events-header-container">
          <h1>Events</h1>
        </div>
      </header>
      <main className="events-main">
        <div className="events-main-container">
          {" "}
          <ul className="event-list">
            {mainEvents.map((data, index) => (
              <li className="event-item" key={index}>
                {/* <span>{data.isFeatured}</span> */}
                <span>
                  <ClockIcon className="w-6 h-6" /> {data.date}
                </span>
                <Link to={`/events/${data.title}`} className="link">
                  <img src={data.image} alt={data.title} />
                  <h2>{data.title}</h2>
                  <p>{data.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </section>
  );
}

export default Events;

export function EventPost() {
  const { data } = useParams();
  return (
    <div>
      {mainEvents.map((data, index) => (
        <div>
          <h1>{data.title}</h1>
        </div>
      ))}
    </div>
  );
}
