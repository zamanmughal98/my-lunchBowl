export const HeaderColors = () => {
  const colors = ['yellowgreen', 'red', 'orange'];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            padding: '15px',
            background: color,
            width: 'inherit',
          }}
        />
      ))}
    </div>
  );
};
