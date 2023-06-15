import { FlexContainerW80, LogoTitleContainer } from '../../css';

export const TitleLogo = () => {
  const TitleColorArray = [
    {
      text: 'My LunchBowl',
      color: 'red',
    },
    {
      text: 'logo',
      color: 'green',
    },
    {
      text: 'Office lunch Delivery',
      color: 'yellowgreen',
    },
  ];
  
  return (
    <FlexContainerW80>
      {TitleColorArray.map(({ text, color }, index) => (
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
