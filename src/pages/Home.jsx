// import React, {useEffect, useState } from 'react';
// import { View, Button, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
// import {Dimensions} from "react-native";
// import TASCharts from '../components/ProgressGraph'

// axios
// import axios from 'axios'; 
// Interface

// const height = Dimensions.get('window').height
// const width = Dimensions.get('window').width

// const BarData = {
//     labels: ["January", "February", "March", "April", "May", "June"],
//     datasets: [
//       {
//         data: [20, 45, 28, 80, 99, 43]
//       }
//     ]
// };

// var ProgressData = {
//   labels: ["Total Fat", "Protein", "Cholesterol"], // optional
//   data: [0.4, 0.6, 0.8]
// };

// const LineData = {
//     labels: ["January", "February", "March", "April", "May", "June"],
//     datasets: [
//       {
//         data: [20, 45, 28, 80, 99, 43]
//       },
//       {
//         data: [28, 80, 99, 43, 20, 45]
//       }
//     ],
//     legend: ["Rainy Days", "Sunny Days"] // optional
// }

// const PieData =  [
//     {
//       name: "Seoul",
//       population: 21500000,
//       color: "rgba(141, 41, 229, 1)",
//     //   legendFontColor: "#7F7F7F",
//       legendFontSize: 10
//     },
//     {
//       name: "Toronto",
//       population: 2800000,
//       color: "rgba(141, 41, 229, 0.8)",
//     //   legendFontColor: "#7F7F7F",
//       legendFontSize: 10
//     },
//     {
//       name: "Beijing",
//       population: 527612,
//       color: "rgba(141, 41, 229, 0.6)",
//     //   legendFontColor: "#7F7F7F",
//       legendFontSize: 10
//     },
//     {
//       name: "New York",
//       population: 8538000,
//       color: "rgba(141, 41, 229, 0.4)",
//     //   legendFontColor: "#7F7F7F",
//       legendFontSize: 10
//     },
//     {
//       name: "Moscow",
//       population: 11920000,
//       color: "rgba(141, 41, 229, 0.2)",
//     //   legendFontColor: "#7F7F7F",
//       legendFontSize: 10
//     }
// ];

// // 

// const Home = () => {

//   var allData = {"Progress" : ProgressData, "Bar" : BarData, "Line" : LineData, "Pie" : PieData}

//     const getDataUsingSimpleGetCall = () => {
//       axios({
//         method: 'get',
//         baseURL: 'http://localhost:8080',
//         url: '/dish/get?id=60b451ab87b0bf887b1107e1', // change to date 
//         //http://localhost:8081/dailyMenu/get?date=2021-06-03T00:00:00.000+00:00
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       })
//       .then(function (response) { // function return parameters
//         var d = JSON.stringify(response.data);
//         d = JSON.parse(d);
//         console.log(d); // print
//         let Calories = d["Calories"];
//         let Cholesterol = d["Cholesterol"];
//         let Protein = d["Protein"];
//         let Sodium = d["Sodium"];
//         let Total_Carbs = d["Total_Carbs"];
//         let Total_Fat = d["Total_Fat"];
//         let total = Calories + Cholesterol + Protein + Sodium + Total_Carbs + Total_Fat;
//         let nutrition = [Calories / total, Cholesterol / total, Protein / total, Sodium / total, Total_Carbs / total, Total_Fat / total];
//         console.log(nutrition);
//         allData["Progress"].labels = ["Calories", "Cholesterol", "Protein", "Sodium", "Total_Carbs", "Total_Fat"];
//         allData["Progress"].data = nutrition;
//         setUpdateGrapn(true);
//       })
//       .catch(function (error) {
//         alert(error.message);
//       })
//       .finally(function () {
//         alert('Finally called');
//       });
//     };

//     getDataUsingSimpleGetCall();

//     // ProgressData.data = []

//     const [ChartType, setChartType] = useState("Progress");
//     const [UpdateGraph, setUpdateGrapn] = useState(false);

