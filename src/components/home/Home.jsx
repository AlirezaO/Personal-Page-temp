import { React } from "react";
// import CustomComponent from "../container/container";
import CustomComponent2 from "../container2/container";
import Contact from "../contact/Contact";
import CvTabs from "../cvTabs/CvTabsComponent";


const Home =() =>{

    return(
        <div style={{height:'auto',overflow:"scroll"}}>
            
            <Contact/>
            <div style={{width:'95%',display:"flex"}}>
                <div style={{width:'50%'}}>
                    <CvTabs/>
                </div>
                <div style={{ width: '10%',}}>
                    <CustomComponent2/>
                </div>
            </div>
        </div>
    )
}

export default Home;