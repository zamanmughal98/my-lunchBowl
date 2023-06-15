import { Strings } from '../../common/strings';
import { QuotationTextContainer, TextWraper } from '../../css';

export const QuotationText = () => {
  return (
    <QuotationTextContainer>
      {'{'}
      <TextWraper>{Strings.quotationText}</TextWraper>
      {'}'}
    </QuotationTextContainer>
  );
};
