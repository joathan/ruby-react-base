import React from 'react';
// Components
import Pricing from './landingPage/pricing';
import Pitch from './landingPage/pitch';
import {Api} from '../middleware/api'
class LandingPage extends React.Component {
  render() {
    return(
      <div>
        <Pitch {...this.props} />
        <Pricing {...this.props}/>
      </div>
    )
  }
}
// Api.helloWorld();

export default LandingPage