//     return (
//         <View style = {styles.container}>
//             <PreviewLayout
//                 label="Chart types"
//                 selectedValue={ChartType}
//                 values={[
//                     "Pie",
//                     "Bar",
//                     "Line",
//                     "Progress"
//                 ]}
//                 setSelectedValue={setChartType}
//             >
//             </PreviewLayout>
//             <Image
//                 style={[{height: height * 0.3, width: width * 0.9 }]}
//                 source={{ uri: 'https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg' }}
//                 // source = {{ uri: 'https://assets.nutrislice.com/asset/serve/image/jpg/117235/thumbnail2' }} // April 19th 
//             />
//             <View>
//                 <TASCharts data={allData[ChartType]} type = {ChartType}></TASCharts>
//             </View>
//         </View>
//     )
// }

// const PreviewLayout = ({
//     label,
//     children,
//     values,
//     selectedValue,
//     setSelectedValue,
//   }) => (
//     <View style={{ padding: 10, flex: 1}}>
//       <Text style={styles.label}>{label}</Text>
//       <View style={styles.row}>
//         {values.map((value) => (
//           <TouchableOpacity
//             key={value}
//             onPress={() => setSelectedValue(value)}
//             style={[styles.button, selectedValue === value && styles.selected]}
//           >
//             <Text
//               style={[
//                 styles.buttonLabel,
//                 selectedValue === value && styles.selectedLabel,
//               ]}
//             >
//               {value}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
  

// const styles = StyleSheet.create({
//     View: {
//         flex: 1,
//         justifyContent: 'flex-start'
//     },
//     box: {
//         width: 50,
//         height: 50,
//     },
//     row: {
//         flexDirection: "row",
//         flexWrap: "wrap",
//     },
//     button: {
//         paddingHorizontal: 8,
//         paddingVertical: 6,
//         borderRadius: 4,
//         backgroundColor: "oldlace",
//         alignSelf: "flex-start",
//         marginHorizontal: "1%",
//         marginBottom: 6,
//         minWidth: "48%",
//         textAlign: "center",
//     },
//     selected: {
//         backgroundColor: "rgba(141, 41, 229, 0.8)",
//         borderWidth: 0,
//     },
//     buttonLabel: {
//         fontSize: 12,
//         fontWeight: "500",
//         color: "rgba(141, 41, 229, 0.8)",
//     },
//     selectedLabel: {
//         color: "oldlace",
//     },
//     label: {
//         textAlign: "center",
//         marginBottom: 10,
//         fontSize: 24,
//     },
//     container: {
//         backgroundColor: "oldlace",
//         justifyContent: "space-between",
//         alignItems: 'center'
//     }
// })

// export default Home;

import React from 'react';
import { View, Button, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import {Dimensions} from "react-native";
import BotBar from '../components/BotBu';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
var width = Dimensions.get('window').width;
const chartConfig = {
    // backgroundGradientFrom: "#1E2923",
    // backgroundGradientFromOpacity: 0,
    // backgroundGradientTo: "#08130D",
    // backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.8,
    useShadowColorFromDataset: false // optional
  };
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };
  const data2 = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };
