export const HeaderColors = () => {
  const colors = ['yellowgreen', 'red', 'orange'];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}>
      {colors.map((background, index) => (
        <div
          key={index}
          style={{
            padding: '15px',
            background,
            width: 'inherit',
          }}
        />
      ))}
    </div>
  );
};
