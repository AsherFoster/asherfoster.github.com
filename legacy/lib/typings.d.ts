// https://stackoverflow.com/a/44228423/
declare module '*.css|!*.module.css' {
  export = null;
}
declare module '*.module.css' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

