import "./AccordionStyles.css";
import { useState } from "react";

const faqs = [
  {
    title: "What are the school's operating hours?",
    text: "Our school operates from Monday to Friday, from 8:00 AM to 5:00 PM.",
  },
  {
    title: "How can I apply for admission?",
    text: "To apply for admission, please visit our Admissions page and follow the application instructions provided.",
  },
  {
    title: "What grade levels do you offer?",
    text: "We offer programs from daycare and pre-kindergarten to primary school and high school.",
  },
  {
    title: "Is transportation provided for students?",
    text: "Yes, we offer transportation services to and from the school for eligible students. Please contact our Transportation Department for details.",
  },
  {
    title: "How can I contact the school administration?",
    text: "You can reach our school administration by phone at +1-123-456-7890 or via email at admin@schoolname.edu.",
  },
  {
    title: "Are there extracurricular activities for students?",
    text: "Yes, we offer a wide range of extracurricular activities, including sports, clubs, and cultural events.",
  },
  {
    title: "What is the school's academic calendar?",
    text: "Our academic calendar can be found on our website, providing details about holidays, exams, and important dates.",
  },
  {
    title: "Do you have a dress code?",
    text: "Yes, we have a dress code policy in place. Please refer to our Student Handbook for details.",
  },
  {
    title: "How can parents get involved in the school community?",
    text: "We encourage parental involvement through the Parent-Teacher Association (PTA) and volunteering opportunities.",
  },
];

export default function AccApp() {
  return (
    <div className="accordion">
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <>
      <h2>FAQ's</h2>
      <div className="accordion-item">
        {data.map((el, i) => (
          <AccordionItem
            curOpen={curOpen}
            onOpen={setCurOpen}
            title={el.title}
            num={i}
            key={el.title}
          >
            {el.text}
          </AccordionItem>
        ))}
      </div>
    </>
  );
}

function AccordionItem({ num, title, onOpen, curOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
