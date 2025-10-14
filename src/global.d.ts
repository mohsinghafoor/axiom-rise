/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module "*.css";
declare module "*.scss";
declare module "*.sass";

// For CSS Modules
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.sass" {
  const classes: { [key: string]: string };
  export default classes;
}