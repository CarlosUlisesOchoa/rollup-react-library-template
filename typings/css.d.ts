// typings.d.ts or any other filename you prefer

declare module '*.module.css' {
  const classes: { [className: string]: string }
  export default classes
}
