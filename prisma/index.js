export default function Home() {
    return (
      <div>
        <header style={{ padding: "10px", background: "#333", color: "white" }}>
          <h1>Tech Dashboard</h1>
          <nav>
            <a href="#">Dashboard</a> | <a href="#">Assessments</a> | <a href="#">Profile</a>
          </nav>
        </header>
        <main style={{ padding: "20px" }}>
          <h2>Welcome to your dashboard</h2>
        </main>
      </div>
    );
  }
  