import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ConfigService } from '../services/config.service';
// import { Chart } from 'node_modules/chart.js';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-dashboard-navigation',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css','./dashboard.component.scss']
})
export class DashboardComponent {
  photosArr: Array<any> = [];
  tableDataArr: Array<any> = [];

  constructor(private config: ConfigService,
    private elementRef: ElementRef) { }
  displayedColumns: string[] = ['name', 'email', 'body'];

  customOptions: OwlOptions = {
    loop: true,
    autoWidth: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   400: {
    //     items: 1
    //   },
    //   740: {
    //     items: 1
    //   },
    //   940: {
    //     items: 1
    //   },
    //   1120: {
    //     items: 1
    //   }
    // },
    nav: false
  }


  

  ngOnInit(): void {
    console.log(this.customOptions);



    this.config.getPhotos().subscribe(
      (data) => {
        // console.log(data);
        this.photosArr = data;
      }
    )

    this.config.getTableData().subscribe(
      (tableData) => {
        // console.log('table1', tableData);
        this.tableDataArr = tableData;
        // this.dataSource = this.tableDataArr;

      }
    )

    // console.log('datasource',this.dataSource);
    // console.log('table',this.tableDataArr);

    // setTimeout(()=>{ 
    this.chartit()
    // }, 4000);
  }

  chartit() {
    const myChart = new Chart('myChart', {
      type: "line",
      data: {
        labels: ["Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Drilling Time",
            data: [12, 19, 3, 5, 2, 3],
            borderColor: '#FF5B5B',
            borderWidth: 1,
            backgroundColor: 'rgba(255, 91, 91, 0.2)',
            fill: true,
          },
          {
            label: "Down Time",
            data: [3, 6, 13, 15, 9, 8],
            borderColor: '#0E9CFF',
            borderWidth: 1,
            backgroundColor: 'rgba(14, 156, 255, 0.2)',
            fill: true,
          },
        ],
      },

      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        elements: {
          line: {
            tension: .5
          }
        },
        plugins: {
          legend: {
            display: true,
            labels: {
              pointStyle: 'circle',
              usePointStyle: true,
              boxWidth: 6
            }
          }
        }
      },
    });



    this.config.getPopulation().subscribe(
      (popData) => {
        let popYear: Array<any> = [];
        let popArr: Array<any> = [];

        for (var i = 0; i < popData.data.length; i++) {
          popYear.push(popData.data[i].Year);
          popArr.push(popData.data[i].Population);
        }

        console.log('Year',popYear);
        console.log('population',popYear);

        const testChart = new Chart('testChart', {
          type: "line",
          data: {
            labels: popYear,
            datasets: [
              {
                label: "USA Population",
                data: popArr,
                borderColor: '#FF5B5B',
                borderWidth: 1,
                backgroundColor: 'rgba(255, 91, 91, 0.2)',
                fill: true,
              }
            ],
          },

          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
            elements: {
              line: {
                tension: .5
              }
            },
            plugins: {
              legend: {
                display: true,
                labels: {
                  pointStyle: 'circle',
                  usePointStyle: true,
                  boxWidth: 6
                }
              }
            }
          },
        });
      }
    )
  }
}
