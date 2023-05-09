import { Container } from "react-bootstrap";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./components/screens/Home";
import Footer from "./components/Footer";
import Product from "./components/screens/Product";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <h4>
          <Container>
            <Router>
              <Routes>
                <Route exact path="/" element={<HomeScreen />}></Route>
                <Route path="/product/:id" element={<Product />}></Route>
              </Routes>
            </Router>
          </Container>
        </h4>
      </main>
      <Footer />
    </>
  );
};

export default App;
