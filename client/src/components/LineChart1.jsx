import { ResponsiveLine } from "@nivo/line";
import { useTheme} from "@mui/material";
import { tokens } from "../theme";
import { 
  selectedData as data,
  seCtor,
  peStle,
  defaultdata
} from "../scenes/line1/index"
import {
  cuRve,
  aniMation,
  enableArea,
  baseLinevalue,
  areaOpacity,
  lineWidth,
  pointSize,
  pointBorderWidth,
  enablePoints,
  enableGridX,
  enableGridY,
  toolTip,
  enablePointslabel,
} from "../scenes/line1/sidedrawer"


const LineChart1 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
   
  if (!data) {
  return (
     <ResponsiveLine
      data={defaultdata}
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
      colors={{ scheme:'nivo' }}
      margin={{ top: 30, right: 50, bottom: 100, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={{tickSize: 0,
        tickPadding: 0,
        tickRotation: 0,
        format: () => '',}}
      axisRight={{tickSize: 0,
        tickPadding: 0,
        tickRotation: 0,
        format: () => '',}}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5, // added
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,

        legendOffset: -40,
        legendPosition: "middle",
      }}
      /// Customize
      curve={cuRve}
      enableArea={enableArea}
      areaBaselineValue={baseLinevalue}
      areaOpacity={areaOpacity}
      lineWidth={lineWidth}
      pointSize={pointSize}
      pointBorderWidth={pointBorderWidth}
      enablePoints = {enablePoints}
      enablePointLabel = {enablePointslabel}
      animation={aniMation}
      enableGridX={enableGridX}
      enableGridY={enableGridY}
      isInteractive={toolTip}
      pointColor={{ theme: "background" }}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          itemsPerrow: 4,
          justify: false,
          translateX: 0,
          translateY: 70,
          itemsSpacing: 10,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 1,
          symbolSize: 15,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 0.7,
              },
            },
          ],
        },
      ]}
    /> 
  ); 
} 

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
      colors={{ scheme:'nivo' }}
      margin={{ top: 50, right: 50, bottom: 100, left: 50 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={{
        tickSize: 0,
        tickPadding: 0,
        tickRotation: 0,
        legendPosition: "middle",
        legend:seCtor?"COUNT VS SECTOR":peStle?"COUNT VS PESTLE":"",
        legendOffset: -22,
        format: () => '',
        }}
      axisRight={{tickSize: 0,
        tickPadding: 0,
        tickRotation: 0,
        format: () => '',}}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5, // added
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: -40,
        legendPosition: "middle",
      }}
      /// Customize
      curve={cuRve}
      enableArea={enableArea}
      areaBaselineValue={baseLinevalue}
      areaOpacity={areaOpacity}
      lineWidth={lineWidth}
      pointSize={pointSize}
      pointBorderWidth={pointBorderWidth}
      enablePoints = {enablePoints}
      enablePointLabel = {enablePointslabel}
      animation={aniMation}
      enableGridX={enableGridX}
      enableGridY={enableGridY}
      isInteractive={toolTip}
      pointColor={{ theme: "background" }}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          itemsPerrow: 4,
          justify: false,
          translateX: 0,
          translateY: 70,
          itemsSpacing: 10,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 1,
          symbolSize: 15,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 0.7,
              },
            },
          ],
        },
      ]}
    /> 
  );   
};

export default LineChart1;


