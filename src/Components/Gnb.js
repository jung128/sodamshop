
const Gnb = ({isOpen}) => {

  return (
    <nav className={isOpen ? "mobile-open" : ""}>
      <div className="menu-btn">      
      </div>
    </nav>
  );
};

export default Gnb;