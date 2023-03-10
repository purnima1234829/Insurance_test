import React from 'react';
import {Link} from 'react-router-dom';

function App(){
    return(
        <div>
            <ul className='nav-ul'>
            <img src='https://thumbs.dreamstime.com/z/car-insurance-logo-symbol-icon-template-your-store-library-application-whatever-your-needs-car-insurance-logo-symbol-199115922.jpg' alt='img'/>
                <li><Link to='/mainpage'>Home</Link></li> 
                <li><Link to='/add'>Insurance Form</Link></li>
                <li><Link to='/update/:id'>UpdateProduct</Link></li>
                <li><Link to='/'>Total List</Link></li>
                
            </ul>
        </div>
    )
}
export default App;