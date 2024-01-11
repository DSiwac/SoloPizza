const React = require("react");

module.exports = function Layout({ children, login }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="css/data.css"></link>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossOrigin="anonymous"
        ></script>
        <title>Auction</title>
        <header className="shadow">
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                Домой
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                {login ? (
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="/cabinet">
                        Hi, {login}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/logout">
                        Logout
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/basket">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-cart2"
                          href="/basket"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                ) : (
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="/login">
                        Войти
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/registr">
                        Регистрация
                      </a>
                    </li>
                    
                  </ul>
                )}
              </div>
            </div>
          </nav>
        </header>
      </head>
      <body>
       
        {children}
      </body>
    </html>
  );
};
