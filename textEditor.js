(function () {
    appliactionStart();
    function appliactionStart() {
        var _styleIt = new styleit();
        console.log(_styleIt);
        const createHolder = () => {
            const textEditor = document.createElement("div");
            textEditor.className = "text-editor";
            return textEditor;
        }
        const createBtn = (iconClassName) => {
            const btn = document.createElement("div");
            btn.className = "text-editor-button";
            const icon = document.createElement("i");
            icon.className = iconClassName;
            btn.appendChild(icon);
            return btn;
        }
        [
            {
                key: "bold",
                onClick: () => { },
                icon: "fas fa-bold",

            }
        ]
        // _styleIt.execCmd("font-size","20px",_styleIt.MODES.Extend);

    }
})();

function openEditor() {
    document.body.style.overflow = "hidden";
    const CreateCloseIcon = () => {
        const close = {
            tag: "div",
            className: "close-editor--lab",
            innerHTML: `<i class="fas fa-times close-editor--lab"></i>`,
            onclick: (e) => {
                document.body.style.overflow = "";
                const target = e.target.closest(".close-editor--lab");
                target.remove();
                const content = document.querySelector(".editor-conetnt--example");
                conetnt.classList.add("slide-to-bottom");
                setTimeout(() => {
                    content.remove();
                    const drawer = document.querySelector(".editor-drawer--example");
                    drawer.classList.add("slide-to-right");
                    setTimeout(() => {
                        drawer.remove();
                    }, 600);
                }, 600);
            }
        }
        const rendered = createElement(close);
        document.body.appendChild(rendered);
    }
    const createElement = (el) => {
        let btn = document.createElement(el.tag);
        Object.assign(btn, el);
        if (el.attrs) {
            for (const key in el.attrs) {
                if (btn.attrs.hasOwnProperty(key)) {
                    const value = btn.attrs[key];
                    btn.setAttribute(key, value);
                }
            }
        }
        return btn;
    }
    const createDrawer = (_styleIt) => {
        const elements = [
            {
                tag: "p",
                innerHTML: "Style-it",
                style: "text-align:center;margin-top:5px;"
            },
            {
                tag: "div",
                className: "editor-group",
                childs: [
                    {
                        tag: "button",
                        className: "btn btn-light",
                        innerHTML: `<i class="fas fa-bold"></i>`,
                        attrs: {
                            title: "Bold",
                            "data-toggle": "tooltip"
                        },
                        onclick: () => _styleIt.execCmd("font-weight", "bold", _styleIt.MODES.Toggle)
                    },
                    {
                        tag: "button",
                        className: "btn btn-light",
                        innerHTML: ` <i class="fas fa-italic"></i>`,
                        onclick: () => _styleIt.execCmd("font-style", "italic", _styleIt.MODES.Toggle)
                    },
                    {
                        tag: "button",
                        className: "btn btn-light",
                        innerHTML: `<i class="fas fa-underline"></i>`,
                        onclick: () => _styleIt.execCmd("text-decoration", "underline", _styleIt.MODES.Toggle)
                    },
                    {
                        tag: "button",
                        className: "btn btn-light",
                        innerHTML: ` <i class="fas fa-strikethrough"></i>`,
                        onclick: () => _styleIt.execCmd("text-decoration", "line-through", _styleIt.MODES.Toggle)
                    },

                ]
            },
            {
                tag: "div",
                className: "editor-group",
                childs: [
                    {
                        tag: "button",
                        innerHTML: `   <i class="fas fa-align-left"></i>`,
                        className: "btn btn-light",
                        onclick: () => _styleIt.execCmd("text-align", "left", _styleIt.MODES.Extend, {
                            target: "block"
                        })
                    },
                    {
                        tag: "button",
                        innerHTML: `<i class="fas fa-align-center"></i>`,
                        className: "btn btn-light",
                        onclick: () => _styleIt.execCmd("text-align", "center", _styleIt.MODES.Extend, {
                            target: "block"
                        })
                    },
                    {
                        tag: "button",
                        innerHTML: `<i class="fas fa-align-right"></i>`,
                        className: "btn btn-light",
                        onclick: () => _styleIt.execCmd("text-align", "right", _styleIt.MODES.Extend, {
                            target: "block"
                        })
                    }
                ]
            },
            {
                tag: "div",
                className: "editor-group row",
                childs: [

                    {
                        tag: "div",
                        className: "dropdown  col",
                        childs: [
                            {
                                tag: "button",
                                className: "btn btn-light dropdown-toggle",
                                attrs: {
                                    "data-toggle": "dropdown",
                                },
                                id: "dd-font-size",
                                innerHTML: "font-size"
                            },
                            {
                                tag: "div",
                                className: "dropdown-menu",
                                "aria-labelledby": "dd-font-size",
                                childs: [
                                    {
                                        tag: "button",
                                        className: "dropdown-item",
                                        innerHTML: "10px",
                                        onclick: () => _styleIt.execCmd("font-size", "10px", _styleIt.MODES.Extend)
                                    },
                                    {
                                        tag: "button",
                                        className: "dropdown-item",
                                        innerHTML: "18px",
                                        onclick: () => _styleIt.execCmd("font-size", "18px", _styleIt.MODES.Extend)

                                    },
                                    {
                                        tag: "button",
                                        className: "dropdown-item",
                                        innerHTML: "27px",
                                        onclick: () => _styleIt.execCmd("font-size", "27px", _styleIt.MODES.Extend)

                                    },
                                    {
                                        tag: "button",
                                        className: "dropdown-item",
                                        innerHTML: "32px",
                                        onclick: () => _styleIt.execCmd("font-size", "32px", _styleIt.MODES.Extend)

                                    },
                                    ,
                                    {
                                        tag: "button",
                                        className: "dropdown-item",
                                        innerHTML: "40px",
                                        onclick: () => _styleIt.execCmd("font-size", "40px", _styleIt.MODES.Extend)

                                    },
                                    ,
                                    {
                                        tag: "button",
                                        className: "dropdown-item",
                                        innerHTML: "42px",
                                        onclick: () => _styleIt.execCmd("font-size", "42px", _styleIt.MODES.Extend)

                                    }, ,
                                    {
                                        tag: "button",
                                        className: "dropdown-item",
                                        innerHTML: "50px",
                                        onclick: () => _styleIt.execCmd("font-size", "50px", _styleIt.MODES.Extend)

                                    }
                                ]
                            }
                        ]

                    }
                ]
            },
            {
                tag: "div",
                className: "editor-group row",
                childs: [
                    {
                        tag: "button",
                        className: "btn btn-light col",
                        innerHTML: `<i class="fas fa-paint-brush"></i>`,
                        style: "color:#7D5BA6;",
                        onclick: () => _styleIt.execCmd("color", "#7D5BA6", _styleIt.MODES.Extend)
                    },
                    {
                        tag: "button",
                        className: "btn btn-light col",
                        innerHTML: `<i class="fas fa-paint-brush"></i>`,
                        style: "color:#333333;",
                        onclick: () => _styleIt.execCmd("color", "#333333", _styleIt.MODES.Extend)
                    },
                    {
                        tag: "button",
                        className: "btn btn-light col",
                        innerHTML: `<i class="fas fa-paint-brush"></i>`,
                        style: "color:#86A59C;",
                        onclick: () => _styleIt.execCmd("color", "#86A59C", _styleIt.MODES.Extend)
                    },
                    {
                        tag: "button",
                        className: "btn btn-light col",
                        innerHTML: `<i class="fas fa-paint-brush"></i>`,
                        style: "color:#8BBD8B;",
                        onclick: () => _styleIt.execCmd("color", "#8BBD8B", _styleIt.MODES.Extend)
                    },
                ]
            },
            {
                tag: "div",
                className: "editor-group row",
                childs: [
                    {
                        tag: "button",
                        className: "btn btn-light col",
                        innerHTML: `<i class="fas fa-fill-drip"></i>`,
                        style: "background-color:#7D5BA6;",
                        onclick: () => _styleIt.execCmd("background-color", "#7D5BA6", _styleIt.MODES.Extend)
                    },
                    {
                        tag: "button",
                        className: "btn btn-light col",
                        innerHTML: `<i class="fas fa-fill-drip"></i>`,
                        style: "background-color:#333333;",
                        onclick: () => _styleIt.execCmd("background-color", "#333333", _styleIt.MODES.Extend)
                    },
                    {
                        tag: "button",
                        className: "btn btn-light col",
                        innerHTML: `<i class="fas fa-fill-drip"></i>`,
                        style: "background-color:#86A59C;",
                        onclick: () => _styleIt.execCmd("background-color", "#86A59C", _styleIt.MODES.Extend)
                    },
                    {
                        tag: "button",
                        className: "btn btn-light col",
                        innerHTML: `<i class="fas fa-fill-drip"></i>`,
                        style: "background-color:#8BBD8B;",
                        onclick: () => _styleIt.execCmd("background-color", "#8BBD8B", _styleIt.MODES.Extend)
                    },
                ]
            },
            {
                tag: "div",
                className: "editor-group",
                childs: [
                    // {
                    //     tag: "div",
                    //     className: "form-group",
                    //     childs: [
                    //         {
                    //             tag: "label",
                    //             attrs: {
                    //                 for: "margin-top-control"
                    //             },
                    //             innerHTML: "margin-top"
                    //         },
                    //         {
                    //             tag: "input",
                    //             className: "form-control-range",
                    //             id: "margin-top-control",
                    //             attrs: {
                    //                 type: "range",
                    //                 max: 300,
                    //                 min: 0
                    //             },
                    //             oninput: (e) => _styleIt.execCmd("margin-top", e.target.value + "px", _styleIt.MODES.Extend, {
                    //                 target: "block"
                    //             })
                    //         },
                    //     ]
                    // },
                    // {
                    //     tag: "div",
                    //     className: "form-group",
                    //     childs: [
                    //         {
                    //             tag: "label",
                    //             attrs: {
                    //                 for: "margin-bottom-control"
                    //             },
                    //             innerHTML: "margin-bottom"
                    //         },
                    //         {
                    //             tag: "input",
                    //             className: "form-control-range",
                    //             id: "margin-bottom-control",
                    //             attrs: {
                    //                 type: "range",
                    //                 max: 500, min: 0
                    //             },
                    //             oninput: (e) => _styleIt.execCmd("margin-bottom", e.target.value + "px", _styleIt.MODES.Extend, {
                    //                 target: "block"
                    //             })
                    //         }
                    //     ]
                    // },
                    {
                        tag: "div",
                        className: "form-group",
                        childs: [
                            {
                                tag: "label",
                                attrs: {
                                    for: "font-size-control"
                                },
                                innerHTML: "font-size"
                            },
                            {
                                tag: "input",
                                className: "font-size-control-range",
                                id: "font-size-control",
                                attrs: {
                                    type: "range",
                                    max: 180, min: 15
                                },
                                oninput: (e) => _styleIt.execCmd("font-size", e.target.value + "px", _styleIt.MODES.Extend, {
                                    target: "block",
                                    as: "inline"
                                })
                            },
                        ]
                    },
                    {
                        tag: "div",
                        className: "form-group",
                        childs: [
                            {
                                tag: "label",
                                attrs: {
                                    for: "line-height-control"
                                },
                                innerHTML: "line-height"
                            },
                            {
                                tag: "input",
                                className: "line-height-control-range",
                                id: "line-height-control",
                                attrs: {
                                    type: "range",
                                    max: 5, min: 1,step:.1,value:1.2
                                },
                                oninput: (e) => _styleIt.execCmd("line-height", e.target.value , _styleIt.MODES.Extend, {
                                    target: "block"
                                })
                            },
                        ]
                    },
                    {
                        tag: "div",
                        className: "editor-group",
                        childs: [
                            {
                                tag: "button",
                                className: "btn btn-light",
                                innerHTML: `<i style="color:#7D5BA6;" class="fas fa-ghost"></i>`,
                                onclick: () => _styleIt.execCmd(
                                    "text-shadow",
                                    "2px 2px 5px #7D5BA6",
                                    _styleIt.MODES.Extend)
                            },
                            {
                                tag: "button",
                                className: "btn btn-light",
                                innerHTML: `<i style="color:#333333;" class="fas fa-ghost"></i>`,
                                onclick: () => _styleIt.execCmd(
                                    "text-shadow",
                                    "1px 1px 2px black, 0 0 25px #333333, 0 0 5px darkblue",
                                    _styleIt.MODES.Extend)
                            },
                            {
                                tag: "button",
                                className: "btn btn-light",
                                innerHTML: `<i class="fas fa-ghost"></i>`,
                                onclick: () => _styleIt.execCmd(
                                    "text-shadow",
                                    "black 1px 1px 2px, transparent 0px 0px 25px, black 8px 7px 5px",
                                    _styleIt.MODES.Extend)
                            },
                        ]
                    }, {
                        tag: "div",
                        className: "editor-group",
                        childs: [
                            {
                                tag: "button",
                                className: "btn btn-light",
                                innerHTML: `<i class="fas fa-heading text-custom"></i>`,
                                onclick: () => _styleIt.toggleClass("text-custom")
                            },
                            {
                                tag: "button",
                                className: "btn btn-light",
                                innerHTML: `<i class="fas fa-underline "></i>`,
                                onclick: () => _styleIt.toggleClass("custom-underline")
                            },
                            {
                                tag: "button",
                                className: "btn btn-light colorChange",
                                innerHTML: `<i class="fas fa-color "></i>`,
                                onclick: () => _styleIt.toggleClass("colorChange")
                            },
                        ]
                    }
                ]
            },

        ]
        const drawer = document.createElement("div");
        drawer.className = "editor-drawer--example";

        const renderElements = (elements, parent) => {
            elements.forEach(el => {
                const _child = createElement(el);
                if (Array.isArray(_child.childs) && _child.childs.length > 0) {
                    renderElements(_child.childs, _child);
                }
                parent.appendChild(_child);
            });
        }
        renderElements(elements, drawer)
        document.body.appendChild(drawer);

    }
    const createTxtContentModal = () => {
        const conetnt = document.createElement("div");
        conetnt.contentEditable = "true";
        conetnt.spellcheck = false;
        conetnt.translate = false;
        conetnt.className = "editor-conetnt--example";
        conetnt.id = "text-editor--root";
        conetnt.innerHTML = `
      <div style="margin-top:150px" class="container">
  <div class="row">
    <div style="width:100%;" contenteditable="true"  spellcheck="false" class="col-lg-8 col-md-10 mx-auto">
    <h2 class="section-heading">_styleIt - Examples</h2>

<p>    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</p>
<p>    Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
</p>
<p>    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
</p>
</div>

    </div>
  </div>
</div>`
        document.body.appendChild(conetnt);
        return conetnt;
    }
    const conetnt = createTxtContentModal();
    const config = {
        onInspect: (styles) => {
            const fontSize = document.getElementById("dd-font-size");
            fontSize.innerHTML = styles["font-size"] || "font size";
            //grab the style
        },
    }
    var _styleIt = new styleit(conetnt, config);
    var collectedStyles = {};
    _styleIt.on('inspect',(styles)=>{
        collectedStyles = styles
    })
    document.addEventListener("keydown", function (event) {

        var isDetect = false;
        if (event.ctrlKey) {
            console.log(event.code)
            switch (event.code){
                case "KeyB":
                    isDetect = true;
                    
                    _styleIt.execCmd("font-weight", "bold", _styleIt.MODES.Toggle)
                    break;
                    case "KeyS":
                    isDetect = true;
                    _styleIt.execCmd("text-decoration", "line-through", _styleIt.MODES.Toggle)
                    break;
                    case "KeyU":
                        isDetect = true;

                        _styleIt.execCmd("text-decoration", "underline", _styleIt.MODES.Toggle)
                    break;
                    case "KeyI":
                        isDetect = true;
                        _styleIt.execCmd("font-style", "italic", _styleIt.MODES.Toggle)
                    break;
                    case "KeyZ":
                    case "KeyY":
                        isDetect = true;
                    break;
                  
            }
            if(isDetect){
                event.preventDefault(); 
            }
        }
    });
    setTimeout(() => {
        createDrawer(_styleIt);
    }, 600);
    setTimeout(() => {
        CreateCloseIcon();
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    }, 1200);
}