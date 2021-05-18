const Avatar = ({ imgUrl, radius, className }) => {
  return (
    <div
      className={`peaman-avatar ${className}`}
      style={{
        background: `url('${imgUrl}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: radius,
        height: radius,
        borderRadius: "50%",
      }}
    ></div>
  );
};

export default Avatar;
