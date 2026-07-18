// extracted from figma node 910:28426 "Loading" — phone + QR illustration with progress bar
function LoadingIllustration(props = {}) {
  return (
      <div className={props.className} style={{
        position: "relative",
        width: 231,
        height: 199,
        overflow: "hidden",
      ...props.style,
      }}>
        <div style={{
          position: "relative",
          left: 50,
          top: 196,
          width: 142,
          height: 3,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 142,
            height: 3,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 142,
              height: 3,
              borderRadius: 8,
              backgroundColor: "rgb(234,29,44)",
            }} />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 231,
          height: 174,
          overflow: "hidden",
        }}>
          <svg width={231} height={144} viewBox="0 0 231 144" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 6,
            width: 231,
            height: 144,
            color: "rgb(255,241,239)",
          }}>
            <path d={"M 75.231 143.632 C 45.623 143.632 23.279 135.806 10.59 121.074 C 1.946 111.038 -1.456 98.425 0.567 84.522 C 1.854 75.775 5.44 67.673 11.049 60.399 C 21.992 46.404 37.807 38.67 55.554 38.67 C 64.749 38.67 74.036 40.788 82.403 44.839 C 85.99 46.588 89.76 47.417 93.713 47.417 C 104.932 47.417 114.678 40.235 117.989 29.647 L 118.081 29.279 C 123.782 11.785 141.252 0 161.665 0 C 163.137 0 164.7 0.092 166.171 0.184 C 208.561 3.959 225.755 52.481 227.594 58.005 L 227.594 58.097 C 234.491 76.88 230.721 100.818 218.031 119.049 C 206.905 135.069 191.09 143.908 173.527 144 L 75.231 143.632 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 29,
            top: 166,
            width: 117.5,
            height: 8,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 117.5,
              height: 8,
              overflow: "hidden",
            }}>
              <svg width={117.500} height={8} viewBox="0 0 117.500 8" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 117.5,
                height: 8,
                mixBlendMode: "multiply",
                borderRadius: 40,
                color: "rgb(241,241,241)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 113.5 0 C 115.709 0 117.5 1.791 117.5 4 L 117.5 4 C 117.5 6.209 115.709 8 113.5 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 38,
            top: 52,
            width: 96.453,
            height: 118.233,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 21.78,
              top: 0,
              width: 37.337,
              height: 37.337,
              overflow: "hidden",
            }}>
              <svg width={37.337} height={37.337} viewBox="0 0 37.337 37.337" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 37.337,
                height: 37.337,
                color: "rgb(120,37,43)",
              }}>
                <path d={"M 8.91 37.332 C 8.246 37.332 7.582 36.89 7.344 36.202 L 0.891 16.61 C -1.481 10.57 1.034 3.793 6.633 1.093 C 12.374 -1.657 21.579 0.11 28.506 14.253 L 28.554 14.351 L 37.19 34.975 C 37.569 35.809 37.19 36.841 36.335 37.184 C 35.481 37.577 34.532 37.184 34.2 36.301 L 25.565 15.726 C 21.911 8.262 15.079 0.798 8.009 4.186 C 4.545 5.856 1.888 10.324 3.928 15.382 L 3.976 15.48 L 10.476 35.122 C 10.761 36.006 10.334 36.988 9.48 37.283 C 9.29 37.332 9.1 37.332 8.91 37.332 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <svg width={77.785} height={91.786} viewBox="0 0 77.785 91.786" fill="none" style={{
              position: "absolute",
              left: 18.668,
              top: 26.447,
              width: 77.785,
              height: 91.786,
              color: "rgb(255,41,40)",
            }}>
              <path d={"M 74.544 91.786 L 11.021 91.786 C 6.546 91.786 -0.095 88.139 0.001 83.782 L 3.418 10.325 C 3.562 6.11 5.343 0 9.626 0 L 67.951 0 C 69.972 0 71.656 1.468 71.849 3.457 L 77.527 77.625 L 77.768 88.376 C 77.96 90.223 76.469 91.786 74.544 91.786 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={33.388} height={91.786} viewBox="0 0 33.388 91.786" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 26.447,
              width: 33.388,
              height: 91.786,
              color: "rgb(234,0,41)",
            }}>
              <path d={"M 30.138 91.786 L 2.316 91.786 C 0.987 91.786 -0.048 90.743 0.002 89.464 C 0.1 87.047 3.498 21.513 4.975 1.895 C 5.074 0.853 6.009 0 7.093 0 L 32.206 0 C 33.24 0 32.402 1.558 32.5 2.553 C 32.5 2.553 33.29 84.868 33.388 88.659 C 32.665 91.786 34.5 91.786 30.138 91.786 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={3.343} height={91.839} viewBox="0 0 3.343 91.839" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(1,0.012,-0.012,1,31.236,26.355)",
              transformOrigin: "0 0",
              width: 3.343,
              height: 91.839,
              color: "rgb(200,0,45)",
            }}>
              <path d={"M 0.872 0 C 1.363 -0.012 1.769 0.491 1.778 1.124 L 3.343 90.672 C 3.352 91.304 2.962 91.827 2.471 91.839 C 1.98 91.85 1.575 91.347 1.566 90.715 L 0 1.167 C -0.009 0.535 0.381 0.012 0.872 0 Z"} fill="currentColor" fillRule="evenodd" />
            </svg>
            <div style={{
              position: "absolute",
              left: 49.782,
              top: 49,
              width: 28.002,
              height: 23.335,
              overflow: "hidden",
            }}>
              <svg width={28.002} height={23.335} viewBox="0 0 28.002 23.335" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 28.002,
                height: 23.335,
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 6.426 11.572 C 11.304 11.665 14.775 7.373 14.822 3.78 C 14.869 1.214 12.383 0.001 9.991 0.001 C 4.644 -0.092 1.642 4.573 1.595 7.793 C 1.548 10.359 4.081 11.572 6.426 11.572 Z M 28.002 4.014 C 27.955 7.606 24.484 11.898 19.606 11.805 C 17.261 11.758 14.728 10.545 14.775 8.026 C 14.822 4.807 17.824 0.141 23.171 0.235 C 25.563 0.281 28.049 1.448 28.002 4.014 Z M 9.803 23.282 C 14.118 23.608 18.105 22.442 21.107 19.969 L 22.28 23.328 L 24.156 14.837 L 15.994 14.651 L 18.715 16.75 C 16.229 19.036 11.726 20.576 8.114 20.109 C 4.409 19.643 1.454 17.123 0.281 14.417 L 0 14.417 C 0.704 18.663 4.409 22.862 9.803 23.282 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <div style={{
              position: "absolute",
              left: 43.559,
              top: 0,
              width: 38.892,
              height: 37.337,
              overflow: "hidden",
            }}>
              <svg width={38.892} height={37.337} viewBox="0 0 38.892 37.337" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 38.892,
                height: 37.337,
                color: "rgb(120,37,43)",
              }}>
                <path d={"M 29.604 37.311 C 29.406 37.311 29.258 37.261 29.06 37.212 C 28.17 36.918 27.675 35.936 28.021 35.053 L 34.847 15.32 C 36.974 10.313 34.254 5.798 30.593 4.129 C 25.944 2.018 18.376 3.785 12.243 15.713 L 3.241 36.329 C 2.846 37.163 1.856 37.556 1.016 37.212 C 0.175 36.82 -0.221 35.838 0.125 35.004 L 9.177 14.24 C 16.398 0.153 25.993 -1.664 31.978 1.085 C 37.815 3.785 40.436 10.559 37.963 16.596 L 31.187 36.182 C 30.94 36.869 30.297 37.311 29.604 37.311 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 155,
            top: 166,
            width: 24,
            height: 8,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 24,
              height: 8,
              overflow: "hidden",
            }}>
              <svg width={24} height={8} viewBox="0 0 24 8" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 24,
                height: 8,
                mixBlendMode: "multiply",
                borderRadius: 40,
                color: "rgb(241,241,241)",
              }}>
                <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 4 C 24 6.209 22.209 8 20 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 135,
            top: 0,
            width: 64.324,
            height: 170,
            overflow: "hidden",
          }}>
            <svg width={6.892} height={122.905} viewBox="0 0 6.892 122.905" fill="none" style={{
              position: "absolute",
              left: 28.716,
              top: 47.095,
              width: 6.892,
              height: 122.905,
              color: "rgb(166,66,98)",
            }}>
              <path d={"M 0 3.446 C 0 1.543 1.543 0 3.446 0 L 3.446 0 C 5.349 0 6.892 1.543 6.892 3.446 L 6.892 120.905 C 6.892 122.01 5.996 122.905 4.892 122.905 L 2 122.905 C 0.895 122.905 0 122.01 0 120.905 L 0 3.446 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 64.324,
              height: 64.324,
              borderRadius: "50%",
              backgroundColor: "rgb(255,255,255)",
              boxShadow: "inset 0 0 0 5px rgb(234,0,41)",
            }} />
            <div style={{
              position: "absolute",
              left: 14.932,
              top: 19.527,
              width: 34.47,
              height: 25.27,
              overflow: "hidden",
            }}>
              <svg width={26.490} height={12.963} viewBox="0 0 26.490 12.963" fill="none" style={{
                position: "absolute",
                left: 7.98,
                top: 0.119,
                width: 26.49,
                height: 12.963,
                color: "rgb(166,66,98)",
              }}>
                <path d={"M 21.763 1.612 C 21.226 0.617 20.172 0 19.039 0 L 4.108 0.119 C 1.782 0.139 -0.862 0.478 0.271 2.547 L 1.106 4.437 C 1.762 5.69 4.466 9.55 5.022 10.883 C 5.46 11.958 6.573 12.674 7.786 12.495 C 8.223 12.435 8.601 12.296 8.82 12.057 L 8.86 12.018 C 10.052 10.784 12.021 10.764 13.253 11.978 L 13.333 12.057 C 14.546 13.271 16.514 13.271 17.727 12.018 L 17.806 11.938 C 18.999 10.704 20.967 10.685 22.2 11.898 L 22.279 11.978 C 22.598 12.276 22.995 12.435 23.452 12.475 C 25.699 12.694 27.21 10.187 26.136 8.178 L 21.763 1.612 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={19.722} height={24.005} viewBox="0 0 19.722 24.005" fill="none" style={{
                position: "absolute",
                left: 13.002,
                top: 1.265,
                width: 19.722,
                height: 24.005,
                color: "rgb(247,195,146)",
              }}>
                <path d={"M 15.249 1.142 L 19.146 8.046 C 19.623 8.722 19.722 9.439 19.722 9.936 L 19.722 22.312 C 19.702 23.923 19.663 24.023 17.873 24.003 L 0 23.904 L 2.048 1.4 C 2.107 1.381 11.889 0.127 11.949 0.127 C 13.181 -0.231 14.513 0.187 15.249 1.142 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={19.623} height={19.897} viewBox="0 0 19.623 19.897" fill="none" style={{
                position: "absolute",
                left: 2.187,
                top: 5.372,
                width: 19.623,
                height: 19.897,
                color: "rgb(247,195,146)",
              }}>
                <path d={"M 0 0.557 L 0.099 18.424 C 0.119 19.141 0.994 19.718 2.088 19.718 L 19.484 19.897 L 19.623 0 L 0 0.557 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={28.977} height={12.040} viewBox="0 0 28.977 12.040" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 28.977,
                height: 12.04,
                color: "rgb(166,66,98)",
              }}>
                <path d={"M 4.615 1.928 C 5.151 0.913 6.185 0.276 7.299 0.276 L 22.19 0.078 C 24.516 0.078 29.941 -0.518 28.828 1.591 C 28.828 1.591 21.911 8.474 21.394 9.807 C 20.957 10.901 19.864 11.637 18.651 11.478 C 18.213 11.419 17.855 11.299 17.617 11.041 L 17.577 11.001 C 16.364 9.747 14.416 9.747 13.203 11.001 L 13.124 11.1 C 11.911 12.354 9.963 12.354 8.75 11.1 L 8.67 11.021 C 7.458 9.767 5.509 9.767 4.296 11.021 L 4.217 11.1 C 3.919 11.419 3.501 11.578 3.064 11.618 C 0.817 11.856 -0.714 9.349 0.34 7.3 L 4.615 1.928 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
      </div>
  );
}

module.exports = { LoadingIllustration };
if (typeof window !== "undefined") window.LoadingIllustration = LoadingIllustration;
