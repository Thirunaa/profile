import { Container, Grid } from "@material-ui/core";
import "./App.css";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Container className="top_60">
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router basename="/profile">
            <Header />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
            </div>
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
