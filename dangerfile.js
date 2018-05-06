import { danger, warn, fail } from 'danger';

// Warn (won’t fail the CI, just post a comment) if the PR has
// changes in package.json but no changes in package-lock.json
const packageChanged = danger.git.modified_files.includes(
  'package.json'
);
const lockfileChanged = danger.git.modified_files.includes(
  'package-lock.json'
);
if (packageChanged && !lockfileChanged) {
  warn(
    'Changes were made to package.json, but not to ' +
      'package-lock.json.' +
      'Perhaps you need to run `npm install` and commit changes ' +
      'in package-lock.json. Make sure you’re using npm 5+.'
  );
}

// Fail the CI when test shorcuts are found
const jsTestChanges = danger.git.modified_files.filter(f =>
  f.endsWith('.spec.js')
);
jsTestChanges.forEach(file => {
  const content = fs.readFileSync(file).toString();
  if (
    content.includes('it.only') ||
    content.includes('describe.only')
  ) {
    fail(`An \`.only\` was left in tests (${file})`);
  }
});