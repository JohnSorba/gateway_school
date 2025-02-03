import React, { useState } from "react";
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
  const [selectedOption, setSelectedOption] = useState("primary");

  return (
    <section className="calendar">
      <div className="calendar-header">
        <div className="calendar-header-container">
          <h1>Exam Timetable</h1>
          <h2>Mid Term Exams (October 2024)</h2>
        </div>
      </div>
      <main className="calendar-main">
        <p className="m-8">
          <em>
            Note: Specific dates and events may vary and are subject to change.
          </em>
        </p>
        <div className="flex justify-end mb-8">
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="py-2 px-4 rounded-lg"
          >
            <option value="kindergarten">Kindergarten</option>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
          </select>
        </div>
        {/*  */}
        <table className="table-scroll">
          <thead>
            <tr>
              <th>Class/Date</th>
              <th>
                THURS <br />
                6th FEB
              </th>
              <th>
                FRI <br />
                7th FEB
              </th>
              <th>
                MON <br />
                10th FEB
              </th>
              <th>
                TUE <br />
                11th FEB
              </th>
              <th>
                WED <br />
                12th FEB
              </th>
              <th>
                THURS <br />
                13th FEB
              </th>
              <th>
                FRI <br />
                14th FEB
              </th>
              <th>
                MON <br />
                17th FEB
              </th>
            </tr>
          </thead>

          {selectedOption === "kindergarten" && (
            <tbody>
              <tr>
                <td>Nursery 1</td>
                <td>CPA</td>
                <td>PHONICS</td>
                <td>WRITING SKILLS</td>
                <td>NUMBER WORK</td>
                <td>REASONING</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Nursery 2</td>
                <td>REASONING - HAND WRITING</td>
                <td>NUMBER WORK</td>
                <td>PHONICS</td>
                <td>ENGLISH ACTIVITY</td>
                <td>ENVIRONMENTAL STUDIES - RME</td>
                <td>CPA</td>
                <td>PHE</td>
                <td>-</td>
              </tr>
              <tr>
                <td>RECEPTION</td>
                <td>PHONICS - PHE</td>
                <td>NUMBER WORK</td>
                <td>HAND WRITING - READING</td>
                <td>ENGLISH ACTIVITY</td>
                <td>ENVIRONMENTAL STUDIES</td>
                <td>RME - SPELLING</td>
                <td>CPA</td>
                <td>-</td>
              </tr>
            </tbody>
          )}
          {selectedOption === "primary" && (
            <tbody>
              {/* <!-- September --> */}

              <tr>
                <td>PREP 1</td>
                <td>MATHS - RME</td>
                <td>ESP&S - WORD BUILDING - WRITING</td>
                <td>ENVIRON - READING</td>
                <td>FRENCH - COMPOSITION</td>
                <td>SCIENCE - VERBAL</td>
                <td>SPELLING & DICTATION - PHE</td>
                <td>LITERATURE - QUANTITATIVE</td>
                <td>COMPUTER - CPA</td>
              </tr>
              <tr>
                <td>PREP 2 </td>
                <td>MATHS - RME</td>
                <td>PHE - COMP</td>
                <td>LITERAT - QUANT</td>
                <td>ENVIRON - WRITING</td>
                <td>VERBAL - READING\com</td>
                <td>SPELLING - SCIENCE</td>
                <td>CPA - W/BUILD</td>
                <td>ESP&S - COMPUTER</td>
              </tr>
              <tr>
                <td>PREP 3</td>
                <td>MATHS - RME</td>
                <td>PRE\VOC - COMPO & LETTER</td>
                <td>SCIENCE - ENGLISH</td>
                <td>READING - VERBAL</td>
                <td>SOCIAL \st</td>
                <td>QUANT - SPELLING</td>
                <td>FRENCH - LITERATURE</td>
                <td>COMPUTER - PHE</td>
              </tr>
              <tr>
                <td>PREP 4</td>
                <td>MATH - CPA</td>
                <td>ENGLISH - COMPOSITION</td>
                <td>HOME\eco - LIT</td>
                <td>AGRIC - READING</td>
                <td>QUANT - FRENCH</td>
                <td>SPELLING - SOCIAL</td>
                <td>PHE - SCIENCE</td>
                <td>VERBAL - COMPUTER</td>
              </tr>
              <tr>
                <td>PREP 5</td>
                <td>-</td>
                <td>MATHS - VERBAL - PHE</td>
                <td>QUANT - ENG 1&2 - SOCIAL STUDIES</td>
                <td>HOME ECONS - SCI - AGRIC</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          )}

          {selectedOption === "secondary" && (
            <tbody>
              <tr>
                <td>JSS 1</td>
                <td>MATHS - RME</td>
                <td>BUS\stu - FRENCH</td>
                <td>AGRIC - PHE</td>
                <td>SOC - ENG\1-2</td>
                <td>INT - CPA</td>
                <td>HOM\eco - PERFORMING</td>
                <td>LIT - TECH - COMPUTER</td>
                <td>-</td>
              </tr>
              <tr>
                <td>JSS 2</td>
                <td>MATHS - CPA - ENG 1&2</td>
                <td>INT. SCI. - PERF. ART - AGRIC</td>
                <td>SOC. STUDIES - LITERATURE - HOME ECONS.</td>
                <td>RME - PHE - BUSINESS STUDIES - TECH</td>
                <td>COMPUTER</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>JSS 3</td>
                <td>-</td>
                <td>-</td>
                <td>MATH - PHE</td>
                <td>ENG - HOME ECONS</td>
                <td>INT SCI - RME</td>
                <td>SOCIAL STUDIES - PROSE & POETRY - BUSINESS STUDIES</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          )}
        </table>

        {/* <button
          className="btn py-2 px-4 mt-8 bg-blue-500 rounded-lg"
          onClick={() => generatePDF(academicCalendar)}
        >
          Download PDF
        </button> */}
        <p className="m-8">
          <em>
            NB: This exam timetable offers a structured view of the key events
            and important dates for the midterm examination for the term October
            to December, 2024.
          </em>
        </p>
      </main>{" "}
    </section>
  );
}

export default Calendar;

export function Timetable() {
  return (
    <section>
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
    </section>
  );
}
