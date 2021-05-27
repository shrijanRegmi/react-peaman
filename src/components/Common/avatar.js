const Avatar = ({ imgUrl, radius, className, style }) => {
  return (
    <div
      className={`peaman-avatar ${className}`}
      style={{
        background: `url('${imgUrl}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "var(--color-light-blue)",
        width: radius,
        height: radius,
        borderRadius: "50%",
        ...style,
      }}
    ></div>
  );
};

export default Avatar;
