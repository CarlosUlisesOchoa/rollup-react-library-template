// babel.config.js

// This message will be logged when the file is read (at build time)
console.log('Babel config is being read')

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // Targets the last 6 versions of all browsers and browsers used by > 0.25% of the global population
        targets: '> 0.25%, last 6 versions, not dead',
      },
    ],
    '@babel/preset-react', // For JSX transformation
    '@babel/preset-typescript', // For TypeScript support
  ],
}
