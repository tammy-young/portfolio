import { Icon } from '@iconify/react';
import * as constants from './constants';
import pages from '../index';
import '../App.css';

function SideBarIcon({ page }) {

    let pageURL = pages[page].url;
    let iconName = pages[page].sidebarIcon;
    const sideBarIconSize = '25';

    return (
        <a href={ pageURL }>
            <div className="border-l-2 p-2 max-sm:pl-2">
                <div className="p-2 max-sm:pl-2">
                    <Icon icon={ iconName } width={ sideBarIconSize } height={ sideBarIconSize } className='highlightable-btn' style={{ color: constants.secondaryTextColor }} />
                </div>
            </div>
        </a>
    )

}

function SideBar() {

    return (
        <aside className="col-auto flex flex-col justify-between" style={{ backgroundColor: constants.compColor1, paddingRight: 0 }} height={ constants.mainHeight }>
            
            <div className="flex flex-col items-start justify-center gap-y-1 ">
                {/* Main Page */}
                <SideBarIcon page="home" />

                {/* GitHub */}
                <SideBarIcon page="github" />

                {/* Projects */}
                <SideBarIcon page="projects" />

                {/* Contact Information */}
                <SideBarIcon page="contact" />

            </div>

            <div className="flex flex-col items-center justify-center" style={{ bottom: constants.bottomIconStart, position: 'absolute' }}>

                {/* About Me */}
                <SideBarIcon page="about" />

                {/* Settings */}
                <SideBarIcon page="settings" />

            </div>
          
        </aside>
    )
}

export default SideBar;
