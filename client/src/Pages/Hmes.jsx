
import React from 'react'

function Hmes() {
  return (
    <div style={styles.container}>
      
  {/* Header */}
  <header style={styles.header}>
    <h1 id="logo" style={styles.logo}>📚 BookStore</h1>

    <nav>
      <a id="homeLink" href="/" style={styles.link}>Home</a>
      <a id="booksLink" href="/books" style={styles.link}>Books</a>
      <a id="aboutLink" href="/about" style={styles.link}>About</a>
      <a id="contactLink" href="/contact" style={styles.link}>Contact</a>
    </nav>
  </header>

  {/* Hero Section */}
  <section style={styles.hero}>
    <h2>Discover Your Next Favorite Book</h2>
    <p>Explore thousands of books from all genres at one place.</p>

    <button id="browseBtn" style={styles.button}>
      Browse Books
    </button>
  </section>

  {/* Categories */}
  <section style={styles.section}>
    <h3>Popular Categories</h3>

    <div style={styles.cardContainer}>
      <div id="fictionCard" style={styles.card}>Fiction</div>
      <div id="nonFictionCard" style={styles.card}>Non-Fiction</div>
      <div id="technologyCard" style={styles.card}>Technology</div>
      <div id="selfHelpCard" style={styles.card}>Self-Help</div>
    </div>
  </section>

  {/* Footer */}
  <footer id="footer" style={styles.footer}>
    <p>© 2026 BookStore. All rights reserved.</p>
  </footer>

</div>
  )
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 30px',
    backgroundColor: '#153388',
    color: '#fff',
  },
  logo: {
    margin: 0,
  },
  link: {
    color: '#fff',
    marginLeft: '15px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  hero: {
    textAlign: 'center',
    padding: '60px 20px',
    backgroundColor: '#f4f6fc',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#153388',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    marginTop: '15px',
  },
  section: {
    padding: '40px 30px',
  },
  cardContainer: {
    display: 'flex',
    gap: '20px',
    marginTop: '20px',
  },
  card: {
    padding: '20px',
    backgroundColor: '#eee',
    borderRadius: '8px',
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footer: {
    textAlign: 'center',
    padding: '15px',
    backgroundColor: '#153388',
    color: '#fff',
  },
}

export default Hmes

