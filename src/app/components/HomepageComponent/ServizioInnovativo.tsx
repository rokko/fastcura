import { Grid, Typography } from "@mui/material";
import React from "react";

const ServizioInnovativo = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "left",
        alignContent: "left",
        textAlign: "left",
        marginLeft: "1rem",
      }}
    >
      <Grid
        container
        alignItems="left"
        alignContent="left"
        direction="column"
        sm={4}
        lg={10}
        marginTop={15}
      >
        <Grid item>
          <Typography fontWeight="bold" fontSize={25}>
            Un servizio innovativo
          </Typography>
        </Grid>
        <Grid item>
          <Typography fontSize={15} color="#6D6D6D" marginBottom={10}>
            Fastcura è un servizio unico nel suo genere. Al centro di tutto vi è
            la tutela del professionista.
          </Typography>
        </Grid>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="386.954"
          height="379.251"
          viewBox="0 0 386.954 379.251"
        >
          <g
            id="Raggruppa_122"
            data-name="Raggruppa 122"
            transform="translate(-211.773 -243.329)"
          >
            <g
              id="Raggruppa_104"
              data-name="Raggruppa 104"
              transform="translate(365.742 302.673)"
            >
              <g id="Raggruppa_103" data-name="Raggruppa 103">
                <path
                  id="Tracciato_654"
                  data-name="Tracciato 654"
                  d="M524.667,426.844l-.138-.485c1.251-.356,2.5-.773,3.7-1.24l.182.47C527.193,426.061,525.933,426.484,524.667,426.844Zm-3.844.909c-1.291.244-2.607.43-3.911.552l-.047-.5c1.288-.122,2.588-.305,3.864-.546Zm11.2-3.756-.225-.452c1.161-.577,2.309-1.216,3.411-1.9l.266.429C534.363,422.767,533.2,423.413,532.027,424Zm-19.06,4.5c-1.312,0-2.639-.059-3.947-.179l.047-.5c1.291.119,2.6.179,3.9.177Zm25.771-8.65-.3-.4c1.034-.782,2.043-1.622,3-2.5l.34.372C540.806,418.2,539.784,419.053,538.737,419.844Zm-33.631,7.925c-1.289-.241-2.583-.545-3.846-.905l.138-.485c1.248.356,2.527.657,3.8.9Zm39.458-13.248-.373-.34c.872-.958,1.71-1.969,2.491-3.006l.4.3C546.294,412.528,545.446,413.552,544.564,414.521Zm-47.05,11.086c-1.223-.474-2.439-1.011-3.615-1.6l.225-.452c1.162.578,2.363,1.108,3.572,1.577Zm51.8-17.389-.429-.265c.682-1.1,1.321-2.251,1.9-3.412l.451.225C550.652,405.941,550.005,407.1,549.315,408.218Zm-58.869,13.874c-1.117-.689-2.214-1.44-3.263-2.228l.3-.4c1.035.78,2.12,1.521,3.224,2.2Zm62.388-20.94-.471-.182c.47-1.21.888-2.455,1.244-3.7l.485.138C553.733,398.669,553.31,399.929,552.835,401.153Zm-68.694,16.193c-.972-.883-1.913-1.821-2.8-2.789l.372-.34c.875.956,1.8,1.883,2.765,2.755ZM555,393.562l-.5-.093c.24-1.275.421-2.576.542-3.867l.5.046C555.427,390.955,555.243,392.271,555,393.562Zm-76.185,17.96c-.792-1.046-1.544-2.143-2.235-3.258l.429-.265c.682,1.1,1.426,2.185,2.208,3.218ZM555.73,385.7h-.5c0-1.3-.063-2.607-.184-3.9l.5-.047C555.666,383.064,555.729,384.391,555.73,385.7Zm-81.072,19.111c-.583-1.173-1.12-2.388-1.595-3.614l.47-.182c.469,1.211,1,2.412,1.576,3.571Zm80.336-26.968-.5.094c-.239-1.27-.541-2.549-.9-3.8l-.027-.094.484-.139.027.095C554.447,375.266,554.752,376.56,554.994,377.845Zm-82.7,19.471-.485.138-.013-.048c-.356-1.249-.657-2.525-.9-3.8l.5-.094c.238,1.254.536,2.517.887,3.751Zm80.038-26.971c-.47-1.21-1-2.411-1.58-3.569l.451-.225c.585,1.172,1.123,2.387,1.6,3.612Zm-81.486,19.309-.5.048c-.124-1.307-.188-2.635-.19-3.946h.5C470.656,387.05,470.72,388.361,470.842,389.653Zm78-26.285c-.684-1.1-1.429-2.183-2.213-3.217l.4-.3c.793,1.045,1.546,2.14,2.239,3.255Zm-78.016,18.486-.5-.046c.12-1.307.3-2.624.543-3.914l.5.092C471.128,379.263,470.948,380.563,470.829,381.855Zm73.3-24.7c-.875-.955-1.807-1.881-2.768-2.752l.339-.374c.973.881,1.915,1.819,2.8,2.785Zm-71.873,17.03-.485-.138c.358-1.262.781-2.522,1.254-3.747l.471.182C473.029,371.693,472.613,372.939,472.258,374.186Zm66.095-22.268c-1.037-.778-2.122-1.518-3.227-2.2l.265-.43c1.117.688,2.216,1.437,3.264,2.225ZM475.072,366.91l-.452-.224c.584-1.176,1.229-2.338,1.918-3.454l.43.265C476.287,364.6,475.649,365.749,475.072,366.91Zm56.64-19.085c-1.163-.576-2.365-1.105-3.574-1.572l.182-.471c1.223.473,2.44,1.008,3.616,1.591Zm-52.544,12.446-.4-.3c.789-1.049,1.636-2.074,2.517-3.045l.373.339C480.785,358.222,479.948,359.235,479.168,360.272Zm45.266-15.256c-1.248-.354-2.527-.653-3.8-.89l.092-.5c1.29.24,2.584.543,3.847.9Zm-40.025,9.48-.341-.372c.968-.886,1.989-1.737,3.034-2.529l.305.4C486.375,352.779,485.366,353.62,484.409,354.5Zm32.355-10.9c-1.292-.118-2.6-.176-3.9-.173v-.5c1.312,0,2.639.056,3.946.175Zm-26.14,6.194-.266-.428c1.114-.692,2.275-1.339,3.45-1.925l.225.452C492.873,348.462,491.726,349.1,490.625,349.786Zm18.341-6.177c-1.288.123-2.589.309-3.865.551l-.094-.5c1.291-.246,2.606-.433,3.91-.557Zm-11.363,2.7-.182-.47c1.22-.473,2.479-.9,3.744-1.259l.139.485C500.054,345.42,498.809,345.839,497.6,346.306Z"
                  transform="translate(-470.15 -342.914)"
                  fill="#d7e9ff"
                />
              </g>
            </g>
            <g
              id="Raggruppa_110"
              data-name="Raggruppa 110"
              transform="translate(278.902 252.576)"
            >
              <g
                id="Raggruppa_109"
                data-name="Raggruppa 109"
                transform="translate(0)"
              >
                <path
                  id="Tracciato_657"
                  data-name="Tracciato 657"
                  d="M410.226,390.943l-.217-.763c1.969-.562,3.929-1.218,5.826-1.952l.287.74C414.2,389.711,412.218,390.375,410.226,390.943Zm-6.049,1.431c-2.033.383-4.1.676-6.156.869l-.074-.79c2.027-.191,4.074-.481,6.083-.86Zm17.633-5.911-.353-.711c1.828-.909,3.634-1.913,5.369-2.987l.418.675C425.487,384.526,423.66,385.543,421.81,386.462Zm-30,7.077c-2.064,0-4.154-.093-6.211-.282l.073-.79c2.033.187,4.1.281,6.138.278Zm40.561-13.615-.479-.633c1.627-1.231,3.217-2.552,4.723-3.929l.535.586C435.627,377.342,434.018,378.68,432.372,379.925ZM379.44,392.4c-2.03-.38-4.066-.859-6.054-1.425l.217-.763c1.964.56,3.977,1.033,5.982,1.408Zm62.1-20.851-.587-.534c1.371-1.508,2.691-3.1,3.92-4.731l.634.477C444.265,368.411,442.93,370.022,441.542,371.547ZM367.491,389c-1.925-.745-3.839-1.59-5.689-2.511l.353-.71c1.828.909,3.72,1.744,5.622,2.481Zm81.529-27.368-.675-.418c1.074-1.736,2.08-3.542,2.99-5.369l.71.354C451.124,358.044,450.106,359.871,449.02,361.628Zm-92.652,21.836c-1.757-1.086-3.485-2.266-5.134-3.507l.478-.635c1.63,1.227,3.336,2.393,5.074,3.466Zm98.191-32.956-.74-.287c.739-1.9,1.4-3.864,1.957-5.825l.763.217C455.973,346.6,455.306,348.582,454.559,350.508ZM346.443,375.992c-1.529-1.389-3.011-2.866-4.4-4.389l.586-.536c1.377,1.505,2.841,2.964,4.352,4.337ZM457.968,338.56l-.781-.146c.377-2.008.663-4.055.852-6.086l.791.073C458.639,334.457,458.349,336.529,457.968,338.56ZM338.061,366.827c-1.247-1.647-2.43-3.372-3.518-5.127l.675-.418c1.074,1.734,2.244,3.438,3.477,5.066ZM459.116,326.19h-.794c0-2.039-.1-4.1-.289-6.137l.79-.074C459.016,322.038,459.114,324.127,459.116,326.19Zm-127.6,30.078c-.919-1.846-1.763-3.759-2.51-5.687l.741-.287c.738,1.906,1.572,3.8,2.48,5.621Zm126.439-42.444-.78.147c-.376-2-.85-4.011-1.411-5.98l-.042-.148.763-.219.042.15C457.1,309.765,457.576,311.8,457.957,313.824ZM327.793,344.469l-.764.217-.021-.074c-.559-1.966-1.035-3.976-1.413-5.973l.78-.148c.374,1.975.844,3.961,1.4,5.9Zm125.97-42.45c-.741-1.9-1.577-3.795-2.487-5.618l.71-.354c.921,1.844,1.767,3.757,2.517,5.684Zm-128.25,30.389-.79.075c-.2-2.057-.3-4.146-.3-6.211h.794C325.22,328.311,325.32,330.376,325.513,332.409Zm122.767-41.37c-1.077-1.733-2.248-3.436-3.482-5.062l.632-.48c1.248,1.645,2.434,3.368,3.524,5.122Zm-122.788,29.1-.79-.073c.188-2.056.476-4.129.855-6.16l.781.145C325.963,316.055,325.679,318.1,325.492,320.135Zm115.369-38.874c-1.378-1.5-2.844-2.961-4.357-4.332l.533-.588c1.53,1.387,3.014,2.862,4.409,4.384Zm-113.119,26.8-.764-.217c.564-1.985,1.229-3.969,1.974-5.9l.74.286C328.955,304.142,328.3,306.1,327.742,308.065Zm104.025-35.047c-1.632-1.225-3.34-2.39-5.078-3.46l.417-.676c1.759,1.083,3.487,2.261,5.139,3.5Zm-99.6,23.6-.711-.353c.919-1.85,1.935-3.679,3.019-5.436l.676.417C334.081,292.978,333.078,294.786,332.17,296.614Zm89.144-30.037c-1.829-.908-3.722-1.74-5.625-2.475l.286-.741c1.926.744,3.841,1.586,5.692,2.5Zm-82.7,19.588-.634-.477c1.241-1.651,2.574-3.264,3.961-4.792l.588.533C341.161,282.94,339.843,284.534,338.616,286.165Zm71.244-24.01c-1.965-.557-3.978-1.029-5.984-1.4l.145-.781c2.03.377,4.067.854,6.056,1.418Zm-62.994,14.92-.536-.586c1.524-1.4,3.13-2.734,4.775-3.981l.479.633C349.959,274.373,348.371,275.7,346.866,277.075Zm50.923-17.162c-2.033-.185-4.1-.276-6.138-.272l0-.794c2.064,0,4.154.088,6.211.275Zm-41.142,9.749-.418-.674c1.754-1.089,3.58-2.108,5.429-3.03l.354.71C360.186,267.58,358.381,268.587,356.648,269.662Zm28.867-9.722c-2.027.194-4.074.486-6.082.867l-.148-.78c2.032-.386,4.1-.681,6.155-.877Zm-17.883,4.245-.287-.74c1.919-.745,3.9-1.411,5.892-1.981l.219.763C371.488,262.791,369.529,263.45,367.632,264.186Z"
                  transform="translate(-324.423 -258.847)"
                  fill="#d7e9ff"
                />
              </g>
            </g>
            <path
              id="Tracciato_658"
              data-name="Tracciato 658"
              d="M671.879,251.4l1.909,12.259-8.877-6.181-27.039-13.053,20.719,1.427s10.591,2.322,11.173,2.825A25.686,25.686,0,0,1,671.879,251.4Z"
              transform="translate(-172.183 -0.444)"
              fill="#8c2911"
            />
            <path
              id="Tracciato_659"
              data-name="Tracciato 659"
              d="M680.867,243.329l-43,.655,34.008,6.976Z"
              transform="translate(-172.183 0)"
              fill="#ff3617"
            />
            <path
              id="Tracciato_660"
              data-name="Tracciato 660"
              d="M658.338,264.086l11.06-9.3-31.527-10.355Z"
              transform="translate(-172.183 -0.444)"
              fill="#ff3617"
            />
            <g
              id="Raggruppa_114"
              data-name="Raggruppa 114"
              transform="translate(508.543 255.416)"
            >
              <g id="Raggruppa_113" data-name="Raggruppa 113">
                <g
                  id="Raggruppa_111"
                  data-name="Raggruppa 111"
                  transform="translate(9.076 3.137)"
                >
                  <path
                    id="Tracciato_661"
                    data-name="Tracciato 661"
                    d="M768.126,304.989l-1.005.125q-.051-.416-.116-.83a26.348,26.348,0,0,0-.6-2.817c-.232-.857-.512-1.719-.832-2.562l.946-.359c.332.874.623,1.768.863,2.657a27.431,27.431,0,0,1,.623,2.925C768.049,304.408,768.09,304.7,768.126,304.989Zm-5.461-11.8a37.559,37.559,0,0,0-3.954-5.084l.744-.686a38.517,38.517,0,0,1,4.061,5.221ZM730.981,291.5a5.637,5.637,0,0,1-3.583-.383,5.355,5.355,0,0,1-2.08-2.236l.9-.465a4.294,4.294,0,0,0,1.68,1.82,4.665,4.665,0,0,0,2.82.286.589.589,0,0,0,.1-.034l.142-.1.581.83c-.057.04-.114.079-.173.117A1.317,1.317,0,0,1,730.981,291.5ZM754,283.686a51.618,51.618,0,0,0-5.272-3.752l.536-.86a52.642,52.642,0,0,1,5.375,3.827Zm-18.936,1.766-1-.185a9.351,9.351,0,0,0,.157-1.9,11.305,11.305,0,0,0-.4-2.72,13.57,13.57,0,0,0-.507-1.505l.94-.377a14.551,14.551,0,0,1,.544,1.618,12.277,12.277,0,0,1,.436,2.965A10.341,10.341,0,0,1,735.059,285.452Zm-8.97-2.915-.923-.416a10.185,10.185,0,0,1,4.626-4.717l.138-.07.451.907-.127.064A9.161,9.161,0,0,0,726.089,282.537Zm16.693-4.919a20.944,20.944,0,0,0-4.02-.844c-.81-.02-1.551-.012-2.263.026l-.054-1.011c.739-.039,1.5-.048,2.342-.027a23.157,23.157,0,0,1,4.268.883ZM729.91,273.81a21.629,21.629,0,0,0-4.895-4.068l.527-.865a22.64,22.64,0,0,1,5.122,4.259Z"
                    transform="translate(-725.015 -268.876)"
                    fill="#d7e9ff"
                  />
                </g>
                <g id="Raggruppa_112" data-name="Raggruppa 112">
                  <path
                    id="Tracciato_662"
                    data-name="Tracciato 662"
                    d="M713,265.152a19.489,19.489,0,0,0-3.21-.53l.08-1.009a20.556,20.556,0,0,1,3.377.558Z"
                    transform="translate(-709.785 -263.612)"
                    fill="#d7e9ff"
                  />
                </g>
              </g>
            </g>
            <g
              id="Raggruppa_116"
              data-name="Raggruppa 116"
              transform="translate(221.876 399.874)"
            >
              <g
                id="Raggruppa_115"
                data-name="Raggruppa 115"
                transform="translate(0 0)"
              >
                <path
                  id="Tracciato_663"
                  data-name="Tracciato 663"
                  d="M384.293,589.818l-.916-.069c.179-2.363.252-4.753.216-7.106l.918-.014C384.548,585.01,384.474,587.428,384.293,589.818Zm-.871,7.138c-.4,2.36-.91,4.726-1.522,7.03l-.888-.236c.6-2.277,1.111-4.614,1.5-6.947Zm.647-21.505-.913.1c-.254-2.348-.621-4.711-1.092-7.023l.9-.184C383.441,570.684,383.812,573.075,384.069,575.451Zm-4.335,35.393c-.824,2.242-1.764,4.472-2.795,6.628l-.828-.4c1.018-2.132,1.947-4.335,2.761-6.55Zm1.471-49.475-.879.266c-.684-2.259-1.481-4.513-2.372-6.7l.85-.346C379.705,556.8,380.513,559.083,381.2,561.369Zm-7.664,62.445c-1.225,2.051-2.561,4.069-3.972,6l-.741-.542c1.394-1.908,2.714-3.9,3.925-5.929Zm2.245-75.754-.815.423c-1.087-2.092-2.287-4.162-3.565-6.15l.773-.5C373.472,543.849,374.686,545.943,375.786,548.06Zm-10.725,87.361c-1.58,1.79-3.264,3.53-5,5.169l-.629-.669c1.719-1.62,3.383-3.338,4.945-5.108Zm2.953-99.45-.724.566c-1.453-1.861-3.011-3.676-4.63-5.4l.669-.629C364.967,532.252,366.544,534.088,368.015,535.971ZM354.6,645.278c-1.883,1.472-3.856,2.875-5.864,4.167l-.5-.772c1.984-1.277,3.934-2.663,5.795-4.118Zm3.562-119.773-.608.688c-1.77-1.565-3.634-3.065-5.538-4.458l.542-.741C354.487,522.4,356.373,523.922,358.164,525.505ZM342.517,653.056c-2.12,1.1-4.316,2.12-6.527,3.022l-.347-.85c2.185-.891,4.354-1.9,6.45-2.986Zm4.046-136.037-.471.788c-2.028-1.213-4.135-2.344-6.264-3.362l.4-.829C342.378,514.647,344.511,515.793,346.563,517.02ZM329.211,658.482c-2.287.693-4.634,1.287-6.974,1.765l-.184-.9c2.313-.472,4.631-1.058,6.891-1.744ZM333.6,510.819l-.317.862c-2.214-.815-4.494-1.537-6.777-2.144l.237-.887C329.05,509.263,331.356,509.993,333.6,510.819ZM315.131,661.355c-2.371.258-4.786.408-7.179.446l-.014-.918c2.364-.038,4.751-.186,7.094-.441Zm4.58-154.232-.153.906c-2.32-.393-4.694-.684-7.055-.865l-.178-.013.069-.916.179.013C314.961,506.431,317.363,506.725,319.711,507.123ZM300.833,660.671l-.07.915-.089-.007c-2.357-.181-4.729-.47-7.049-.86l.152-.905c2.293.385,4.637.671,6.967.849Zm4.386-153.725c-2.363.041-4.75.191-7.093.449l-.1-.913c2.371-.26,4.786-.413,7.178-.454ZM286.83,658.314l-.235.888c-2.311-.611-4.619-1.339-6.86-2.162l.316-.862C282.265,656.991,284.546,657.71,286.83,658.314ZM291.105,508.5c-2.313.475-4.63,1.064-6.889,1.752l-.268-.879c2.285-.7,4.631-1.292,6.972-1.772ZM273.5,653.421l-.4.829c-2.157-1.029-4.291-2.171-6.344-3.395l.471-.789C269.26,651.276,271.369,652.4,273.5,653.421Zm4.022-140.787c-2.184.894-4.353,1.9-6.447,2.994l-.425-.815c2.119-1.105,4.314-2.124,6.524-3.029ZM261.3,646.145l-.542.741c-1.929-1.408-3.816-2.923-5.609-4.5l.607-.689C257.529,643.256,259.395,644.754,261.3,646.145Zm3.63-126.942c-1.983,1.28-3.931,2.668-5.79,4.125l-.567-.723c1.881-1.475,3.852-2.879,5.858-4.174ZM250.646,636.751l-.668.63c-1.64-1.738-3.219-3.573-4.691-5.454l.723-.566C247.466,633.22,249.025,635.033,250.646,636.751Zm3.108-108.784c-1.717,1.622-3.379,3.342-4.939,5.114l-.689-.607c1.579-1.792,3.26-3.534,5-5.175Zm-11.866,97.6-.772.5c-1.295-2.009-2.511-4.1-3.615-6.219l.815-.424C239.407,621.516,240.609,623.584,241.888,625.569Zm2.478-86.942c-1.392,1.909-2.71,3.906-3.917,5.933l-.79-.47c1.222-2.052,2.556-4.072,3.965-6Zm-9.04,74.347-.85.347c-.9-2.213-1.714-4.493-2.408-6.777l.879-.266C233.633,608.536,234.433,610.788,235.326,612.974Zm1.771-62.144c-1.015,2.132-1.941,4.336-2.754,6.553l-.862-.316c.822-2.243,1.759-4.474,2.786-6.632Zm-5.9,48.558-.9.184c-.479-2.34-.853-4.731-1.113-7.106l.913-.1C230.357,594.714,230.727,597.076,231.2,599.388Zm1.012-35.225c-.6,2.278-1.105,4.616-1.5,6.948l-.906-.152c.4-2.36.9-4.726,1.514-7.031Zm-2.556,21.109-.918.015c-.039-2.381.032-4.8.21-7.189l.915.069C229.686,580.529,229.616,582.92,229.655,585.273Z"
                  transform="translate(-228.726 -506.028)"
                  fill="#d7e9ff"
                />
              </g>
            </g>
            <g
              id="Raggruppa_117"
              data-name="Raggruppa 117"
              transform="translate(228.647 509.481)"
              opacity="0.66"
            >
              <path
                id="Tracciato_664"
                data-name="Tracciato 664"
                d="M713.234,864.149a8.6,8.6,0,0,0-8.6,8.6c0,.236.013.469.031.7H721.8c.018-.231.03-.464.03-.7A8.6,8.6,0,0,0,713.234,864.149Z"
                transform="translate(-427.808 -760.349)"
                fill="#39b1d9"
              />
              <path
                id="Tracciato_665"
                data-name="Tracciato 665"
                d="M497.707,784.751a16.748,16.748,0,0,0-5.838,1.045,23.45,23.45,0,1,0-46.627,4.857,17.184,17.184,0,0,0-18.437,5.665c-19.436-24.785-29.343-61.358-32.441-106.357h-28.91c-3.4,40.535-11.928,73.633-26.712,97.657a17.2,17.2,0,0,0-19.086-4.9,27.965,27.965,0,0,0-53.074,8.043c-.279-.017-.561-.029-.845-.029a13.792,13.792,0,0,0-12.367,7.683,8,8,0,0,0-13.28,4.649l183.49-.387c-.035.13,90.837.387,90.837.387.045-.5.072-1.012.072-1.527A16.783,16.783,0,0,0,497.707,784.751Z"
                transform="translate(-240.09 -689.961)"
                fill="#39b1d9"
              />
            </g>
            <path
              id="Rettangolo_113"
              data-name="Rettangolo 113"
              d="M0,0H35.543a0,0,0,0,1,0,0V8.017a2.234,2.234,0,0,1-2.234,2.234H2.234A2.234,2.234,0,0,1,0,8.017V0A0,0,0,0,1,0,0Z"
              transform="translate(350.695 499.788)"
              fill="#ff3617"
            />
            <g
              id="Raggruppa_118"
              data-name="Raggruppa 118"
              transform="translate(309.606 450.172)"
            >
              <path
                id="Tracciato_666"
                data-name="Tracciato 666"
                d="M407.106,590.434s-13.406,17.858-22.937,28.84c-12.863,14.821-9.445,16.709,2.074,57.816,29.318-19.743,16.812-48.23,27.339-53.97C432.791,612.647,407.106,590.434,407.106,590.434Z"
                transform="translate(-375.948 -590.434)"
                fill="#39b1d9"
              />
              <path
                id="Tracciato_667"
                data-name="Tracciato 667"
                d="M511.982,590.434s13.406,17.858,22.937,28.84c12.863,14.821,9.445,16.709-2.074,57.816-29.318-19.743-16.812-48.23-27.339-53.97C486.3,612.647,511.982,590.434,511.982,590.434Z"
                transform="translate(-425.42 -590.434)"
                fill="#39b1d9"
              />
            </g>
            <g
              id="Raggruppa_119"
              data-name="Raggruppa 119"
              transform="translate(332.004 354.223)"
            >
              <path
                id="Tracciato_668"
                data-name="Tracciato 668"
                d="M486.458,511.284c0-34.426-19.895-65.161-30.194-78.765a7.817,7.817,0,0,0-12.319-.185c-10.492,13.023-30.412,42.348-30.412,77.276,0,14.112,9.671,54.191,14.713,64.405a7.165,7.165,0,0,0,6.422,4h31.425a7.165,7.165,0,0,0,6.423-4C477.557,563.8,486.458,525.4,486.458,511.284Z"
                transform="translate(-413.533 -429.422)"
                fill="#ff3617"
              />
            </g>
            <path
              id="Tracciato_669"
              data-name="Tracciato 669"
              d="M472.516,588.292c5.041-10.214,13.942-48.62,13.942-62.732,0-20.968-7.38-40.566-15.477-55.759a44.4,44.4,0,0,0-43.088,1.084c-7.669,14.4-14.36,32.757-14.36,53,0,14.112,9.671,54.191,14.713,64.405a7.165,7.165,0,0,0,6.422,4h31.425A7.165,7.165,0,0,0,472.516,588.292Z"
              transform="translate(-81.529 -89.475)"
              fill="#ff3617"
            />
            <g
              id="Raggruppa_121"
              data-name="Raggruppa 121"
              transform="translate(342.89 393.719)"
            >
              <circle
                id="Ellisse_76"
                data-name="Ellisse 76"
                cx="22.387"
                cy="22.387"
                r="22.387"
                transform="translate(4.586 3.581)"
                fill="#39b1d9"
                className="svg-stile"
              />
              <circle
                id="Ellisse_77"
                data-name="Ellisse 77"
                cx="22.387"
                cy="22.387"
                r="22.387"
                transform="translate(0 44.195) rotate(-80.783)"
                fill="#39b1d9"
              />
              <path
                id="Tracciato_670"
                data-name="Tracciato 670"
                d="M438.338,523.953a22.4,22.4,0,0,1,28.924-21.415,22.39,22.39,0,1,0-14.079,42.5A22.394,22.394,0,0,1,438.338,523.953Z"
                transform="translate(-434.036 -497.936)"
                fill="#39b1d9"
              />
              <path
                id="Tracciato_671"
                data-name="Tracciato 671"
                d="M475.95,570.383a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,475.95,570.383Z"
                transform="translate(-448.275 -525.196)"
                fill="#39b1d9"
                className="svg-stile"
              />
              <path
                id="Tracciato_672"
                data-name="Tracciato 672"
                d="M475.77,505.88a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,475.77,505.88Z"
                transform="translate(-448.203 -499.131)"
                fill="#39b1d9"
                className="svg-stile"
              />
              <path
                id="Tracciato_673"
                data-name="Tracciato 673"
                d="M500.027,516.658a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,500.027,516.658Z"
                transform="translate(-458.005 -503.486)"
                fill="#39b1d9"
                className="svg-stile"
              />
              <path
                id="Tracciato_674"
                data-name="Tracciato 674"
                d="M452.873,561.213a1.69,1.69,0,1,1-1.69-1.691A1.69,1.69,0,0,1,452.873,561.213Z"
                transform="translate(-438.95 -521.49)"
                fill="#39b1d9"
                className="svg-stile"
              />
              <path
                id="Tracciato_675"
                data-name="Tracciato 675"
                d="M500.027,559.96a1.69,1.69,0,1,1-1.69-1.691A1.69,1.69,0,0,1,500.027,559.96Z"
                transform="translate(-458.005 -520.984)"
                fill="#39b1d9"
                className="svg-stile"
              />
              <path
                id="Tracciato_676"
                data-name="Tracciato 676"
                d="M451.739,516.21a1.69,1.69,0,1,1-1.691-1.691A1.69,1.69,0,0,1,451.739,516.21Z"
                transform="translate(-438.492 -503.305)"
                fill="#39b1d9"
                className="svg-stile"
              />
              <path
                id="Tracciato_677"
                data-name="Tracciato 677"
                d="M508.411,538.214a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,508.411,538.214Z"
                transform="translate(-461.393 -512.197)"
                fill="#39b1d9"
                className="svg-stile"
              />
              <path
                id="Tracciato_678"
                data-name="Tracciato 678"
                d="M442.946,538.214a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,442.946,538.214Z"
                transform="translate(-434.939 -512.197)"
                fill="#39b1d9"
                className="svg-stile"
              />
              <circle
                id="Ellisse_78"
                data-name="Ellisse 78"
                cx="16.424"
                cy="16.424"
                r="16.424"
                transform="translate(9.26 9.26)"
                fill="#39b1d9"
              />
              <path
                id="Tracciato_679"
                data-name="Tracciato 679"
                d="M449.224,529.687a16.424,16.424,0,0,1,27.464-12.161,16.424,16.424,0,1,0-23.963,22.3A16.351,16.351,0,0,1,449.224,529.687Z"
                transform="translate(-438.08 -501.979)"
                fill="#39b1d9"
                className="svg-stile"
              />
              <g
                id="Raggruppa_120"
                data-name="Raggruppa 120"
                transform="translate(4.326 4.796)"
              >
                <path
                  id="Tracciato_680"
                  data-name="Tracciato 680"
                  d="M475.445,569.943a1.69,1.69,0,1,1-1.69-1.691A1.69,1.69,0,0,1,475.445,569.943Z"
                  transform="translate(-452.398 -529.814)"
                  fill="#39b1d9"
                />
                <path
                  id="Tracciato_681"
                  data-name="Tracciato 681"
                  d="M474.265,571.391a.939.939,0,1,1,.939-.939A.94.94,0,0,1,474.265,571.391Z"
                  transform="translate(-452.907 -530.324)"
                  fill="#39b1d9"
                  className="svg-stile2"
                />
                <path
                  id="Tracciato_682"
                  data-name="Tracciato 682"
                  d="M475.266,505.439a1.69,1.69,0,1,1-1.691-1.69A1.69,1.69,0,0,1,475.266,505.439Z"
                  transform="translate(-452.325 -503.749)"
                  fill="#39b1d9"
                />
                <path
                  id="Tracciato_683"
                  data-name="Tracciato 683"
                  d="M474.085,506.887a.939.939,0,1,1,.939-.939A.94.94,0,0,1,474.085,506.887Z"
                  transform="translate(-452.834 -504.259)"
                  fill="#39b1d9"
                  className="svg-stile2"
                />
                <path
                  id="Tracciato_684"
                  data-name="Tracciato 684"
                  d="M499.522,516.217a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,499.522,516.217Z"
                  transform="translate(-462.127 -508.104)"
                  fill="#39b1d9"
                />
                <path
                  id="Tracciato_685"
                  data-name="Tracciato 685"
                  d="M498.342,517.665a.939.939,0,1,1,.939-.939A.939.939,0,0,1,498.342,517.665Z"
                  transform="translate(-462.637 -508.614)"
                  fill="#39b1d9"
                  className="svg-stile2"
                />
                <path
                  id="Tracciato_686"
                  data-name="Tracciato 686"
                  d="M452.368,560.772a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,452.368,560.772Z"
                  transform="translate(-443.072 -526.109)"
                  fill="#39b1d9"
                />
                <path
                  id="Tracciato_687"
                  data-name="Tracciato 687"
                  d="M451.188,562.22a.939.939,0,1,1,.939-.938A.94.94,0,0,1,451.188,562.22Z"
                  transform="translate(-443.582 -526.618)"
                  fill="#39b1d9"
                  className="svg-stile2"
                />
                <path
                  id="Tracciato_688"
                  data-name="Tracciato 688"
                  d="M499.522,559.519a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,499.522,559.519Z"
                  transform="translate(-462.127 -525.602)"
                  fill="#39b1d9"
                />
                <circle
                  id="Ellisse_79"
                  data-name="Ellisse 79"
                  cx="0.938"
                  cy="0.938"
                  r="0.938"
                  transform="translate(34.767 32.979)"
                  fill="#39b1d9"
                  className="svg-stile2"
                />
                <path
                  id="Tracciato_689"
                  data-name="Tracciato 689"
                  d="M451.234,515.769a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,451.234,515.769Z"
                  transform="translate(-442.614 -507.923)"
                  fill="#39b1d9"
                />
                <path
                  id="Tracciato_690"
                  data-name="Tracciato 690"
                  d="M450.054,517.217a.939.939,0,1,1,.939-.939A.94.94,0,0,1,450.054,517.217Z"
                  transform="translate(-443.124 -508.433)"
                  fill="#39b1d9"
                  className="svg-stile2"
                />
                <path
                  id="Tracciato_691"
                  data-name="Tracciato 691"
                  d="M507.906,537.773a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,507.906,537.773Z"
                  transform="translate(-465.515 -516.815)"
                  fill="#39b1d9"
                />
                <path
                  id="Tracciato_692"
                  data-name="Tracciato 692"
                  d="M506.726,539.222a.938.938,0,1,1,.939-.939A.94.94,0,0,1,506.726,539.222Z"
                  transform="translate(-466.024 -517.325)"
                  fill="#39b1d9"
                  className="svg-stile2"
                />
                <path
                  id="Tracciato_693"
                  data-name="Tracciato 693"
                  d="M442.441,537.773a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,442.441,537.773Z"
                  transform="translate(-439.061 -516.815)"
                  fill="#39b1d9"
                />
                <path
                  id="Tracciato_694"
                  data-name="Tracciato 694"
                  d="M441.261,539.222a.938.938,0,1,1,.939-.939A.939.939,0,0,1,441.261,539.222Z"
                  transform="translate(-439.571 -517.325)"
                  fill="#39b1d9"
                  className="svg-stile2"
                />
              </g>
              <path
                id="Tracciato_695"
                data-name="Tracciato 695"
                d="M477.142,531.482a13.4,13.4,0,0,1-22.034,6.506,13.808,13.808,0,1,0,19.128-18.708A13.38,13.38,0,0,1,477.142,531.482Z"
                transform="translate(-441.219 -505.229)"
                fill="#39b1d9"
                className="svg-stile2"
              />
            </g>
            <path
              id="Tracciato_696"
              data-name="Tracciato 696"
              d="M476.223,643.013c0,21.761-2.159,35.8-4.665,39.4-2.591-3.748-4.664-17.641-4.664-39.4a171.577,171.577,0,0,1,4.664-39.4A171.554,171.554,0,0,1,476.223,643.013Z"
              transform="translate(-103.092 -145.587)"
              fill="#39b1d9"
            />
            <path
              id="Tracciato_697"
              data-name="Tracciato 697"
              d="M419.314,520.235c0-36.374,21.376-66.912,32.635-80.473l.031-.037a1.581,1.581,0,0,0-1.835-2.457,7.75,7.75,0,0,0-3.184,2.289c-10.492,12.637-30.412,41.094-30.412,74.99,0,13.5,8.687,46.88,13.784,57.455C424.973,555.25,419.314,531.747,419.314,520.235Z"
              transform="translate(-82.748 -78.321)"
              fill="#ff3617"
              className="svg-stile2"
            />
            <path
              id="Tracciato_698"
              data-name="Tracciato 698"
              d="M234.912,615.532h-7.975v-7.975h-7.189v7.975h-7.975v7.189h7.975V630.7h7.189v-7.975h7.975Z"
              transform="translate(0 -147.181)"
              fill="#ff3617"
            />
            <path
              id="Tracciato_699"
              data-name="Tracciato 699"
              d="M834.43,779.861H820.862V766.292H808.631v13.568H795.063v12.231h13.568V805.66h12.231V792.091H834.43Z"
              transform="translate(-235.702 -211.325)"
              fill="#ff3617"
            />
            <path
              id="Tracciato_701"
              data-name="Tracciato 701"
              d="M624.8,594.789h-4v-4h-3.6v4h-4v3.6h4v4h3.6v-4h4Z"
              transform="translate(-162.211 -140.406)"
              fill="#ff3617"
            />
          </g>
        </svg>
      </Grid>
    </div>
  );
};

export default ServizioInnovativo;
