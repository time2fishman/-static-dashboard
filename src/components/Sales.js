import upArrow from '../imgs/icons8-up-arrow-25.png'

const Sales = (props) => {
    return (
        <div className="sales-container">
            <div className='percent-container'>
                <img className="up-arrow" src={upArrow} alt="up arrow" />
                <p className="percent">{props.userComparisonPercent}%</p>
            </div>
            <div className='num-of-sales'>
                <p className="user-sales">{props.userSales} Sales</p>
            </div>
        </div>
    );
};

export default Sales;