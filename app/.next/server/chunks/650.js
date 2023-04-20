exports.id = 650;
exports.ids = [650];
exports.modules = {

/***/ 802:
/***/ (() => {

throw new Error("Module build failed (from ../node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js):\nTypeError: Cannot read properties of undefined (reading 'config')\n    at getTailwindConfig (/home/nayuta/code/oinori/node_modules/tailwindcss/lib/lib/setupTrackingContext.js:85:63)\n    at /home/nayuta/code/oinori/node_modules/tailwindcss/lib/lib/setupTrackingContext.js:97:92\n    at /home/nayuta/code/oinori/node_modules/tailwindcss/lib/processTailwindFeatures.js:46:11\n    at plugins (/home/nayuta/code/oinori/node_modules/tailwindcss/lib/plugin.js:38:63)\n    at LazyResult.runOnRoot (/home/nayuta/code/oinori/node_modules/next/node_modules/postcss/lib/lazy-result.js:339:16)\n    at LazyResult.runAsync (/home/nayuta/code/oinori/node_modules/next/node_modules/postcss/lib/lazy-result.js:393:26)\n    at LazyResult.async (/home/nayuta/code/oinori/node_modules/next/node_modules/postcss/lib/lazy-result.js:221:30)\n    at LazyResult.then (/home/nayuta/code/oinori/node_modules/next/node_modules/postcss/lib/lazy-result.js:206:17)");

/***/ }),

/***/ 650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_TerminalUI)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(200);
;// CONCATENATED MODULE: ./components/terminal/TrackLane.tsx

const TrackLaneSchema = lib.z.object({
    id: lib.z.number().describe("UniqueLaneID"),
    name: lib.z.string().describe("LaneName")
});
class TrackLane {
    constructor(props = {
        id: 0,
        name: ""
    }){
        const index = props.id;
        const defaultName = `Lane ${index + 1}`;
        this.props = {
            ...props,
            name: props.name ?? defaultName
        };
    }
}
/* harmony default export */ const terminal_TrackLane = (TrackLane);

;// CONCATENATED MODULE: ./components/terminal/NLane.tsx


const nLaneSchema = lib.z.object({
    lanes: lib.z.array(lib.z.object({
        id: lib.z.number().describe("LaneID"),
        name: lib.z.string().describe("LaneName")
    }))
});
class NLane extends terminal_TrackLane {
    constructor({ id =0 , name ="1" , lanes =[]  } = {}){
        super({
            id,
            name
        });
        this.lanes = lanes.map((laneProps)=>new terminal_TrackLane(laneProps));
    }
}
const nLaneInstance = new NLane({
    lanes: Array.from({
        length: 8
    }, (_, i)=>({
            id: i,
            name: `Lane ${i + 1}`
        }))
});
/* harmony default export */ const terminal_NLane = (nLaneInstance);

// EXTERNAL MODULE: ./pages/Terminal.module.css
var TerminalUI_module = __webpack_require__(802);
var TerminalUI_module_default = /*#__PURE__*/__webpack_require__.n(TerminalUI_module);
;// CONCATENATED MODULE: ./pages/Terminal.tsx




const TerminalUI = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (TerminalUI_module_default()).title,
                children: "Terminal UI"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (TerminalUI_module_default()).name,
                children: terminal_NLane.props.name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (TerminalUI_module_default()).lanes,
                children: terminal_NLane.lanes.map((lane)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (TerminalUI_module_default()).laneName,
                        children: lane.props.name
                    }, lane.props.name))
            })
        ]
    });
};
/* harmony default export */ const pages_TerminalUI = (TerminalUI);


/***/ })

};
;
