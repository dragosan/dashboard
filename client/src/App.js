import "./App.css"
import Sidebar from "./components/layout/Sidebar"
import Topic from "./components/Topics/Topic"

function App() {
  return (
    <>
      <Sidebar />

      <section id="main-dashboard-content">
        <section id="top-section">
          <div className="input-box">
            <input placeholder="Search..." />
            <div>
              <i className="fas fa-search"></i>
            </div>
          </div>
          <div className="action-icons">
            <div className="action-icon-one"></div>
            <div className="action-icon-two"></div>
          </div>
        </section>
        <h1 id="welcome-title">Welcome Back, Arizona!</h1>
        <section id="grid-container">
          <div className="grid-item one">
            <Topic />
          </div>
          <div className="grid-item two">Item 2</div>
          <div className="grid-item three">Item 3</div>
          <div className="grid-item four">Item 4</div>
        </section>
      </section>
    </>
  )
}

export default App
