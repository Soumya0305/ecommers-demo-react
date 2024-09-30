import React from 'react'
import { connect } from 'react-redux';
import ProductList from '../components/productList';

const Dashboard = (props) => {
    console.log(props.user)
  return (
    <div className="p-6 min-h-screen">
  <ProductList />
</div>

  )
}

function mapStateToProps(state) {
	return {
		user: state?.auth?.authData?.user,
	};
}



export default connect(mapStateToProps)(Dashboard);

