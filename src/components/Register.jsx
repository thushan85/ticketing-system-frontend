
import React, {useState} from "react";
import { useHistory } from "react-router-dom";

import User from "../api/User";

const Register = () => {

    const [formData, setFormData] = useState({});
    const history = useHistory();

    const handleChangeFiled = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(values => ({...values, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        User.register(formData).then((response) => {

            console.log(response)
            history.push('/my-dashboard');

        }).catch(err => {
            console.log(err);
            alert("Error in register")
        })

    }

    return (

        <div className="container-fluid">

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Register</h1>
            </div>

            <div class="card-body">
                <form onSubmit={handleSubmit}>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <div class="form-floating mb-3 mb-md-0">
                                <label for="inputFirstName">First name</label>
                                <input class="form-control" name="first_name" type="text" placeholder="Enter your first name" required onChange={handleChangeFiled} />

                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating">
                                <label for="inputLastName">Last name</label>
                                <input class="form-control" name="last_name" type="text" placeholder="Enter your last name" required onChange={handleChangeFiled}  />
                            </div>
                        </div>
                    </div>

                    <div class="form-floating mb-3">
                        <label for="inputEmail">Email</label>
                        <input class="form-control" name="email" type="email" placeholder="thushan@example.com" required required onChange={handleChangeFiled}/>
                    </div>

                    <div class="form-floating mb-3">
                        <label for="inputEmail">Mobile Number</label>
                        <input class="form-control" name="mobile_number" type="number" placeholder="0777123123" required required onChange={handleChangeFiled}/>
                    </div>

                    <div class="form-floating mb-3">
                        <label for="inputEmail">NIC/Passport No:</label>
                        <input class="form-control" name="nic" type="text" placeholder="Your NIC or Passport Number" required required onChange={handleChangeFiled}/>
                    </div>

                    <div class="mt-4 mb-0">
                        <div class="d-grid">
                            <button type="submit" class="btn btn-primary btn-block">Register</button>
                        </div>
                    </div>
                </form>
            </div>

            <div class="card-footer text-center py-3">
                <div class="small"><a href="/login">Have you already registered? Go to login</a></div>
            </div>
        </div>

    )
}

export default Register;


