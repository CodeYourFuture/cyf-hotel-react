import React, { Component } from 'react';

class SpecialDeals extends Component {
  render() {
    const deals = ['10% Off', 'Kids eat free', 'Two for one'];
    return (
        <div>
            {deals.map(deal => <p>{deal}</p>)}
        </div>
    );
  }
}

export default SpecialDeals;