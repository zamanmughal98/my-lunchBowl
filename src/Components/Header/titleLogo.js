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
    <div
      style={{
        width: '80%',
        marginTop: '1rem',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        textTransform: 'capitalize',
      }}>
      {TitleColorArray.map(({ text, color }, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            justifyContent: 'center',
            color: color,
            width: index === 1 ? '40%' : 'inherit',
            borderBottomStyle: index === 1 ? 'none' : 'dotted',
            borderColor: index === 1 ? 'none' : 'darkgray',
          }}>
          {text}
        </div>
      ))}
    </div>
  );
};
