/**
 * Created by Tadas on 2016-09-27.
 */
import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">DoesNotworkstagram</Link>
                </h1>
                {React.cloneElement(this.props.children,this.props)}
            </div>
        )
    }
});

export default Main;