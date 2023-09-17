import PropTypes from 'prop-types';
const Cart = ({ selectedPlayer, priceCount, remainingPlayer }) => {
    return (
        <div className='text-white p-4 md:w-60 mt-3 md:mt-0 bg-lime-500 rounded-lg'>
            <h1 className='text-2xl'>Available Slot: {remainingPlayer}</h1> <hr className='my-4' />
            <div className='list-decimal'>
                {selectedPlayer.map((player, idx) => <li key={idx}>{player.name}</li>)}
            </div> <hr className="my-3" />

            <h1 className='text-2xl'>Selected player: {selectedPlayer.length}</h1> <hr className='my-3' />

            <p className="text-xl font-medium text-center">Total Price: {priceCount}k</p>
            <button className="btn btn-active btn-primary w-full mt-6">Purchase</button>
        </div>
    );
};

Cart.propTypes = {
    selectedPlayer: PropTypes.array.isRequired,
    priceCount: PropTypes.number.isRequired,
    remainingPlayer: PropTypes.number.isRequired,
}

export default Cart;