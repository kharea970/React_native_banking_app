import React, { useState ,useEffect} from 'react';
import {View,Text,Dimensions,ImageBackground} from 'react-native'
import axios from 'axios';
import {
    LineChart,
  } from "react-native-chart-kit";
const Chart = ({route,navigation})=>{
    const screenWidth = Dimensions.get("window").width;
    const {lat,lon} = route.params; 
    const [chartData,setChartData] = useState({})

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
       // backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&cnt=5&appid=61e99fc78cca5de6d530c3d06236665b`).then((response)=>{
            setChartData(response.data)
        }).catch(err=>{
            console.log(err)
        })
    },[lat,lon])
    if(chartData.list && chartData.list!==null){

        const data1 = {
            labels:chartData.list.map((data)=>{
                let time = data.dt_txt.slice(11,16);
                let Hours = +time.substr(0,2);
                let hour = (Hours % 12) || 12;
                hour = (hour<10)?("0"+hour):hour;
                let ampm = Hours < 12 ? "AM" : "PM"
                time = hour + time.substr(2,3) + ampm; 
                return time;
            }),
            datasets: [
              {
                data: chartData.list.map((data)=>{
                    return data.main.temp
                }),
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
              }
            ],
            legend: ["Tempreature"] // optional
          };

        return(
            <View style={{marginTop:12}}>
                        <LineChart
                        data={data1}
                        width={screenWidth}
                        height={500}
                        chartConfig={chartConfig}
                        />
            </View>
                )
    }

}
export default Chart;