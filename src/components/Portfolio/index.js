import React, {useState} from 'react';
import Project from '../Project';

function Portfolio() {
    const [projects] = useState([
        {
          name: 'Barkeep',
          description: 'Front-End Development',
          link: "https://jessicajernigan.github.io/team5-project-1/",
          repo: "https://github.com/jessicajernigan/team5-project-1"
        },
        {
          name: 'Simple Social',
          description: 'Full Stack App',
          link: "https://simple-social-fullstack.herokuapp.com/",
          repo: "https://github.com/tbreazier/full-stack-project"
        },
        {
          name: 'Run Buddy',
          description: 'HTML/CSS',
          link: "https://brandonmcguire1992.github.io/run-buddy/",
          repo: "https://github.com/brandonmcguire1992/run-buddy"
        },
        {
          name: 'Horiseon',
          description: 'HTML/CSS',
          link: "https://brandonmcguire1992.github.io/Horiseon/",
          repo: "https://github.com/brandonmcguire1992/Horiseon"
        },
        {
          name: 'Note Taker',
          description: 'Express, Bootstrap, jQuery',
          link: "https://note-taker-eureka1.herokuapp.com/",
          repo: "https://github.com/brandonmcguire1992/note-taker"
        },
      ]);
    
      return (
        <div>
          <div className="flex-row">
            {projects.map((project, idx) => (
              <Project
                project={project}
                key={"project" + idx}
              />
            ))}
          </div>
        </div>
        );
}

export default Portfolio;