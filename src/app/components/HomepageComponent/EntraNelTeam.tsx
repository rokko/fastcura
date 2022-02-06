import {Typography, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const EntraNelTeam = () => {
  return (
    <>
    <Grid
      container
      alignItems="center"
      alignContent="center"
      direction="column"
      sm={4}
      lg={10}
    >
      <Typography fontWeight="bold" fontSize={25}>
        Entra nel Team
      </Typography>
      <svg xmlns="http://www.w3.org/2000/svg" width="177.178" height="162.574" viewBox="0 0 177.178 162.574">
  <g id="Raggruppa_125" data-name="Raggruppa 125" transform="translate(-99.28 -141.403)">
    <g id="Raggruppa_124" data-name="Raggruppa 124">
      <g id="Raggruppa_69" data-name="Raggruppa 69" transform="translate(-2632.901 -602.597)">
        <path id="Tracciato_426" data-name="Tracciato 426" d="M2782.953,825.6s.331,1.933-6.061-.491-8.209.885-8.684-5.345-.808-9.673-1.511-15.995,2.925-5.879,4.082-10.246-2.031-9.67,7.069-12.993,13.338-11.006,22.731-2.141,4.146,11.463,7.023,18.208,2.963,20.745-2.1,24.136-4.134,7.468-11.428,6.072A52.514,52.514,0,0,0,2782.953,825.6Z" transform="translate(-23.918 -21.258)" fill="#1d1d1b"/>
        <path id="Tracciato_427" data-name="Tracciato 427" d="M2766.2,941.795c-.8-9.556,1-9.9,1-9.9a52.638,52.638,0,0,1,14.767-3.266c3.812-.2,11.919-.408,15.885-.171,6,.359,16.055,3.654,17.012,3.827,2.42.424,2.313,9.2,2.313,9.2l-4.366,38.758s1.136,38.2.76,39.143c-1.3,3.265-16.88,2.189-23.663,1.895-13.459-.585-22.226-1.647-22.278-2.4-.045-.614,2.368-36.033,1.774-42.47C2768.936,971.269,2766.707,947.865,2766.2,941.795Z" transform="translate(-23.491 -129.492)" fill="#39b1d9"/>
        <path id="Tracciato_428" data-name="Tracciato 428" d="M2826.939,931.759c-3.221,11.644-19.139,13.288-24.9,2.67a12.554,12.554,0,0,1-1.782-4.979c-.068-2.415,3.726-3.422,6.522-3.829,3.553-.517,21.01-1.691,20.526,4.175A10.7,10.7,0,0,1,2826.939,931.759Z" transform="translate(-47.551 -127.253)" fill="#3f8dac"/>
        <path id="Tracciato_429" data-name="Tracciato 429" d="M2830.8,898.568c.453-.851,1.493-3.965,1.036-4.83-.621-1.173-1.661-.939-1.675-1.518l-.369-16.227-16.311.5-.245,15.455c-.012.7-1.687,1.034-1.893,2.621a7.209,7.209,0,0,0,1.034,3.795q.092.176.2.368a10.353,10.353,0,0,0,18.167-.051Z" transform="translate(-55.324 -92.714)" fill="#f2be9f"/>
        <path id="Tracciato_430" data-name="Tracciato 430" d="M2818.939,909.193s-.49,3.185,1.96,4.654,9.7,3.1,12.566-3.227Z" transform="translate(-60.648 -116.034)" fill="#142635" opacity="0.07"/>
        <path id="Tracciato_431" data-name="Tracciato 431" d="M2869.116,1036.215s5.7-.859,7.784.666c2.292,1.678,5.16,7.784,5.16,7.784l-8.639,2.663Z" transform="translate(-98 -203.656)" fill="#f2be9f"/>
        <path id="Tracciato_432" data-name="Tracciato 432" d="M2791.941,1029.983s21.933,6.224,31.867,9.105c3.273.949,14.022,3.829,12.194,11.571-1.433,6.065-5.256,4.884-10.61,3.4-8.757-2.425-35.9-16.619-35.9-16.619Z" transform="translate(-39.993 -200.878)" fill="#e9b89a"/>
        <path id="Tracciato_433" data-name="Tracciato 433" d="M2916.988,954.223s7.531-2.482,6.6,6.908c-1.148,11.53-2.454,29.367-3.272,35.408-.944,6.981-7.9,6.632-10.623,2.115-1.781-2.959-1.266-8.013-.74-13.139.392-3.813.413-7.51,1.512-11.251Z" transform="translate(-123.554 -147.455)" fill="#e9b89a"/>
        <path id="Tracciato_434" data-name="Tracciato 434" d="M2926.953,977.024c-.854-8.073-1.125-26.79-2.148-30.1-2.157-6.958-6.245-6.78-6.245-6.78s-2.573,0-4.275,3.418c-3.786,7.606-3.246,23.867-4.159,31.18C2916.031,975.581,2922.3,977.861,2926.953,977.024Z" transform="translate(-124.727 -137.771)" fill="#a7ddea"/>
        <path id="Tracciato_435" data-name="Tracciato 435" d="M2785.261,1036.784s-18.188,4.089-26.8,7.026c-2.839.968-9.478,2.085-8.656,10.363.613,6.182,1.911,7.324,6.552,5.813,7.591-2.475,33.97-17.722,33.97-17.722Z" transform="translate(-13.704 -204.466)" fill="#f2be9f"/>
        <path id="Tracciato_436" data-name="Tracciato 436" d="M2745.7,962.25s-5.459-4.633-6.131,4.78c-.82,11.558-2.553,29.359-2.77,35.451-.251,7.04,6.668,7.874,10.112,3.883,3.934-4.56,4.421-15.089,3.368-24.169Z" transform="translate(-4.616 -151.312)" fill="#f2be9f"/>
        <path id="Tracciato_437" data-name="Tracciato 437" d="M2732.557,977.024c.854-8.073,1.126-26.79,2.148-30.1,2.157-6.958,6.245-6.78,6.245-6.78s2.574,0,4.275,3.418c3.786,7.606,6.164,26.107,5.743,32.511C2745.063,976.913,2737.209,977.861,2732.557,977.024Z" transform="translate(0 -136.582)" fill="#a7ddea"/>
        <path id="Tracciato_438" data-name="Tracciato 438" d="M2776.307,1033.067c-.685-1.613-.327-3.995-7.225-4.2-2.985-.086-7.056,5.162-7.056,5.162-1.384,1.644.261,3.647,1.5,1.873,1.03-1.473,2.809-2.251,1.142-.065-.947,1.241-2.268,1.38-1.2,2.6.5.571,1.5,1.133,1.874,1.662a3.56,3.56,0,0,0,1.939,1.208c2.227,2.1,4.192-1.389,6.4-3.6C2774.922,1036.466,2777.38,1035.6,2776.307,1033.067Z" transform="translate(-20.329 -200.096)" fill="#e9b89a"/>
        <path id="Tracciato_439" data-name="Tracciato 439" d="M3137.2,941.795c-.779-9.556.981-9.9.981-9.9a50.427,50.427,0,0,1,14.424-3.266c3.723-.2,11.641-.408,15.514-.171,5.858.359,15.681,3.654,16.616,3.827,2.364.424,2.259,9.2,2.259,9.2l-4.265,38.758s1.11,38.2.743,39.143c-1.266,3.265-16.486,2.189-23.111,1.895-13.145-.585-21.708-1.647-21.759-2.4-.044-.614,2.313-36.033,1.733-42.47C3139.872,971.269,3137.7,947.865,3137.2,941.795Z" transform="translate(-284.089 -129.492)" fill="#39b1d9"/>
        <path id="Tracciato_440" data-name="Tracciato 440" d="M3195.939,931.759c-3.221,11.644-19.139,13.288-24.9,2.67a12.558,12.558,0,0,1-1.782-4.979c-.068-2.415,3.726-3.422,6.522-3.829,3.553-.517,21.01-1.691,20.526,4.175A10.7,10.7,0,0,1,3195.939,931.759Z" transform="translate(-306.741 -127.253)" fill="#3f8dac"/>
        <path id="Tracciato_441" data-name="Tracciato 441" d="M3199.8,898.568c.453-.851,1.493-3.965,1.035-4.83-.621-1.173-1.661-.939-1.675-1.518l-.369-16.227-16.311.5-.245,15.455c-.012.7-1.687,1.034-1.893,2.621a7.209,7.209,0,0,0,1.034,3.795q.092.176.2.368a10.353,10.353,0,0,0,18.167-.051Z" transform="translate(-314.514 -92.714)" fill="#f2be9f"/>
        <path id="Tracciato_442" data-name="Tracciato 442" d="M3187.939,919.193s-.49,3.185,1.96,4.654,9.7,3.1,12.566-3.227Z" transform="translate(-319.838 -123.058)" fill="#142635" opacity="0.07"/>
        <path id="Tracciato_443" data-name="Tracciato 443" d="M3241.116,1036.215s5.7-.859,7.784.666c2.292,1.678,5.16,7.784,5.16,7.784l-8.639,2.663Z" transform="translate(-357.218 -205.086)" fill="#f2be9f"/>
        <path id="Tracciato_444" data-name="Tracciato 444" d="M3163.941,1029.983s21.933,6.224,31.867,9.105c3.273.949,14.022,3.829,12.194,11.571-1.433,6.065-5.256,4.884-10.61,3.4-8.757-2.425-35.9-16.619-35.9-16.619Z" transform="translate(-301.291 -200.878)" fill="#e9b89a"/>
        <path id="Tracciato_445" data-name="Tracciato 445" d="M3280.464,952.059s7.079-3.574,7.553,5.85c.578,11.573,1.937,29.406,2.026,35.5.1,7.043-6.831,7.733-10.191,3.67-2.2-2.662-2.443-7.736-2.684-12.883-.179-3.829-.707-7.488-.176-11.351Z" transform="translate(-382.256 -145.676)" fill="#e9b89a"/>
        <path id="Tracciato_446" data-name="Tracciato 446" d="M3286.953,977.024c-.854-8.073-1.125-26.79-2.148-30.1-2.157-6.958-6.245-6.78-6.245-6.78s-2.573,0-4.275,3.418c-3.786,7.606-3.246,23.867-4.159,31.18C3276.031,975.581,3282.3,977.861,3286.953,977.024Z" transform="translate(-377.595 -137.771)" fill="#a7ddea"/>
        <path id="Tracciato_447" data-name="Tracciato 447" d="M3157.261,1036.784s-18.188,4.089-26.8,7.026c-2.839.968-9.478,2.085-8.656,10.363.613,6.182,1.911,7.324,6.552,5.813,7.591-2.475,33.97-17.722,33.97-17.722Z" transform="translate(-273.363 -205.655)" fill="#f2be9f"/>
        <path id="Tracciato_448" data-name="Tracciato 448" d="M3148.307,1033.067c-.685-1.613-.327-3.995-7.225-4.2-2.985-.086-7.056,5.162-7.056,5.162-1.384,1.644.261,3.647,1.5,1.873,1.03-1.473,2.809-2.251,1.142-.065-.947,1.241-2.268,1.38-1.2,2.6.5.571,1.5,1.133,1.874,1.662a3.56,3.56,0,0,0,1.939,1.208c2.227,2.1,4.192-1.389,6.4-3.6C3146.922,1036.466,3149.38,1035.6,3148.307,1033.067Z" transform="translate(-281.627 -200.096)" fill="#e9b89a"/>
        <path id="Tracciato_449" data-name="Tracciato 449" d="M2799.858,827.351s.611,14.1,12.687,12.958,14.412-7.718,13.844-18.5-2.741-11.029-2.741-11.029-6.227-.488-7.26-2.9c0,0-5.749,7.439-10.336,7.244S2798.453,820.048,2799.858,827.351Z" transform="translate(-47.029 -44.869)" fill="#f2be9f"/>
        <ellipse id="Ellisse_55" data-name="Ellisse 55" cx="0.78" cy="1.204" rx="0.78" ry="1.204" transform="translate(2760.605 775.277) rotate(-5.382)" fill="#273237"/>
        <ellipse id="Ellisse_56" data-name="Ellisse 56" cx="0.758" cy="1.159" rx="0.758" ry="1.159" transform="translate(2771.116 775.272) rotate(-5.382)" fill="#273237"/>
        <path id="Tracciato_450" data-name="Tracciato 450" d="M2826.791,882.318s5.679,8.011,11.88.118C2838.671,882.436,2831.123,883.294,2826.791,882.318Z" transform="translate(-66.191 -97.156)" fill="#fff"/>
        <path id="Tracciato_451" data-name="Tracciato 451" d="M2825.5,840.972s-2.121-1.273-4.975.658" transform="translate(-61.789 -67.825)" fill="none" stroke="#283237" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.8"/>
        <path id="Tracciato_452" data-name="Tracciato 452" d="M2857.766,839.382s2.854-1.789,4.975.424" transform="translate(-87.948 -66.518)" fill="none" stroke="#283237" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.8"/>
        <path id="Tracciato_453" data-name="Tracciato 453" d="M3188.465,821.964c8.771,1.6,9.743,4.405,8.81,9.2-.618,3.175-1.314,8.361-1.714,11.5-.326,2.557-1.4,6.053-3.19,8.134-1.45,1.687-4.4,2.838-6.9,3.233-4.385.655-7.922-1.273-11.847-7.575-1.554-5.4-1.41-13.656-1.39-14.427l4.025-3.719S3183.805,821.115,3188.465,821.964Z" transform="translate(-308.394 -54.714)" fill="#f2be9f"/>
        <path id="Tracciato_455" data-name="Tracciato 455" d="M3193,858.33s2.381-2.083,4.761-.6" transform="translate(-324.333 -79.342)" fill="none" stroke="#1d1d1b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
        <path id="Tracciato_456" data-name="Tracciato 456" d="M3221.5,858.939s2.381-1.488,4.464,0" transform="matrix(0.998, 0.07, -0.07, 0.998, -274.523, -303.05)" fill="none" stroke="#1d1d1b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
        <path id="Tracciato_457" data-name="Tracciato 457" d="M3211.734,900.563c-1.979-.1-6.865.3-8.234,0,0,0,1.738,2.853,4.781,2.252A7.306,7.306,0,0,0,3211.734,900.563Z" transform="translate(-331.601 -110.647)" fill="#fff"/>
        <ellipse id="Ellisse_57" data-name="Ellisse 57" cx="0.759" cy="1.172" rx="0.759" ry="1.172" transform="translate(2870.167 779.814) rotate(-5.382)" fill="#273237"/>
        <ellipse id="Ellisse_58" data-name="Ellisse 58" cx="0.738" cy="1.128" rx="0.738" ry="1.128" transform="translate(2880.562 780.175) rotate(-1)" fill="#273237"/>
        <path id="Tracciato_458" data-name="Tracciato 458" d="M2916.307,925.605c-1.123-11.609,1.414-12.024,1.414-12.024a83.917,83.917,0,0,1,20.782-3.967c5.365-.248,16.774-.5,22.354-.208,8.442.436,22.6,4.439,23.942,4.65,3.406.515,3.255,11.179,3.255,11.179l-6.145,47.084s1.6,46.4,1.07,47.552c-1.825,3.966-23.756,2.659-33.3,2.3-18.94-.71-31.279-2-31.352-2.913-.063-.745,3.333-43.775,2.5-51.594C2920.152,961.411,2917.015,932.98,2916.307,925.605Z" transform="translate(-128.867 -116.092)" fill="#39b1d9"/>
        <path id="Tracciato_459" data-name="Tracciato 459" d="M2990.786,936.133s-16.4-18.466-16.6-25.525c-.083-2.933,4.526-4.157,7.924-4.652,4.316-.628,25.523-2.054,24.935,5.072C3006.242,920.816,2990.786,936.133,2990.786,936.133Z" transform="translate(-169.724 -113.373)" fill="#3f8dac"/>
        <path id="Tracciato_460" data-name="Tracciato 460" d="M3011.292,873.092c.551-1.034,1.814-4.816,1.258-5.867-.755-1.425-2.018-1.141-2.035-1.844l-.449-19.712-19.814.6-.3,18.775c-.015.845-2.049,1.257-2.3,3.185a8.758,8.758,0,0,0,1.255,4.61c2.522,4.83,11.311,16.906,11.311,16.906S3008.954,877.475,3011.292,873.092Z" transform="translate(-179.166 -71.414)" fill="#f2be9f"/>
        <path id="Tracciato_461" data-name="Tracciato 461" d="M2976.126,808.5l-1.006.1c-1.508.47-2.367,1.757-1.913,4.059.419,2.089,1.036,4.14,1.248,5.172.735,3.675,4.34,2.379,4.34,2.379Z" transform="translate(-168.951 -45.304)" fill="#f2be9f"/>
        <path id="Tracciato_462" data-name="Tracciato 462" d="M3071.74,805.526l1.007.03a3.883,3.883,0,0,1,.883.326,3.544,3.544,0,0,1,2.048,3.756c-.282,2.117-.937,3.325-1.905,5.793-.931,2.375-2.436,1.749-2.436,1.749Z" transform="translate(-237.963 -43.217)" fill="#f2be9f"/>
        <path id="Tracciato_463" data-name="Tracciato 463" d="M2996.885,886s-.6,3.869,2.381,5.654,11.784,3.765,15.266-3.92Z" transform="translate(-185.633 -99.743)" fill="#142635" opacity="0.07"/>
        <path id="Tracciato_464" data-name="Tracciato 464" d="M3008.063,774.336l-.363,25.151c.063,1.821-1.091,5.891-2.276,7.239,0,0-5.152,5.861-6.921,5.917l-3.049.1-2.936.1c-1.757.06-7.229-5.282-7.229-5.282a14.253,14.253,0,0,1-3.452-7.452l-1.424-25.769Z" transform="translate(-174.097 -21.308)" fill="#f2be9f"/>
        <path id="Tracciato_465" data-name="Tracciato 465" d="M3004.754,767.436s.34-4.016,1.32-11.1a8.431,8.431,0,0,0-1.514-6.55c-1.126-1.428-4.119-5.039-6.329-5.525-3.377-.739-12.01.185-17.035,1.3-3.134.7-5.018,3.07-6.415,5.488a8.353,8.353,0,0,0-.852,5.465c.195,1.595,1.879,11.968,1.879,11.968s1.485.659,1.519-5.109c.039-7.258,4.417-7.978,5.533-7.97.186,0-.593,5.766-.593,5.766s9.521-4.414,10.141-4.535,9.4-4.02,9.918,1.306c.154,1.551.489,11.387.489,11.387S3004.185,769.48,3004.754,767.436Z" transform="translate(-169.468)" fill="#1d1d1b"/>
        <ellipse id="Ellisse_59" data-name="Ellisse 59" cx="0.829" cy="1.278" rx="0.829" ry="1.278" transform="translate(2814.41 769.564) rotate(-5.382)" fill="#273237"/>
        <ellipse id="Ellisse_60" data-name="Ellisse 60" cx="0.805" cy="1.231" rx="0.805" ry="1.231" transform="translate(2825.571 769.558) rotate(-5.382)" fill="#273237"/>
        <path id="Tracciato_466" data-name="Tracciato 466" d="M3007.595,867.171s6.03,8.506,12.614.124C3020.208,867.3,3012.195,868.207,3007.595,867.171Z" transform="translate(-193.19 -86.517)" fill="#fff"/>
        <path id="Tracciato_467" data-name="Tracciato 467" d="M3006.223,821.27s-2.252-1.351-5.283.7" transform="translate(-188.516 -53.969)" fill="none" stroke="#283237" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.849"/>
        <path id="Tracciato_468" data-name="Tracciato 468" d="M3040.484,819.581s3.031-1.9,5.283.451" transform="translate(-216.292 -52.58)" fill="none" stroke="#283237" stroke-linecap="round" stroke-miterlimit="10" stroke-width="0.849"/>
        <path id="Tracciato_469" data-name="Tracciato 469" d="M3061.487,1040.311s6.927-1.043,9.456.809c2.785,2.039,6.269,9.456,6.269,9.456l-10.5,3.235Z" transform="translate(-231.045 -207.927)" fill="#f2be9f"/>
        <path id="Tracciato_470" data-name="Tracciato 470" d="M2967.732,1032.739s26.645,7.561,38.714,11.062c3.977,1.153,17.034,4.651,14.813,14.056-1.74,7.369-6.385,5.934-12.889,4.134-10.637-2.946-43.611-20.189-43.611-20.189Z" transform="translate(-163.102 -202.814)" fill="#e9b89a"/>
        <path id="Tracciato_471" data-name="Tracciato 471" d="M3119.644,940.7s9.149-3.016,8.017,8.391c-1.394,14.008-2.981,35.676-3.974,43.015-1.146,8.48-9.6,8.056-12.905,2.569-2.163-3.595-1.538-9.735-.9-15.962.477-4.633.5-9.123,1.837-13.669Z" transform="translate(-264.614 -137.914)" fill="#e9b89a"/>
        <path id="Tracciato_472" data-name="Tracciato 472" d="M3131.749,968.4c-1.038-9.807-1.367-32.545-2.609-36.571-2.62-8.453-7.586-8.237-7.586-8.237s-3.126,0-5.194,4.152c-4.6,9.24-3.943,28.995-5.052,37.879C3118.48,966.651,3126.1,969.42,3131.749,968.4Z" transform="translate(-266.039 -126.15)" fill="#a7ddea"/>
        <path id="Tracciato_473" data-name="Tracciato 473" d="M2959.617,1041s-22.1,4.967-32.559,8.535c-3.448,1.176-11.514,2.533-10.515,12.589.744,7.51,2.322,8.9,7.959,7.062,9.222-3.006,41.268-21.53,41.268-21.53Z" transform="translate(-129.175 -208.618)" fill="#f2be9f"/>
        <path id="Tracciato_474" data-name="Tracciato 474" d="M2897.261,944.295s-7.49-4.424-6.358,6.983c1.395,14.008,2.981,35.676,3.975,43.015,1.146,8.48,9.6,8.056,12.905,2.569,3.772-6.269,2.191-18.975-.938-29.63Z" transform="translate(-111.142 -140.096)" fill="#f2be9f"/>
        <path id="Tracciato_475" data-name="Tracciato 475" d="M2882.228,968.4c1.038-9.807,1.367-32.545,2.61-36.571,2.62-8.453,7.587-8.237,7.587-8.237s3.126,0,5.194,4.152c4.6,9.24,7.488,31.715,6.977,39.5C2897.421,968.269,2887.879,969.42,2882.228,968.4Z" transform="translate(-105.131 -126.15)" fill="#a7ddea"/>
        <path id="Tracciato_476" data-name="Tracciato 476" d="M2948.739,1036.486c-.832-1.959-.4-4.853-8.777-5.1-3.625-.1-8.572,6.271-8.572,6.271-1.681,2,.318,4.43,1.825,2.276,1.251-1.79,3.413-2.734,1.388-.079-1.151,1.507-2.755,1.677-1.463,3.161.6.693,1.827,1.377,2.277,2.019a4.325,4.325,0,0,0,2.355,1.467c2.706,2.546,5.093-1.688,7.771-4.369C2947.057,1040.615,2950.044,1039.557,2948.739,1036.486Z" transform="translate(-139.214 -201.864)" fill="#e9b89a"/>
      </g>
      <path id="Tracciato_702" data-name="Tracciato 702" d="M864.542,414.762c-4.094-3.171-4.761-5.907-4.761-5.907a8.662,8.662,0,0,0,5.679-.193,30.443,30.443,0,0,1-3-4.311s1.743,1.045,6.287.89,10.958-4.036,18.228,1.784,2.74,16.249,2.74,16.249-3.126-3.135-11.454-6.412S869.963,418.96,864.542,414.762Z" transform="translate(-634.12 -246.817)" fill="#273237"/>
    </g>
    <path id="Tracciato_703" data-name="Tracciato 703" d="M1146-3297.938l-7.948,6.819s-4.171-5.638,0-8.944S1146-3297.938,1146-3297.938Z" transform="translate(-908 3468)" fill="#273237"/>
  </g>
</svg>
<Link to = '/signup-professionista'>
      <button
      
        style={{
          backgroundColor: "#E93323",
          width: 220,
          height: 37,
          borderRadius: 20,
          border: "none",
          color: "white",
          marginTop: 10,
        }}
      >
        <Typography fontWeight="bold"> Inizia la prova gratuita</Typography>
      </button>
      </Link>
    </Grid>
    </>
  );
};

export default EntraNelTeam;