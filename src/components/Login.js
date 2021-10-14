import React from 'react'

const Login = () => {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Login</h1>
            </div>

            <div class="card-body">
                <form>
                    <div class="form-floating mb-3">
                        <label for="inputEmail">NIC/Passport No:</label>
                        <input class="form-control" id="nic" type="text" placeholder="Your NIC or Passport Number" />
                    </div>

                    <div class="mt-4 mb-0">
                        <div class="d-grid">
                            <button class="btn btn-primary btn-block">Login</button>
                        </div>
                    </div>
                </form>
            </div>

            <div class="card-footer text-center py-3">
                <div class="small"><a href="/register">If you aren't registered? Click here</a></div>
            </div>
        </div>
    )
}

export default Login
