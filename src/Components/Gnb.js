
const Gnb = ({isOpen}) => {
  return (
    <nav className={isOpen ? "mobile-open" : ""}>
      <div className="menu-wrapper">
        <ul className="menu">
          <li>New</li>
          <li>Living</li>
          <li>Dining</li>
          <li>BedRoom</li>
          <li>Decor</li>
        </ul>     
      </div>
    </nav>
  );
};

export default Gnb;