module.exports = {
  '*.(ts|tsx)':
    'npx eslint --ext ts,tsx --report-unused-disable-directives --max-warnings 0',
  '*': 'npx prettier --write',
};