const Home = () => {
    return (
        // <View>
        //     <Text>Bezier Line Chart</Text>
        //     <LineChart
        //         data={data}
        //         width={Dimensions.get('window').width} 
        //         height={220}
        //         chartConfig={chartConfig}
        //     />
        //     <BarChart
        //         // style={graphStyle}
        //         data={data2}
        //         width={
        //             Dimensions.get('window').width
        //             }
        //         height={220}
        //         yAxisLabel="$"
        //         chartConfig={chartConfig}
        //         verticalLabelRotation={30}
        //     />
        // </View>
        
        <ScrollView>
            <SafeAreaView>
                <View style = {styles.container}>
                    
                    <View style = {styles.topBar}>
                        <Text style = {styles.topBarText}> Home </Text> 
                    </View>
                    
                    
                    <Text style = {styles.text}> Stats </Text>
                    <View style = {styles.blackBox}>
                    </View>
                    <View style = {styles.blackBox}>
                    </View>
                    <TouchableOpacity style = {styles.Suggestions}>
                        <Text style = {styles.cleartext}>
                            Suggestions
                        </Text>
                    </TouchableOpacity>
                    <View style = {styles.grayBox}>
                        <TouchableOpacity style = {styles.dish}>
                             
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.dish}>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.dish}>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style = {styles.dish}>
                        </TouchableOpacity>
                    </View>

                    
                </View>
                
            </SafeAreaView>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    grayBox:{
        flex: 1,
        backgroundColor: '#EBEBEB', // # + color code 
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: 320,
        paddingVertical: 20,
        paddingHorizontal: 100, 
        
        marginHorizontal: 29,
        marginTop: 10,
        marginBottom: 10,
    },
    dish:{
        flex: 1,
        backgroundColor: '#FFFFFF', // # + color code 
        alignItems: 'center',
        
        height:40,
        width: 300,
        paddingLeft: 5,
        paddingVertical: 15,
        
        marginHorizontal: 58,
         
        marginVertical: 5,
        
    },
    blackBox:{
        flex: 1,
        backgroundColor: '#000000', // # + color code 
        alignItems: 'center',
        justifyContent: 'center',
        height: 400,
        width: 270,
        
        marginLeft: 50, 
        marginHorizontal: 23,
        marginTop: 10,
        marginBottom: 10,
    },
    Suggestions:{
        flex: 1,
        backgroundColor: '#24AA18', // # + color code 
        alignItems: 'center',
        justifyContent: 'center',
        height:55,
        width: 300,
        paddingLeft: 5,
        paddingVertical: 8,
        
        marginHorizontal: 37,
         
        marginTop: 10,
        marginBottom: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        width: width, 

    },
    text: {
        fontSize: 17,
        paddingLeft: 130,
        marginHorizontal: 30,
        justifyContent: 'center',
        color: 'white',
        backgroundColor: '#6C757D'
    },
    button: {
        flex: 1,
        backgroundColor: '#48CAE4', // # + color code 
        alignItems: 'center',
        justifyContent: 'center',
        height:50,
        width: 300,
        paddingLeft: 10,
        paddingRight: 10, 
        paddingVertical: 13,
        paddingHorizontal: 4, 
        marginHorizontal: 58,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 5,
        
    },
    lastbutton:{
        margin: 5,
        marginHorizontal: 100,
        padding: 10,
        paddingTop: 10,
        height: 50,
        borderRadius: 9,
        backgroundColor: '#D0D0D0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: 'black',
        justifyContent: 'center',
        fontSize: 20,
    },
    topBar: {
        flex: 1,
        backgroundColor: '#264653', // # + color code 
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 375,
        paddingHorizontal: 0,
        paddingVertical: 23,
       
        
        marginTop: 10,
        marginBottom: 10,
    
    },
    clear: {
        flex: 1,
        backgroundColor: '#9B9349', // # + color code 
        alignItems: 'center',
        justifyContent: 'center',
        height:100,
        width: 300,
        paddingLeft: 5,
        paddingVertical: 8,
        
        marginHorizontal: 58,
         
        marginTop: 10,
        marginBottom: 10,
    
        
    },
    cleartext: {
        color: 'white',
        fontSize: 16
    },
    topBarText: {
        color: 'white',
        fontSize: 20
    }
})

export default Home;



// import React, {useState} from 'react';
// import {Image, ImageBackground, View, Button, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
// import {Dimensions} from "react-native";
// import BotBar from '../components/BotBu';
// import allCharts from '../components/charts'

// const image = { uri: "https://r1.ilikewallpaper.net/iphone-11-wallpapers/download/79815/Clementines-with-leaves-iphone-11-wallpaper-ilikewallpaper_com.jpg" };
// const infographic = {uri: "https://thumbs.dreamstime.com/z/healthy-vegetables-infographics-chart-graph-healthy-vegetables-infographics-chart-graph-quality-vector-99710155.jpg"};
      
