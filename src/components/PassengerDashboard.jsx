
import React from 'react'


const PassengerDashboard = () => {

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">My Dashboard</h1>
            </div>

            <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                    <img src="./assets/img/qrcode.png" width="100%"/>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Your Credit Balance
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        200.20 LKR
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-check-square fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Your Last Journey
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        Kandy to Colombo <br/>
                                        Fare: 430 LKR
                                    </div><br/>
                                    <div className="h6 mb-0 font-weight-bold text-gray-800">
                                        4 Hour and 30 mins<br/>
                                        120 Km
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-bus fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                    <button className="btn btn-success btn-block">View All Journys</button>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                    <button className="btn btn-primary btn-block">Top up</button>
                </div>
            </div>

        </div>
    )
}

export default PassengerDashboard;