import React, { useEffect, useState } from "react"
import axios from "axios"
import { CategoryScale } from "chart.js"
import { Bar, Line, Pie } from "react-chartjs-2"
import Chart from "chart.js/auto"

const Topic = () => {
  let res
  const [items, setItems] = useState([])
  useEffect(() => {
    const getData = async () => {
      res = await axios.get("/api/topics")
      // const topics = data.map((topic) => topic.topic)
      // console.log(topics)
      // console.log(data)
      setItems(res.data)
    }

    getData()
    console.log(items)
  }, [res])
  return (
    <Pie
      data={{
        labels: items
          // .filter((item) => item.country === "Colombia")
          .map((item) => item.region),
        datasets: [
          {
            label: "Intensity",
            data: items.map((item) => item.intensity),
            backgroundColor: "red",
            borderColor: "blue",
            borderWidth: 1,
          },
          // {
          //   label: "Likelyhood",
          //   data: items.map((item) => item.likelihood),
          //   backgroundColor: "yellow",
          //   borderColor: "black",
          //   borderWidth: 1,
          // },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        // scales: {
        //   yAxes: [{ ticks: { beginAtZero: true } }],
        // },
      }}
    />
    // <Bar
    //   data={{
    //     labels: items.map((item) => item.topic),
    //     itemssets: [
    //       {
    //         label: "Topics",
    //         items: items.map((item) => item.intensity),
    //       },
    //     ],
    //   }}
    // />
  )
}

export default Topic
