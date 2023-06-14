import { BannerImage } from './Menu and Banner/bannerImage';
import { HeaderColors } from './Header/headerColors';
import { Menubar } from './Menu and Banner/menuBar';
import { ImagesSlider } from './Slider/imagesSlider';
import { TitleLogo } from './Header/titleLogo';
import { ImageSLiderText } from './Slider/imageSliderText';
import { GreenColorStrip } from './Featured Products/greenColorStrip';
import { QuotationText } from './Featured Products/quotationText';
import { CountDown } from './Footer/countDown';
import { ReviewBar } from './Footer/reviewsBar';

export const App = () => {
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
};
