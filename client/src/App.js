import "./App.css"

function App() {
  return (
    <>
      <section id="sidebar">
        <section class="title-container">
          <img src="dashboard-5481.svg" width="40px" alt="logo" />
          <h1>Arizona Analytics</h1>
        </section>
        <section class="links-container">
          <div class="links">
            <div class="icon">
              <i class="fas fa-house-user"></i>
            </div>
            <span>Dashboard</span>
          </div>
          <div class="links">
            <div class="icon">
              <i class="fas fa-chart-bar"></i>
            </div>
            <span>Analytics</span>
          </div>
          <div class="links">
            <div class="icon">
              <i class="fas fa-comments"></i>
            </div>
            <span>Messages</span>
          </div>
          <div class="links">
            <div class="icon">
              <i class="fas fa-cog"></i>
            </div>
            <span>Settings</span>
          </div>
        </section>
      </section>
      <section id="main-dashboard-content">
        <section id="top-section">
          <div class="input-box">
            <input placeholder="Search..." />
            <div>
              <i class="fas fa-search"></i>
            </div>
          </div>
          <div class="action-icons">
            <div class="action-icon-one"></div>
            <div class="action-icon-two"></div>
          </div>
        </section>
        <h1 id="welcome-title">Welcome Back, Arizona!</h1>
        <section id="grid-container">
          <div class="grid-item one">Item 1</div>
          <div class="grid-item two">Item 2</div>
          <div class="grid-item three">Item 3</div>
          <div class="grid-item four">Item 4</div>
        </section>
      </section>
    </>
  )
}

export default App
