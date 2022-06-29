import SkillBar from "../skillbar/SkillBar";
import "./about.css";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-me">
        <div className="about-me-text">
          <h2 className="about-text-h2">Olá meu nome é</h2>
          <h1 className="about-text-h1">Paulo Santos,</h1>
        </div>
        <div className="about-me-areas">
          <div className="about-me-areas-anim">
            <div className="area">Engenheiro da Computação</div>
            <div className="area">Desenvolvedor Front-end</div>
            <div className="area">Desenvolvedor Back-end</div>
            <div className="area">Futuro Engenheiro de Cloud</div>
          </div>
        </div>
        <h2 className="about-message">Bem vindo ao meu web portfólio.</h2>
      </div>
      <div className="about-skills">
        <div className="about-skills-hard">
          <div className="about-skills-hard-text">Hard Skills</div>
          <div className="about-skills-hard-bars">
            <SkillBar name="HTML" color="#0a0f46" bar="90%" />
            <SkillBar name="CSS" color="#0a0f46" bar="90%" />
            <SkillBar name="JS" color="#6995e6" bar="80%" />
            <SkillBar name="React" color="#6995e6" bar="70%" />
            <SkillBar name="VueJs" color="#0a0f46" bar="65%" />
            <SkillBar name="Angular" color="#0a0f46" bar="60%" />
            <SkillBar name="SQL" color="#6995e6" bar="80%" />
            <SkillBar name="C/C++/C#" color="#6995e6" bar="50%" />
            <SkillBar name="Java" color="#0a0f46" bar="65%" />
            <SkillBar name="PHP" color="#0a0f46" bar="50%" />
            <SkillBar name="Python" color="#6995e6" bar="60%" />
            <SkillBar name="Entre outras..." color="#6995e6" bar="???" />
          </div>
        </div>
        <div className="about-skills-soft">
          <div className="about-skills-soft-text">Soft Skills</div>
          <div className="about-skills-soft-bars">
            <SkillBar name="Trabalho em equipe" color="#0a0f46" bar="90%" />
            <SkillBar name="Criatividade" color="#6995e6" bar="80%" />
            <SkillBar name="Resolução de Problemas" color="#0a0f46" bar="90%" />
            <SkillBar name=" Pensamento Crítico" color="#6995e6" bar="90%" />
            <SkillBar name=" Dedicação" color="#0a0f46" bar="90%" />
            <SkillBar name=" Autodidata" color="#6995e6" bar="90%" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