// import {
//     LineChart,
//     BarChart,
//     PieChart,
//     ProgressChart,
//     ContributionGraph,
//     StackedBarChart
//   } from "react-native-chart-kit";
// var width = Dimensions.get('window').width;
// var height = Dimensions.get('window').width;
// const chartConfig = {
//     // backgroundGradientFrom: "#1E2923",
//     // backgroundGradientFromOpacity: 0,
//     // backgroundGradientTo: "#08130D",
//     // backgroundGradientToOpacity: 0.5,
//     color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
//     strokeWidth: 2, // optional, default 3
//     barPercentage: 0.8,
//     useShadowColorFromDataset: false // optional
//   };
//   const data = {
//     labels: ["January", "February", "March", "April", "May", "June"],
//     datasets: [
//       {
//         data: [20, 45, 28, 80, 99, 43],
//         color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
//         strokeWidth: 2 // optional
//       }
//     ],
//     legend: ["Rainy Days"] // optional
//   };
//   const data2 = {
//     labels: ["January", "February", "March", "April", "May", "June"],
//     datasets: [
//       {
//         data: [20, 45, 28, 80, 99, 43]
//       }
//     ]
//   };

//   const ProgressData = {
//     labels: ["Total Fat", "Protein", "Cholesterol"], // optional
//     data: [0.4, 0.6, 0.8]
//   };
  
//   const LineData = {
//       labels: ["January", "February", "March", "April", "May", "June"],
//       datasets: [
//         {
//           data: [20, 45, 28, 80, 99, 43]
//         },
//         {
//           data: [28, 80, 99, 43, 20, 45]
//         }
//       ],
//       legend: ["Rainy Days", "Sunny Days"] // optional
//   }

// const ChartsData = {"ProgressRing": ProgressData, "LineChart": LineData}
// const Home = () => {
//     const [ChartType, setChartType] = useState("ProgressRing"); //re renders the view
    
//     return (
        
        
        
//             <ImageBackground source={image} style={styles.image} >
//                 <ScrollView>
//                     <SafeAreaView>
//                         <View style = {styles.container}>
//                             {/* <View>
//                                 <Text>Bezier Line Chart</Text>
//                                 <LineChart
//                                     data={data}
//                                     width={Dimensions.get('window').width} 
//                                     height={220}
//                                     chartConfig={chartConfig}
//                                 />
//                                 <BarChart
//                                     // style={graphStyle}
//                                     data={data2}
//                                     width={
//                                         Dimensions.get('window').width
//                                         }
//                                     height={220}
//                                     yAxisLabel="$"
//                                     chartConfig={chartConfig}
//                                     verticalLabelRotation={30}
//                                 />
//                             </View> */}
                            
//                             {/* <View style = {styles.topBar}>
//                                 <Text style = {styles.topBarText}> Home </Text> 
//                             </View>
                            
                            
//                             <Text style = {styles.text}> Stats </Text>
//                             <Image source = {infographic} style = {styles.graphic}>

//                             </Image> */}
//                             {/* <View style = {styles.blackBox}>

//                             </View> */}
//                             <View >
//                                 <allCharts inputdata = {ChartsData[ChartType]} width = {Dimensions.get('window').width * 0.9}>
//                                 </allCharts>
//                             </View>  
//                             <TouchableOpacity style = {styles.Suggestions}>
//                                 <Text style = {styles.cleartext}>
//                                     Suggestions
//                                 </Text>

//                             </TouchableOpacity> 
//                             <View style = {styles.grayBox}>
//                                 <TouchableOpacity style = {styles.dish} onPress = {() => setChartType("ProgressRing")}>
                                    
//                                 </TouchableOpacity>
//                                 <TouchableOpacity style = {styles.dish} onPress = {() => setChartType("LineChart")}>
//                                 </TouchableOpacity>
//                                 <TouchableOpacity style = {styles.dish}>
//                                 </TouchableOpacity>
                                
