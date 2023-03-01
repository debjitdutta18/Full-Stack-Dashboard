import { useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../data/mockGeoFeatures";
import { tokens } from "../theme";
import  {countryToAlpha3 } from "country-to-iso";
import React, { useState, useEffect } from 'react';

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://13.127.29.150/geo')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

for (let i = 0; i < data.length; i++) {
    let countryName = data[i].id;
    let isoCode = countryToAlpha3(countryName);
    data[i].id = isoCode;
}  

  return (
    <ResponsiveChoropleth
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
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors={[
           "#e1e2fe",
           "#c3c6fd",
           "#a4a9fc",
           "#868dfb",
           "#6870fa",
           "#535ac8",
           "#3e4396",
           "#2a2d64",
           "#151632",
        ]}
      domain={[0,20,30,40,50,60]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#ffffff"
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -30,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};

export default GeographyChart;
