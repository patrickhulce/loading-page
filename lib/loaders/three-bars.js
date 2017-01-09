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
        background: ${color};
        -webkit-animation: ${prefix}load-animation 1s infinite ease-in-out;
        animation: ${prefix}load-animation 1s infinite ease-in-out;
        width: 1em;
        height: 4em;
      }
      .${prefix}loader {
        color: ${color};
        text-indent: -9999em;
        position: relative;
        font-size: 11px;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
      }
      .${prefix}loader:before,
      .${prefix}loader:after {
        position: absolute;
        top: 0;
        content: '';
      }
      .${prefix}loader:before {
        left: -1.5em;
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
      }
      .${prefix}loader:after {
        left: 1.5em;
      }
      @-webkit-keyframes ${prefix}load-animation {
        0%,
        80%,
        100% {
          box-shadow: 0 0;
          height: 4em;
        }
        40% {
          box-shadow: 0 -2em;
          height: 5em;
        }
      }
      @keyframes ${prefix}load-animation {
        0%,
        80%,
        100% {
          box-shadow: 0 0;
          height: 4em;
        }
        40% {
          box-shadow: 0 -2em;
          height: 5em;
        }
      }
    `,
  }
}
