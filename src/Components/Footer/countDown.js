import cdnImage from '../../images/countdown.webp';

export const CountDown = () => {
  return (
    <div
      style={{
        background: '#a0d4a466',
        width: '100%',
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingRight: '2rem',
        paddingBottom: '3rem',
        paddingTop: '2rem',
      }}>
      <div style={{ fontSize: '2rem', textTransform: 'uppercase' }}>
        Get Your Order In Minutes
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '1.3rem',
        }}>
        <div style={{ fontSize: '1.2rem', marginTop: '2rem' }}>
          The Average Order takes
        </div>
        <img
          style={{
            aspectRatio: ' 3/2',
            width: '15%',
            objectFit: 'contain',
            mixBlendMode: 'hard-light',
          }}
          src={cdnImage}
          alt="countdown"></img>
        <div style={{ fontSize: '1.2rem', marginTop: '2rem' }}>
          Minutes to be delivered
        </div>
      </div>
    </div>
  );
};
