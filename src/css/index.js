import styled from 'styled-components';

export const HeaderColorContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderColorStrips = styled('div')`
  padding: 15px;
  background: ${(props) => props.background};
  width: inherit;
`;

export const FlexContainerW80 = styled('div')`
  width: 80%;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  text-transform: capitalize;
`;

export const LogoTitleContainer = styled('div')`
  display: flex;
  justify-content: center;
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  border-bottom-style: ${(props) => props.borderBottomStyle};
  border-color: ${(props) => props.borderColor};
`;

export const FlexContainerW80TM4 = styled('div')`
  width: 80%;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  margin-left: auto;
  margin-right: auto;
  background: orange;
  text-transform: uppercase;
`;

export const MenuBar = styled('div')`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: ${(props) => props.border};
  border-bottom-left-radius: ${(props) => props.borderBottomLeftRadius};
  border-bottom-right-radius: ${(props) => props.borderBottomRightRadius};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
`;

export const BannerImageContainer = styled('img')`
  width: 100%;
  height: ${(props) => props.height};
  object-fit: cover;
`;

export const BannerContainerButton = styled('button')`
  max-width: fit-content;
  max-height: 3rem;
  margin-top: auto;
  margin-bottom: auto;
  background: red;
  color: white;
  border-block-color: white;
  border-radius: 7px;
`;

export const SliderButton = styled('button')`
  background: transparent;
  border: transparent;
  color: orange;
  font-size: 2rem;
`;

export const SliderTextContainer = styled('div')`
  display: flex;
  justify-content: center;
  width: 80%;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  color: red;
  border-top-style: dotted;
  border-bottom-style: dotted;
  border-color: darkgray;
  font-size: 2rem;
  padding: 0.5rem 0px;
  text-transform: capitalize;
`;

export const FeaturedProductsContainer = styled('div')`
  background: yellowgreen;
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-right: 2rem;
  padding-bottom: 2rem;
  text-transform: uppercase;
`;

export const FeaturedProductsTitle = styled('div')`
  color: white;
  font-size: 2rem;
`;

export const FeaturedProductsImagesContainer = styled('div')`
  width: 80%;
  margin-top: 1rem;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  background: white;
  padding: 2rem 2rem 0px;
  justify-content: space-evenly;
`;

export const FeaturedProductsImageTextWraper = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const FeaturedProductsImage = styled('img')`
  width: inherit-10%;
  height: 12rem;
  object-fit: conver;
`;

export const QuotationTextContainer = styled('div')`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 2rem;
  font-size: 5rem;
`;
export const TextWraper = styled('div')`
  padding: 0rem 2rem;
  font-size: 1rem;
`;

export const CountdownContainer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: rgba(160, 212, 164, 0.4);
  margin-top: 2rem;
  padding-right: 2rem;
  padding-bottom: 3rem;
  padding-top: 2rem;
`;

export const CountdownTitles = styled('div')`
  font-size: 2rem;
  text-transform: uppercase;
`;

export const CountdownImageTextWraper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1.3rem;
`;

export const CountdownText = styled('div')`
  font-size: 1.2rem;
  margin-top: 2rem;
`;

export const CountdownImage = styled('img')`
    aspect-ratio: 3 / 2;
    width: 15%;
    object-fit: contain;
    mix-blend-mode: hard-light;
  }
`;

export const ReviewBarContainer = styled('div')`
  background: rgba(218, 218, 218, 0.65);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-right: 2rem;
  padding-bottom: 3rem;
  padding-top: 2rem;
`;

export const ReviewBarTitles = styled('div')`
  font-size: 2rem;
  color: orange;
  font-weight: bold;
  text-transform: capitalize;
`;

export const ReviewsContainer = styled('div')`
  width: 80%;
  margin-top: 1rem;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 2rem 0px;
  justify-content: space-evenly;
`;

export const ReviewWraper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20rem;
  width: 20%;
  background: white;
`;

export const ReviewAvatar = styled('img')`
  aspect-ratio: 3 / 2;
  width: 100%;
  object-fit: contain;
  border-radius: 50%;
  padding-top: 1.3rem;
`;

export const ReviewText = styled('p')`
  font-size: xx-small;
  padding: 0.8em 0.8em 0.2rem;
`;

export const ReviewBarWatchVideoText = styled('p')`
  color: yellowgreen;
  padding-left: 1.2em;
  padding-right: 0.8em;
`;
