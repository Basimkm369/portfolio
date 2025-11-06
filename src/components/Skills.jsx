
const Skills = () => {
  return (
   <section className="skills section" id="skills">
    <h2 className="section-title">Skills</h2>

    <div className="skills__container">
        <div>
            <h2 className="skills__subtitle">Frontend Development</h2>
            <div className="skills__list">
                <div className="skills__item">
                    <span className="skills__name">React.js</span>
                </div>
                <div className="skills__item">
                    <span className="skills__name">Next.js</span>
                </div>
                <div className="skills__item">
                    <span className="skills__name">JavaScript (ES6/ES7)</span>
                </div>
                <div className="skills__item">
                    <span className="skills__name">TypeScript</span>
                </div>
                <div className="skills__item">
                    <span className="skills__name">HTML</span>
                </div>
                <div className="skills__item">
                    <span className="skills__name">CSS</span>
                </div>
                 <div className="skills__item">
              <span className="skills__name">Tailwind CSS</span>
            </div>
            </div>
        </div>

        {/* <div>
            <h2 className="skills__subtitle">React.js Core Concepts</h2>
            <div className="skills__list">
                <div className="skills__item">
                    <span className="skills__name">Components</span>
                </div>
                <div className="skills__item">
                    <span className="skills__name">State</span>
                </div>
                <div className="skills__item">
                    <span className="skills__name">Props</span>
                </div>
                <div className="skills__item">
                    <span className="skills__name">Lifecycle Methods</span>
                </div>
            </div>
        </div> */}

        <div>
            <h2 className="skills__subtitle">State Management & Tools</h2>
            <div className="skills__list">
                <div className="skills__item">
                    <span className="skills__name">Redux</span>
                </div>
                <div className="skills__item">
                    <span className="skills__name">Redux Toolkit</span>
                </div>
                <div className="skills__item">
                    <span className="skills__name">Zustand</span>
                </div>
                <div className="skills__item">
                    <span className="skills__name">React Query</span>
                </div>
                <div className="skills__item">
                    <span className="skills__name">React Hooks</span>
                </div>
                <div className="skills__item">
                    <span className="skills__name">React Router</span>
                </div>
                <div className="skills__item">
                    <span className="skills__name">Axios</span>
                </div>
            </div>
        </div>



        <div>
            <h2 className="skills__subtitle">Version Control Tools</h2>
            <div className="skills__list">
                <div className="skills__item">
                    <span className="skills__name">Git</span>
                </div>
                <div className="skills__item">
                    <span className="skills__name">Bitbucket</span>
                </div>
                <div className="skills__item">
                    <span className="skills__name">Jira</span>
                </div>
                <div className="skills__item">
                    <span className="skills__name">ClickUp</span>
                </div>
            </div>
        </div>

         <div>
          <h2 className="skills__subtitle">Testing & Quality Assurance</h2>
          <div className="skills__list">
            <div className="skills__item">
              <span className="skills__name">Jest</span>
            </div>
          </div>
        </div>
      
    </div>
</section>
  )
}

export default Skills