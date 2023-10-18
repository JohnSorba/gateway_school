import "./AboutHistory.css";

function AboutHistory() {
  return (
    <section className="history">
      <header className="history-header">
        <h1>1990 - Foundation</h1>
        <p>
          In the year 1990, Gateway School was established by the visionary
          husband and wife team of Maurice Charlie Hinga and Margaret Catherine
          Hinga. Their mission was clear: to provide educational opportunities
          for pupils who faced challenges in passing the National Primary School
          Examination (NPSE).
        </p>
        <p className="mt-4">
          Through their dedication and hard work, Gateway School quickly gained
          recognition in the educational landscape. The school saw an influx of
          students eager to receive a quality education.
        </p>
      </header>

      <section>
        <article>
          <h1>1997 - A Loss</h1>
          <p>
            Tragically, in 1997, the co-founder, Maurice Charlie Hinga, sadly
            passed away at the tender age of 63. This was a challenging period
            for the school and its community. <br />
            As tensions in the country escalated and war broke out, the school
            faced adversity. It was temporarily closed as the nation grappled
            with conflict.
          </p>
        </article>
        <article>
          <h1>2008 - A Resilient Rebirth</h1>
          <p>
            In 2008, a new chapter unfolded as the school was reopened through
            the collective efforts of Patricia Narsu Ndanema, the daughter of
            the founders. Her leadership breathed new life into Gateway School,
            and the institution witnessed significant improvements. Students
            were once again prepared to partake in the NPSE national exams.
          </p>
        </article>
        <article>
          <h1>2012 - A Tribute to Margaret Catherine Hinga</h1>
          <p>
            In 2012, Margaret Catherine Hinga, after battling illness for seven
            years, left behind a legacy of resilience and commitment to
            education.
          </p>
        </article>
        <article>
          <h1>Augustine Moinina Hinga Joins</h1>
          <p>
            Augustine Moinina Hinga Joins The school's journey to greater
            heights continued with the involvement of Augustine Moinina Hinga,
            the son of the co-founders. His dedication and contributions further
            enriched the educational experience.
          </p>
        </article>
        <article>
          <h1>2017 - Achieving Excellence</h1>
          <p>
            Gateway School achieved a remarkable milestone by winning the award
            for attaining the 1st position in the National Primary School
            Examination (NPSE) in the entire country. This was a testament to
            the dedication of the school's community.
          </p>
          <div className="awards-container">
            <img src="/awards_ceremony.jpg" alt="award ceremony" />
            <img src="/awards_ceremony2.jpg" alt="award ceremony 2" />
          </div>
        </article>
        <article>
          <h1>2023 - A Growing Community</h1>
          <p>
            Today, Gateway School proudly serves over 400 pupils and employs a
            dedicated team of over 25 staff members. The school's legacy of
            resilience, excellence, and commitment to education continues to
            flourish.
          </p>
        </article>
      </section>
    </section>
  );
}

export default AboutHistory;
