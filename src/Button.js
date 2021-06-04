import React from 'react';
import PropTypes from "prop-types"

class Button extends React.Component{
    render(){
        let {
            color, as, children, ...rest
        } = this.props


        let btnProps = {
            className: `button button--${color}`,
            children, rest,
        }

        if (as === "link"){
            return <a href="" {...btnProps}></a>
        } else if (as === "div"){
            return <button {...btnProps}></button>
        }

        return(
            <div className=""></div>
        )
    }
}

Button.propTypes ={
    color: PropTypes.oneOf([
        "red",
        "green",
        "blue"
    ]),
    as: PropTypes.oneOf([
        "div",
        "link",
        "button"
    ])
}


export default Button