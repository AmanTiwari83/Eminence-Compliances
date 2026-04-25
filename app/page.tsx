export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.title}>Eminence Global Compliances</h1>
        <h2 style={styles.subtitle}>🚀 We’re Launching Soon</h2>

        <div style={styles.loader}></div>

        <p style={styles.text}>
          Our website is under construction.
        </p>
        <p style={styles.text}>
          We’re working hard to bring you something amazing.
        </p>

        <footer style={styles.footer}>
          © 2026 Eminence Global Compliances
        </footer>
      </div>
    </main>
  );
}

const styles = {
  main: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "#fff",
    textAlign: "center",
  },
  container: {
    padding: "20px",
  },
  title: {
    fontSize: "2.8rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    opacity: 0.8,
  },
  text: {
    fontSize: "1.1rem",
    opacity: 0.85,
  },
  footer: {
    marginTop: "20px",
    fontSize: "0.9rem",
    opacity: 0.6,
  },
  loader: {
    margin: "25px auto",
    width: "50px",
    height: "50px",
    border: "4px solid #fff",
    borderTop: "4px solid transparent",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
} as const;