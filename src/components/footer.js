import { Icon } from '@iconify/react';
import * as constants from '../constants';
import '../App.css';

function Footer() {

    return (
        <div className="row" style={{ backgroundColor: constants.compColor2, color: constants.textColor, fontSize: constants.fontSize, maxWidth: constants.mainWidth }}>
            
            <div className="col-auto selectable-footer" style={{ paddingLeft: '24px' }}>
                <Icon icon="pajamas:branch" color={ constants.textColor } width={ constants.fileTypeIconSize } height={ constants.fileTypeIconSize } />
                main
                <Icon icon="iconamoon:synchronize" color={ constants.textColor } width={ constants.fileTypeIconSize } height={ constants.fileTypeIconSize } style={{ paddingLeft: '4px' }}></Icon>
            </div>

            <div className="col-auto selectable-footer">
                <Icon icon="ph:x-circle-fill" color={ constants.textColor } width={ constants.fileTypeIconSize } height={ constants.fileTypeIconSize } style={{ paddingRight: '2px' }}></Icon>
                0
                <Icon icon="material-symbols:warning" color={ constants.textColor } width={ constants.fileTypeIconSize } height={ constants.fileTypeIconSize } style={{ paddingRight: '2px' }}></Icon>
                0
            </div>

            <div className='col'></div>

            <div className="col-auto selectable-footer">
                &#123;&#125; JavaScript
            </div>

        </div>
    )
}

export default Footer;
