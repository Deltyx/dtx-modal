"use strict";Object.defineProperty(exports,"__esModule",{value:!0});!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===a&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".modal{background:#fff;border-radius:5px;flex-direction:column;padding:1rem;position:relative;width:15%}.modal,.modal-wrapper{align-items:center;display:flex}.modal-wrapper{background-color:rgba(0,0,0,.7);height:100vh;justify-content:center;position:absolute;width:100vw;z-index:1}.modal-header{display:flex;width:100%}.modal-title{font-size:22px}.modal-btn{background-color:#1976d2;border:none;border-radius:50%;height:32px;position:absolute;right:-12px;top:-12px;width:32px}.modal-btn:hover{cursor:pointer}"),exports.Modal=function(e){return React.createElement("div",{className:"modal-wrapper"},React.createElement("div",{className:"modal"},React.createElement("div",{className:"modal-header"},React.createElement("h1",{className:"modal-title"},e.title)),React.createElement("button",{className:"modal-btn",onClick:e.onClose},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 14 14",fill:"none"},React.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.7071 1.70711C14.0976 1.31658 \r 14.0976 0.683417 13.7071 0.292893C13.3166 \r -0.0976311 12.6834 -0.0976311 12.2929 \r 0.292893L7 5.58579L1.70711 0.292893C1.31658 \r -0.0976311 0.683417 -0.0976311 0.292893 \r 0.292893C-0.0976311 0.683417 -0.0976311 \r 1.31658 0.292893 1.70711L5.58579 7L0.292893 \r 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 \r 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 \r 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 \r 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 \r 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 \r 7L13.7071 1.70711Z",fill:"white"})))))};
