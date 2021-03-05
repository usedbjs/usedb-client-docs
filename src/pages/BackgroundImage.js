import React from "react";
import useThemeContext from "@theme/hooks/useThemeContext";
function BackgroundImage() {
  const { isDarkTheme } = useThemeContext();
  return (
    <svg
      id="backgroundImage"
      xmlns="http://www.w3.org/2000/svg"
      //   width="1440"
      width="100%"
      height="690"
      preserveAspectRatio="none"
      viewBox="0 0 1440 690"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.978"
          x2="0"
          y1="0.877"
          y2="0.414"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#21232b"></stop>
          <stop offset="1" stopColor="#343434"></stop>
        </linearGradient>
        <clipPath id="clip-path">
          <path
            fill="#fff"
            stroke="#707070"
            strokeWidth="1"
            d="M0 0H1440V682H0z"
            data-name="Rectangle 2"
            transform="translate(-3281 -591.704)"
          ></path>
        </clipPath>
      </defs>
      <g data-name="Group 6" transform="translate(0 -123)">
        <path
          fill={isDarkTheme ? "#000" : "#fff"}
          d="M0 0H1440V690H0z"
          data-name="Rectangle 1"
          transform="translate(0 123)"
        ></path>
        <g
          clipPath="url(#clip-path)"
          data-name="Mask Group 1"
          transform="translate(3281 715.704)"
        >
          <g data-name="Group 2" transform="translate(-3802.765 1358.843)">
            <g
              fill="none"
              stroke="#b2acac"
              strokeWidth="0.774"
              data-name="Group 1"
            >
              <path
                d="M1332.126-1305.4l79.083-47.178-36.724-47.574z"
                data-name="Path 1"
              ></path>
              <path
                d="M1411.209-1352.773l87.767-39.446-78.748-19.818z"
                data-name="Path 2"
              ></path>
              <path
                d="M1374.383-1400.149l47.484-11.694-2.509-53.894-30.982-22.167z"
                data-name="Path 3"
              ></path>
              <path
                d="M1374.733-1400.156l44.4-65.94 26.533-56.315 92.143-31.429-22.042 95.333-70.1-62.014"
                data-name="Path 4"
              ></path>
              <path
                d="M1498.976-1391.7l-33.634 61.232 125.316-71.392z"
                data-name="Path 5"
              ></path>
              <path
                d="M1411.209-1352.773l212.858 81.683-33.718-130.3 1.824-.217 110.713-13.175-29.051 101.636-79.057-85.705"
                data-name="Path 6"
              ></path>
              <path
                d="M1623.511-1271.09l49.217-41.425 67.6-23.064-36.357-78.812 23.06-40.38 33.215 59.579-53.322-19.2"
                data-name="Path 7"
              ></path>
              <path
                d="M1590.659-1401.862l3.581-30.058 109.033 17.424-8.1-55.137-97.133 37.714 28.809-75.828 69.671 38.115 51.15-53.2-20.379 68.22-30.771-12.77"
                data-name="Path 8"
              ></path>
              <path
                d="M1497.881-1394.058l-6.722-28.646 99.274 21.041"
                data-name="Path 9"
              ></path>
              <path
                d="M1463.526-1433.126l34.181 39.565"
                data-name="Path 10"
              ></path>
              <path
                d="M1421.87-1412.036l41.037-20.846-42.341-32.458 95.979 7.645-50.556 23.016 25.341 11.892 23.924-33.151 4.057-4.653 108.732-46.645 118.147-14.421"
                data-name="Path 11"
              ></path>
              <path
                d="M1518.647-1457.661l74.753 26.361-100.88 9.1"
                data-name="Path 12"
              ></path>
              <path
                d="M1355.236-1511.656l32.916 23.516 55.928-33.611z"
                data-name="Path 13"
              ></path>
              <path
                d="M1432.073-1550.769l13.157 28 32.835-34.412z"
                data-name="Path 14"
              ></path>
              <path
                d="M1355.236-1513.008l76.54-37.827"
                data-name="Path 15"
              ></path>
              <path
                d="M1478.065-1557.177l61.369 2.881 16.217-26.765-73.8 22.549"
                data-name="Path 16"
              ></path>
              <path
                d="M1556.792-1581.061l70 74.02-87.141-46.711"
                data-name="Path 17"
              ></path>
              <path
                d="M1558.892-1581.061l77.405-9.556-9.861 81.855 28.66-84.36-16.716 2.5-31.361-24.479-48.126 32.123 45.284-46.506 68.351-2.471-62.145 16.854"
                data-name="Path 18"
              ></path>
              <path
                d="M1610.687-1613.589L1655-1593.98l17.283-37.414 108.81 50.513-123.877-13.1 88.731 70.669 35.146-54.927 31.678 23.484-63 31.444 90.042-18.807-24.673-12.637 111.682-33.092-84.932 45.729 58.1 24.15-27.338 22.418-32.837-44.506-32.578 83.28-61.287-64.36"
                data-name="Path 19"
              ></path>
              <path
                d="M1740.483-1337.047l20.146-57.221 34.329-24.19-66.676-37.405H1807l-12.044 35.623 74.691-17.18-60.854-18.443 62.928-38.4-2.073 53.313 21.766 3.532-18.339-56.845 75.292 61.686-54.575-4.842-15.64 67.222-8.5-64.491"
                data-name="Path 20"
              ></path>
              <path
                d="M1674.915-1312.815l17.919 20.736 47.276-43 136.7-31.422 4.573 133.185-139.983-100.251"
                data-name="Path 21"
              ></path>
              <path
                d="M1785.616-1581.061l120.21-68.594 22.322 63.467z"
                data-name="Path 22"
              ></path>
              <path
                d="M1781.871-1584.735l37.089-107.519 87.759 42.665 9.651-31.026-93.61-11.639 49.451-26.721 40.2 36.3 10.056-5.992 64.454 39.073h-74.513l68.5 52.834-54.571 9.051h36.27l26.848 46.464-60.415-43.492 48.27 55.309-77.992 12.312 27.023-67.62"
                data-name="Path 23"
              ></path>
              <path
                d="M1902.5-1517.116l46.445 84.512 44.292-78.778z"
                data-name="Path 24"
              ></path>
              <path
                d="M1675.156-1634.883l56.315-39.5 49.766 93.291v-114.03L1735-1676.349l-8.531-82.837 51.121 61.911 41.01-29.925-90.247-31.982-140.193 58.46 16.948 71.667"
                data-name="Path 25"
              ></path>
              <path
                d="M1732.654-1675.178l-66.371-60.071 6.234 102.936-84.361-70.133 17.458-55.309 58.444 22.51 4.988-58.13-61.265 35.623"
                data-name="Path 26"
              ></path>
              <path
                d="M1726.645-1762.012l-20.156-119.2-36.69 88.45 59.532 34.56 101.925-139.022-121.484 16.012-29.8-9.58-10.178 95.26"
                data-name="Path 27"
              ></path>
              <path
                d="M1831.257-1897.229l-10.732 167.742 96.331-36.976-85.6-130.765 147.249 95.023-57.6 33.534v75.443l28.626-73.233-32.675-2.209-46.145 50.454-50.186-8.7-2.89 32.034-35.773 1.656"
                data-name="Path 28"
              ></path>
              <path
                d="M1871.445-1718.976l50.813 29.21"
                data-name="Path 29"
              ></path>
              <path
                d="M1950.773-1767.5l34.507 117.615"
                data-name="Path 30"
              ></path>
              <path
                d="M1950.773-1769.329l29.008-31.281 57.784 12.086-86.793 21.1"
                data-name="Path 31"
              ></path>
              <path
                d="M1916.281-1679.483l69.647 30.849"
                data-name="Path 32"
              ></path>
              <path
                d="M1833.308-1897.229l16.249-14.732 145.33 4.439"
                data-name="Path 33"
              ></path>
              <path
                d="M1980.293-1802.114l-130.622-108.874"
                data-name="Path 34"
              ></path>
            </g>
            <circle
              cx="6.575"
              cy="6.575"
              r="6.575"
              fill="#00845e"
              data-name="Ellipse 1"
              transform="translate(1325.872 -1312.721)"
            ></circle>
            <circle
              cx="5.028"
              cy="5.028"
              r="5.028"
              fill="#e32955"
              data-name="Ellipse 2"
              transform="translate(1370.738 -1404.774)"
            ></circle>
            <circle
              cx="7.349"
              cy="7.349"
              r="7.349"
              fill="#e32955"
              data-name="Ellipse 3"
              transform="translate(1403.227 -1359.908)"
            ></circle>
            <circle
              cx="4.255"
              cy="4.255"
              r="4.255"
              fill="#0065cb"
              data-name="Ellipse 4"
              transform="translate(1406.321 -1356.814)"
            ></circle>
            <circle
              cx="6.575"
              cy="6.575"
              r="6.575"
              fill="#00845e"
              data-name="Ellipse 5"
              transform="translate(1458.149 -1337.475)"
            ></circle>
            <circle
              cx="5.028"
              cy="5.028"
              r="5.028"
              fill="#db9f01"
              data-name="Ellipse 6"
              transform="translate(1459.697 -1335.928)"
            ></circle>
            <circle
              cx="5.415"
              cy="5.415"
              r="5.415"
              fill="#00845e"
              data-name="Ellipse 7"
              transform="translate(1417.151 -1416.378)"
            ></circle>
            <circle
              cx="3.094"
              cy="3.094"
              r="3.094"
              fill="#db9f01"
              data-name="Ellipse 8"
              transform="translate(1419.472 -1414.057)"
            ></circle>
            <circle
              cx="4.641"
              cy="4.641"
              r="4.641"
              fill="#db9f01"
              data-name="Ellipse 9"
              transform="translate(1414.83 -1469.753)"
            ></circle>
            <circle
              cx="3.868"
              cy="3.868"
              r="3.868"
              fill="#db9f01"
              data-name="Ellipse 10"
              transform="translate(1384.662 -1491.412)"
            ></circle>
            <circle
              cx="1.547"
              cy="1.547"
              r="1.547"
              fill="#00845e"
              data-name="Ellipse 11"
              transform="translate(1386.982 -1489.092)"
            ></circle>
            <circle
              cx="6.188"
              cy="6.188"
              r="6.188"
              fill="#0065cb"
              data-name="Ellipse 12"
              transform="translate(1347.531 -1517.713)"
            ></circle>
            <circle
              cx="3.868"
              cy="3.868"
              r="3.868"
              fill="#00845e"
              data-name="Ellipse 13"
              transform="translate(1441.131 -1526.222)"
            ></circle>
            <circle
              cx="5.028"
              cy="5.028"
              r="5.028"
              fill="#0065cb"
              data-name="Ellipse 14"
              transform="translate(1426.434 -1556.391)"
            ></circle>
            <circle
              cx="2.707"
              cy="2.707"
              r="2.707"
              fill="#db9f01"
              data-name="Ellipse 15"
              transform="translate(1428.754 -1554.07)"
            ></circle>
            <circle
              cx="4.641"
              cy="4.641"
              r="4.641"
              fill="#e32955"
              data-name="Ellipse 16"
              transform="translate(1473.62 -1562.579)"
            ></circle>
            <circle
              cx="3.481"
              cy="3.481"
              r="3.481"
              fill="#00845e"
              data-name="Ellipse 17"
              transform="translate(1475.168 -1561.032)"
            ></circle>
            <circle
              cx="1.547"
              cy="1.547"
              r="1.547"
              fill="#0065cb"
              data-name="Ellipse 18"
              transform="translate(1476.715 -1559.485)"
            ></circle>
            <circle
              cx="5.028"
              cy="5.028"
              r="5.028"
              fill="#db9f01"
              data-name="Ellipse 19"
              transform="translate(1458.149 -1438.037)"
            ></circle>
            <circle
              cx="3.481"
              cy="3.481"
              r="3.481"
              fill="#00845e"
              data-name="Ellipse 20"
              transform="translate(1459.697 -1436.49)"
            ></circle>
            <circle
              cx="6.188"
              cy="6.188"
              r="6.188"
              fill="#db9f01"
              data-name="Ellipse 21"
              transform="translate(1509.204 -1464.338)"
            ></circle>
            <circle
              cx="5.415"
              cy="5.415"
              r="5.415"
              fill="#db9f01"
              data-name="Ellipse 22"
              transform="translate(1485.997 -1427.207)"
            ></circle>
            <circle
              cx="3.868"
              cy="3.868"
              r="3.868"
              fill="#e32955"
              data-name="Ellipse 23"
              transform="translate(1487.544 -1425.66)"
            ></circle>
            <circle
              cx="5.415"
              cy="5.415"
              r="5.415"
              fill="#0065cb"
              data-name="Ellipse 24"
              transform="translate(1492.186 -1397.812)"
            ></circle>
            <circle
              cx="7.736"
              cy="7.736"
              r="7.736"
              fill="#00845e"
              data-name="Ellipse 25"
              transform="translate(1583.465 -1409.416)"
            ></circle>
            <circle
              cx="6.962"
              cy="6.962"
              r="6.962"
              fill="#0065cb"
              data-name="Ellipse 26"
              transform="translate(1666.235 -1321.23)"
            ></circle>
            <circle
              cx="7.736"
              cy="7.736"
              r="7.736"
              fill="#0065cb"
              data-name="Ellipse 27"
              transform="translate(1684.801 -1300.344)"
            ></circle>
            <circle
              cx="9.283"
              cy="9.283"
              r="9.283"
              fill="#0065cb"
              data-name="Ellipse 28"
              transform="translate(1585.012 -1439.584)"
            ></circle>
            <circle
              cx="4.255"
              cy="4.255"
              r="4.255"
              fill="#db9f01"
              data-name="Ellipse 29"
              transform="translate(1590.427 -1434.169)"
            ></circle>
            <circle
              cx="8.896"
              cy="8.896"
              r="8.896"
              fill="#e32955"
              data-name="Ellipse 30"
              transform="translate(1731.988 -1343.663)"
            ></circle>
            <circle
              cx="5.802"
              cy="5.802"
              r="5.802"
              fill="#00845e"
              data-name="Ellipse 31"
              transform="translate(1755.194 -1399.359)"
            ></circle>
            <circle
              cx="3.481"
              cy="3.481"
              r="3.481"
              fill="#0065cb"
              data-name="Ellipse 32"
              transform="translate(1757.515 -1397.039)"
            ></circle>
            <circle
              cx="5.415"
              cy="5.415"
              r="5.415"
              fill="#0065cb"
              data-name="Ellipse 33"
              transform="translate(1697.951 -1419.472)"
            ></circle>
            <circle
              cx="2.707"
              cy="2.707"
              r="2.707"
              fill="#e32955"
              data-name="Ellipse 34"
              transform="translate(1701.045 -1416.378)"
            ></circle>
            <circle
              cx="3.094"
              cy="3.094"
              r="3.094"
              fill="#0065cb"
              data-name="Ellipse 35"
              transform="translate(1691.763 -1472.073)"
            ></circle>
            <circle
              cx="6.188"
              cy="6.188"
              r="6.188"
              fill="#00845e"
              data-name="Ellipse 36"
              transform="translate(1620.596 -1513.072)"
            ></circle>
            <g
              fill="none"
              stroke="#e32955"
              strokeWidth="1.547"
              data-name="Ellipse 37"
              transform="translate(1622.143 -1511.525)"
            >
              <circle cx="5.028" cy="5.028" r="5.028" stroke="none"></circle>
              <circle cx="5.028" cy="5.028" r="4.255"></circle>
            </g>
            <circle
              cx="5.028"
              cy="5.028"
              r="5.028"
              fill="#0065cb"
              data-name="Ellipse 38"
              transform="translate(1631.426 -1595.068)"
            ></circle>
            <circle
              cx="3.868"
              cy="3.868"
              r="3.868"
              fill="#e32955"
              data-name="Ellipse 39"
              transform="translate(1650.764 -1598.163)"
            ></circle>
            <circle
              cx="3.094"
              cy="3.094"
              r="3.094"
              fill="#db9f01"
              data-name="Ellipse 40"
              transform="translate(1651.538 -1597.389)"
            ></circle>
            <circle
              cx="2.321"
              cy="2.321"
              r="2.321"
              fill="#0065cb"
              data-name="Ellipse 41"
              transform="translate(1652.312 -1596.616)"
            ></circle>
            <circle
              cx="4.255"
              cy="4.255"
              r="4.255"
              fill="#0065cb"
              data-name="Ellipse 42"
              transform="translate(1535.505 -1558.711)"
            ></circle>
            <circle
              cx="7.349"
              cy="7.349"
              r="7.349"
              fill="#0065cb"
              data-name="Ellipse 45"
              transform="translate(1548.655 -1588.88)"
            ></circle>
            <g
              fill="none"
              stroke="#e32955"
              strokeWidth="1.547"
              data-name="Ellipse 46"
              transform="translate(1550.976 -1586.559)"
            >
              <circle cx="5.028" cy="5.028" r="5.028" stroke="none"></circle>
              <circle cx="5.028" cy="5.028" r="4.255"></circle>
            </g>
            <circle
              cx="1.934"
              cy="1.934"
              r="1.934"
              fill="#00845e"
              data-name="Ellipse 43"
              transform="translate(1554.07 -1583.465)"
            ></circle>
            <circle
              cx="6.188"
              cy="6.188"
              r="6.188"
              fill="#db9f01"
              data-name="Ellipse 49"
              transform="translate(1600.483 -1621.369)"
            ></circle>
            <circle
              cx="3.868"
              cy="3.868"
              r="3.868"
              fill="#00845e"
              data-name="Ellipse 48"
              transform="translate(1602.804 -1619.049)"
            ></circle>
            <circle
              cx="3.094"
              cy="3.094"
              r="3.094"
              fill="#0065cb"
              data-name="Ellipse 47"
              transform="translate(1603.578 -1618.275)"
            ></circle>
            <circle
              cx="5.415"
              cy="5.415"
              r="5.415"
              fill="#00845e"
              data-name="Ellipse 50"
              transform="translate(1599.71 -1633.746)"
            ></circle>
            <circle
              cx="5.028"
              cy="5.028"
              r="5.028"
              fill="#00845e"
              data-name="Ellipse 52"
              transform="translate(1721.931 -1460.47)"
            ></circle>
            <circle
              cx="2.707"
              cy="2.707"
              r="2.707"
              fill="#e32955"
              data-name="Ellipse 51"
              transform="translate(1724.252 -1458.149)"
            ></circle>
            <circle
              cx="6.962"
              cy="6.962"
              r="6.962"
              fill="#0065cb"
              data-name="Ellipse 54"
              transform="translate(1800.06 -1464.338)"
            ></circle>
            <circle
              cx="6.188"
              cy="6.188"
              r="6.188"
              fill="#e32955"
              data-name="Ellipse 53"
              transform="translate(1800.834 -1463.564)"
            ></circle>
            <circle
              cx="3.481"
              cy="3.481"
              r="3.481"
              fill="#0065cb"
              data-name="Ellipse 55"
              transform="translate(1790.778 -1421.792)"
            ></circle>
            <circle
              cx="2.707"
              cy="2.707"
              r="2.707"
              fill="#00845e"
              data-name="Ellipse 56"
              transform="translate(1791.551 -1421.019)"
            ></circle>
            <circle
              cx="1.934"
              cy="1.934"
              r="1.934"
              fill="#e32955"
              data-name="Ellipse 57"
              transform="translate(1792.325 -1420.245)"
            ></circle>
            <circle
              cx="6.188"
              cy="6.188"
              r="6.188"
              fill="#00845e"
              data-name="Ellipse 58"
              transform="translate(1741.27 -1528.543)"
            ></circle>
            <circle
              cx="4.641"
              cy="4.641"
              r="4.641"
              fill="#db9f01"
              data-name="Ellipse 59"
              transform="translate(1742.817 -1526.996)"
            ></circle>
            <circle
              cx="8.122"
              cy="8.122"
              r="8.122"
              fill="#db9f01"
              data-name="Ellipse 60"
              transform="translate(1772.986 -1588.107)"
            ></circle>
            <circle
              cx="5.028"
              cy="5.028"
              r="5.028"
              fill="#db9f01"
              data-name="Ellipse 61"
              transform="translate(1808.569 -1559.485)"
            ></circle>
            <circle
              cx="7.349"
              cy="7.349"
              r="7.349"
              fill="#db9f01"
              data-name="Ellipse 62"
              transform="translate(1833.323 -1550.202)"
            ></circle>
            <circle
              cx="4.641"
              cy="4.641"
              r="4.641"
              fill="#00845e"
              data-name="Ellipse 63"
              transform="translate(1836.417 -1547.108)"
            ></circle>
            <circle
              cx="4.641"
              cy="4.641"
              r="4.641"
              fill="#00845e"
              data-name="Ellipse 64"
              transform="translate(1868.133 -1499.921)"
            ></circle>
            <circle
              cx="6.962"
              cy="6.962"
              r="6.962"
              fill="#0065cb"
              data-name="Ellipse 65"
              transform="translate(1895.208 -1523.128)"
            ></circle>
            <circle
              cx="8.509"
              cy="8.509"
              r="8.509"
              fill="#0065cb"
              data-name="Ellipse 66"
              transform="translate(1868.133 -1375.379)"
            ></circle>
            <circle
              cx="4.641"
              cy="4.641"
              r="4.641"
              fill="#e32955"
              data-name="Ellipse 67"
              transform="translate(1872.001 -1371.511)"
            ></circle>
            <circle
              cx="2.321"
              cy="2.321"
              r="2.321"
              fill="#00845e"
              data-name="Ellipse 68"
              transform="translate(1874.322 -1369.191)"
            ></circle>
            <circle
              cx="3.868"
              cy="3.868"
              r="3.868"
              fill="#0065cb"
              data-name="Ellipse 69"
              transform="translate(1889.019 -1441.131)"
            ></circle>
            <circle
              cx="6.575"
              cy="6.575"
              r="6.575"
              fill="#00845e"
              data-name="Ellipse 70"
              transform="translate(1862.718 -1444.225)"
            ></circle>
            <g
              fill="none"
              stroke="#e32955"
              strokeWidth="1.547"
              data-name="Ellipse 71"
              transform="translate(1865.039 -1441.905)"
            >
              <circle cx="4.255" cy="4.255" r="4.255" stroke="none"></circle>
              <circle cx="4.255" cy="4.255" r="3.481"></circle>
            </g>
            <circle
              cx="3.481"
              cy="3.481"
              r="3.481"
              fill="#0065cb"
              data-name="Ellipse 72"
              transform="translate(1865.812 -1441.131)"
            ></circle>
            <circle
              cx="6.962"
              cy="6.962"
              r="6.962"
              fill="#00845e"
              data-name="Ellipse 73"
              transform="translate(1666.235 -1639.161)"
            ></circle>
            <circle
              cx="6.188"
              cy="6.188"
              r="6.188"
              fill="#db9f01"
              data-name="Ellipse 74"
              transform="translate(1667.009 -1638.388)"
            ></circle>
            <circle
              cx="3.481"
              cy="3.481"
              r="3.481"
              fill="#00845e"
              data-name="Ellipse 75"
              transform="translate(1670.103 -1635.293)"
            ></circle>
            <circle
              cx="1.934"
              cy="1.934"
              r="1.934"
              fill="#e32955"
              data-name="Ellipse 76"
              transform="translate(1671.65 -1633.746)"
            ></circle>
            <circle
              cx="5.802"
              cy="5.802"
              r="5.802"
              fill="#db9f01"
              data-name="Ellipse 77"
              transform="translate(1581.918 -1707.234)"
            ></circle>
            <circle
              cx="3.481"
              cy="3.481"
              r="3.481"
              fill="#0065cb"
              data-name="Ellipse 78"
              transform="translate(1584.239 -1704.913)"
            ></circle>
            <circle
              cx="2.707"
              cy="2.707"
              r="2.707"
              fill="#00845e"
              data-name="Ellipse 79"
              transform="translate(1585.012 -1704.14)"
            ></circle>
            <circle
              cx="4.641"
              cy="4.641"
              r="4.641"
              fill="#e32955"
              data-name="Ellipse 80"
              transform="translate(1601.257 -1760.609)"
            ></circle>
            <circle
              cx="4.255"
              cy="4.255"
              r="4.255"
              fill="#db9f01"
              data-name="Ellipse 81"
              transform="translate(1661.594 -1737.402)"
            ></circle>
            <circle
              cx="6.962"
              cy="6.962"
              r="6.962"
              fill="#0065cb"
              data-name="Ellipse 82"
              transform="translate(1663.141 -1800.06)"
            ></circle>
            <circle
              cx="4.255"
              cy="4.255"
              r="4.255"
              fill="#00845e"
              data-name="Ellipse 83"
              transform="translate(1666.235 -1796.966)"
            ></circle>
            <circle
              cx="6.962"
              cy="6.962"
              r="6.962"
              fill="#0065cb"
              data-name="Ellipse 84"
              transform="translate(1721.158 -1764.477)"
            ></circle>
            <circle
              cx="5.028"
              cy="5.028"
              r="5.028"
              fill="#0065cb"
              data-name="Ellipse 85"
              transform="translate(1676.292 -1894.434)"
            ></circle>
            <circle
              cx="5.028"
              cy="5.028"
              r="5.028"
              fill="#0065cb"
              data-name="Ellipse 86"
              transform="translate(1701.045 -1885.925)"
            ></circle>
            <circle
              cx="4.255"
              cy="4.255"
              r="4.255"
              fill="#00845e"
              data-name="Ellipse 87"
              transform="translate(1701.819 -1885.925)"
            ></circle>
            <circle
              cx="5.415"
              cy="5.415"
              r="5.415"
              fill="#0065cb"
              data-name="Ellipse 88"
              transform="translate(1825.588 -1902.169)"
            ></circle>
            <circle
              cx="3.481"
              cy="3.481"
              r="3.481"
              fill="#db9f01"
              data-name="Ellipse 89"
              transform="translate(1827.135 -1900.622)"
            ></circle>
            <circle
              cx="2.707"
              cy="2.707"
              r="2.707"
              fill="#00845e"
              data-name="Ellipse 90"
              transform="translate(1847.247 -1914.546)"
            ></circle>
            <circle
              cx="5.415"
              cy="5.415"
              r="5.415"
              fill="#00845e"
              data-name="Ellipse 91"
              transform="translate(1912.226 -1772.986)"
            ></circle>
            <circle
              cx="3.481"
              cy="3.481"
              r="3.481"
              fill="#00845e"
              data-name="Ellipse 92"
              transform="translate(1946.262 -1770.665)"
            ></circle>
            <g
              fill="#00845e"
              stroke="#0065cb"
              strokeWidth="0.774"
              data-name="Ellipse 93"
              transform="translate(1974.884 -1808.569)"
            >
              <circle cx="6.962" cy="6.962" r="6.962" stroke="none"></circle>
              <circle cx="6.962" cy="6.962" r="6.575" fill="none"></circle>
            </g>
            <g
              fill="#e32955"
              stroke="#e32955"
              strokeWidth="0.774"
              data-name="Ellipse 94"
              transform="translate(1728.12 -1679.386)"
            >
              <circle cx="5.028" cy="5.028" r="5.028" stroke="none"></circle>
              <circle cx="5.028" cy="5.028" r="4.641" fill="none"></circle>
            </g>
            <circle
              cx="7.349"
              cy="7.349"
              r="7.349"
              fill="#e32955"
              data-name="Ellipse 95"
              transform="translate(1772.986 -1701.045)"
            ></circle>
            <circle
              cx="5.802"
              cy="5.802"
              r="5.802"
              fill="#00845e"
              data-name="Ellipse 96"
              transform="translate(1812.437 -1697.178)"
            ></circle>
            <circle
              cx="3.481"
              cy="3.481"
              r="3.481"
              fill="#db9f01"
              data-name="Ellipse 97"
              transform="translate(1814.758 -1694.857)"
            ></circle>
            <circle
              cx="9.669"
              cy="9.669"
              r="9.669"
              fill="#db9f01"
              data-name="Ellipse 98"
              transform="translate(1810.89 -1736.629)"
            ></circle>
            <circle
              cx="7.349"
              cy="7.349"
              r="7.349"
              fill="#0065cb"
              data-name="Ellipse 99"
              transform="translate(1813.211 -1734.308)"
            ></circle>
            <circle
              cx="4.255"
              cy="4.255"
              r="4.255"
              fill="#00845e"
              data-name="Ellipse 100"
              transform="translate(1867.359 -1721.931)"
            ></circle>
            <circle
              cx="4.641"
              cy="4.641"
              r="4.641"
              fill="#0065cb"
              data-name="Ellipse 101"
              transform="translate(1917.641 -1694.857)"
            ></circle>
            <circle
              cx="5.802"
              cy="5.802"
              r="5.802"
              fill="#00845e"
              data-name="Ellipse 102"
              transform="translate(1909.905 -1684.801)"
            ></circle>
            <circle
              cx="3.094"
              cy="3.094"
              r="3.094"
              fill="#0065cb"
              data-name="Ellipse 103"
              transform="translate(1912.999 -1681.707)"
            ></circle>
            <circle
              cx="6.188"
              cy="6.188"
              r="6.188"
              fill="#00845e"
              data-name="Ellipse 104"
              transform="translate(1900.622 -1653.859)"
            ></circle>
            <circle
              cx="5.802"
              cy="5.802"
              r="5.802"
              fill="#db9f01"
              data-name="Ellipse 105"
              transform="translate(1921.508 -1591.974)"
            ></circle>
            <circle
              cx="2.707"
              cy="2.707"
              r="2.707"
              fill="#e32955"
              data-name="Ellipse 106"
              transform="translate(1924.603 -1588.88)"
            ></circle>
            <circle
              cx="4.255"
              cy="4.255"
              r="4.255"
              fill="#e32955"
              data-name="Ellipse 107"
              transform="translate(1960.186 -1591.974)"
            ></circle>
            <circle
              cx="5.028"
              cy="5.028"
              r="5.028"
              fill="#e32955"
              data-name="Ellipse 108"
              transform="translate(1977.204 -1600.483)"
            ></circle>
            <circle
              cx="3.094"
              cy="3.094"
              r="3.094"
              fill="#db9f01"
              data-name="Ellipse 109"
              transform="translate(1979.525 -1598.163)"
            ></circle>
            <circle
              cx="8.122"
              cy="8.122"
              r="8.122"
              fill="#0065cb"
              data-name="Ellipse 110"
              transform="translate(1939.3 -1441.131)"
            ></circle>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default BackgroundImage;
