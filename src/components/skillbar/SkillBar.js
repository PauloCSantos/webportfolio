import "./skillbar.css";

function SkillBar(props){

  const color = props.color
  const bar = props.bar
  return (
    <div className="skill-bars">
     
      <div className="bar">
        <div className="info">
          <span>{props.name}</span>
        </div>
        <div className="progress-line">
          <span className="span-bar" style={{background: color,width: bar}}></span>
          <span className="span-value">{props.bar}</span>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
