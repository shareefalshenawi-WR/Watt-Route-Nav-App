
export const DUAL_CAR_ASSETS = {
  car1: "/images/dual-car-animation/car-01.png",
  car2: "/images/dual-car-animation/car-02.png",
  tireTracksSvg: "/images/dual-car-animation/tire-tracks.svg",
};

export const MOTION_CONFIG = {
  desktopScrollDuration: "+=460vh",
  tabletScrollDuration: "+=380vh",
  mobileScrollDuration: "+=280vh",
  scrubSpeed: 1.6,
  mobileScrubSpeed: 1.4,

  car1: {
    startYPercent: -125,
    endYPercent: 125,
    maxCurveXPercent: -2.5,
    baseRotation: 180, 
    maxYawDeg: 3.5,
  },

  car2: {
    startYPercent: 125,
    endYPercent: -125,
    maxCurveXPercent: 2.5,
    baseRotation: 0, 
    maxYawDeg: -3.5,
  },
};

