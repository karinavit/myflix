import React from 'react';

function ButtonLink(props){
  // props => { className:"o nome da classe", href:"" }
console.log(props)
  return(
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  );
}

export default ButtonLink;