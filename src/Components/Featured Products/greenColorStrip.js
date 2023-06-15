/* eslint-disable jsx-a11y/img-redundant-alt */
import { Strings } from '../../common/strings';
import {
  FeaturedProductsContainer,
  FeaturedProductsTitle,
  FeaturedProductsImagesContainer,
  FeaturedProductsImageTextWraper,
  FeaturedProductsImage,
} from '../../css';
import img1 from '../../images/1.webp';
import img4 from '../../images/4.webp';
import img5 from '../../images/5.webp';

export const GreenColorStrip = () => {
  const images = [img1, img4, img5];

  return (
    <FeaturedProductsContainer>
      <FeaturedProductsTitle>{Strings.featuredProducts}</FeaturedProductsTitle>
      <FeaturedProductsImagesContainer>
        {images.map((image, index) => (
          <FeaturedProductsImageTextWraper key={`green strip div ${index}`}>
            <FeaturedProductsImage
              key={`green strip image ${index}`}
              src={image}
              alt={`Image ${index + 1}`}
            />
            <p key={`green strip p ${index}`}>
              {Strings.specialDish} {index + 1}
            </p>
          </FeaturedProductsImageTextWraper>
        ))}
      </FeaturedProductsImagesContainer>
    </FeaturedProductsContainer>
  );
};
