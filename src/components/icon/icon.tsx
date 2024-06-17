const Icon = ({ children, cls, onClick }) => {
  return (
    <div onClick={onClick} className={`${cls} wr-flex m-5 tr cp p-5 bdr-50`}>
      {children}
    </div>
  );
};

export default Icon;
