// import React from 'react';
// import PropTypes from 'prop-types';
// import "../../app/globals.css"

// const Button = ({ href, children, variant, onClick }) => {
//   let buttonStyle = '';

//   switch (variant) {
//     case 'button1':
//       buttonStyle = 'w-[25%] pt-[20px] pb-[20px] pl-[40px] pr-[40px] text-white btn1 rounded-[50px]';
//       break;
//     case 'success':
//       buttonStyle = 'bg-customgrays h-[40px] cursor-pointer text-center w-[120px] rounded-[40px] py-[7px] text-[15px] font-medium text-white';
//       break;
//       case 'button':
//         buttonStyle = 'bg-[#EE7455] hover:bg-black px-[30px] py-[10px] rounded-[50px] text-[10px] font-medium text-white';
//         break;
//       default:
//       buttonStyle = '';
//       break;
//   }

//   return (
//     <a
//       className={buttonStyle}
//       onClick={onClick}
//       href={href}
//     >
//       {children}
//     </a>
//   );
// };

// Button.propTypes = {
//   href: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
//   variant: PropTypes.oneOf(['button1', 'success']).isRequired,
//   onClick: PropTypes.func,
// };

// export default Button;


import React from 'react';
import PropTypes from 'prop-types';
import '../../app/globals.css'


function Button({ variant, children, style }) {
  return (
    <button className={variant} style={style}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

Button.defaultProps = {
  variant: '',
  style: {},
};

export default Button;
