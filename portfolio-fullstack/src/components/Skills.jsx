function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "C Programming",
    "C++ Programming",
    "Python",
    "Java",
    "SQL",
    "MySQL",
    "Git",
    "GitHub",
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "80px 20px",
        backgroundColor: "#ffffff",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2.2rem", marginBottom: "30px" }}>
        Skills
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {skills.map((skill, index) => (
          <span
            key={index}
            style={{
              padding: "10px 18px",
              backgroundColor: "#eef2ff",
              color: "#4338ca",
              borderRadius: "20px",
              fontSize: "0.95rem",
              fontWeight: "500",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
