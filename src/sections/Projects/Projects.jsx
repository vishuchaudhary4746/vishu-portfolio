import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import itl from '../../assets/itl.png';
import hipsster from '../../assets/hipsster.png';
import shibura from '../../assets/shibura.png';
import pashupati from '../../assets/pashupati.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/vishuchaudhary4746/tictactoegame"
          h3="Tic Tac Toe"
          p="Two Player Game"
        />
        <ProjectCard
          src={itl}
          link="https://github.com/vishuchaudhary4746/ITL"
          h3="Indus Tubes Ltd."
          p="ITL"
        />
        <ProjectCard
          src={hipsster}
          link="https://e-commerce-by-vishu.netlify.app"
          h3="E-Commerce"
          p="Shopping Platform"
        />
        <ProjectCard
          src={shibura}
          link="https://github.com/vishuchaudhary4746/Shibura"
          h3="Shibura"
          p="Bio medical"
        />
        <ProjectCard
          src={pashupati}
          link="https://www.pashupati-grp.com/"
          h3="Pashupati Group"
          p="A Legacy of Innovation and Sustainability"
        />
        
        
      </div>
    </section>
  );
}

export default Projects;
