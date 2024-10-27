import { M } from "@angular/cdk/keycodes";
import { Component } from "@angular/core";
import { MsgHandelService } from "src/app/services/msg-handel.service";
import { ReportsService } from "src/app/services/reports.service";

@Component({
  selector: "app-insights-view",
  templateUrl: "./insights-view.component.html",
  styleUrls: ["./insights-view.component.scss"],
})
export class InsightsViewComponent {
  loading: boolean = false;

  cardData = {
    total_detection: 0,
    avg_detection_time: "60 min",
    last_detection: "1 hour ago",
  };

  public dailyDetectionTrends: any = {
    series: [
      {
        name: "Daily Detection Trends",
        data: [0, 0, 0, 0],
      },
    ],
    xaxis: {
      categories: [0, 0, 0, 0],
    },
    chart: {
      type: "area",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      height: 300,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: ["#19a463"], // Set stroke color to primary color
    },
    fill: {
      colors: ["#19a463", "#19a463", "#19a463"], // Set fill color to primary color
      type: "solid",
      opacity: 0.1,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      // theme: "dark",
      // x: {
      //   show: false,
      // },
    },
  };

  public EnviramnetalConditions: any = {
    series: [
      {
        name: "serie1",
        data: [],
      },
      {
        name: "serie2",
        data: [],
      },
    ],

    chart: {
      type: "bar",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      height: 300,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },

    plotOptions: {
      bar: {
        horizontal: false, // Change to false for vertical bars
        dataLabels: {
          position: "top", // Position of data labels can remain
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: 0, // Adjust offset as needed for vertical view
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["#fff"],
    },
    xaxis: {
      lines: {
        show: false,
      },
      categories: [],
    },
    yaxis: {
      lines: {
        show: false,
      },
      title: {
        text: "Values", // Optional: Title for y-axis
      },
    },
  };

  public hourlyDetectionrateChart: any = {
    series: [
      {
        name: "Elephant Detection",
        data: [],
      },
    ],
    xaxis: {
      categories: [],
    },
    chart: {
      type: "bar",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#19a463",
      toolbar: {
        show: false,
      },
      height: 300,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },

    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#19a463"],
      type: "solid",
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
    },
  };

  public detectionFrequency: any = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
  constructor(
    private reportsService: ReportsService,
    private msgHandelService: MsgHandelService
  ) {}

  ngOnInit(): void {
    this.getChartData();
  }

  getChartData() {
    this.loading = true;
    this.reportsService
      .getAllAnalysis("limit=10&page=1&column=0&order=desc")
      .subscribe(
        (response) => {
          if (response.status) {
            console.log("response", response);

            this.cardData = {
              total_detection: response?.data?.data?.totalDetectedCount,
              avg_detection_time: response?.data?.data?.lastDetectionTime,
              last_detection: response?.data?.data?.avgTimeBetweenDetections,
            };

            this.setDailyDetectionTrends(response);
          }
          this.loading = false;
        },
        (error) => {
          this.loading = false;
          // show msg
          this.msgHandelService.handleError(error);
        }
      );

    const response1 = {
      status: true,
      data: {
        cardData: {
          totalDetections: 1000,
          avgDetectionTime: 56,
          lastDetection: 1,
          systemStatus: true,
        },
        chartData: {
          dailyDetectionTrends: {
            xAxis: [1, 1, 4, 5, 6],
            yAxis: [
              "2024-03-09T14:39:58.044Z",
              "2024-03-14T07:34:30.219Z",
              "2024-03-15T06:52:49.405Z",
              "2024-03-15T06:54:12.259Z",
              "2024-03-15T06:54:12.259Z",
            ],
          },
          hourlyDetectionRate: {
            xAxis: [1, 1, 4, 5, 6],
            yAxis: [
              "2024-03-09T14:39:58.044Z",
              "2024-03-14T07:34:30.219Z",
              "2024-03-15T06:52:49.405Z",
              "2024-03-15T06:54:12.259Z",
            ],
          },
          EnvironmentalConditionsDuringDetection: {
            xAxis: [1, 1, 4, 5, 6],
            yAxis: [
              "2024-03-09T14:39:58.044Z",
              "2024-03-14T07:34:30.219Z",
              "2024-03-15T06:52:49.405Z",
              "2024-03-15T06:54:12.259Z",
            ],
          },
          detectionFrequency: {
            xAxis1: [31, 40, 28, 51, 42, 109, 100],
            xAxis2: [11, 32, 45, 32, 34, 52, 41],
            yAxis: [
              "2024-03-09T14:39:58.044Z",
              "2024-03-14T07:34:30.219Z",
              "2024-03-15T06:52:49.405Z",
              "2024-03-15T06:54:12.259Z",
            ],
          },
        },
      },
    };

    this.setHourlyDetectionrateChart(response1);

    // this.setDailyDetectionTrends(response);
    this.setEnviramnetalConditions(response1);
    // this.setHourlyDetectionrateChart(response);
    // this.setDetectionFrequency(response);
  }

  setDailyDetectionTrends(response: any) {
    this.dailyDetectionTrends = {
      series: [
        {
          name: "Detections",
          data: response?.data?.data?.dailyDetectionCount?.detectionCounts,
        },
      ],
      xaxis: {
        categories: response?.data?.data?.dailyDetectionCount?.dates.map(
          (date: any) => this.convertDateToDefaultFormat(date)
        ),
      },
      chart: {
        type: "area",
        fontFamily: "'Plus Jakarta Sans', sans-serif;",
        foreColor: "#adb0bb",
        toolbar: {
          show: false,
        },
        height: 300,
        sparkline: {
          enabled: true,
        },
        group: "sparklines",
      },
      stroke: {
        curve: "smooth",
        width: 2,
        colors: ["#19a463"], // Set stroke color to primary color
      },
      fill: {
        colors: ["#19a463", "#19a463", "#19a463"], // Set fill color to primary color
        type: "solid",
        opacity: 0.1,
      },
      markers: {
        size: 0,
      },
      tooltip: {
        // theme: "dark",
        // x: {
        //   show: false,
        // },
      },
    };
  }

  setEnviramnetalConditions(response: any) {
    this.EnviramnetalConditions = {
      series: [
        {
          name: "serie1",
          data: response.data.chartData.detectionFrequency.xAxis1,
        },
        {
          name: "serie2",
          data: response.data.chartData.detectionFrequency.xAxis2,
        },
      ],
      // chart: {
      //   type: "bar",
      //   height: 430,
      // },

      chart: {
        type: "bar",
        fontFamily: "'Plus Jakarta Sans', sans-serif;",
        foreColor: "#adb0bb",
        toolbar: {
          show: false,
        },
        height: 300,
        sparkline: {
          enabled: true,
        },
        group: "sparklines",
      },

      plotOptions: {
        bar: {
          horizontal: false, // Change to false for vertical bars
          dataLabels: {
            position: "top", // Position of data labels can remain
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: 0, // Adjust offset as needed for vertical view
        style: {
          fontSize: "12px",
          colors: ["#fff"],
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"],
      },
      xaxis: {
        lines: {
          show: false,
        },
        categories: response.data.chartData.detectionFrequency.yAxis,
      },
      yaxis: {
        lines: {
          show: false,
        },
        title: {
          text: "Values", // Optional: Title for y-axis
        },
      },
      fill: {
        colors: ["#19a463", "#19a463", "#19a463"], // Set fill color to primary color
        type: "solid",
        opacity: 0.7,
      },
    };
  }

  setHourlyDetectionrateChart(response: any) {
    this.hourlyDetectionrateChart = JSON.parse(
      JSON.stringify({
        series: [
          {
            name: "Hourly Detection",
            data: [1, 1, 4, 5, 6],
          },
        ],
        xaxis: {
          categories: [
            "2024-03-09T14:39:58.044Z",
            "2024-03-14T07:34:30.219Z",
            "2024-03-15T06:52:49.405Z",
            "2024-03-15T06:54:12.259Z",
          ].map((date: any) => this.convertDateToDefaultFormat(date)),
        },
        fill: {
          colors: ["#19a463", "#19a463", "#19a463"], // Set fill color to primary color
          type: "solid",
          opacity: 0.7,
        },
        chart: {
          type: "bar",
          fontFamily: "'Plus Jakarta Sans', sans-serif;",
          foreColor: "#19a463",
          toolbar: {
            show: false,
          },
          height: 300,
          sparkline: {
            enabled: true,
          },
          group: "sparklines",
        },

        stroke: {
          curve: "smooth",
          width: 2,
          colors: ["#19a463", "#19a463", "#19a463"],
        },

        markers: {
          size: 0,
        },
        tooltip: {
          theme: "dark",
          x: {
            show: false,
          },
        },
      })
    );
  }

  setDetectionFrequency(response: any) {
    this.detectionFrequency = {
      series: [
        {
          name: "series1",
          data: response.data.chartData.detectionFrequency.xAxis1,
        },
        {
          name: "series2",
          data: response.data.chartData.detectionFrequency.xAxis2,
        },
      ],
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#19a463"], // Stroke color set to red
        width: 2, // Optional: set stroke width
      },
      fill: {
        colors: ["#19a463"], // Fill color set to red
        type: "solid", // Ensure type is solid
        opacity: 0.3, // Set opacity for fill (adjust as needed)
      },
      xaxis: {
        type: "datetime",
        categories: response.data.chartData.detectionFrequency.yAxis,
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };
  }

  convertDateToDefaultFormat(timestamp: any) {
    const date = new Date(timestamp);
    return date.toISOString().split("T")[0];
  }
}
