import myImage from '../images/banner.jpg';

export const BannerImage = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '80%',
          marginTop: '1rem',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <img
          src={myImage}
          alt="banner"
          style={{
            width: '100%',
            height: '25rem',
            objectFit: 'cover',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '80%',
          marginTop: '4rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          background: 'orange',
          textTransform: 'capitalize',
        }}>
        like to place an order for a succulent grilled chicken breast served
        with a zesty lemon garlic sauce and a side of perfectly seasoned roasted
        vegetables. To complement this exquisite dish, I would love a creamy
        mashed potato topped with melted butter and a sprinkle of fresh chives.
        For a refreshing beverage,
        <button
          style={{
            maxWidth: 'fit-content',
            maxHeight: '3rem',
            marginTop: 'auto',
            marginBottom: 'auto',
            background: 'red',
            color: 'white',
            borderBlockColor: 'white',
            borderRadius: '7px',
          }}
          onClick={() => alert('ordering')}>
          Order Now
        </button>
      </div>
    </>
  );
};
