import React, {Component} from 'react';

import './SearchHistory.scss';

const CLASS_NAMES = {
  SEARCH_HISTORY_WRAPPER: 'search-history-wrapper'
}


const ListItems = (props) => {
  const {items} = props;
  return (
    <ol>
      {items.map((item,index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  )
};

class SearchHistory extends Component {
  render () {
    const {items} = this.props;
    if (items) {
      return (
        <div className={CLASS_NAMES.SEARCH_HISTORY_WRAPPER}>
          <h1>Search History:</h1>
          <ListItems items={items} />
        </div>
      )
    }
    return;
  }
};

export default SearchHistory;