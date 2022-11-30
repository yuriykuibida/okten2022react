import {simpsons} from "./data";
import Simpson from "./simpson";


function Simpsons(){
    return(
        <div>
            {
                simpsons.map((simpson, index) => <Simpson key={index} simpson={simpson} />)
            }
        </div>
    );
}

export default Simpsons;
