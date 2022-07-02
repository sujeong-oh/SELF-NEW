declare module "../components/Card" {
    const content: { [className: string]: string };
    export = content;
  }

  declare module "*.css" {
    const content: { [className: string]: string };
    export = content;
  }

  declare module "*.jpg"