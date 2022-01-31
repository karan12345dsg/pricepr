/**
 * Template Name: Arsha - v2.2.1
 * Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function ($) {
    "use strict";

    // Preloader
    $(window).on('load', function () {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function () {
                $(this).remove();
            });
        }
    });

    function func() {
        var label = [];
        var engineValues = [];
        $.get("http://127.0.0.1:5000/get_Engine", function (data, status) {
            if (status == "success") {
                var EngineData = data["Engine"];
                for (var key in EngineData) {
                    if (EngineData.hasOwnProperty(key)) {
                        label.push(parseFloat(key));
                        engineValues.push(parseFloat(EngineData[key]));
                    }
                }
            }
            engineValues.push(0)
            label.push(0)
            engineValues.sort(function (a, b) {
                return a - b;
            });
            label.sort(function (a, b) {
                return a - b;
            });

            var buyerData = {
                labels: engineValues,
                datasets: [{
                    fillColor: "rgba(26,116,255)",
                    label:"fasfdas",
                    strokeColor: "#ACC26D",
                    pointColor: "#fff",
                    pointStrokeColor: "#9DB86D",
                    data:label
                }]
            }
            
            
            var pieChartContent = document.getElementById('canvas-id');
            pieChartContent.innerHTML = '&nbsp;';
            document.getElementById('ylabel').innerHTML = "";
            $('#ylabel').append('Engine (CC)');
            document.getElementById('xlabel').innerHTML = "";
           $('#xlabel').append('Price (Lakhs)');
            //   $('#canvas-id').append( //'<canvas id="buyers" width="769px" height="324px"><canvas>');
            $('#canvas-id').append(' <canvas class="my-4 w-100 chartjs-render-monitor" id="buyers" width="769" height="724" style="display: block; width: 769px; height: 324px;"></canvas>');
            //  $('#canvas-id').append("");
            // get line chart canvas
            
            var buyers = document.getElementById('buyers').getContext('2d');
            new Chart(buyers).Line(buyerData);
        });
    }   

    function func2() {
        var label = [];
        var powerValues = [];
        $.get("http://127.0.0.1:5000/get_power", function (data, status) {
            if (status == "success") {
                var powerData = data["Power"];
                for (var key in powerData) {
                    if (powerData.hasOwnProperty(key)) {
                        label.push(parseFloat(key));
                        powerValues.push(parseFloat(powerData[key]));
                    }
                }

              

            }
            console.log("Type of x=" + typeof x);
            console.log("Power value 0 =" + powerValues[0]);
            var barData = {
                labels: powerValues,
                datasets: [
                    //     {
                    //     fillColor: "#48A497",
                    //     strokeColor: "#48A4D1",
                    //     data: [456, 479, 324, 569, 702, 600]
                    // },
                    {
                        fillColor: "#48A497",
                        strokeColor: "#48A4D1",
                        data: label
                        //[1.95, 2.35, 3.5, 4.49, 5.2, 9.95]
                    }
                ]
            }
               document.getElementById('ylabel').innerHTML = "";
            $('#ylabel').append('Power (Bhp)  ');
            document.getElementById('xlabel').innerHTML = "";
           $('#xlabel').append('Price (Lakhs)')
            //console.log("Type of labels=" + powerValues[1]);
            var pieChartContent = document.getElementById('canvas-id');
            pieChartContent.innerHTML = '&nbsp;';
            $('#canvas-id').append(' <canvas class="my-4 w-100 chartjs-render-monitor" id="buyers" width="769" height="724" style="display: block; width: 769px; height: 324px;"></canvas>');
            // get bar chart canvas
            var income = document.getElementById("buyers").getContext("2d");
            // draw bar chart
            new Chart(income).Bar(barData);
        });
    }

    function getColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function func1() {
        var carname = [];
        var noofcars = [];
        var company;
        $.get("http://127.0.0.1:5000/get_Company", function (data, status) {
            if (status == "success") {
                console.log("entering in the power");
                company = data["Company"];
                for (var key in company) {
                    console.log(key);
                    if (company.hasOwnProperty(key)) {
                        carname.push(key);
                        noofcars.push(parseFloat(company[key]));
                       

                    }
                }
            }
            var pieData = [];
            var ind = 0;
            console.log([ind]);

            var counter = 1;
            for (var carName in company) {
                var obj = {
                    value : company[carName],
                    label : carName,
                    color: getColor(),
                }
                pieData.push(obj);
            }

            // var pieData = [{
        

            //     value: noofcars[ind],
            //     color: "#EE1289",
            //     label: carname[ind],
            //     ind:ind + 1
            // },
            // {
            //     value: 1058,
            //     color: "#EE30A7",
            //     label: "Hyundai"
        
            // },
            // {
            //     value: 600,
            //     color: "#EE2C2C",
            //     label: "Honda"

            // },
            // {
            //     value: 394,
            //     color: "#EE6A50",
            //     label: "Toyota"

            // },
            // {
            //     value: 316,
            //     color: "#EE6AA7",
            //     label: "Mercedes-Benz"
            // },
            // {
            //     value: 314,
            //     color: "#EE7621",
            //     label: "Volkswagen"

            // },
            // {
            //     value: 294,
            //     color: "#EE7AE9",
            //     label: "Ford"

            // },
            // {
            //     value: 268,
            //     color: "#EE82EE",
            //     label: "Mahindra"

            // }, {
            //     value: 262,
            //     color: "#F2473F",
            //     label: "BMW"

            // },
            // {
            //     value: 235,
            //     color: "#808080",
            //     label: "Audi"
            // },
            // {
            //     value: 183,
            //     color: "#F3E88E",
            //     label: "Tata"

            // },
            // {
            //     value: 172,
            //     color: "#F54D70",
            //     label: "Renault"

            // },
            // {
            //     value: 145,
            //     color: "#F5785A",
            //     label: "Chevrolet"

            // },
            // {
            //     value: 120,
            //     color: "#F64D54",
            //     label: "Nissan"

            // },
            // {
            //     value: 89,
            //     color: "#FA1D2F",
            //     label: "Land"

            // },
            // {
            //     value: 57,
            //     color: "#FF8153",
            //     label: "Jaguar"

            // },
            // {
            //     value: 40,
            //     color: "#FA8072",
            //     label: "Mitsubishi"

            // },
            // {
            //     value: 27,
            //     color: "#FC1501",
            //     label: "Mini"
            // },
            // {
            //     value: 26,
            //     color: "#FCD116", label: "Volvo"

            // },
            // {
            //     value: 23,
            //     color: "#FF0000	",
            //     label: "Porsche"

            // },
            // {
            //     value: 21,
            //     color: "#FF0033	",
            //     label: "Jeep"

            // }, {
            //     value: 16,
            //     color: "#FF4040",
            //     label: "Datsun"

            // },
            // {
            //     value: 15,
            //     color: "#0AC92B",
            //     label: "Force"

            // },
            // {
            //     value: 13,
            //     color: "#0FDDAF",
            //     label: "ISUZU"

            // },
            // {
            //     value: 3,
            //     color: "#00FF66",
            //     label: "Bentley"

            // },
            // {
            //     value: 2,
            //     color: "#0000EE	",
            //     label: "Ambassador"

            // },
            // {
            //     value: 1,
            //     color: "#0099CC	",
            //     labels: "soj",
            //     label: "Lamborghini"

            // },
            // {
            //     value: 1,
            //     color: "#00B2EE",
            //     label: "Isuzu"

            // },
            // {
            //     value: 1,
            //     color: "#FF8153",
            //     label: "Maruti"

            // },
            // {
            //     value: 1,
            //     color: "#FFEA88",
            //     label: "Maruti"

            // }
            // ];
            document.getElementById('ylabel').innerHTML = "";
            document.getElementById('xlabel').innerHTML = "";
            $('#xlabel').append('No of cars sold between 1999 to 2019')
            var pieChartContent = document.getElementById('canvas-id');
            pieChartContent.innerHTML = '&nbsp;';
            // $('#canvas-id').append('<canvas id="buyers" width="769" height="324"><canvas>');
            // pie chart options
            $('#canvas-id').append(' <canvas class="my-4 w-100 chartjs-render-monitor" id="buyers" width="769" height="724" style="display: block; width: 769px; height: 324px;"></canvas>');
            var pieOptions = {
                segmentShowStroke: false,
                animateScale: true
            }
            var countries = document.getElementById("buyers").getContext("2d");
            // draw pie chart
            new Chart(countries).Pie(pieData, pieOptions);

        });
}




    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    }

    $("#buyers").off('mouseenter mouseleave');
    $("#buyers").hover(function () {
        console.log("Hovering on the card body function");
    });
    //$("#buyers").unbind('scroll');
    $(".card-body").off('mouseenter mouseleave');
    //$(".card-body").unbind('scroll');

    $("#id1").click(function () {

        func();
        console.log("ending func here ");
    });

    $("[id='id2']").click(function () {

        func1();
        console.log("ending func here ");
    });
    $("#id3").click(function () {

        func2();
        console.log("ending func here ");
    });

    $("#predict").click(function () {
        var firstName = $("#firstName").val();
        var lastname = $("#lastName").val();
        var phone = $("#phone").val();
        var carName = $("#carName").val();
        var company = $("#company").val();
        var km = $("#km").val();
        var ownerType = $(".ownerType option:selected").text();
        var convertedOwnerType;
        if (ownerType != null) {
            convertedOwnerType = convertOwnerType(ownerType);
        }
        var seats = parseInt($(".seats option:selected").text());
        var year = parseInt($(".year option:selected").text());
        var mileage = parseFloat($("#mileage").val());
        var engine = parseFloat($("#engine").val());
        var power = parseFloat($("#power").val());
        var city_1 = $(".city option:selected").text();
        var fuel_1 = $(".fuel option:selected").text();
        var transmission = $(".transmission option:selected").text();

        var url = "http://127.0.0.1:5000/predict_car_price";



        /*$.ajax({
            url: "http://127.0.0.1:5000/predict_car_price",
            type: "POST",
            dataType: 'json',
            data: { name: 'John' },
            success: function (data) {
                //console.log(data);
                alert("post call = " + data);
            }
        });*/

        $.post(url,
            {
                Year: year,
                Kilometers_Driven: km,
                Owner_Type: convertedOwnerType,
                Seats: seats,
                Mileage: mileage,
                Engine: engine,
                Power: power,
                city: city_1,
                fuel: fuel_1,
                transmission: transmission
            },
            function (data, status) {
                var val = data["estimated_price"];
                $(".modal-body").append(val)
                // if (status == "success") {
                //     //window.location.replace("/index.html");
                // }
                $("#close-model").click(function () {
                    window.location.replace("/index.html")

                });
            });

        /*$.post(url,
            {
                Year: year,
                Kilometers_Driven: km,
                Owner_Type: ownerType,
                Seats: seats,
                Mileage: mileage,
                Engine: engine,
                Power: power,
                city: city_1,
                fuel: fuel_1,
                transmission: transmission
            },
            function (data, status) {
                alert("Data: " + data + "\nStatus: " + status);
            });

        //alert("mileage = " + mileage + "Type = " + typeof mileage);*/

    });

    function convertOwnerType(ownerType) {
        if (ownerType === "First Hand") {
            return 1;
        }
        else if (ownerType === "Second Hand") {
            return 2;
        }
        else if (ownerType === "Third Hand") {
            return 3;
        }
        else if (ownerType === "Fourth Hand and above") {
            return 4;
        }
    }

    function getFormDetails() {
        alert("Form submitted");
    }

    $(function () {
        func1();

    });

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: false

        });
    }
    $(window).on('load', function () {
        aos_init();
    });

})(jQuery);
