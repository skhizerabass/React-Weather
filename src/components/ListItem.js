import React from 'react';
import {PropTypes} from 'prop-types'

import Highlighter from "react-highlight-words";

class ListItem extends React.Component {
  
    
	render() {
        let city = this.props.city;
        let substitueText = this.props.selectedValue;
        // let values =city.replace(substitueText,'<span className="selectedText">'+substitueText+'</span>');
        return(
                    <Highlighter
                        highlightClassName='selectedText'
                        searchWords={[substitueText]}
                        autoEscape={true}
                        textToHighlight={city}
                    />
                    
            )
}
}

ListItem.propTypes = {
    city: PropTypes.string.isRequired,
    selectedValue:PropTypes.string.isRequired,

};
export default ListItem;