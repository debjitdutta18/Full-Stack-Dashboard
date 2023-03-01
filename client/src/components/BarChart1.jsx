import { Typography, useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { 
  mainData as data,
  seCtor,
  peStle,
  defaultdata
 } from "../scenes/bar1/index";
import {
  layOut,
  groupMode,
  revErse,
  enableLabel,
  enableGridX,
  enableGridY,
  toolTip,
  minValue,
  maxValue,
  padDing,
  innerpadDing,
  borderRadius,
  aniMation
} from "../scenes/bar1/sidedrawer";



const BarChart1 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const count = data.length;
  
if (!data) {
    return <Typography variant='h5' sx={{ml:"2vw",mr:"2vw",mt:"2vw",mb:"2vw"}}>Please Select any country/region from the above menu to display the Bar Chart......</Typography>;
  } 
  
  return (
    <ResponsiveBar
      data={count === 0?defaultdata:data}
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
      keys={[
        "totalIntensity",
        "totalRelevance",
        "totalLikelihood",
        "totalImpact",
        ]}
      indexBy= {seCtor? "sector" : peStle? "pestle":"sector"}
      margin= {{ top: 50, right: layOut==='vertical'?30:30, bottom: 60, left:layOut==='vertical'?50:90}} 
      minValue={minValue}
      maxValue={maxValue}
      layout= {layOut}
      reverse={revErse} 
      groupMode={groupMode}
      enableLabel={enableLabel}
      enableGridX={enableGridX}
      enableGridY={enableGridY}
      isInteractive={toolTip}
      padding={count === 0?0.62:padDing}
      innerPadding={innerpadDing}
      borderRadius={borderRadius}
      motionConfig= {aniMation}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={['#4da6a6','#9ed1af','#008080','#4a8f61']}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={{ 
        tickSize: 0,
        tickPadding: 0,
        tickRotation: 0,
        legend:seCtor?layOut==='vertical'?"COUNT VS SECTOR":"SECTOR VS COUNT":peStle?layOut==='vertical'?"COUNT VS PESTLE":"PESTLE VS COUNT":"",
        legendPosition: "middle",
        legendOffset: -22,
        format: () => '',}}
      axisRight={{ 
        tickSize: 0,
        tickPadding: 0,
        tickRotation: 0,
        format: () => '',}}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation:layOut === 'vertical' ? count>6? 10 : 0 : 0,
      }}
      axisLeft={{
              format: (v) => {
                return v.length > 10 ? (
                  <tspan>
                    {v.substring(0, 10) + "..."}
                    <title>{v}</title>
                  </tspan>
                ) : (
                  v
                );
              },
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "",
              legendPosition: "middle",
              legendOffset: -10
            }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 3.5]],
      }}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default BarChart1;


































































































































