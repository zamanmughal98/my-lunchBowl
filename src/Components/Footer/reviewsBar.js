/* eslint-disable jsx-a11y/alt-text */
import avatar1 from '../../images/at1.webp';
import avatar2 from '../../images/at2.webp';
import avatar3 from '../../images/at3.webp';

export const ReviewBar = () => {
  const avatarArray = [avatar1, avatar2, avatar3];

  return (
    <div
      style={{
        background: '#dadadaa6',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingRight: '2rem',
        paddingBottom: '3rem',
        paddingTop: '2rem',
      }}>
      <div
        style={{
          fontSize: '2rem',
          color: 'orange',
          fontWeight: 'bold',
          textTransform: 'capitalize',
        }}>
        What People are Saying
      </div>

      <div
        style={{
          width: '80%',
          marginTop: '1rem',
          display: 'flex',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '2rem',
          paddingBottom: '0',
          justifyContent: 'space-evenly',
        }}>
        {avatarArray.map((person, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '20rem',
              width: '20%',
              background: 'white',
            }}>
            <img
              style={{
                aspectRatio: ' 3/2',
                width: '100%',
                objectFit: 'contain',
                borderRadius: '50%',
                paddingTop: '1.3rem',
              }}
              src={person}
              alt="person"></img>
            <p
              style={{
                fontSize: 'xx-small',
                padding: '0.8em',
                paddingBottom: '0.2rem',
              }}>
              Wow! I recently tried out this restaurant and I must say, it
              exceeded all my expectations. The ambiance was charming and
              inviting, creating a delightful dining experience.
            </p>

            <p
              style={{
                color: 'yellowgreen',
                paddingLeft: '1.2em',
                paddingRight: '0.8em',
              }}>
              watch Video
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
