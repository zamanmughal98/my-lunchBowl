import { BannerImage } from './Components/bannerImage';
import { HeaderColors } from './Components/headerColors';
import { Menubar } from './Components/menuBar';
import { ImagesSlider } from './Components/imagesSlider';
import { TitleLogo } from './Components/titleLogo';
import { ImageSLiderText } from './Components/imageSliderText';
import { GreenColorStrip } from './Components/greenColorStrip';
import { QuotationText } from './Components/quotationText';
import { CountDown } from './Components/countDown';
import { ReviewBar } from './Components/reviewsBar';
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
