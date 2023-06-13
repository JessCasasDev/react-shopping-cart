declare module "*.jpg" {
  const path: string;
  export default path;
}

declare module "*.svg" {
  const path: string;
  export default svg;
}

declare module "*.module.css" {
  const path: string;
  export default css;
}

declare module "*.json" {
  const value: any;
  export default value;
}
