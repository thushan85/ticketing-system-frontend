import React from 'react';

const JourneyList = () => {

    const getJourneyItem = () => {
        return (
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
                                        Started at: mm/dd/yyyy HH:mm<br/>
                                        4 Hour and 30 mins<br/>
                                        120 Km
                                    </div><br/>
                                    <div className="mb-0 font-weight-bold text-gray-800">
                                        <button className="btn btn-info">View on Map</button>
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
        )
    }

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Journey List</h1>
            </div>
            {
                (() => {
                    let rows = [];
                    for (let i=0; i<5; i++) {
                        rows.push(getJourneyItem());
                    }
                    return rows;
                })()
            }
        </div>
    )
}

export default JourneyList;