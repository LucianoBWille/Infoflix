import React from 'react';

function ButtonLink(props){
    //props => { className: 'algo', href: 'outralgo' }
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;