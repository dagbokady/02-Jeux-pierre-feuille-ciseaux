import {NavLink} from "react-router";
import {getElements} from "./game.js";

export default function GameView() {
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
                        <div className="text-xl font-semibold text-gray-800 mt-2">
                            0 - 0
                        </div>
                    </div>
                   <div className="h-2/10 w-full flex justify-evenly items-center">
                       <h5>ROBOT 🤖 :</h5>
                       {list.map((item, index) =><button
                           key={index}
                           className=" w-auto h-auto rounded-2xl shadow-lg p-4 flex flex-col items-center justify-center bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-blue-400"
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
                        <div className="w-full h-4/10 my-3 bg-gradient-to-r from-blue-50 to-purple-50  shadow-inner border-2 border-gray-200 flex items-center justify-center">
                            <div className="inset-0 flex items-center justify-center">
                                <span className="text-4xl">⚔️</span>
                            </div>
                        </div>
                    <div className="h-2/10 w-full flex justify-evenly items-center">
                            <h5>YOU 👨🏾‍🦱 :</h5>
                        {list.map((item, index) =><button
                            key={index}
                            className=" w-auto h-auto rounded-2xl shadow-lg p-4 flex flex-col items-center justify-center bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-2 hover:border-blue-400"
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