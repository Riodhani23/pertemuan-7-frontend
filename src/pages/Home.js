import React, {useState} from "react";
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import AddMovie from "../components/AddMovie/AddMovie"
import DataMovie from "../utils/constans/DataMovie"
import Movies from "../components/Movies"

const  Main = () => {
  
  // state
  const [item, setItem] = useState(DataMovie);

  return (
    <main>
      <Hero />
      <Movies item={item} setItem={setItem}/>
      <AddMovie movies={item} setMovies={setItem}/>
    </main>
  )
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  )
}

export default Home;