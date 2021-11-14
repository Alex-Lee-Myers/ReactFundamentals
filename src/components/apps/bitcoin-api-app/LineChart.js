import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Chart from 'chart.js/auto';

const LineChart = (props) => {
    const [dates, setDates] = useState([]);
    const [payout, setPayout] = useState([]);

    useEffect(() => {
        const unsortedData = props.data;
        let dates = [];
        let payout = [];
        for (let item in unsortedData) {
            let bitcoinDates = moment(item).format('MMM DD');
            dates.push(bitcoinDates);
            payout.push(unsortedData[item]);
        }
        console.log(dates, payout);
        setDates(dates);
        setPayout(payout);
    }, [])

    useEffect(() => {
        let clearDiv = document.getElementById("myDiv")
        clearDiv.innerHTML = '';
        let myCanvas = document.createElement("canvas")
        clearDiv.appendChild(myCanvas)
        myCanvas.setAttribute('id','myChart')
        var chartContext = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(chartContext, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    data: payout,
                    backgroundColor: '#d9514e80',
                    borderColor: '#d9514e',
                    borderWidth: 2
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxis: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }, [dates])

    return (
        <div id='myDiv'></div>
    )
}

export default LineChart;