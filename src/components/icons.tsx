import React from 'react';

interface IconProps {
  size?: number;
  fill?: string;
  className?: string;
}

export function Map({ className, size = 25, fill = 'white' }: IconProps) {
  return (
    <svg
      width={size}
      className={className}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.7286 14.6742C18.1926 14.5442 17.6526 14.8791 17.5257 15.4161C17.3977 15.9531 17.7306 16.4921 18.2676 16.6191C21.3736 17.3561 22.4996 18.4461 22.4996 19.0001C22.4996 20.195 18.5117 22 12.4998 22C6.48887 22 2.49998 20.195 2.49998 19.0001C2.49998 18.4461 3.62697 17.3561 6.73088 16.6191C7.26886 16.4921 7.60087 15.9531 7.47285 15.4161C7.34587 14.8791 6.80588 14.5441 6.26988 14.6742C2.54896 15.5561 0.5 17.0921 0.5 19.0001C0.5 22.282 6.5379 24 12.4998 24C18.4627 24 24.4996 22.282 24.4996 19.0001C24.4996 17.0921 22.4506 15.5561 18.7286 14.6742Z"
        fill={fill}
      />
      <path
        d="M12.5002 8.00051C13.0522 8.00051 13.5002 7.55253 13.5002 7.00054C13.5002 6.44855 13.0522 6.00057 12.5002 6.00057C11.9483 6.00057 11.5003 6.44855 11.5003 7.00054C11.5003 7.55253 11.9483 8.00051 12.5002 8.00051Z"
        fill={fill}
      />
      <path
        d="M11.1983 18.6333L11.6053 19.4473C11.7753 19.7862 12.1213 20.0002 12.5002 20.0002C12.8792 20.0002 13.2252 19.7862 13.3952 19.4473L14.2572 17.7233C15.3062 15.6243 16.6001 13.5914 17.8511 11.6254L18.4211 10.7284C19.1271 9.61241 19.5001 8.32342 19.5001 7.00044C19.5001 5.00848 18.6471 3.1045 17.1601 1.77655C15.6742 0.449595 13.6752 -0.186346 11.6823 0.0476496C8.57032 0.401643 6.0004 2.90758 5.56939 6.00554C5.3144 7.8415 5.77339 9.66449 6.86035 11.1405C8.55635 13.4384 9.88031 15.9954 11.1983 18.6333ZM12.5002 4.00054C14.1542 4.00054 15.5002 5.34653 15.5002 7.00049C15.5002 8.65444 14.1542 10.0004 12.5002 10.0004C10.8463 10.0004 9.5003 8.65444 9.5003 7.00049C9.5003 5.34653 10.8463 4.00054 12.5002 4.00054Z"
        fill={fill}
      />
    </svg>
  );
}

export function Notebook({ className, size = 25, fill = 'white' }: IconProps) {
  const width = Math.floor(size * 0.8);
  return (
    <svg
      className={className}
      width={width}
      height={size}
      viewBox={`0 0 ${width} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.72307 12C3.72307 12.5099 3.30991 12.9231 2.79999 12.9231H0.953839C0.44392 12.9231 0.0307617 12.5099 0.0307617 12C0.0307617 11.4901 0.44392 11.0769 0.953839 11.0769H2.79999C3.30997 11.0769 3.72307 11.4901 3.72307 12ZM3.72307 6.09231C3.72307 5.58239 3.30991 5.16923 2.79999 5.16923H0.953839C0.44392 5.16923 0.0307617 5.58239 0.0307617 6.09231C0.0307617 6.60223 0.44392 7.01538 0.953839 7.01538H2.79999C3.30997 7.01538 3.72307 6.60223 3.72307 6.09231ZM3.72307 17.9077C3.72307 17.3977 3.30991 16.9847 2.79999 16.9847H0.953839C0.44392 16.9847 0.0307617 17.3977 0.0307617 17.9077C0.0307617 18.4177 0.44392 18.8308 0.953839 18.8308H2.79999C3.30997 18.8308 3.72307 18.4176 3.72307 17.9077ZM19.9692 2.95385V21.0462C19.9692 22.6774 18.6467 24 17.0155 24H4.09241C2.46117 24 1.13856 22.6774 1.13856 21.0462V19.5692H2.8001C3.71617 19.5692 4.46164 18.8237 4.46164 17.9077C4.46164 16.9916 3.71617 16.246 2.8001 16.246H1.13845V13.6614H2.79999C3.71606 13.6614 4.46153 12.916 4.46153 11.9999C4.46153 11.0838 3.71606 10.3384 2.79999 10.3384H1.13845V7.75374H2.79999C3.71606 7.75374 4.46153 7.00827 4.46153 6.0922C4.46153 5.17613 3.71606 4.43066 2.79999 4.43066H1.13845V2.95385C1.13845 1.32261 2.46106 0 4.0923 0H17.0154C18.6466 0 19.9692 1.32255 19.9692 2.95385ZM8.25945 8.75593C8.25945 10.3289 9.53476 11.6042 11.1077 11.6042C12.6807 11.6042 13.9559 10.3289 13.9559 8.75593C13.9559 7.183 12.6807 5.90764 11.1077 5.90764C9.53482 5.90769 8.25945 7.183 8.25945 8.75593ZM15.5385 15.7185C15.5385 13.9709 14.1214 12.5538 12.3738 12.5538H9.84198C8.09406 12.5538 6.67692 13.971 6.67692 15.7185V16.9846H15.5385V15.7185Z"
        fill={fill}
      />
    </svg>
  );
}

export function User({ className, size = 25, fill = 'white' }: IconProps) {
  const width = Math.floor(size * 0.75);
  return (
    <svg
      className={className}
      width={width}
      height={size}
      viewBox={`0 0 ${width} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 11.25C6.81196 11.25 4.71354 12.1192 3.16637 13.6664C1.61919 15.2135 0.75 17.312 0.75 19.5V21C0.75 21.5967 0.987053 22.169 1.40901 22.591C1.83097 23.0129 2.40326 23.25 3 23.25H15C15.5967 23.25 16.169 23.0129 16.591 22.591C17.0129 22.169 17.25 21.5967 17.25 21V19.5C17.25 17.312 16.3808 15.2135 14.8336 13.6664C13.2865 12.1192 11.188 11.25 9 11.25Z"
        fill={fill}
      />
      <path
        d="M9 9.75C11.4853 9.75 13.5 7.73528 13.5 5.25C13.5 2.76472 11.4853 0.75 9 0.75C6.51472 0.75 4.5 2.76472 4.5 5.25C4.5 7.73528 6.51472 9.75 9 9.75Z"
        fill={fill}
      />
    </svg>
  );
}
