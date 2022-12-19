/* I was asked to create a timer (that starts from 0s resets to 0 after 59 and sets the min to 1 .. and so on.) in React in one of my interview which I failed to crack. */


/* index.html */

<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
</body>





/* App.js */

import React, { useState, useEffect } from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const logoSrc =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png";

function App() {
    const [hr, setHr] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    useEffect(() => {
        if (sec === 59) {
            setSec(0);
            setMin(val => val+1);
        }
        
        if(min === 59){
            setHr(val => val+1);
            setMin(0);
        }

        let int = setInterval(() => {
           setSec(val => val+1);
        }, 1000);
        
        
        /* The key here is to add the clean-up fn with interval clearance. I was kind of checked here by the interviwer and in panic I backed off.*/
        return () => {
            clearInterval(int)
        }
    }, [sec]);

    return (
        <div className="App">
            <h1>Hello CodePen</h1>
            <h2>
                {hr} : {min} : {sec}
            </h2>
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById("root"));


/* Interviews are as much about holding your nerves as they are about knowing things. Do try if you feel what you are doing is correct. Wishing you good luck. */
