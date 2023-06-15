import { Strings } from '../../common/strings';
import {
  FlexContainerW80,
  BannerImageContainer,
  FlexContainerW80TM4,
  BannerContainerButton,
} from '../../css';

import myImage from '../../images/banner.webp';

export const BannerImage = () => {
  return (
    <>
      <FlexContainerW80>
        <BannerImageContainer height={'25rem'} src={myImage} alt="banner-img" />
      </FlexContainerW80>
      <FlexContainerW80TM4>
        {Strings.bannerImageText}
        <BannerContainerButton
          onClick={() => alert(Strings.orderInitiated.toUpperCase())}>
          {Strings.orderNow}
        </BannerContainerButton>
      </FlexContainerW80TM4>
    </>
  );
};
