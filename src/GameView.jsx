import {NavLink} from "react-router";
import {gameCompare, getElements, robotPlay} from "./game.js";
import {useState} from "react";


export default function GameView() {
    let [selected, setSelected] = useState({})
    let [robotChoice, setRobotChoice] = useState({choice:null})
    let [score, setScore] = useState({robot:0,player:0});
    let [isLoading, setIsLoading] = useState(false);

    async function handleResult(selected) {

        setIsLoading(true);
        try{
            let robot = await robotPlay()
            setRobotChoice(robot)
            let result = await gameCompare(selected, robot.name)
            switch (result) {
                case null:
                    console.log("draw");
                    break;
                case selected:
                    console.log("Player win with: " + result);
                    setScore((prev)=>({...prev, player:score.player+1}));
                    break;
                case robot.name :
                    console.log ("Robot win with: " + robot);
                    setScore((prev)=>({...prev, robot:score.robot+1}));
                    break;
            }
        }catch(err){
            console.log(err)
        }finally {
            setIsLoading(false);
        }
    }
    function handlePlayerChoice(item, index) {
        setSelected({index, ...item});
        handleResult(item.name);
    }
    const list = getElements();
    return (
        <>
            <div className="read-the-docs w-220 h-200 flex flex-col justify-evenly items-center rounded-3xl shadow-2xl bg-gradient-to-b from-gray-50 to-gray-100 p-6">
                <div className="h-1/20 w-full  flex justify-items-start items-center pl-10">
                    <nav>
                        <NavLink to="/" className="px-6 py-3 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-50 text-gray-700 font-medium hover:text-gray-900">
                            Back
                        </NavLink>
                    </nav>
                </div>
                <div className="h-19/20 w-full flex flex-col justify-evenly  items-center ">
                    <div className="w-full h-1/10 text-center mb-6">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Score
                        </h2>
                        <div className="text-3xl font-semibold text-gray-800 mt-2">
                            🤖 {score.robot} - {score.player} 👨🏾‍🦱
                        </div>
                    </div>






                   <div className="h-2/10 w-full flex justify-evenly items-center">
                       <h5 className=" font-bold ">ROBOT 🤖 :</h5>
                       {list.map((item, index) =><button
                           key={index + 3}
                           className={`w-auto h-auto rounded-2xl p-3 flex flex-col items-center justify-center transition-all duration-300 ${
                               robotChoice?.name === item.name
                                   ? 'bg-gradient-to-br from-red-100 to-red-200 border-4 border-red-400 scale-110 shadow-xl'
                                   : 'bg-white shadow-lg opacity-70'
                           }`}
                       >
                           <img
                               src={item.img}
                               className="w-40 h-20 object-contain mb-3 group-hover:scale-110 transition-transform duration-300"
                               alt={item.name}
                           />
                           <h6 className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                               {item.name}
                           </h6>

                       </button>)}
                   </div>
                    {isLoading && (
                        <div className="text-center mt-2 text-gray-500">
                            Robot is thinking...
                        </div>
                    )}





                        <div className="w-full h-4/10 my-3 bg-gradient-to-r from-blue-50 to-purple-50  shadow-inner border-2 border-gray-200 flex items-center justify-center">
                            <div className="inset-0 flex items-center justify-evenly flex-col h-full">
                                {selected && robotChoice ? (
                                    <>
                                        <p className="text-2xl font-semibold text-red-400 mt-2">
                                            {robotChoice.name}
                                        </p>
                                        <div className="text-4xl animate-pulse">⚔️</div>
                                        <p className="text-2xl font-semibold text-blue-400 mt-2">
                                           {selected.name}
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <span className="text-4xl">🎮</span>
                                        <p className="text-lg font-semibold text-gray-600 mt-2">
                                            Make your move!
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>









                    <div className="h-2/10 w-full flex justify-evenly items-center">
                            <h5 className=" font-bold ">YOU 👨🏾‍🦱 :</h5>
                        {list.map((item, index) =><button
                            key={index}
                            onClick={()=>handlePlayerChoice(item, index)}
                            className={ index === selected.index ? "w-auto h-auto rounded-2xl shadow-lg p-4 flex flex-col items-center justify-center  transition-all duration-300  bg-gradient-to-br  from-blue-100 to-blue-200 border-4 border-blue-400 scale-110" : " w-auto h-auto rounded-2xl shadow-lg p-4 flex flex-col items-center justify-center bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-blue-400"}
                        >
                            <img
                                src={item.img}
                                className="w-40 h-20 object-contain mb-3 group-hover:scale-110 transition-transform duration-300"
                                alt={item.name}
                            />
                            <h6 className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                                {item.name}
                            </h6>
                        </button>)}
                    </div>


                </div>
            </div>
        </>
    )
}