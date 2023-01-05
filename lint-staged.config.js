module.exports = {
  // this will check Typescript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // This will lint and format TypeScript and
  // Typescript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
    `yarn test`,
    `yarn test --coverage`
  ],

  // this will Format MarkDown and JSON
  '**/*.(md|json)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ]
}
