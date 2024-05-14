import React from "react";
import { academicCalendar } from "../data/ApplicationData";
import "./CalendarPage.css";

import jsPDF from "jspdf";
import "jspdf-autotable";

function generatePDF(academicCalendar) {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Academic Calendar", 70, 15);

  academicCalendar.forEach((monthInfo) => {
    doc.autoTable({
      head: [["Date", "Event", "Description"]],
      body: monthInfo.events.map((event) => [
        event.date,
        event.event,
        event.description,
      ]),
      startY: doc.autoTableEndPosY() + 20,
    });
  });

  doc.save("academic_calendar.pdf");
}

function Calendar() {
  return (
    <section className="calendar">
      <div className="calendar-header">
        <div className="calendar-header-container">
          <h1>Academic Calendar</h1>
          <h2>September to December 2023</h2>
        </div>
      </div>
      <main className="calendar-main">
        <p>
          <em>
            Note: Specific dates and events may vary and are subject to change.
          </em>
        </p>
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Date</th>
              <th>Event</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- September --> */}
            <tr>
              <td rowSpan="4" className="month">
                January
              </td>
              <td>5-6</td>
              <td>School Reopens</td>
              <td>
                All students and staff return to campus for the start of the
                academic year.
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>Parent-Teacher Meeting (PTM) - Daycare and Nursery</td>
              <td>
                An opportunity for parents to meet teachers and discuss their
                child's progress.
              </td>
            </tr>
            <tr>
              <td>15</td>
              <td>School Picture Day</td>
              <td>Individual and class photos will be taken.</td>
            </tr>
            <tr>
              <td>22</td>
              <td>Curriculum Night - Primary School</td>
              <td>
                Parents are invited to learn more about the curriculum and
                classroom activities.
              </td>
            </tr>

            {/* <!-- October --> */}
            <tr>
              <td rowSpan="3" className="month">
                February
              </td>
              <td>10</td>
              <td>National Holiday (No School)</td>
              <td>School is closed in observance of the national holiday.</td>
            </tr>
            <tr>
              <td>16-20</td>
              <td>High School Midterm Exams</td>
              <td>High school students will take midterm examinations.</td>
            </tr>
            <tr>
              <td>31</td>
              <td>Halloween Celebration (Primary School)</td>
              <td>
                A fun and creative celebration with costumes and activities.
              </td>
            </tr>

            {/* <!-- November --> */}
            <tr>
              <td rowSpan="3" className="month">
                March
              </td>
              <td>2</td>
              <td>Parent-Teacher Meeting (PTM) - Primary School</td>
              <td>
                An opportunity for parents to discuss their child's academic
                progress.
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>Field Trip - Nursery and Primary School</td>
              <td>
                A day for students to explore educational and fun destinations.
              </td>
            </tr>
            <tr>
              <td>22-24</td>
              <td>Thanksgiving Break</td>
              <td>School is closed for the Thanksgiving holiday.</td>
            </tr>

            {/* <!-- December --> */}
            <tr>
              <td rowSpan="3" className="month">
                April
              </td>
              <td>15</td>
              <td>Winter Concert</td>
              <td>A showcase of student talents in music and the arts.</td>
            </tr>
            <tr>
              <td>20</td>
              <td>Last Day of School</td>
              <td>Students break for the winter holiday.</td>
            </tr>
            <tr>
              <td>24-26</td>
              <td>Winter Break</td>
              <td>School is closed for the winter holiday.</td>
            </tr>
          </tbody>
        </table>

        <p>
          <em>
            NB: This academic calendar offers a structured view of the key
            events and important dates for the term September to December 2023.
          </em>
        </p>
        {/* <button
          className="btn py-2 px-4 mt-8 bg-blue-500 rounded-lg"
          onClick={() => generatePDF(academicCalendar)}
        >
          Download PDF
        </button> */}
      </main>
    </section>
  );
}

export default Calendar;
