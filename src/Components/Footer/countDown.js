import { Strings } from '../../common/strings';
import {
  CountdownContainer,
  CountdownTitles,
  CountdownImageTextWraper,
  CountdownText,
  CountdownImage,
} from '../../css';
import cdnImage from '../../images/countdown.webp';

export const CountDown = () => {
  return (
    <CountdownContainer>
      <CountdownTitles>{Strings.getYourOrder}</CountdownTitles>
      <CountdownImageTextWraper>
        <CountdownText>{Strings.averageOrder}</CountdownText>
        <CountdownImage src={cdnImage} alt="countdown"></CountdownImage>
        <CountdownText>{Strings.minutesToDeliver}</CountdownText>
      </CountdownImageTextWraper>
    </CountdownContainer>
  );
};
