import React, { Fragment, cloneElement, useState, useRef, useEffect } from 'react';
import reactDom from 'react-dom';
import PropTypes from 'prop-types';


const TooltipContent = ({ className, content, position, tooltipPosition }) => {
    const tooltipElement = useRef();
    const targetElement = document.getElementById("root")

    useEffect(() => {
        const element = tooltipElement.current;

        if (element) {
            setTimeout(() => {
                if(tooltipPosition === "top") {
                    element.style.top = `${position.top - element.clientHeight}px`;
                    element.style.left = `${position.top - element.clientHeight}px`;
                    element.style.transform = `translate(-50%, -15px) scale(1)`;
                }
            }, 20);
        }
    }, [])

    const output = <div className={className} ref={tooltipElement}></div>

    return targetElement ? ReactDOM.createPortal(output, targetElement) : output; 
}

TooltipContent.PropTypes = {
    content: PropTypes.any.isRequired,
    className: PropTypes.string.isRequired,
    position: PropTypes.shape({
        top: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired
    }).isRequired,
    position: PropTypes.string.isRequired
}

const Tooltip = ({children, position, content}) => {
    const [elementPosition, setElementPosition] = useState({ top: 0, left: 0});
    const [show, setShow] = useState(false);
    let className = "tooltip";

    const getPosition = (e) => {
        const pos = e.currentTarget.getBoundingClientRect();

        if (position === "top") {
            setElementPosition({top: pos.top, left: pos.left + (pos.width / 2)});
        }
    }

    if (position === "top") {
        className += " tooltip--top";
    }

    return(
        <Fragment>
            {show && <TooltipContent className={className} position={elementPosition} content={content} />}
            {cloneElement(children, {...children.props, onMouseOver: getPosition, onMouseLeave: () => setShow(false)})}
        </Fragment>
    );
}

Tooltip.PropTypes = {
    children: PropTypes.element.isRequired,
    content: PropTypes.any.isRequired,
    position: PropTypes.oneOf("top", "left").isRequired

}

export default ProjectTooltip;

// 11:02