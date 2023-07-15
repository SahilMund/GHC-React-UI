import "./styles/App.css";

import {
  BestSeller,
  Body,
  Carousels,
  Footer,
  HairCarousel,
  Header,
  InstaBanner,
  Navbar,
  SkinHairCard,
  Wellness,
} from "./component";
import { HCCarousel1, HCCarousel2 } from "./static";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Body />
      <Wellness />
      <SkinHairCard />
      <Carousels />
      <BestSeller title="Best Seller" />
      <BestSeller title="Hair Care" />
      <HairCarousel
        title="Understanding Hair"
        displayViewAll
        image={HCCarousel1}
      />
      <BestSeller title="Skin Care" />
      <HairCarousel title="Skin - Talk" image={HCCarousel2} />
      <InstaBanner/>
      <Footer/>
    </div>
  );
}

export default App;
