import { HeaderColorContainer, HeaderColorStrips } from '../../css';

export const HeaderColors = () => {
  const colors = ['yellowgreen', 'red', 'orange'];

  return (
    <HeaderColorContainer>
      {colors.map((color, index) => (
        <HeaderColorStrips key={index} background={color} />
      ))}
    </HeaderColorContainer>
  );
};
