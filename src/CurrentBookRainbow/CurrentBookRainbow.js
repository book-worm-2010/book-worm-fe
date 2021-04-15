import React, { useEffect } from 'react';
import * as d3 from 'd3'; 
import wormImg from '../assets/worm.png';
import bookImg from '../assets/openbook.png';
import { svg } from 'd3';

const CurrentBookRainbow = ({data}) => {
    console.log(data)
    const drawRainbow = () => {
        const rainbowBox = d3.select(".rainbowBox")
        const bookPositionScale = d3.scaleQuantize()
            .domain([0, 1])
            .range([[50, 550], [90, 500], [120, 430], [130, 360], [160, 300], [200, 240], [235, 160], [280, 100], [325, 30], [380, -35]])
        const xScale = d3.scaleLinear()
            .range([70, 1000])
        const tickLabels = data.map(d => d.title)
        const xAxisMaker = d3.axisBottom(xScale)
            .ticks(4)
            .tickFormat((d, i) => tickLabels[i])
        const xAxis = 
            rainbowBox.append("g")
            .attr("transform", "translate(0, 650)")
            .call(xAxisMaker)
        xAxis.selectAll("text")
            .attr("font-size", "22")
            .attr("color", "#F29024")
            .attr("font-family", "Marker Felt, fantasy")
        // xAxis.selectAll(".tick")
        //     .append("image")
        //     .attr("xlink:href", bookImg)
        //     .attr("height", "75")
        //     .attr("width", "75")
        const books = rainbowBox.selectAll(".currentBook")
            .data(data)
            .enter().append("image")
            .attr("class", "currentBook")
            .attr("xlink:href", wormImg)
            .attr("x", (d, i) => bookPositionScale(d.pages)[0] + (175 * i))
            .attr("y", d => bookPositionScale(d.pages)[1])
            .attr("height", "75")
            .attr("width", "75")
    }
    useEffect(() => {
        drawRainbow(); 
    }, [])
    return(
        <svg className="rainbowBox" width="1174" height="605" viewBox="0 0 1174 1100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M395.934 14C389.135 16.8225 382.703 22.7085 377.193 27.5792C370.981 33.0715 363.169 39.974 358.857 47.3896C354.83 54.3159 350.958 61.9132 349.883 70.2418C349.295 74.8005 348.648 79.3221 348.229 83.9131C347.586 90.964 348.354 98.0658 346.567 104.979C345.136 110.514 344.17 117.083 341.772 122.162C337.69 130.805 331.882 139.034 324.815 144.959C318.991 149.842 311.684 152.531 305.044 155.86C297.826 159.48 290.552 162.97 283.929 167.71C271.618 176.52 264.031 192.965 257.127 206.553C253.368 213.952 251.846 224.078 250.884 232.419C249.901 240.948 248.887 249.315 248.561 257.978C247.96 273.958 249.888 293.999 238.649 305.922C234.582 310.237 230.921 314.899 226.731 319.093C222.27 323.559 216.887 327.112 212.046 331.126C204.942 337.016 196.453 340.944 188.883 346.067C178.685 352.969 169.688 363.715 164.362 375.363C158.187 388.87 156.238 403.376 156.638 418.528C157.016 432.858 163.418 446.584 162.986 460.97C162.453 478.701 155.479 496.669 146.115 510.806C137.153 524.339 123.368 532.676 111.729 543.235C107.942 546.67 103.667 549.205 100.747 553.615C97.5443 558.45 94.6611 564.679 92.6474 570.274" stroke="#F29024" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1044.43 14C1037.85 17.3099 1031.87 23.6484 1026.73 28.9072C1020.93 34.837 1013.64 42.2898 1009.88 49.9995C1006.37 57.2006 1003.06 65.0595 1002.6 73.4443C1002.34 78.0337 1002.02 82.5905 1001.94 87.1997C1001.81 94.2788 1003.1 101.306 1001.82 108.33C1000.79 113.955 1000.31 120.577 998.284 125.817C994.843 134.735 989.648 143.364 983.032 149.788C977.578 155.082 970.486 158.295 964.107 162.099C957.171 166.235 950.171 170.244 943.909 175.454C932.272 185.137 925.902 202.091 920.006 216.145C916.795 223.798 916.015 234.008 915.663 242.396C915.302 250.975 914.9 259.393 915.206 268.057C915.769 284.039 919.15 303.886 908.809 316.595C905.067 321.195 901.755 326.111 897.881 330.599C893.757 335.377 888.647 339.313 884.112 343.668C877.455 350.06 869.274 354.596 862.097 360.256C852.428 367.882 844.237 379.255 839.774 391.259C834.597 405.18 833.709 419.789 835.211 434.871C836.632 449.136 844.015 462.359 844.631 476.739C845.39 494.462 839.742 512.89 831.433 527.671C823.479 541.82 810.338 551.139 799.498 562.516C795.971 566.218 791.892 569.058 789.3 573.668C786.458 578.724 784.036 585.145 782.435 590.872" stroke="#3C9F88" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M885.752 14C879.164 17.286 873.155 23.6028 867.995 28.8429C862.178 34.7517 854.862 42.1779 851.073 49.874C847.535 57.0623 844.198 64.9092 843.702 73.2922C843.43 77.8807 843.097 82.4362 842.997 87.0451C842.843 94.1237 844.1 101.155 842.796 108.175C841.751 113.796 841.241 120.416 839.2 125.649C835.727 134.554 830.501 143.165 823.861 149.564C818.388 154.838 811.285 158.026 804.892 161.807C797.941 165.917 790.926 169.901 784.646 175.088C772.974 184.729 766.542 201.66 760.595 215.693C757.357 223.333 756.539 233.541 756.157 241.928C755.765 250.505 755.333 258.922 755.607 267.586C756.112 283.57 759.421 303.429 749.034 316.102C745.275 320.687 741.946 325.591 738.056 330.065C733.914 334.829 728.79 338.746 724.239 343.085C717.559 349.452 709.362 353.958 702.164 359.592C692.467 367.183 684.235 378.526 679.728 390.514C674.502 404.416 673.561 419.022 675.008 434.11C676.376 448.38 683.712 461.63 684.276 476.011C684.971 493.737 679.256 512.144 670.893 526.895C662.888 541.015 649.713 550.286 638.832 561.624C635.291 565.313 631.202 568.138 628.594 572.739C625.733 577.784 623.288 584.197 621.666 589.918" stroke="#E3D1BE" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M735.732 14C728.986 16.9474 722.663 22.951 717.245 27.9225C711.135 33.5284 703.452 40.5738 699.277 48.0676C695.378 55.0671 691.647 62.7344 690.726 71.0815C690.222 75.6503 689.658 80.183 689.324 84.7809C688.811 91.8425 689.71 98.9289 688.051 105.873C686.722 111.434 685.877 118.02 683.573 123.142C679.652 131.86 673.996 140.194 667.04 146.248C661.307 151.238 654.05 154.061 647.474 157.512C640.324 161.265 633.115 164.888 626.58 169.749C614.434 178.785 607.151 195.367 600.499 209.08C596.877 216.547 595.543 226.7 594.735 235.056C593.908 243.603 593.049 251.986 592.883 260.654C592.577 276.643 594.874 296.645 583.857 308.773C579.87 313.162 576.296 317.891 572.184 322.162C567.806 326.709 562.49 330.361 557.724 334.463C550.729 340.483 542.314 344.567 534.84 349.829C524.77 356.917 515.973 367.828 510.864 379.572C504.938 393.191 503.257 407.73 503.936 422.872C504.579 437.193 511.233 450.798 511.066 465.19C510.86 482.928 504.218 501.021 495.117 515.329C486.406 529.024 472.777 537.615 461.335 548.386C457.612 551.891 453.384 554.504 450.546 558.967C447.433 563.86 444.665 570.141 442.755 575.772" stroke="#057196" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M580.911 14C574.066 16.7085 567.536 22.4861 561.946 27.2641C555.643 32.6518 547.717 39.4227 543.282 46.7652C539.139 53.6232 535.141 61.1547 533.927 69.4642C533.263 74.0125 532.54 78.5226 532.044 83.1059C531.283 90.1452 531.933 97.2587 530.031 104.141C528.507 109.651 527.431 116.203 524.949 121.241C520.723 129.816 514.778 137.946 507.613 143.752C501.708 148.537 494.357 151.103 487.663 154.321C480.386 157.82 473.054 161.187 466.352 165.816C453.896 174.42 446.035 190.736 438.905 204.206C435.023 211.541 433.332 221.641 432.231 229.964C431.105 238.476 429.952 246.824 429.481 255.48C428.613 271.449 430.205 291.519 418.769 303.252C414.63 307.499 410.892 312.099 406.632 316.222C402.097 320.613 396.656 324.076 391.749 328.008C384.547 333.779 375.994 337.564 368.339 342.56C358.026 349.29 348.851 359.885 343.332 371.442C336.931 384.844 334.74 399.315 334.887 414.471C335.026 428.806 341.197 442.637 340.525 457.014C339.696 474.734 332.422 492.582 322.824 506.561C313.636 519.942 299.714 528.048 287.9 538.41C284.056 541.782 279.739 544.246 276.746 548.605C273.463 553.387 270.476 559.566 268.369 565.127" stroke="#EB6825" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>

        </svg>
    )
}

export default CurrentBookRainbow;