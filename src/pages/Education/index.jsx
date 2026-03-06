const Services = () => {
  return (
    <section className='about-section'>
      <h2 className='about-title'>Tech Stack</h2>
      <div className='skills-grid'>
        <article className='skills-group'>
          <h3 className='skills-title'>Frontend</h3>
          <div className='skills-tags'>
            <span className='skill-tag'>React</span>
            <span className='skill-tag'>React Native</span>
          </div>
        </article>

        <article className='skills-group'>
          <h3 className='skills-title'>Backend</h3>
          <div className='skills-tags'>
            <span className='skill-tag'>C#</span>
            <span className='skill-tag'>ASP.NET MVC</span>
            <span className='skill-tag'>Web API</span>
            <span className='skill-tag'>LINQ</span>
            <span className='skill-tag'>Django REST</span>
            <span className='skill-tag'>Node.js (Express)</span>
          </div>
        </article>

        <article className='skills-group'>
          <h3 className='skills-title'>Databases</h3>
          <div className='skills-tags'>
            <span className='skill-tag'>SQL Server</span>
            <span className='skill-tag'>PostgreSQL</span>
            <span className='skill-tag'>T-SQL</span>
            <span className='skill-tag'>Stored Procedures</span>
            <span className='skill-tag'>Triggers</span>
            <span className='skill-tag'>Functions & Views</span>
          </div>
        </article>

        <article className='skills-group'>
          <h3 className='skills-title'>Cloud & Infrastructure</h3>
          <div className='skills-tags'>
            <span className='skill-tag'>AWS EC2</span>
            <span className='skill-tag'>AWS RDS</span>
            <span className='skill-tag'>AWS S3</span>
            <span className='skill-tag'>AWS Lambda</span>
            <span className='skill-tag'>Linux Admin</span>
            <span className='skill-tag'>NGINX</span>
            <span className='skill-tag'>Gunicorn</span>
          </div>
        </article>

        <article className='skills-group'>
          <h3 className='skills-title'>Architecture & DevOps</h3>
          <div className='skills-tags'>
            <span className='skill-tag'>REST APIs</span>
            <span className='skill-tag'>JWT Authentication</span>
            <span className='skill-tag'>Layered (n-tier)</span>
            <span className='skill-tag'>CI/CD</span>
            <span className='skill-tag'>Git Workflow</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
