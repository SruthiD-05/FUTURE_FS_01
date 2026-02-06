function Navbar() {
  return (
    <nav
      style={{
        padding: "20px 40px",
        background: "#111827",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0 }}>Sruthi Divakarla</h2>

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "20px",
          margin: 0,
          padding: 0,
        }}
      >
        <li><a href="#about" style={linkStyle}>About</a></li>
        <li><a href="#skills" style={linkStyle}>Skills</a></li>
        <li><a href="#projects" style={linkStyle}>Projects</a></li>
        <li><a href="#contact" style={linkStyle}>Contact</a></li>
      </ul>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
};

export default Navbar;
