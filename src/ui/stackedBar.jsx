'use client'

import React, { useEffect, useState, useRef } from 'react'
import { fetchElectedByState, fetchElectedAllianceCountByState } from '@/lib/data'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import exporting from 'highcharts/modules/exporting';

exporting(Highcharts);

function StackedBar() {

    const chartRef = useRef(null);
    const [allianceCount, setAllianceCount] = useState([]);
    const [states, setStates] = useState([]);

    useEffect(() => {
        fetchElectedCount()
    }, []);

    const fetchElectedCount = async () => {
        let data = null;
        let statesData = null;
        data = await fetchElectedAllianceCountByState();
        statesData = await fetchElectedByState();
        const statesList = statesData.map(state => state.name);
        setStates(statesList);
        setAllianceCount(data);
    }

    useEffect(() => {
        if (chartRef && chartRef.current) {
            const chart = chartRef.current.chart;
            if (chart) {
            chart.update({
            series: allianceCount
            });
            }
      }

    }, [allianceCount]);

    const options = {
    chart: {
        type: 'column',
        spacing: [50, 50, 50, 50],
    },
    title: {
        text: 'Elected Represtentives in Alliance By State',
        align: 'center'
    },
    xAxis: {
        categories: states
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Count of Seats'
        },
        stackLabels: {
            enabled: true
        }
    },
    legend: {
        align: 'left',
        x: -40,
        verticalAlign: 'top',
        y: -40,
        floating: true,
        backgroundColor: 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.totla}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: allianceCount || []
};

  return (
    <div className='w-full h-[400px] flex flex-col items-start justify-start px-4'>
        <div className='w-full'>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                ref={chartRef}
            />
        </div>
    </div>
  )
}

export default StackedBar