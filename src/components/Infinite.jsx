import innovate from "./logos/innovate.png";
import renovate from "./logos/renovate.png";
import y from "./logos/y_combi.png";
import homebrew from "./logos/homebrew.png"
import openai from "./logos/openai.png";
import brex from "./logos/brex.png";
import airbnb from "./logos/airbnb.png";
import character from "./logos/character.png"

const Infinite = () => {
  return (
    <section className="bg-gray-100 py-16 ">
      <div className="container flex items-center gap-16 justify-between">
        <div className=" ">
          <h3 className="text-medium text-gray-500 ">
            Backed by world-class investors and advisors
          </h3>
        </div>

        <div className="whitespace-nowrap flex items-center slideParent overflow-hidden">
          <ul className="flex gap-5 items-center slide whitespace-nowrap">

            <div className="flex items-center gap-3 w-full">
              <span className="block w-10 rounded-full overflow-hidden"><img className="object-cover w-full" src={innovate} alt="innovation endevours" /></span>
              <li className="w-full block whitespace-nowrap font-semibold text-[0.9rem] text-[#333]">Innovation Endevours</li>
            </div>

            <div className="flex items-center gap-3 w-full">
              <span className="block w-10 rounded-full overflow-hidden"><img className="object-cover w-full" src={renovate} alt="Newfront Insurance" /></span>
              <li className="w-full block whitespace-nowrap font-semibold text-[0.9rem] text-[#333]">Newfront Insurance</li>
            </div>

            <div className="flex items-center gap-3 w-full">
              <span className="block w-10 rounded-full overflow-hidden"><img className="object-cover w-full" src={y} alt="Y Combinator" /></span>
              <li className="w-full block whitespace-nowrap font-semibold text-[0.9rem] text-[#333]">Y Combinator</li>
            </div>

            <div className="flex items-center gap-3 w-full">
              <span className="block w-10 rounded-full overflow-hidden"><img className="object-cover w-full" src={homebrew} alt="homebrew" /></span>
              <li className="w-full block whitespace-nowrap font-semibold text-[0.9rem] text-[#333]">Homebrew</li>
            </div>

            <div className="flex items-center gap-3 w-full">
              <span className="block w-10 rounded-full overflow-hidden"><img className="object-cover w-full" src={openai} alt="openai" /></span>
              <li className="w-full block whitespace-nowrap font-semibold text-[0.9rem] text-[#333]">Open AI</li>
            </div>

            <div className="flex items-center gap-3 w-full">
            <span className="block w-10 rounded-full overflow-hidden">< img className="object-cove w-fullr" src={character} alt="character" /></span>
            <li className="w-full block whitespace-nowrap font-semibold text-[0.9rem] text-[#333]">Character</li>
            </div>
            
            <div className="flex items-center gap-3 w-full">
              <span className="block w-10 rounded-full overflow-hidden"><img className="object-cover w-full" src={brex} alt="brex" /></span>
              <li className="w-full block whitespace-nowrap font-semibold text-[0.9rem] text-[#333]">Brex</li>
            </div>

            <div className="flex items-center gap-3 w-full">
              <span className="block w-10 rounded-full overflow-hidden"><img className="object-cover w-full" src={airbnb} alt="airbnb" /></span>
              <li className="w-full block whitespace-nowrap font-semibold text-[0.9rem] text-[#333]">Airbnb</li>

            </div>
          </ul>

          <ul className="flex gap-5 items-center slide">

            <div className="flex items-center gap-3 w-full">
              <span className="block w-10 rounded-full overflow-hidden"><img className="object-cover w-full" src={innovate} alt="innovation endevours" /></span>
              <li className="w-full block whitespace-nowrap font-semibold text-[0.9rem] text-[#333]">Innovation Endevours</li>
            </div>

            <div className="flex items-center gap-3 w-full">
              <span className="block w-10 rounded-full overflow-hidden"><img className="object-cover w-full" src={renovate} alt="Newfront Insurance" /></span>
              <li className="w-full block whitespace-nowrap font-semibold text-[0.9rem] text-[#333]">Newfront Insurance</li>
            </div>

            <div className="flex items-center gap-3 w-full">
              <span className="block w-10 rounded-full overflow-hidden"><img className="object-cover w-full" src={y} alt="Y Combinator" /></span>
              <li className="w-full block whitespace-nowrap font-semibold text-[0.9rem] text-[#333]">Y Combinator</li>
            </div>

            <div className="flex items-center gap-3 w-full">
              <span className="block w-10 rounded-full overflow-hidden"><img className="object-cover w-full" src={homebrew} alt="homebrew" /></span>
              <li className="w-full block whitespace-nowrap font-semibold text-[0.9rem] text-[#333]">Homebrew</li>
            </div>

            <div className="flex items-center gap-3 w-full">
              <span className="block w-10 rounded-full overflow-hidden"><img className="object-cover w-full" src={openai} alt="openai" /></span>
              <li className="w-full block whitespace-nowrap font-semibold text-[0.9rem] text-[#333]">Open AI</li>
            </div>

            <div className="flex items-center gap-3 w-full">
            <span className="block w-10 rounded-full overflow-hidden">< img className="object-cove w-fullr" src={character} alt="character" /></span>
            <li className="w-full block whitespace-nowrap font-semibold text-[0.9rem] text-[#333]">Character</li>
            </div>
            
            <div className="flex items-center gap-3 w-full">
              <span className="block w-10 rounded-full overflow-hidden"><img className="object-cover w-full" src={brex} alt="brex" /></span>
              <li className="w-full block whitespace-nowrap font-semibold text-[0.9rem] text-[#333]">Brex</li>
            </div>

            <div className="flex items-center gap-3 w-full">
              <span className="block w-10 rounded-full overflow-hidden"><img className="object-cover w-full" src={airbnb} alt="airbnb" /></span>
              <li className="w-full block whitespace-nowrap font-semibold text-[0.9rem] text-[#333]">Airbnb</li>

            </div>
          </ul>
        </div>
      </div>
        
    </section>
  )
}

export default Infinite
