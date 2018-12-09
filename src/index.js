import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Timestamp = require('react-timestamp')

class Order extends React.Component {
 
  render() {
    return (
      <div className="order">
        <ul>
          <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
          <li>{this.props.size}</li>
          <li>{this.props.scoops.length} scoop/s: {this.props.scoops.join(', ')}</li>
          <li>Ordered by {this.props.orderInfo.customerName} on {this.props.orderInfo.orderedAt}.</li>
        </ul>
      </div>
    );
  }
}

Order.defaultProps = {
  cone: true,
  size: 'regular'
}

Order.propTypes = {
  cone: PropTypes.bool,
  size: PropTypes.string,
  scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
  orderInfo: PropTypes.shape({
    customerName: PropTypes.string.isRequired,
    orderedAt: PropTypes.isRequired // We're using UNIX timestamps here
  }).isRequired
};

ReactDOM.render(
  <Order 
  	cone={false}
  	size='medium'
  	scoops={['vanilla', 'cherry']}
  	orderInfo={{customerName: 'Terry Blue', orderedAt: <Timestamp format='full' />}}
  />,	
  document.getElementById('root')
)
