/* eslint-disable jsx-a11y/alt-text */
import { Strings } from '../../common/strings';
import {
  ReviewBarContainer,
  ReviewBarTitles,
  ReviewWraper,
  ReviewsContainer,
  ReviewAvatar,
  ReviewText,
  ReviewBarWatchVideoText,
} from '../../css';
import avatar1 from '../../images/at1.webp';
import avatar2 from '../../images/at2.webp';
import avatar3 from '../../images/at3.webp';

export const ReviewBar = () => {
  const avatarArray = [avatar1, avatar2, avatar3];

  return (
    <ReviewBarContainer>
      <ReviewBarTitles>{Strings.whatPeoplesSaying}</ReviewBarTitles>
      <ReviewsContainer>
        {avatarArray.map((person, index) => (
          <ReviewWraper key={index}>
            <ReviewAvatar
              key={`review bar image ${index}`}
              alt={`review bar image ${index}`}
              src={person}
            />
            <ReviewText key={`review bar p ${index}`}>
              {Strings.reviewText}
            </ReviewText>
            <ReviewBarWatchVideoText key={`watch video p ${index}`}>
              {Strings.watchVideo}
            </ReviewBarWatchVideoText>
          </ReviewWraper>
        ))}
      </ReviewsContainer>
    </ReviewBarContainer>
  );
};
