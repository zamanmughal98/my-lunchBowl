import { HeaderColorContainer, HeaderColorStrips } from '../../css';
import { colors } from '../../common/arrays';
export const HeaderColors = () => {
  return (
    <HeaderColorContainer>
      {colors.map((color, index) => (
        <HeaderColorStrips key={index} background={color} />
      ))}
    </HeaderColorContainer>
  );
};
