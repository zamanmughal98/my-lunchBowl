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
import { useState } from 'react';
import { SliderTextContainer } from '../css';
import { Strings } from '../common/strings';

export const App = () => {
  const [currentPage, setCurrentPage] = useState();
  const activeWhen = 'lunch menu';

  const currentPageHandler = (value) => setCurrentPage(value);
  return (
    <div className="App">
      <HeaderColors />
      <TitleLogo />
      <Menubar getCurrentPage={currentPageHandler} />
      {currentPage === activeWhen ? (
        <>
          <BannerImage />
          <ImagesSlider />
          <ImageSLiderText />
          <GreenColorStrip />
          <QuotationText />
          <CountDown />
          <ReviewBar />
        </>
      ) : (
        <SliderTextContainer>
          {currentPage} {Strings.pageLoaded}
        </SliderTextContainer>
      )}
    </div>
  );
};
