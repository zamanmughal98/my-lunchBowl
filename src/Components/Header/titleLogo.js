import { FlexContainerW80, LogoTitleContainer } from '../../css';
import { titleColorArray } from '../../common/arrays';
export const TitleLogo = () => {
  
  
  return (
    <FlexContainerW80>
      {titleColorArray.map(({ text, color }, index) => (
        <LogoTitleContainer
          key={index}
          color={color}
          width={index === 1 ? '40%' : 'inherit'}
          borderBottomStyle={index === 1 ? 'none' : 'dotted'}
          borderColor={index === 1 ? 'none' : 'darkgray'}>
          {text}
        </LogoTitleContainer>
      ))}
    </FlexContainerW80>
  );
};
