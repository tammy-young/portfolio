import { Icon } from '@iconify/react';
import * as constants from '../constants';
import {pages} from '../constants.js';
import '../App.css';

function FileExplorerItem({ page }) {

    let iconName = pages[page].icon;
    let pageName = pages[page].label;
    let pageURL = pages[page].url;

    return (
        <div className="row selectable" style={{ width: '100%', padding: '1px', boxSizing: 'border-box' }}>

            <a href={ pageURL } style={{ color: constants.textColor, textDecoration: 'none' }}>
                <Icon icon={ iconName } color={ constants.textColor } width={ constants.fileTypeIconSize } height={ constants.fileTypeIconSize } />
                <span style={{ paddingLeft: constants.fileFileNameGap }}>{ pageName }</span>
            </a>

        </div>
    )
}

function FileExplorer() {

    return(
        <div className="col-2 flex flex-col" style={{ backgroundColor: constants.compColor1, maxHeight: constants.mainHeight, paddingLeft: 0 }}>
            
            <div className='row'>
                <div className="col" style={{ maxWidth: '10px' }}></div>
                <div className="col" style={{ color: constants.secondaryTextColor, fontSize: constants.secondaryFontSize, height: '5px', paddingTop: '5px' }}>
                    EXPLORER
                </div>
                <div className='col' style={{ textAlign: 'right', paddingBottom: '7px' }}>
                    <b className='selectable'>&#8943;</b>
                </div>
            </div>

            <div className="row">

                <div className="col" style={{ maxWidth: '10px' }}>
                    <Icon icon="ri:arrow-down-s-line" color={ constants.textColor } width="20" height="20" />
                </div>

                <div className="col">
                    <b style={{ color: constants.secondaryTextColor, fontSize: constants.secondaryFontSize }}>PORTFOLIO</b>

                    <div style={{ fontSize: constants.fontSize, width: '110%' }}>
                        <FileExplorerItem page="home" />
                        <FileExplorerItem page="github" />
                        <FileExplorerItem page="projects" />
                        <FileExplorerItem page="contact" />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default FileExplorer;
