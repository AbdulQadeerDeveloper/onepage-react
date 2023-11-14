import { connect } from 'react-redux';
import Home from './Home';
import { fetchData } from './actions';

const mapStateToProps = (state) => {
    return {
        name: state.name,
        designation: state.designation
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (data) => {
            dispatch(fetchData(data));
        }
    };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
