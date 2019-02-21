import { connect } from 'react-redux';
import HelloWorld from '../presentation/HelloWorld';


const mapStateToProps = state => ({
  tech: state.tech
})

export default connect(mapStateToProps)(HelloWorld);
