function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive personal portfolio website built using React to showcase skills, projects, and professional background.",
    },
    {
      title: "Hospital Management System",
      description:
        "A Java Swing-based desktop application to manage patient records, doctor assignments, room allocation, and billing.",
    },
    {
      title: "Supermarket Billing System",
      description:
        "A Java-based application for handling product management, cart operations, and bill generation in a supermarket.",
    },
    {
      title: "Student Marks Management System",
      description:
        "A Java application designed to store, calculate, and display student academic marks efficiently.",
    },
    {
      title: "Playlist Management System",
      description:
        "A Java program that allows users to create, manage, and organize music playlists.",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "80px 20px",
        backgroundColor: "#f9fafb",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2.2rem", marginBottom: "40px" }}>
        Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#ffffff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              textAlign: "left",
            }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                marginBottom: "10px",
                color: "#111827",
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#374151",
                lineHeight: "1.6",
              }}
            >
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
