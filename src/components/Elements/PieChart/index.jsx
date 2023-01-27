import { ResponsivePie } from '@nivo/pie'
import {tokens} from "../../../theme";
import {useTheme} from  '@mui/material';
import{mockPieData as data} from "../../Datas/mockData/mockData";

const PieChart = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return(
    <ResponsivePie
        data={data}
        theme={{
            axis:{
                domain:{
                    line:{
                        stroke:colors.grey[100]
                    }
                },
                legend:{
                    text:{
                        fill:colors.grey[100]
                    }
                },
                ticks:{
                    line:{
                        stroke:colors.grey[100],
                        strokeWidth:1
                    },
                    text:{
                        fill:colors.grey[100],
                    }
                }
            },
            legends:{
                text:{
                    fill:colors.grey[100]
                
                }
            },
            tooltip:{
                container:{
                    color:colors.grey[100],
                    background:colors.blueAccent[800],
                    borderRadius:8
                }
            },
            
            
            
        }}
        margin={{ top: 20, right: 0, bottom: 180, left: 40 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeInnerRadiusOffset={5}
        activeOuterRadiusOffset={5}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsTextColor={{ from: 'color', modifiers: [] }}
        arcLinkLabelsOffset={2}
        arcLinkLabelsDiagonalLength={20}
        arcLinkLabelsStraightLength={200}
        arcLinkLabelsThickness={20}
        arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
        arcLabelsRadiusOffset={0.5}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '2'
                ]
            ]
        }}

        //custom tool tip
/* 
        tooltip={
            function(e){
                var t=e.datum;
                    return(
                        0,a.jsxs
                    )
                    (s,{style:{
                        color:t.color},
                        children:[
                        (0,a.jsx)(d,{children:"id"}),
                        (0,a.jsx)(c,{children:t.id}),
                        (0,a.jsx)(d,{children:"value"}),
                        (0,a.jsx)(c,{children:t.value}),
                        (0,a.jsx)(d,{children:"formattedValue"}),
                        (0,a.jsx)(c,{children:t.formattedValue}),
                        (0,a.jsx)(d,{children:"color"}),
                        (0,a.jsx)(c,{children:t.color})
                    ]})
            }
        }
*/
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        animate={false}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 10,
                translateY: 156,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)}

export default PieChart;