//                                 <TouchableOpacity style = {styles.dish}>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>   
//                     </SafeAreaView>
//                 </ScrollView>
//             </ImageBackground>
         
//     )
// }


// const styles = StyleSheet.create({
//     graphic:{
//         flex : 1,
//         width: width * 0.853,
//         height: 375,
//         marginHorizontal: width * 0.08,
//         marginTop: 10,
//         marginBottom: 10,
//     },
//     image: {
//         flex: 1,
//         resizeMode: "cover",
//         justifyContent: "center" 
//       },
//     grayBox:{
//         flex: 1,
//         backgroundColor: '#EBEBEB', // # + color code 
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: height * 0.3,
//         width: width * 0.853,
//         paddingVertical: width*0.853 *0.35,
//         paddingHorizontal: 100, 
        
//         marginHorizontal: width * 0.08,
//         marginTop: 10,
//         marginBottom: 10,
//     },
//     dish:{
//         flex: 1,
//         backgroundColor: '#FFFFFF', // # + color code 
//         alignItems: 'center',
        
//         height:40,
//         width: 300,
//         paddingLeft: 5,
//         paddingVertical: 15,
        
//         marginHorizontal: 58,
         
//         marginVertical: 5,
        
//     },
//     blackBox:{
//         flex: 1,
//         backgroundColor: '#000000', // # + color code 
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: 400,
//         width: 270,
        
//         marginLeft: 50, 
//         marginHorizontal: 23,
//         marginTop: 10,
//         marginBottom: 10,
//     },
//     Suggestions:{
//         flex: 1,
//         backgroundColor: '#24AA18', // # + color code 
//         alignItems: 'center',
//         justifyContent: 'center',
//         height:55,
//         width: 300,
//         paddingLeft: 5,
//         paddingVertical: 8,
        
//         marginHorizontal: 37,
         
//         marginTop: 10,
//         marginBottom: 10,
//     },
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         width: width, 

//     },
//     text: {
//         fontSize: 17,
//         paddingLeft: 130,
//         marginHorizontal: 30,
//         justifyContent: 'center',
//         color: 'white',
//         backgroundColor: '#6C757D'
//     },
//     button: {
//         flex: 1,
//         backgroundColor: '#48CAE4', // # + color code 
//         alignItems: 'center',
//         justifyContent: 'center',
//         height:50,
//         width: 300,
//         paddingLeft: 10,
//         paddingRight: 10, 
//         paddingVertical: 13,
//         paddingHorizontal: 4, 
//         marginHorizontal: 58,
//         marginRight: 20,
//         marginTop: 5,
//         marginBottom: 5,
        
//     },
//     lastbutton:{
//         margin: 5,
//         marginHorizontal: 100,
//         padding: 10,
//         paddingTop: 10,
//         height: 50,
//         borderRadius: 9,
//         backgroundColor: '#D0D0D0',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     buttonText:{
//         color: 'black',
//         justifyContent: 'center',
//         fontSize: 20,
//     },
//     topBar: {
//         flex: 1,
//         backgroundColor: '#004C6A', // # + color code 
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: 70, 
//         width: width,
//         paddingHorizontal: 0,
//         paddingVertical: 23,
       
        
//         marginTop: 10,
//         marginBottom: 10,
    
//     },
//     clear: {
//         flex: 1,
//         backgroundColor: '#9B9349', // # + color code 
//         alignItems: 'center',
//         justifyContent: 'center',
//         height:100,
//         width: 300,
//         paddingLeft: 5,
//         paddingVertical: 8,
        
//         marginHorizontal: 58,
         
//         marginTop: 10,
//         marginBottom: 10,
    
        
//     },
//     cleartext: {
//         color: 'white',
//         fontSize: 16
//     },
//     topBarText: {
//         color: 'white',
//         fontSize: 20
//     }
// })

// export default Home;

