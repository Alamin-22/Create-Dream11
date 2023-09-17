import PropTypes from 'prop-types';
const Card = ({ player, handleSelectedPlayer}) => {
    const { name, salary, type, img } = player;
    return (
        <div >
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="img" className="rounded-xl w-full h-60 " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex justify-between space-x-4 font-medium'>
                        <p>Type: {type}</p>
                        <p>Price: {salary}k</p>
                    </div>
                    <div className="card w-full">
                        <button onClick={()=>handleSelectedPlayer(player)} className="btn btn-primary">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes={
    player: PropTypes.object.isRequired,
    handleSelectedPlayer: PropTypes.func.isRequired,
}

export default Card;