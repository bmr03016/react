import React from "react";

function Home() {
    return (
        <style>
            .strip {
                display: flex;
                flex-direction: row;
            }

            .img-outer {
                margin: 10px;
                border: 1px solid black;
                border-radius: 10px;
                overflow: hidden;
            }
        </style>
        
        <div className="strip">
            <div class="img-outer"><img src={process.env.PUBLIC_URL + '/img/1.jpg'} width="150vw" height="240vw" /></div>
            <div class="img-outer"><img src={process.env.PUBLIC_URL + '/img/1.jpg'} width="180vw" height="270vw" /></div>
            <div class="img-outer"><img src={process.env.PUBLIC_URL + '/img/1.jpg'} width="200vw" height="300vw" /></div>
            <div class="img-outer"><img src={process.env.PUBLIC_URL + '/img/1.jpg'} width="230vw" height="330vw" /></div>
            <div class="img-outer"><img src={process.env.PUBLIC_URL + '/img/1.jpg'} width="200vw" height="270vw" /></div>
        </div>

    )
}

export default Home;

//import React, {Component} from "react";

//class Home extends Component {
//    render() {
//        return 
//    }
//}

//export default Home;