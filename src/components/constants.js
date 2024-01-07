
// heights
export const headerHeight = '40px';
export const footerHeight = '20px';
export const mainHeight = 'calc(100vh - ' + headerHeight + ' - ' + footerHeight + ')';
export const mainWidth = 'calc(100vw + 10px)';

// colors
export const mainColor = '#212121';    // color of the code area and the terminal
export const compColor1 = '#272727';   // color of the navigation bar
export const compColor2 = '#2f2f2f';   // color of the bar at the bottom
export const searchBarColor = '#323232';   // color of the search bar
export const highlightColor = '#709cc7';
export const secondaryHighlightColor = '#484848';

// text related
export const textColor = '#a8a8a8';
export const secondaryTextColor = '#5a5a5a';
export const fontSize = '0.85em';
export const secondaryFontSize = '0.7em';

// icon related
export const fileFileNameGap = '10px';     // gap between the file type icon and file name
export const fileTypeIconSize = '14px';    // size of file type icons
export const bottomIconStart = parseInt(footerHeight.match(/(\d+)/));   // bottom icons start at the footer height (as an integer not in px)
