import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { selectedData as data, defaultdata } from "../scenes/pie1/index";
import {
  startAngle,
  endAngle,
  innerRadius,
  padAngle,
  cornerRadius,
  sortByValue,
  enableArclabels,
  enableArclinklabels,
  borderWidth,
  activeOuterRadiusOffset,
  activeInnerRadiusOffset,
  transitionMode,
  aniMation,
} from "../scenes/pie1/sidedrawer"


const PieChart1 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  if(data.length===0){
     return (
    <ResponsivePie
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
      margin={{ top: 40, right: 80, bottom: 160, left: 80 }}
      //customize
      
      sortByValue={sortByValue}
      enableArcLabels={enableArclabels}
      enableArcLinkLabels={enableArclinklabels}
      startAngle={startAngle}
      endAngle={endAngle}
      innerRadius={innerRadius}
      padAngle={padAngle}
      cornerRadius={cornerRadius}
      borderWidth={borderWidth}
      activeOuterRadiusOffset={activeOuterRadiusOffset}
      activeInnerRadiusOffset={activeInnerRadiusOffset}
      transitionMode={transitionMode}
      motionConfig={aniMation}
      colors={{ scheme: 'nivo' }}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={0}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={0}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "column",
          justify: false,
          translateX: 0,
          translateY: 150,
          itemsSpacing: 10,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
  }

  return (
    <ResponsivePie
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
      margin={{ top: 40, right: 80, bottom: 160, left: 80 }}
      //customize
      
      sortByValue={sortByValue}
      enableArcLabels={enableArclabels}
      enableArcLinkLabels={enableArclinklabels}
      startAngle={startAngle}
      endAngle={endAngle}
      innerRadius={innerRadius}
      padAngle={padAngle}
      cornerRadius={cornerRadius}
      borderWidth={borderWidth}
      activeOuterRadiusOffset={activeOuterRadiusOffset}
      activeInnerRadiusOffset={activeInnerRadiusOffset}
      transitionMode={transitionMode}
      motionConfig={aniMation}
      colors={{ scheme: 'nivo' }}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={0}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={0}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "column",
          justify: false,
          translateX: 0,
          translateY: 150,
          itemsSpacing: 10,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart1;