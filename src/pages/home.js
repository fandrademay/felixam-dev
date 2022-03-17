import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import * as React from 'react';
import '../App.css';

function home() {
    return (
        <div className="container">
            <div className="pageHead"><h1> Hi There! </h1></div>
            <div className="pageBody">
                <p> I'm Felix, a second year student of Computer Science and Artificial Intelligence at Aberystwyth University in Wales.</p>
                <p>I am enthusiastic about working alongside others to solve problems and offer solutions. I am familiar with working alongside customers who are unfamiliar with technology as well as independent developers. I have experience using Java, Python, C and C++ and have dabbled in other languages include Prolog and Haskell. </p>
                <p>I am a big fan of cycling too. In the summer of 2021 I spent 2 weeks cycling over 750km through Brittany and Normandy in norhtern France, taking as many back roads and talking with whoever could understand my limited french. I always like to learn about how we interact with and understand the world around us, whether that's through languages, computers, religions or societies, I think they're all fascinating. In my free time I also enjoy finding new things to cook, or new recipes and techniques to try out. I love to experiment with recipes by using different ingrideients and methods to see how they compare.</p>
                <p>I am currently looking for a year long industrial placement to prepare me for a future in the tech sector.</p>
                <p>Go ahead and check out the CV page, and if you think I'd be a good fit at your company don't hesitate to contact me through the the information on the contact page or the provided form!</p>
            </div>
        </div>
    );
}

export default home;