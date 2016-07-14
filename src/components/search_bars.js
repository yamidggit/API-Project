import React from 'react';
import {newQuery} from '../action_creators';
import {reduxForm } from 'redux-form';

class SearchBars extends React.Component {
    
    render() {
        const query= this.props.fields.query;
        const location= this.props.fields.location;
        const handleSubmit=this.props.handleSubmit;
        return (
            <div className="search_bars">
                <form onSubmit={handleSubmit(this.props.newQuery)}>
                    <div className="form-group">
                        <label>Find</label>
                        <input className="search_query" 
                                type="text"
                                
                                //pass the keys and values of the object query into input
                                //you can refer onChange={query.onChange} inside of input
                                {...query} />
                        
                    </div>
                    <div className="form-group">
                        <label>Near</label>
                        <input className="location"
                                type="text"
                                 {...location} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}


//connect : first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm :1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export const SearchBarsFormContainer = reduxForm({
    form: 'searchBars',
    fields:['query','location']
}, null,{newQuery})(SearchBars);