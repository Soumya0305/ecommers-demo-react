import React from 'react'
import { connect } from 'react-redux';

const Dashboard = (props) => {
    console.log(props.user)
  return (
    <React.Fragment>
    <div>dashboard</div>
    <div> Welcome {props?.user}</div>
    </React.Fragment> 
  )
}

function mapStateToProps(state) {
	return {
		user: state?.auth?.authData?.user,
	};
}



export default connect(mapStateToProps)(Dashboard);

