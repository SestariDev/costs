import Container from "../nav/Container";
import Intel from "../../img/intel.png";
import Locaweb from "../../img/locaweb-logo-0.png";
import Multilaser from "../../img/multi.png";
import Positivo from "../../img/positivo.png";


function Contact(props) {
    return(
        <Container>
            <p>
                Referencias
            </p>
            <div className="w-full flex flex-wrap bg-red-500">

                
                    <img src={Intel} alt="logo" height={"150px"} className="max-w-[300px]"/>
                
                    <img src={Multilaser} alt="logo"  height={"150px"} className="max-w-[300px]"/>
               
                    <img src={Positivo} alt="logo"  height={"150px"} className="max-w-[300px]"/>
                
                    <img src={Locaweb} alt="logo"  height={"150px"} className="max-w-[300px]"/>
                
                
            </div>

        </Container>
    )
}

export default Contact