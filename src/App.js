import Navbar from "./components/navbar/navbar";
import SimpleSlider from './components/whoweare/who';
import Header from "./components/banner/banner";
import Corevalue from "./components/corevalue/corevalue";
import Ourspesiality from "./components/ourspesiality/ourspesiality";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <SimpleSlider />
      <Corevalue />
      <Ourspesiality/>
      <Footer/>
    </div>
  );
}

export default App;
