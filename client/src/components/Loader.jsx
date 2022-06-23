import React from 'react'
import { animate, motion } from 'framer-motion';

const Loader = () => {
  const darkColor = "#001d5c";
  const lightColor = "#00aece";
  const loadervariants = {
    initial: {},
    animate: {
      transition: {
        duration: 1,
      },
    },
  };
  const variants = {
    initial: {
      pathLength: 0,
      fillOpacity: 0,
    },
    animate: {
      pathLength: 1,
      fillOpacity: 1,
      transition: {
        duration: 3,
        delay: 0.5,
        ease: "easeInOut",
        fillOpacity: {
          delay: 3,
          duration: 2,
        },
      },
    },
  };
  return (
    <div className="loader-container">
      <motion.svg
        variants={loadervariants}
        initial="initial"
        animate="animate"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={500}
        viewBox="0 0 1280 1024"
      >
        <motion.path
          fill={darkColor}
          stroke={darkColor}
          strokeWidth="1"
          strokeMiterlimit={10}
          variants={variants}
          className="st0"
          d="M629.8,361.9c-111,10-111.3,86.1-111.3,86.1c0.9,12.5,9.2,36.1,33,54.7c-8,10.7-14.5,21.1-17.8,30
	        c0,0,10.6-9.5,27.3-23.5c17.2,10.6,40.8,18.6,72.6,19.9c89.3,3.6,117.4-41.3,126.4-69.8C769,430.8,740.9,351.9,629.8,361.9z
	         M743.2,456.6c-7.7,24.9-31.4,64.1-106.9,60.9c-28-1.2-48.4-8.6-63.1-18.5c18.2-15,41-33.2,64.4-50.3c0,0,0,0,0,0c0,0,0,0,0,0
	        c5.5-4,10.9-7.9,16.4-11.7c22.4-15.6,44.7-29.5,63.5-38c-1.7,0.4-86.5,19.1-151.3-0.9c0,0,19,27.5,50.8,33.5
	        c0,0-30.7,28.3-55.4,58.2c-16-15.3-21.9-33.2-22.5-43c0,0,0.3-66.4,94.1-75.1C727.1,362.9,750.8,431.7,743.2,456.6z"/>
        <motion.path
          fill={darkColor}
          stroke={darkColor}
          strokeWidth="1"
          strokeMiterlimit={10}
          variants={variants}
          className="st0"
          d="M581.9,601.2c-8.1,1.9-17.1,2.9-27,2.9c-12.8,0-22.6-2-29.6-6c-6.8-3.9-10.2-9.3-10.2-16.2
	        c0-7.6,3.7-13.6,11.2-18.1c7.8-4.6,18.6-6.9,32.6-6.9c7.7,0,15.2,0.7,22.3,2l-3,8.1c-6-1.4-12.8-2.2-20.2-2.2
	        c-8.9,0-15.6,1.6-20.3,4.7c-4.1,2.8-6.2,6.6-6.2,11.2c0,4.9,2.1,8.7,6.4,11.3c4.4,2.7,10.6,4.1,18.7,4.1c3.7,0,7-0.3,10-0.8v-16
	        h15.2V601.2z M597.9,603.4v-45.8h15.2v45.8H597.9z M674.2,603.4l-5.4-9.4h-29.9l-5.5,9.4h-15.3l27.2-45.8h17.9l27.8,45.8H674.2z
	         M656.9,573.4c-1.4-2.4-2.4-4.5-3.1-6.3h-0.1c-1.3,2.7-2.3,4.8-3.1,6.3l-8,13.6H665L656.9,573.4z M752.6,597.6
	        c-7.7,4.1-18.2,6.1-31.4,6.1c-3.5,0-10.9-0.1-22-0.3v-45.7c10.3-0.2,18.8-0.4,25.4-0.4c26.7,0,40,7.5,40,22.4
	        C764.7,587.4,760.7,593.3,752.6,597.6z M723.7,564.7c-3.7,0-6.8,0.1-9.2,0.2v30.9c2.4,0.2,5.1,0.3,8.3,0.3c7.8,0,13.9-1.3,18.3-3.8
	        c4.8-2.7,7.2-6.7,7.2-11.9C748.4,569.9,740.2,564.7,723.7,564.7z M495,653.5l-2.4-15.6c-0.3-2.3-0.7-5-1-8.1h-0.1
	        c-0.6,3.1-1.2,5.5-1.8,7.4l-5.2,16.3h-6l-5-15.1c-0.9-2.9-1.6-5.7-2.1-8.5h-0.1c-0.2,3-0.5,5.9-0.9,8.6l-1.9,15h-6.2l4.9-32.2h7.3
	        L480,638c0.7,2.3,1.3,4.6,1.8,6.8h0.1c0.7-2.8,1.3-5.1,1.7-6.7l5.5-16.7h7.3l5,32.2H495z M530,649.5c-3,3-6.7,4.6-11.1,4.6
	        c-4.8,0-8.5-1.5-11-4.4c-2.4-2.8-3.6-6.7-3.6-11.8c0-5.2,1.5-9.4,4.6-12.6c3-3,6.7-4.6,11.1-4.6c4.8,0,8.5,1.5,11,4.4
	        c2.4,2.8,3.7,6.7,3.7,11.8C534.6,642.1,533.1,646.3,530,649.5z M525.9,629.4c-1.5-2.1-3.6-3.1-6.5-3.1c-2.5,0-4.5,0.9-6.1,2.8
	        c-1.6,2-2.5,4.6-2.5,8c0,3.5,0.7,6.3,2.1,8.2c1.5,2,3.6,3.1,6.4,3.1c2.5,0,4.6-0.9,6.1-2.8c1.6-2,2.5-4.6,2.5-8
	        C528,634.1,527.3,631.4,525.9,629.4z M551.2,626.6v26.9H545v-26.9h-8.3v-5.3h22.9v5.3H551.2z M587.3,649.5c-3,3-6.7,4.6-11.1,4.6
	        c-4.8,0-8.5-1.5-11-4.4c-2.4-2.8-3.6-6.7-3.6-11.8c0-5.2,1.5-9.4,4.6-12.6c3-3,6.7-4.6,11.1-4.6c4.8,0,8.5,1.5,11,4.4
	        c2.4,2.8,3.7,6.7,3.7,11.8C592,642.1,590.4,646.3,587.3,649.5z M583.2,629.4c-1.5-2.1-3.6-3.1-6.5-3.1c-2.5,0-4.5,0.9-6.1,2.8
	        c-1.6,2-2.5,4.6-2.5,8c0,3.5,0.7,6.3,2.1,8.2c1.5,2,3.6,3.1,6.4,3.1c2.5,0,4.6-0.9,6.1-2.8c1.6-2,2.5-4.6,2.5-8
	        C585.3,634.1,584.6,631.4,583.2,629.4z M612,653.5l-8.7-13.3h-0.5v13.3h-6.2v-32.2c2.3-0.1,5.3-0.2,9.3-0.2c7.8,0,11.7,3,11.7,9.1
	        c0,2.3-0.8,4.3-2.3,6c-1.5,1.6-3.3,2.6-5.6,3c1.2,1.6,2.1,2.8,2.6,3.5l7.5,10.8H612z M605.2,626.2c-1,0-1.8,0.1-2.4,0.2v9.3
	        c0.6,0.1,1.3,0.1,2.2,0.1c1.9,0,3.3-0.4,4.4-1.3c1.1-0.9,1.6-2.1,1.6-3.6C611.1,627.7,609.1,626.2,605.2,626.2z M648.5,651.1
	        c-2.3,2-5.3,3-9,3c-2.8,0-5.3-0.3-7.5-0.9l0.7-6c2.2,0.9,4.5,1.4,7,1.4c3.6,0,5.4-1.4,5.4-4.2c0-1.3-0.7-2.4-2.1-3.3
	        c-0.4-0.2-1.9-0.9-4.7-2c-4.5-1.8-6.8-4.7-6.8-8.6c0-2.9,1.1-5.3,3.2-7c2.2-1.8,5.2-2.7,9-2.7c1.9,0,3.9,0.2,5.8,0.6l-0.6,5.4
	        c-1.9-0.6-3.7-0.9-5.5-0.9c-3.5,0-5.3,1.3-5.3,3.9c0,1.2,0.7,2.3,2.1,3.1c0.3,0.2,1.9,0.9,4.8,2.1c4.6,2,6.9,4.8,6.9,8.6
	        C651.9,646.7,650.8,649.1,648.5,651.1z M656.6,653.5v-32.2h17.5v5.2h-11.3v7.9h10.7v5.1h-10.7v8.7h11.3v5.3H656.6z M695.5,653.5
	        l-8.7-13.3h-0.5v13.3h-6.2v-32.2c2.3-0.1,5.3-0.2,9.3-0.2c7.8,0,11.7,3,11.7,9.1c0,2.3-0.8,4.3-2.3,6c-1.5,1.6-3.3,2.6-5.6,3
	        c1.2,1.6,2.1,2.8,2.6,3.5l7.5,10.8H695.5z M688.7,626.2c-1,0-1.8,0.1-2.4,0.2v9.3c0.6,0.1,1.3,0.1,2.2,0.1c1.9,0,3.3-0.4,4.4-1.3
	        c1.1-0.9,1.6-2.1,1.6-3.6C694.6,627.7,692.6,626.2,688.7,626.2z M720.6,653.5h-7.2l-11.2-32.2h6.8l6.2,18.9c0.8,2.5,1.5,4.5,1.9,6.2
	        h0.1c0.5-1.9,1.1-4.1,2-6.6l6.3-18.5h6.4L720.6,653.5z M735.4,653.5v-32.2h6.2v32.2H735.4z M769.7,652.4c-2.6,1-5.4,1.5-8.4,1.5
	        c-5.2,0-9.1-1.6-11.7-4.7c-2.1-2.7-3.2-6.2-3.2-10.7c0-5.3,1.3-9.5,4-12.5c2.8-3.3,6.9-4.9,12.1-4.9c2.4,0,4.7,0.3,6.9,1l-0.9,5.7
	        c-2-0.8-4.1-1.1-6.3-1.1c-2.9,0-5.2,1-6.8,3.1c-1.5,1.9-2.2,4.5-2.2,7.8c0,7.3,3.1,10.9,9.4,10.9c2.2,0,4.3-0.5,6.1-1.4L769.7,652.4
	        z M774.9,653.5v-32.2h17.5v5.2h-11.3v7.9h10.7v5.1h-10.7v8.7h11.3v5.3H774.9z M814,651.1c-2.3,2-5.3,3-9,3c-2.8,0-5.3-0.3-7.5-0.9
	        l0.7-6c2.2,0.9,4.5,1.4,7,1.4c3.6,0,5.4-1.4,5.4-4.2c0-1.3-0.7-2.4-2.1-3.3c-0.4-0.2-1.9-0.9-4.7-2c-4.5-1.8-6.8-4.7-6.8-8.6
	        c0-2.9,1.1-5.3,3.2-7c2.2-1.8,5.2-2.7,9-2.7c1.9,0,3.9,0.2,5.8,0.6l-0.6,5.4c-1.9-0.6-3.7-0.9-5.5-0.9c-3.5,0-5.3,1.3-5.3,3.9
	        c0,1.2,0.7,2.3,2.1,3.1c0.3,0.2,1.9,0.9,4.8,2.1c4.6,2,6.9,4.8,6.9,8.6C817.4,646.7,816.3,649.1,814,651.1z"
        />
        <motion.path
          fill={lightColor}
          stroke={lightColor}
          strokeWidth="1"
          strokeMiterlimit={10}
          variants={variants}
          className="st1"
          d="M734.9,465.8c0,20.4-22.1,36.9-49.3,36.9c-27.2,0-49.3-16.5-49.3-36.9c0-20.4,22.1-36.9,49.3-36.9
	        C712.8,428.9,734.9,445.4,734.9,465.8z" />
      </motion.svg>
    </div>
  );
};

export default Loader;
