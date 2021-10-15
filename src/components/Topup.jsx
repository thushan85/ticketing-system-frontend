
// import React from "react";

// const Register = () => {

//     return (

//         <div className="container-fluid">

//             <div className="d-sm-flex align-items-center justify-content-between mb-4">
//                 <h1 className="h3 mb-0 text-gray-800">Register</h1>
//             </div>

//             <div class="card-body">
//                 <form>
//                     <div class="row mb-3">
//                         <div class="col-md-6">
//                             <div class="form-floating mb-3 mb-md-0">
//                                 <label for="inputFirstName">First name</label>
//                                 <input class="form-control" id="firstName" type="text" placeholder="Enter your first name" />

//                             </div>
//                         </div>
//                         <div class="col-md-6">
//                             <div class="form-floating">
//                                 <label for="inputLastName">Last name</label>
//                                 <input class="form-control" id="lastName" type="text" placeholder="Enter your last name" />
//                             </div>
//                         </div>
//                     </div>

//                     <div class="form-floating mb-3">
//                         <label for="inputEmail">Mobile Number</label>
//                         <input class="form-control" id="mobileNo" type="number" placeholder="0777123123" />
//                     </div>

//                     <div class="form-floating mb-3">
//                         <label for="inputEmail">NIC/Passport No:</label>
//                         <input class="form-control" id="nic" type="text" placeholder="Your NIC or Passport Number" />
//                     </div>

//                     <div class="mt-4 mb-0">
//                         <div class="d-grid">
//                             <button class="btn btn-primary btn-block">Register</button>
//                         </div>
//                     </div>
//                 </form>
//             </div>

//             <div class="card-footer text-center py-3">
//                 <div class="small"><a href="/login">Have you already registered? Go to login</a></div>
//             </div>
//         </div>

//     )
// }

// export default Register;


import React, {Component} from "react";
import {VisaCreditCard as VisaCard} from "react-fancy-visa-card";


class Topup extends Component {

    pay = (e, data) => {
        console.log(data);

    };

    render() {
        return (
            <div className="Topup">
            
                <VisaCard onSubmit={this.pay} />

            </div>
        );
    }
}

export default Topup;