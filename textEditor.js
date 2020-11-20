(function () {
    appliactionStart();
    function appliactionStart() {
        var StyleIt = new styleit();
        console.log(StyleIt);
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
        // StyleIt.ExecCmd("font-size","20px",StyleIt.Modes.Extend);

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
    const createDrawer = (StyleIt) => {
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
                        onclick: () => StyleIt.ExecCmd("font-weight", "bold", StyleIt.Modes.Toggle)
                    },
                    {
                        tag: "button",
                        className: "btn btn-light",
                        innerHTML: ` <i class="fas fa-italic"></i>`,
                        onclick: () => StyleIt.ExecCmd("font-style", "italic", StyleIt.Modes.Toggle)
                    },
                    {
                        tag: "button",
                        className: "btn btn-light",
                        innerHTML: `<i class="fas fa-underline"></i>`,
                        onclick: () => StyleIt.ExecCmd("text-decoration", "underline", StyleIt.Modes.Toggle)
                    },
                    {
                        tag: "button",
                        className: "btn btn-light",
                        innerHTML: ` <i class="fas fa-strikethrough"></i>`,
                        onclick: () => StyleIt.ExecCmd("text-decoration", "line-through", StyleIt.Modes.Toggle)
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
                        onclick: () => StyleIt.ExecCmd("text-align", "left", StyleIt.Modes.Extend, {
                            target: "block"
                        })
                    },
                    {
                        tag: "button",
                        innerHTML: `<i class="fas fa-align-center"></i>`,
                        className: "btn btn-light",
                        onclick: () => StyleIt.ExecCmd("text-align", "center", StyleIt.Modes.Extend, {
                            target: "block"
                        })
                    },
                    {
                        tag: "button",
                        innerHTML: `<i class="fas fa-align-right"></i>`,
                        className: "btn btn-light",
                        onclick: () => StyleIt.ExecCmd("text-align", "right", StyleIt.Modes.Extend, {
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
                                        onclick: () => StyleIt.ExecCmd("font-size", "10px", StyleIt.Modes.Extend)
                                    },
                                    {
                                        tag: "button",
                                        className: "dropdown-item",
                                        innerHTML: "18px",
                                        onclick: () => StyleIt.ExecCmd("font-size", "18px", StyleIt.Modes.Extend)

                                    },
                                    {
                                        tag: "button",
                                        className: "dropdown-item",
                                        innerHTML: "27px",
                                        onclick: () => StyleIt.ExecCmd("font-size", "27px", StyleIt.Modes.Extend)

                                    },
                                    {
                                        tag: "button",
                                        className: "dropdown-item",
                                        innerHTML: "32px",
                                        onclick: () => StyleIt.ExecCmd("font-size", "32px", StyleIt.Modes.Extend)

                                    },
                                    ,
                                    {
                                        tag: "button",
                                        className: "dropdown-item",
                                        innerHTML: "40px",
                                        onclick: () => StyleIt.ExecCmd("font-size", "40px", StyleIt.Modes.Extend)

                                    },
                                    ,
                                    {
                                        tag: "button",
                                        className: "dropdown-item",
                                        innerHTML: "42px",
                                        onclick: () => StyleIt.ExecCmd("font-size", "42px", StyleIt.Modes.Extend)

                                    }, ,
                                    {
                                        tag: "button",
                                        className: "dropdown-item",
                                        innerHTML: "50px",
                                        onclick: () => StyleIt.ExecCmd("font-size", "50px", StyleIt.Modes.Extend)

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
                        onclick: () => StyleIt.ExecCmd("color", "#7D5BA6", StyleIt.Modes.Extend)
                    },
                    {
                        tag: "button",
                        className: "btn btn-light col",
                        innerHTML: `<i class="fas fa-paint-brush"></i>`,
                        style: "color:#333333;",
                        onclick: () => StyleIt.ExecCmd("color", "#333333", StyleIt.Modes.Extend)
                    },
                    {
                        tag: "button",
                        className: "btn btn-light col",
                        innerHTML: `<i class="fas fa-paint-brush"></i>`,
                        style: "color:#86A59C;",
                        onclick: () => StyleIt.ExecCmd("color", "#86A59C", StyleIt.Modes.Extend)
                    },
                    {
                        tag: "button",
                        className: "btn btn-light col",
                        innerHTML: `<i class="fas fa-paint-brush"></i>`,
                        style: "color:#8BBD8B;",
                        onclick: () => StyleIt.ExecCmd("color", "#8BBD8B", StyleIt.Modes.Extend)
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
                        onclick: () => StyleIt.ExecCmd("background-color", "#7D5BA6", StyleIt.Modes.Extend)
                    },
                    {
                        tag: "button",
                        className: "btn btn-light col",
                        innerHTML: `<i class="fas fa-fill-drip"></i>`,
                        style: "background-color:#333333;",
                        onclick: () => StyleIt.ExecCmd("background-color", "#333333", StyleIt.Modes.Extend)
                    },
                    {
                        tag: "button",
                        className: "btn btn-light col",
                        innerHTML: `<i class="fas fa-fill-drip"></i>`,
                        style: "background-color:#86A59C;",
                        onclick: () => StyleIt.ExecCmd("background-color", "#86A59C", StyleIt.Modes.Extend)
                    },
                    {
                        tag: "button",
                        className: "btn btn-light col",
                        innerHTML: `<i class="fas fa-fill-drip"></i>`,
                        style: "background-color:#8BBD8B;",
                        onclick: () => StyleIt.ExecCmd("background-color", "#8BBD8B", StyleIt.Modes.Extend)
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
                    //             oninput: (e) => StyleIt.ExecCmd("margin-top", e.target.value + "px", StyleIt.Modes.Extend, {
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
                    //             oninput: (e) => StyleIt.ExecCmd("margin-bottom", e.target.value + "px", StyleIt.Modes.Extend, {
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
                                oninput: (e) => StyleIt.ExecCmd("font-size", e.target.value + "px", StyleIt.Modes.Extend, {
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
                                    max: 120, min: 10
                                },
                                oninput: (e) => StyleIt.ExecCmd("line-height", e.target.value + "px", StyleIt.Modes.Extend, {
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
                                onclick: () => StyleIt.ExecCmd(
                                    "text-shadow",
                                    "2px 2px 5px #7D5BA6",
                                    StyleIt.Modes.Extend)
                            },
                            {
                                tag: "button",
                                className: "btn btn-light",
                                innerHTML: `<i style="color:#333333;" class="fas fa-ghost"></i>`,
                                onclick: () => StyleIt.ExecCmd(
                                    "text-shadow",
                                    "1px 1px 2px black, 0 0 25px #333333, 0 0 5px darkblue",
                                    StyleIt.Modes.Extend)
                            },
                            {
                                tag: "button",
                                className: "btn btn-light",
                                innerHTML: `<i class="fas fa-ghost"></i>`,
                                onclick: () => StyleIt.ExecCmd(
                                    "text-shadow",
                                    "black 1px 1px 2px, transparent 0px 0px 25px, black 8px 7px 5px",
                                    StyleIt.Modes.Extend)
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
                                onclick: () => StyleIt.ToggleClass("text-custom")
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
        conetnt.className = "editor-conetnt--example";
        conetnt.id = "text-editor--root";
        conetnt.innerHTML = `
      <div style="margin-top:150px" class="container">
  <div class="row">
    <div style="width:100%;" contenteditable="true"  spellcheck="false" class="col-lg-8 col-md-10 mx-auto">
    <h2 class="section-heading">StyleIt - Examples</h2>

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
        onKeyPress: [
            ["b", () => StyleIt.ExecCmd("font-weight", "bold", StyleIt.Modes.Toggle,{
                unWrap:["b"]
            })]
        ],
        onInspect: (styles) => {
            const fontSize = document.getElementById("dd-font-size");
            fontSize.innerHTML = styles["font-size"] || "font size";
            //grab the style
        },
    }
    var StyleIt = new styleit(conetnt, config);
    console.log(StyleIt);
    setTimeout(() => {
        createDrawer(StyleIt);
    }, 600);
    setTimeout(() => {
        CreateCloseIcon();
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    }, 1200);
}