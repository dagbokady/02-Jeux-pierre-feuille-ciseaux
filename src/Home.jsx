import './App.css'
import {NavLink} from "react-router";

function Home() {

  return (
      <>
          <div className="read-the-docs w-220 h-180 flex flex-col justify-evenly items-center shadow-2xl bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl ">
              <h3 className="text-3xl font-bold text- bla\">
                    Rock - Paper - Cisors
              </h3>
              <nav className="flex flex-col items-center justify-between w-1/3 h-1/6 gap-1">
                  <NavLink to="/Game" className="w-full rounded-3xl bg-red-400 text-white text-xl font-bold  py-2 px-6" >
                      Game
                  </NavLink>
                  <NavLink to="/" className="w-full rounded-3xl border border-blue-400 text-blue-400 font-bold  py-2 px-6" >
                      Option
                  </NavLink>
              </nav>
               Open Source Projects
          </div>
      </>
  )
      }

export default Home;
