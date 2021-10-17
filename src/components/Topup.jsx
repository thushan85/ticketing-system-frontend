
import React from "react";

const Topup = () => {

    return (

        <div className="container-fluid">

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Payment</h1>
            </div>

            <div class="card-body">
                <form>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <div class="form-floating mb-3 mb-md-0">
                                <label for="inputFirstName">Enter Card Number</label>
                                <input class="form-control" id="cardNumber" type="text" placeholder="Card Number" />

                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating mb-3">
                                <label for="inputAmount">Enter Amount</label>
                                <input class="form-control" id="amount" type="text" placeholder="Amount" />
                            </div>
                        </div>
                    </div>

                  

                  

                    <div class="mt-4 mb-0">
                        <div class="d-grid">
                            <button class="btn btn-primary btn-block">Pay Now</button>
                        </div>
                    </div>
                </form>
            </div>

            <div class="card-footer text-center py-3">
                <div class="small"><a href="/help">Need a help</a></div>
            </div>
        </div>

    )
}

export default Topup;

