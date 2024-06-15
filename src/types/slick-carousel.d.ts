
declare module "slick-carousel" {
    export default function slick(options: any): JQuery;
  }
  
  interface JQuery {
    slick(options?: any): JQuery;
  }
  