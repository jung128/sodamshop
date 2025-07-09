
const Popup = ({children}) => {
    return (
        <div className="popup">
            <div className="popup-card">
            <div className="popup-card2">
            {children}
            </div>
            </div>
        </div>
    );
};

export default Popup;