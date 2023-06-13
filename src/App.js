import { BannerImage } from './Components/Menu and Banner/bannerImage';
import { HeaderColors } from './Components/Header/headerColors';
import { Menubar } from './Components/Menu and Banner/menuBar';
import { ImagesSlider } from './Components/Slider/imagesSlider';
import { TitleLogo } from './Components/Header/titleLogo';
import { ImageSLiderText } from './Components/Slider/imageSliderText';
import { GreenColorStrip } from './Components/Featured Products/greenColorStrip';
import { QuotationText } from './Components/Featured Products/quotationText';
import { CountDown } from './Components/Footer/countDown';
import { ReviewBar } from './Components/Footer/reviewsBar';
function App() {
  return (
    <div className="App">
      <HeaderColors />
      <TitleLogo />
      <Menubar />
      <BannerImage />
      <ImagesSlider />
      <ImageSLiderText />
      <GreenColorStrip />
      <QuotationText />
      <CountDown />
      <ReviewBar />
    </div>
  );
}

export default App;
