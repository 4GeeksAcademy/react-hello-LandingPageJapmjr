//import React from "react";
import { Card } from "./components/Card";
import { CardTitle } from "./components/CardTitle";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function App() {
  const imageUrl1 =
    "https://images.unsplash.com/photo-1759987651385-342ad67d210d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774";
  const imageUrl2 =
    "https://images.unsplash.com/photo-1759845565036-cbecbcfcb8e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287";
  const imageUrl3 =
    "https://images.unsplash.com/photo-1760312205920-f18ebba84181?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774";
  const imageUrl4 =
    "https://images.unsplash.com/photo-1760043729063-26b2fefd9b08?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=766";
  
  const description1 = "Texto de Ejemplonúmero 1";
  const description2 = "Texto ejemplo número dos";
  const description3 = "Texto ejemplo número tres";
  const description4 = "Texto ejemplo número cuatro";

  return (
    <div>
      <NavBar />
      <main className="container mt-4">
        <CardTitle />

        <div className="container mt-5 mb-5">
          <div className="row justify-content-center gap-5">
            <Card imageUrl={imageUrl1} description={description1} />
            <Card imageUrl={imageUrl2} description={description2} />
            <Card imageUrl={imageUrl3} description={description3} />
            <Card imageUrl={imageUrl4} description={description4} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
