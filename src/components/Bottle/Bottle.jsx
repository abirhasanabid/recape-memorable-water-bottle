import './bottle.css'
import PropTypes from 'prop-types';

const Bottle = ({ bottle }) => {
    const { name, img, price } = bottle;
    return (
        <div className="bottle">
            <h3>Bottle : {name}</h3>
            <img src={img} alt="" />
            <p>Price : {price}</p>
        </div>
    );
};

Bottle.propTypes={
    bottle:PropTypes.object
}

export default Bottle;