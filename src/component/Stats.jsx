import React from 'react';
import '../css/stats.scss'
import { Bar } from 'react-chartjs-2';

function Stats(props) {
    return (
        <div>
            <div className="statsWrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="h2">YOUR <span>STATISTICS</span></div>
                        </div>
                        <div className="col-lg-12">
                            <Bar className={"w-100"} options={options} data={data} />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;