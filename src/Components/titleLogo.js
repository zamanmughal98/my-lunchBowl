export const TitleLogo = () => {
  return (
    <div
      style={{
        width: '80%',
        marginTop: '1rem',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        textTransform: 'capitalize',
      }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          color: 'red',
          width: 'inherit',
          borderBottomStyle: 'dotted',
          borderColor: 'darkgray',
        }}>
        My LunchBowl
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          color: 'green',
          width: '40%',
        }}>
        LOGO
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          color: 'yellowgreen',
          width: 'inherit',
          borderBottomStyle: 'dotted',
          borderColor: 'darkgray',
        }}>
        Office Lunch Delivery
      </div>
    </div>
  );
};
