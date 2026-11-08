/**
 * Configurable assets, telemetry, and motion tuning for DualCarScrollSection
 */

export const DUAL_CAR_ASSETS = {
  // Top-down electric sports sedan (Southbound)
  car1: "/images/dual-car-animation/car-01.png",
  // Top-down luxury electric SUV (Northbound)
  car2: "/images/dual-car-animation/car-02.png",
  // Standalone reference tire tracks SVG
  tireTracksSvg: "/images/dual-car-animation/tire-tracks.svg",
};

export const MOTION_CONFIG = {
  // Pin duration in viewport heights for desktop, tablet & mobile
  // Increased to decrease car traversal speed per scroll unit
  desktopScrollDuration: "+=460vh",
  tabletScrollDuration: "+=380vh",
  mobileScrollDuration: "+=280vh",

  // Scrub smoothing factor — smooth and measured deceleration
  scrubSpeed: 1.6,
  mobileScrubSpeed: 1.4,

  // Car 1 (Southbound): starts above, drives down
  car1: {
    startYPercent: -125,
    endYPercent: 125,
    maxCurveXPercent: -2.5,
    baseRotation: 180, // Facing downwards (direction of motion)
    maxYawDeg: 3.5,
  },

  // Car 2 (Northbound): starts below, drives up
  car2: {
    startYPercent: 125,
    endYPercent: -125,
    maxCurveXPercent: 2.5,
    baseRotation: 0, // Facing upwards (direction of motion)
    maxYawDeg: -3.5,
  },
};

