import React from 'react';
import "./NoMatch.css"
const Nomatch = () => {
    return (
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-details">
                            Sorry, an error has occured, Requested page not found!
                </div>
                    </div>       
                     </div>
                     </div>
    );
};

export default Nomatch;