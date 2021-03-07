import {connect} from 'react-redux'
import Home from '../Components/Home';
import {addToCart} from "../Services/Actions/action";


const mapStateToProps = state=>({
    
}); 
const mapDispatchToProps = (dispatch) => ({
    addToCartHandler:function(data) {

        dispatch(addToCart(data));
    },
    
}); 
export default connect(mapStateToProps,mapDispatchToProps)(Home);