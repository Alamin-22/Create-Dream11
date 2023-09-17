import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {


    const [allPlayers, setAllPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState([]);
    const [priceCount, setPriceCount] = useState(0);
    const [remainingPlayer, setRemainingPlayer] = useState(11);
    // console.log(priceCount)
    useEffect(() => {
        fetch("players.json")
            .then(res => res.json())
            .then(data => setAllPlayers(data))
    }, [])

    const handleSelectedPlayer = (player) => {
        const isExist = selectedPlayer.find((item => item.id == player.id));
        let priceCount = player.salary;
        // console.log(priceCount)
        if (isExist) {
            return toast.warn("You already select this player", { position: "top-center" })
        }
        else {
            selectedPlayer.forEach(item => {
                priceCount = priceCount + item.salary;
            });
            const availableSlot = 11 - selectedPlayer.length;
            setRemainingPlayer(availableSlot);
            
            setPriceCount(priceCount)
            setSelectedPlayer([...selectedPlayer, player])
        }
    }

    return (
        <div>
            <header>
                <h1 className='text-4xl text-white font-bold text-center py-3'>Make Your Dream 11 </h1>
            </header>
            <div className='md:flex gap-5 mx-5'>
                {/* Card container */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    {
                        allPlayers.map((player, idx) => <Card key={idx} handleSelectedPlayer={handleSelectedPlayer} player={player}></Card>)
                    }
                </div>
                {/* Cart Container */}
                <div>
                    <Cart remainingPlayer={remainingPlayer} priceCount={priceCount} selectedPlayer={selectedPlayer} ></Cart>
                </div>
            </div>
            <ToastContainer />
        </div>

    );
};

export default Home;