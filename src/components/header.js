import { Icon } from '@iconify/react';
import * as constants from './constants';
import '../App.css';

function SearchBar() {

    return (
        <header className='row justify-content-center' style={{ backgroundColor: constants.compColor1, color: constants.textColor, fontSize: '0.8em', paddingTop: '5px', paddingBottom: '12px', paddingRight: '10px', paddingLeft: '10px', boxSizing: 'border-box', maxWidth: constants.mainWidth }}>

            <div className="search-bar" style={{ backgroundColor: constants.searchBarColor, borderRadius: '6px', width: '40%', border: '1px solid #464646', textAlign: 'center', padding: '1px' }}>
                <Icon icon="heroicons:magnifying-glass-16-solid" color={ constants.textColor } width="16" height="16" style={{ paddingBottom: '3px' }} />
                Tammy Young's Portfolio
            </div>

        </header>
    )

}

export default SearchBar;
