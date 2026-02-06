function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "80px 20px",
        backgroundColor: "#ffffff",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2.2rem", marginBottom: "20px" }}>
        Contact
      </h2>

      <p
        style={{
          fontSize: "1rem",
          color: "#374151",
          marginBottom: "30px",
        }}
      >
        Feel free to reach out to me for opportunities, collaborations, or
        discussions.
      </p>

      <div style={{ fontSize: "1rem", lineHeight: "2" }}>
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:sruthidivakarla2007@gmail.com"
            style={{ color: "#4338ca", textDecoration: "none" }}
          >
            sruthidivakarla2007@gmail.com
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/sruthi-divakarla-206b81332"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#4338ca", textDecoration: "none" }}
          >
            View Profile
          </a>
        </p>

        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/SruthiD-05"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#4338ca", textDecoration: "none" }}
          >
            View Profile
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
