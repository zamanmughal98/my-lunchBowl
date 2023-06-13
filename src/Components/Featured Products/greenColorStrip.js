/* eslint-disable jsx-a11y/img-redundant-alt */
import img1 from '../../images/1.webp';
import img4 from '../../images/4.webp';
import img5 from '../../images/5.webp';

export const GreenColorStrip = () => {
  const images = [img1, img4, img5];

  return (
    <div
      style={{
        background: 'yellowgreen',
        width: '100%',
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingRight: '2rem',
        paddingBottom: '2rem',
        textTransform: 'uppercase',
      }}>
      <div style={{ color: 'white', fontSize: '2rem' }}>Featured Products</div>
      <div
        style={{
          width: '80%',
          marginTop: '1rem',
          display: 'flex',
          marginLeft: 'auto',
          marginRight: 'auto',
          background: 'white',
          padding: '2rem',
          paddingBottom: '0',
          justifyContent: 'space-evenly',
        }}>
        {images.map((image, index) => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}>
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              style={{
                width: 'inherit-10%',
                height: '12rem',
                objectFit: 'cover',
              }}
            />
            <p>Special Dish# {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
