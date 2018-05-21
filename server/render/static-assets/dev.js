import { GOOGLE_ANALYTICS_ID } from '../../../config/app';
import appleIcon from '../../../app/Images/apple-touch-icon.png';
import printflyIcon from '../../../app/Images/printfly-favricon-16.png';
import biggerPrintflyIcon from '../../../app/Images/printfly-favricon-32.png';

const createAppScript = () =>
  '<script async type="text/javascript" charset="utf-8" src="/assets/app.js"></script>';

const createTrackingScript = () =>
  GOOGLE_ANALYTICS_ID ? createAnalyticsSnippet(GOOGLE_ANALYTICS_ID) : '';

const createAnalyticsSnippet = id =>
  `<script>
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', '${id}', 'auto');
ga('send', 'pageview');
</script>
<script async src='https://www.google-analytics.com/analytics.js'></script>`;

const createStylesheets = () =>
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Condensed" />';

const createIcons = () => `
<link rel="apple-touch-icon" sizes="120x120" href="${appleIcon}" />
<link rel="icon" type="image/png" sizes="32x32" href="${printflyIcon}" />
<link rel="icon" types="image/png" sizes=16x16" href="${biggerPrintflyIcon}" />
`;

export { createAppScript, createTrackingScript, createStylesheets, createIcons };
