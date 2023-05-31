import "./period-box.css"

const PeriodBox = ({ onButtonClick }) => {
  const handleClickButton = (event) => {
    onButtonClick(event.target.value);
  };

  return (
    <div className="container-period">
      <button className="button" value="day" onClick={handleClickButton}>
        Day
      </button>
      <button className="button"  value="week" onClick={handleClickButton}>
        Week
      </button>
      <button className="button"  value="month" onClick={handleClickButton}>
        Month
      </button>
    </div>
  );
};

export default PeriodBox;
