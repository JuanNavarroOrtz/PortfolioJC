const Portfolio = () => {
  return (
    <section className='about-section'>
      <h2 className='about-title'>Work Experience</h2>
      <div className='experience-timeline'>
        <div className='experience-item'>
          <article className='experience-card'>
            <div className='experience-head'>
              <h3 className='experience-company'>ULTRAVAL</h3>
              <span className='experience-dates'>2022 - Present</span>
            </div>
            <p className='about-text'><span className='highlight'>Developer</span></p>
            <ul className='experience-list'>
              <li>Developed treasury and cash logistics systems with C#, ASP.NET MVC, Web API, LINQ and T-SQL.</li>
              <li>Built SSRS financial reports and optimized complex SQL queries.</li>
              <li>Contributed to React, Node.js (Express) and React Native operational systems for real-time tracking.</li>
            </ul>
          </article>
        </div>

        <div className='experience-item'>
          <article className='experience-card'>
            <div className='experience-head'>
              <h3 className='experience-company'>I-CARGO</h3>
              <span className='experience-dates'>2023 - Present</span>
            </div>
            <p className='about-text'><span className='highlight'>Full Stack Developer (Freelance, Part-time)</span></p>
            <ul className='experience-list'>
              <li>Designed and built a logistics platform from scratch using Django REST Framework, PostgreSQL and React.</li>
              <li>Implemented quotation, shipping order (SO), booking and bill of lading (BL) workflows.</li>
              <li>Deployed and maintained infrastructure on AWS and Linux with NGINX/Gunicorn.</li>
            </ul>
          </article>
        </div>

        <div className='experience-item'>
          <article className='experience-card'>
            <div className='experience-head'>
              <h3 className='experience-company'>Almacenadora LAFISE</h3>
              <span className='experience-dates'>2020 - 2022</span>
            </div>
            <p className='about-text'><span className='highlight'>Software Development Role</span></p>
            <ul className='experience-list'>
              <li>Maintained financial and warehouse systems with ASP.NET MVC, C#, Dapper and SQL Server.</li>
              <li>Implemented complex T-SQL logic, stored procedures and financial reporting modules.</li>
              <li>Developed secure REST APIs and supported logistics systems on AWS with Django/PostgreSQL.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
