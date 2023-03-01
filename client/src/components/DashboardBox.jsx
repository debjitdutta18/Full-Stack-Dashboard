import React, { useState, useEffect } from 'react';
import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveLine } from "@nivo/line";
import { tokens } from "../theme";
import { linearGradientDef } from '@nivo/core'

const BarChart7 = () =>{

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState([]); 
  useEffect(() => {
    fetch('https://13.127.29.150/bar7')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  if (!data) {
    return <p>There may be some issues due to which chart is not showing :0 </p>;
  } 

  return(
    <>
      <ResponsiveBar
        data={data}
        theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[400],
            },
          },
          legend: {
            text: {
              fill: colors.grey[400],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[400],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[400],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[400],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
            borderRadius:'7px'
          },
        },
        dots: {
           text: {
              fill: colors.grey[400],
          },
       },
      }}
        keys={[
          "totalrelevance",
          ]}
        enableGridX={false}
        enableGridY={true}
        indexBy="end_year"
        margin={{ top: 35, right: 30, bottom: 60, left: 50 }}
        borderRadius={3}
        padding={0.4}
        innerPadding={0}
        maxValue={9}
        groupMode='grouped'
        enableLabel={false}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={['orange']}
        defs={[
            linearGradientDef('gradientA1', [
                { offset: 0, color: 'inherit' },
                { offset: 100, color: 'inherit', opacity: 0 },
            ]),
            linearGradientDef('gradientB1', [
                { offset: 0, color: '#000' },
                { offset: 100, color: 'inherit' },
            ],
            {
                gradientTransform: 'rotate(90 0.5 0.5)'
            }),
            {
                id: 'gradientC1',
                type: 'linearGradient',
                colors: [
                    { offset: 0, color: '##ab7efd' },
                    { offset: 100, color: 'orange' },
                ],
            },
        ]}
        fill={[
           
            { match: { id: 'react' }, id: 'gradientA1' },
            { match: d => d.id === 'vue', id: 'gradientB1' },
            { match: '*', id: 'gradientC1' },
        ]}
        axisTop={{tickSize: 0,
        tickPadding: 0,
        tickRotation: 0,
        format: () => '',}}
        axisRight={{tickSize: 0,
        tickPadding: 0,
        tickRotation: 0,
        format: () => '',}}
        axisBottom={{
           tickSize: 7,
        tickPadding: 10,
        tickRotation: 0,
        }}
        axisLeft={{tickSize: 0,
        tickPadding: 10,
        tickRotation: 0,
        // format: () => '',
        }}
        motionConfig="wobbly"
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
    </>
  )
}
const BarChart8 = () =>{

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState([]); //For country/sector
  useEffect(() => {
    fetch('https://13.127.29.150/bar8')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

   
  const filteredData = data.filter(item => item.sector !== null);
  const sectorAbbreviations = {
  'Aerospace & defence': 'Aero',
  'Information Technology': 'IT',
  Government: 'Gov',
  'Financial services': 'Fin',
  Retail: 'Ret',
  };

  const convertedData = filteredData.map((item) => ({
    ...item,
    sector: sectorAbbreviations[item.sector] || item.sector,
  }));


  if (!convertedData) {
    return <p>There may be some issues due to which chart is not showing :0 </p>;
  } 
  
  return(
    <>
      <ResponsiveBar
        data={convertedData}
        theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[400],
            },
          },
          legend: {
            text: {
              fill: "orange",
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[400],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[400],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[400],
          },
        },
        enableGridY:{
          domain: {
            line: {
              stroke: colors.grey[400],
            },
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
            borderRadius:'7px'
          },
        },
        dots: {
           text: {
              fill: colors.grey[400],
          },
       },
      }}
        keys={[
          "totalrelevance",
          "totallikelihood",
          "totalintensity",
          ]}
        enableGridX={false}
        enableGridY={true}
        indexBy="sector"
        margin={{ top: 20, right: 40, bottom: 60, left: 40 }}
        borderRadius={4}
        padding={0.2}
        enableLabel={false}
        innerPadding={2}
        groupMode="grouped"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        // colors={["#ab7efd","#8965ca","#dcc9fe","#c7a8fd","#674c98"]}
        colors={["#29cdf2","#1d90a9","#156779","#0c3d49"]}
        defs={[
            linearGradientDef('gradientA2', [
                { offset: 0, color: 'inherit' },
                { offset: 100, color: 'inherit', opacity: 0 },
            ]),
            linearGradientDef('gradientB2', [
                { offset: 0, color: '#000' },
                { offset: 100, color: 'inherit' },
            ],
            {
                gradientTransform: 'rotate(90 0.5 0.5)'
            }),
            {
                id: 'gradientC2',
                type: 'linearGradient',
                colors: [
                    { offset: 0, color: '##01817360' },
                    { offset: 100, color: '#67d4c8' },
                ],
            },
        ]}
        fill={[
            { match: { id: 'react' }, id: 'gradientA2' },
            { match: d => d.id === 'vue', id: 'gradientB2' },

            { match: '*', id: 'gradientC2' },
        ]}
        axisTop={{tickSize: 0,
        tickPadding: 0,
        tickRotation: 0,
        format: () => '',}}
        axisRight={{tickSize: 0,
        tickPadding: 0,
        tickRotation: 0,
        format: () => '',}}
        axisBottom={{
           tickSize: 7,
        tickPadding: 10,
        tickRotation:0,
        }}
        axisLeft={{tickSize: 0,
        tickPadding: 10,
        tickRotation: 0,
        // format: () => '',
        }}
        motionConfig="wobbly"
    />
    </>
  )
}
const Line10 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

 const [data, setData] = useState([]); //For country/sector
  useEffect(() => {
    fetch('https://13.127.29.150/line10')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <ResponsiveLine
        data={data}
        theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
            borderRadius:'7px'
          },
        },
        dots: {
           text: {
              fill: colors.grey[100],
          },
       },
      }}
        margin={{ top: 60, right: 0, bottom: 0, left: 0 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: '0',
            max: '7',
            stacked: true,
            reverse: false
        }}
        defs={[
            linearGradientDef('gradientA4', [
                { offset: 0, color: 'inherit' },
                { offset: 100, color: 'inherit', opacity: 0 },
            ]),
            linearGradientDef('gradientB4', [
                { offset: 0, color: '#000' },
                { offset: 100, color: 'inherit' },
            ],
            {
                gradientTransform: 'rotate(90 0.5 0.5)'
            }),
            {
                id: 'gradientC4',
                type: 'linearGradient',
                colors: [
                    { offset: 0, color: 'orange' },
                    { offset: 80, color: '#f7f5bc' },
                ],
            },
        ]}
        fill={[
            { match: { id: 'react' }, id: 'gradientA4' },
            { match: d => d.id === 'vue', id: 'gradientB4' },

            { match: '*', id: 'gradientC4' },
        ]}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        enableLabel={false}
        enablePoints={false}
        axisBottom={null}
        axisLeft={null}
        colors={["#dcc9fe","#c7a8fd","#8965ca","#ab7efd","#674c98"]}
        pointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={0}
        enablePointLabel={true}
        pointLabelYOffset={-20}
        lineWidth={0}
        areaOpacity={1}
        enableArea={true}
        enableGridX={false}
        enableGridY={false}
        areaBaselineValue={1}
        useMesh={false}
        motionConfig="wobbly"
    />
  )
}
const Pie = () =>{
   const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const [data, setData] = useState([]); //For country/sector
  useEffect(() => {
    fetch('https://13.127.29.150/pie')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  const sectorAbbreviations = {
  'Economic': 'Eco',
  'Industries': 'Indus',
  'Political': 'Pol',
  'Social': 'Soc',
  "Organization":'Org',
   "Environmental":'Env'
};


const modifiedData = data.map((item) => {
  const newItem = { ...item };
  newItem.id = sectorAbbreviations[item.id] || item.id;
  return newItem;
});



  if (!modifiedData) {
      return <p>There may be some issues due to which chart is not showing :0 </p>;
    } 
  return(
    <>
    
      <ResponsivePie
      data={modifiedData }
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
            borderRadius:'7px'
          },
        },
        dots: {
           text: {
              fill: colors.grey[100],
          },
       },
      }}
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
     
      arcLinkLabelsDiagonalLength={15}
      arcLinkLabelsStraightLength={10}
      enableArcLabels={false}
      enableArcLinkLabels={true}
      innerRadius={0.45}
      padAngle={1}
      cornerRadius={4}
      activeInnerRadiusOffset={14}
      activeOuterRadiusOffset={8}
      borderWidth={0}
      arcLinkLabelsSkipAngle={0}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={2}
      colors={["#dcc9fe","#c7a8fd","#ab7efd","#8965ca","#674c98"]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      
      arcLabelsTextColor={
        null
      }
       motionConfig="wobbly"
      transitionMode="pushIn"
    />
    
      
     </>
  )
}
const Line5 = () =>{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState([]); //For country/sector
  useEffect(() => {
    fetch('https://13.127.29.150/line5')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

 
  if (!data) {
  return <p>There may be some issues due to which chart is not showing :0 </p>;
  } 
  return(
    <>
       <ResponsiveLine
        data={data}
        theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
            borderRadius:'7px'
          },
        },
        dots: {
           text: {
              fill: colors.grey[100],
          },
       },
      }}
        margin={{ top: 140, right: -90, bottom: 0, left: -90 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: '1',
            max: '3',
            stacked: true,
            reverse: false
        }}
        defs={[
            linearGradientDef('gradientA', [
                { offset: 0, color: 'inherit' },
                { offset: 100, color: 'inherit', opacity: 0 },
            ]),
            linearGradientDef('gradientB', [
                { offset: 0, color: '#000' },
                { offset: 100, color: 'inherit' },
            ],
            {
                gradientTransform: 'rotate(90 0.5 0.5)'
            }),
            {
                id: 'gradientC',
                type: 'linearGradient',
                colors: [
                    { offset: 0, color: '##ab7efd' },
                    { offset: 100, color: '#ab7efd' },
                ],
            },
        ]}
        fill={[
            { match: { id: 'react' }, id: 'gradientA' },
            { match: d => d.id === 'vue', id: 'gradientB' },

            { match: '*', id: 'gradientC' },
        ]}
        yFormat=" >-.2f"
        // curve="linear"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        // axisBottom={null}
        // axisLeft={null}
        enableLabel={true}
        enablePoints={true}
        axisBottom={null}
        axisLeft={null}
        colors={["#ab7efd"]}
        pointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={0}
        pointBorderColor={{ from: 'serieColor' }}
        enablePointLabel={false}
        pointLabelYOffset={-20}
        lineWidth={0}
        areaOpacity={1}
        enableArea={true}
        enableGridX={false}
        enableGridY={false}
        areaBaselineValue={1}
        useMesh={false}
        // legends={[
        //     {
        //         anchor: 'bottom-right',
        //         direction: 'column',
        //         justify: false,
        //         translateX: 100,
        //         translateY: 0,
        //         itemsSpacing: 0,
        //         itemDirection: 'left-to-right',
        //         itemWidth: 80,
        //         itemHeight: 20,
        //         itemOpacity: 0.75,
        //         symbolSize: 12,
        //         symbolShape: 'circle',
        //         symbolBorderColor: 'rgba(0, 0, 0, .5)',
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemBackground: 'rgba(0, 0, 0, .03)',
        //                     itemOpacity: 1
        //                 }
        //             }
        //         ]
        //     }
        // ]}
        motionConfig="wobbly"
    />
    </>
  )
}
const BarChart9 = () =>{

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState([]); //For country/sector
  useEffect(() => {
    fetch('https://13.127.29.150/bar7')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);



  if (!data) {
    return <p>There may be some issues due to which chart is not showing :0 </p>;
  } 
  

  return(
    <>
      <ResponsiveBar
        data={data}
        theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.primary[400],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
            borderRadius:'7px'
          },
        },
        dots: {
           text: {
              fill: colors.grey[100],
          },
       },
      }}
        keys={["totalintensity",
          "totalimpact",
          "totalrelevance",
          "totallikelihood"]}
        enableGridX={false}
        enableGridY={false}
        layout={'horizontal'}
        indexBy="end_year"
        margin={{ top: 50, right: 130, bottom: 60, left: 50 }}
        borderRadius={3}
        padding={0.5}
        innerPadding={2}
        maxValue={40}
        // tooltip={CustomTooltip}
        enableLabel={false}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={["#ab7efd","#dcc9fe","#c7a8fd","#8965ca","#674c98"]}
        defs={[
            {
                id: '#dcc9fe',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: '#c7a8fd',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'opacity',
                    '0'
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        // axisLeft={null}
        // axisBottom={{
        //     tickSize: 0,
        //     tickPadding: 10,
        //     tickRotation: 0,
        //     // legend: isDashboard ? undefined : "country",
        //     legendPosition: 'middle',
        //     legendOffset: 32
        // }}
        axisLeft={{
            tickSize: 0,
            tickPadding: 10,
            tickRotation: 0,
            // legend: isDashboard ? undefined : "country",
            legendPosition: 'middle',
            legendOffset: 32
        }}
        labelSkipWidth={13}
        labelSkipHeight={14}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        // legends={[
        //     {
        //         dataFrom: 'keys',
        //         anchor: 'bottom-right',
        //         direction: 'column',
        //         justify: false,
        //         translateX: 120,
        //         translateY: 0,
        //         itemsSpacing: 2,
        //         itemWidth: 100,
        //         itemHeight: 20,
        //         itemDirection: 'left-to-right',
        //         itemOpacity: 0.85,
        //         symbolSize: 20,
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemOpacity: 1
        //                 }
        //             }
        //         ]
        //     }
        // ]}

        motionConfig="wobbly"
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
    </>
  )
}
const Line6 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

   const [data, setData] = useState([]); //For country/sector
  useEffect(() => {
    fetch('https://13.127.29.150/line6')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <ResponsiveLine
        data={data}
        theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
            borderRadius:'7px'
          },
        },
        dots: {
           text: {
              fill: colors.grey[100],
          },
       },
      }}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: '20',
            max: '70',
            stacked: true,
            reverse: false
        }}
        defs={[
            linearGradientDef('gradientA6', [
                { offset: 0, color: 'inherit' },
                { offset: 100, color: 'inherit', opacity: 0},
            ]),
            linearGradientDef('gradientB6', [
                { offset: 0, color: '#000' },
                { offset: 100, color: 'inherit' },
            ],
            {
                gradientTransform: 'rotate(90 0.5 0.5)'
            }),
            {
                id: 'gradientC6',
                type: 'linearGradient',
                colors: [
                    { offset: 0, color: '#60b586' },
                    // { offset: 0, color: '#FFA500' },
                    { offset: 100, color: '#fff' },
                ],
            },
        ]}
        fill={[
            { match: { id: 'react' }, id: 'gradientA6' },
            { match: d => d.id === 'vue', id: 'gradientB6' },

            { match: '*', id: 'gradientC6' },
        ]}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        enableLabel={true}
        enablePoints={true}
        axisBottom={null}
        axisLeft={null}
        colors={["#29c66f"]}
        // colors={["#F28C28"]}
        // colors={["#dcc9fe","#c7a8fd","#8965ca","#ab7efd","#674c98"]}
        pointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={0}
        pointBorderColor={{ from: 'serieColor' }}
        enablePointLabel={false}
        pointLabelYOffset={-20}
        lineWidth={2}
        areaOpacity={0.5}
        enableArea={true}
        enableGridX={false}
        enableGridY={false}
        areaBaselineValue={1}
        useMesh={false}
    />
  )
}
const Line7 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

   const [data, setData] = useState([]); //For country/sector
  useEffect(() => {
    fetch('https://13.127.29.150/line7')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <ResponsiveLine
        data={data}
        theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
            borderRadius:'7px'
          },
        },
        dots: {
           text: {
              fill: colors.grey[100],
          },
       },
      }}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: '3',
            max: '19',
            stacked: true,
            reverse: false
        }}
        defs={[
            linearGradientDef('gradientA7', [
                { offset: 0, color: 'inherit' },
                { offset: 100, color: 'inherit', opacity: 0},
            ]),
            linearGradientDef('gradientB7', [
                { offset: 0, color: '#000' },
                { offset: 100, color: 'inherit' },
            ],
            {
                gradientTransform: 'rotate(90 0.5 0.5)'
            }),
            {
                id: 'gradientC7',
                type: 'linearGradient',
                colors: [
                    { offset: 0, color: '#ffb733' },
                    { offset: 100, color: '#fff' },
                ],
            },
        ]}
        fill={[
            { match: { id: 'react' }, id: 'gradientA7' },
            { match: d => d.id === 'vue', id: 'gradientB7' },

            { match: '*', id: 'gradientC7' },
        ]}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        enableLabel={true}
        enablePoints={true}
        axisBottom={null}
        axisLeft={null}
        colors={["#ffa500"]}
        // colors={["#dcc9fe","#c7a8fd","#8965ca","#ab7efd","#674c98"]}
        pointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={0}
        pointBorderColor={{ from: 'serieColor' }}
        enablePointLabel={false}
        pointLabelYOffset={-20}
        lineWidth={2}
        areaOpacity={0.5}
        enableArea={true}
        enableGridX={false}
        enableGridY={false}
        areaBaselineValue={1}
        useMesh={false}
    />
  )
}
const Line8 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

   const [data, setData] = useState([]); //For country/sector
  useEffect(() => {
    fetch('https://13.127.29.150/line8')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);


  
  return (
    <ResponsiveLine
        data={data}
        theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
            borderRadius:'7px'
          },
        },
        dots: {
           text: {
              fill: colors.grey[100],
          },
       },
      }}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: '4',
            max: '19',
            stacked: true,
            reverse: false
        }}
        defs={[
            linearGradientDef('gradientA8', [
                { offset: 0, color: 'inherit' },
                { offset: 100, color: 'inherit', opacity: 0},
            ]),
            linearGradientDef('gradientB8', [
                { offset: 0, color: '#000' },
                { offset: 100, color: 'inherit' },
            ],
            {
                gradientTransform: 'rotate(90 0.5 0.5)'
            }),
            {
                id: 'gradientC8',
                type: 'linearGradient',
                colors: [
                    
                    { offset: 0, color: '#9461f2' },
                    { offset: 100, color: '#fff' },
                ],
            },
        ]}
        fill={[
            { match: { id: 'react' }, id: 'gradientA8' },
            { match: d => d.id === 'vue', id: 'gradientB8' },
            { match: '*', id: 'gradientC8' },
        ]}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        enableLabel={true}
        enablePoints={true}
        axisBottom={null}
        axisLeft={null}
        colors={["#884ff0"]}
        pointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={0}
        pointBorderColor={{ from: 'serieColor' }}
        enablePointLabel={false}
        pointLabelYOffset={-20}
        lineWidth={2}
        areaOpacity={0.5}
        enableArea={true}
        enableGridX={false}
        enableGridY={false}
        areaBaselineValue={1}
        useMesh={false}
    />
  )
}
const Line9 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

   const [data, setData] = useState([]); //For country/sector
  useEffect(() => {
    fetch('https://13.127.29.150/line9')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);


  return (
    <ResponsiveLine
        data={data}
        theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
            borderRadius:'7px'
          },
        },
        dots: {
           text: {
              fill: colors.grey[100],
          },
       },
      }}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: '3',
            max: '10',
            stacked: true,
            reverse: false
        }}
        defs={[
            linearGradientDef('gradientA9', [
                { offset: 0, color: 'inherit' },
                { offset: 100, color: 'inherit', opacity: 0},
            ]),
            linearGradientDef('gradientB9', [
                { offset: 0, color: '#000' },
                { offset: 100, color: 'inherit' },
            ],
            {
                gradientTransform: 'rotate(90 0.5 0.5)'
            }),
            {
                id: 'gradientC9',
                type: 'linearGradient',
                colors: [
                    
                    { offset: 0, color: '#00cfe7' },
                    // { offset: 0, color: '#ea5455' },
                    { offset: 100, color: '#fff' },
                ],
            },
        ]}
        fill={[
            { match: { id: 'react' }, id: 'gradientA9' },
            { match: d => d.id === 'vue', id: 'gradientB9' },

            { match: '*', id: 'gradientC9' },
        ]}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        enableLabel={true}
        enablePoints={true}
        axisBottom={null}
        axisLeft={null}
        colors={["#00cfe7"]}
        pointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={0}
        pointBorderColor={{ from: 'serieColor' }}
        enablePointLabel={false}
        pointLabelYOffset={-20}
        lineWidth={2}
        areaOpacity={0.5}
        enableArea={true}
        enableGridX={false}
        enableGridY={false}
        areaBaselineValue={1}
        useMesh={false}
    />
  )
}


export{
  BarChart7,
  BarChart8,
  Line10,
  Pie,
  Line5,
  BarChart9,
  Line6,
  Line7,
  Line8,
  Line9
};
