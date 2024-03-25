'use client'

import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'next/navigation';
import { fetchParlimentData, fetchParlimentDataByState } from '@/lib/data';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import itemseries from 'highcharts/modules/item-series';
import exporting from 'highcharts/modules/exporting';

itemseries(Highcharts);
exporting(Highcharts);

const ParlimentMap = ({level}) => {

    const chartRef = useRef(null);
    const params = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        fetchData(level)
    }, []);

    const fetchData = async (level) => {
        let data = null;
        switch(level){
            case 'country':
                data = await fetchParlimentData(params);
                setData(data);
                break;
            case 'state':
                data = await fetchParlimentDataByState(params);
                setData(data);
                break;
            case 'constituency':
                data = await fetchParlimentDataByStateConst(params);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        if (chartRef && chartRef.current) {
      const chart = chartRef.current.chart;

      if (chart) {
        chart.update({
          series: [{
            name: '',
            keys: ['name', 'y', 'color', 'label'],
            data: data,
            dataLabels: {
                enabled: true,
                format: '{point.label}',
                style: {
                    textOutline: '9px contrast'
                }
            },
            // Circular options
            center: ['50%', '88%'],
            size: '170%',
            startAngle: -100,
            endAngle: 100
            }]
        });
      }
    }

    }, [data]);

    const options = {
        chart: {
            style: {
                // fontFamily: 'monospace',
                color: "#FFFFFF"
            },
            title: {
                style: {
                    color: '#FFFFFF',
                    font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
                }
            },
            type: 'item',
            spacing: [50, 50, 50, 50],
        },
        title: {
            text: `LOK SABHA SEATS - ${level === 'country' ? params.country.toUpperCase() : params.state.toUpperCase()} - 2019`,
            style: {
            fontSize: '24px',
         }
        },
        legend: {
            labelFormat: '{name} <span style="opacity: 0.4">{y}</span>',
        },
        subtitle: {
            text: 'Myneta.info. Source: <a href="https://myneta.info" target="_blank">My neta info</a> ',
        },
        series: [{
            name: '',
            keys: ['name', 'y', 'color', 'label'],
            data: data || [],
            dataLabels: {
                enabled: true,
                format: '{point.label}',
                style: {
                    textOutline: '12px contrast'
                }
            },
            // Circular options
            center: ['50%', '80%'],
            size: '170%',
            startAngle: -100,
            endAngle: 100
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 400
                },
                chartOptions: {
                    series: [{
                        keys: ['name', 'y', 'color'],
                        dataLabels: {
                            distance: -30
                        }
                    }]
                }
            }]
        }
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

export default ParlimentMap