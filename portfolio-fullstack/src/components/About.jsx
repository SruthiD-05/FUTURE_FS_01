function About() {
  return (
    <section
      id="about"
      style={{
        padding: "80px 20px",
        backgroundColor: "#f9fafb",
        color: "#111827",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2.2rem", marginBottom: "20px" }}>
        About Me
      </h2>

      <p
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          fontSize: "1.05rem",
          lineHeight: "1.8",
          color: "#374151",
        }}
      >
        I am a motivated and detail-oriented student currently pursuing a
        Bachelor’s degree in Computer Science and Engineering with a
        specialization in Cloud Computing at SRM Institute of Science and
        Technology, Chennai.
        <br /><br />
        I am actively developing my skills in Full Stack Web Development, with a
        strong foundation in HTML, CSS, JavaScript, React, and version control
        using Git and GitHub.
        <br /><br />
        Through academic coursework and self-driven projects, I focus on building
        clean, user-focused web applications while continuously improving my
        problem-solving and technical abilities. I am eager to learn, adaptable
        to new technologies, and committed to delivering reliable and
        well-structured solutions.
      </p>
    </section>
  );
}

export default About;
