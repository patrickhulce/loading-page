export default function loader(options) {
  const {prefix, color} = options
  return {
    html: `
      <div class="${prefix}loader"></div>
    `,
    css: `
      .${prefix}loader,
      .${prefix}loader:before,
      .${prefix}loader:after {
        border-radius: 50%;
        width: 2.5em;
        height: 2.5em;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation: ${prefix}load-animation 1.8s infinite ease-in-out;
        animation: ${prefix}load-animation 1.8s infinite ease-in-out;
      }
      .${prefix}loader {
        color: ${color};
        font-size: 10px;
        position: relative;
        top: -2.5em;
        text-indent: -9999em;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
      }
      .${prefix}loader:before,
      .${prefix}loader:after {
        content: '';
        position: absolute;
        top: 0;
      }
      .${prefix}loader:before {
        left: -3.5em;
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
      }
      .${prefix}loader:after {
        left: 3.5em;
      }
      @-webkit-keyframes ${prefix}load-animation {
        0%,
        80%,
        100% {
          box-shadow: 0 2.5em 0 -1.3em;
        }
        40% {
          box-shadow: 0 2.5em 0 0;
        }
      }
      @keyframes ${prefix}load-animation {
        0%,
        80%,
        100% {
          box-shadow: 0 2.5em 0 -1.3em;
        }
        40% {
          box-shadow: 0 2.5em 0 0;
        }
      }
    `,
  }
}
