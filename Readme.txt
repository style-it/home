 <section id="playground" class="styleIt">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Text Editor API concepts
          </h2>
        </div>

        <div class="row">
          <div class="col-lg-10">
            <h3>Installation</h3>
            <p>Node package</p>
            <p>Source from CDN(Coming Soon)</p>
            <p>Local file from project</p>

            <div>
              <h2>Node module</h2>
              <h6>Install the package via npm</h6>
              <div class="code-wrapper">
                <code>
              npm i styleit-api --save
            </code>
              </div>

            </div>

            <p> Include the module in your application</p>
            <div class="code-wrapper">
              <code>
                import StyelIt from 'styleit-api';
              </code>
            </div>

            <br>
            <h2>Load from CDN</h2>
            <code>
            coming soon!
            </code>
            <br>
            <br>
            <h2>Initialization</h2>
            <p>In order to inizialize StyleIt, you need to pass the Element Object or Element Id to the StyleIt
              constracture.
              Note that StyleIt will be available only on this element and its child nodes.</p>
            <div>
              <div class="code-wrapper">
                <code>
                  import StyelIt from 'styleit-api';
                  <br>
                  const styleIt = new  StyleIt(*Element Object or Element Id*);
                </code>
              </div>
              <br>
              <br>
            </div>
            <h2>StyleIt provides two working modes</h2>
            <div class="code-wrapper">
              <code>
                import StyelIt from 'styleit-api';
                <br>
                const styleIt = new  StyleIt(*Element Object or Element Id*);
                <br>
                cont MODES = StyleIt.Modes;
              </code>
            </div>

            <table class="table  table-striped">
              <tbody>
                <tr>
                  <th scope="col">Mode</th>
                  <th scope="col">Type</th>
                  <th scope="col">Description</th>
                </tr>
                <tr>
                  <td>Toggle</td>
                  <td>String</td>
                  <td>Style elements with on/off functionality =&gt; like bold,underline,italic</td>
                </tr>
                <tr>
                  <td>Extend</td>
                  <td>String</td>
                  <td>Only extends the currect style =&gt; font-size, color, backgorund</td>
                </tr>
              </tbody>
            </table>
            <div>
              Note that the Extend mod will not cancel the style when selecting the same rule twice.
            </div>
            <br>
            <h2>How to use</h2>
            <p>Modes.Toggle</p>
            <div class="code-wrapper">
              <code>
                import StyelIt from 'styleit-api';
                <br>
                const styleIt = new  StyleIt(*Element Object or Element Id*);
                <br>
                const underline =()=> styleIt.execCmd('text-decoration', 'underline', Modes.Toggle);
                <br>
                const bold =()=> styleIt.execCmd('font-weight', 'bold', Modes.Toggle);
              </code>
            </div>


            <br>
            <p>Modes.Extend</p>
            <div class="code-wrapper">
              <code>
                import StyelIt from 'styleit-api';
                <br>
                const styleIt = new  StyleIt(*Element Object or Element Id*);
                <br>
                const changeColor =(color)=> styleIt.execCmd('color', color, Modes.Extend);
                <br>
                const changeSize =(size)=> styleIt.execCmd('font-size', size, Modes.Extend);
              </code>
            </div>



            <br>
            <h2>With Options</h2>
            <div class="code-wrapper">
              <code>
                import StyelIt from 'styleit-api';
                <br>
                const styleIt = new  StyleIt(*Element Object or Element Id*);
                <br>
                const changeAlign =(align)=>   styleIt.execCmd('text-align', align, Modes.Extend,{
                  <br>
                  target:'block' <br>
                  });
                <br>
              </code>
            </div>


            <table class="table   table-striped">
              <tbody>
                <tr>
                  <th scope="col">Tool</th>
                  <th scope="col">Configuration</th>
                  <th scope="col">Description</th>
                </tr>
                <tr>
                  <td>Target</td>
                  <td>{target:'block'}</td>
                  <td>Will apply on the closest P or DIV tag element</td>
                </tr>
                <tr>
                  <td>as</td>
                  <td>{as:'inline'}</td>
                  <td>Will apply as inline inside P with block options </td>
                </tr>
                <tr>
                  <td>Selection</td>
                  <td>{selection:false}</td>
                  <td>selection false will prevent text to wrap with selection</td>
                </tr>
              </tbody>
            </table>
            <h2>Css Class API</h2>
            <p>The Css Class API lets you create a Css class with your pre-made rules.
              You can pass this class to a StyleIt object and use it as a markup just like underline or bold.</p>
            <h3>How to use</h3>
            <div class="code-wrapper">
              <code>
                import StyelIt from 'styleit-api';
                <br>
                const styleIt = new  StyleIt(*Element Object or Element Id*);
                <br>
                const toggleClass =(name)=> styleIt.ToggleClass(name);
                <br>
              </code>
            </div>

            <h2>API Tools</h2>
            <table class="table   table-striped">
              <tbody>
                <tr>
                  <th scope="col">Tool</th>
                  <th scope="col">Configuration</th>
                  <th scope="col">Description</th>
                </tr>
                <tr>
                  <td>Undo Redo</td>
                  <td>None</td>
                  <td>Coming soon!</td>
                </tr>
                <tr>
                  <td>Keyboard</td>
                  <td> const config = {<br>
                    onKeyPress:[ <br>
                    ["b",()=> StyleIt.ExecCmd("font-weight", "bold", StyleIt.Modes.Toggle)]<br>
                    ],<br>
                    }
                    <br>
                    const styleIt = new StyleIt(*Element Object or Element Id*,config);</td>
                 <td>
                  The first item will be the key name and the second will be the function.
                 </td>
                </tr>
                <tr>
                  <td>Copy Paste</td>
                  <td>None</td>
                  <td>Copies the text with it's style. (Works only when using Copy/Paste inside a StyleIt Holder)</td>
                </tr>
                <tr>
                  <td>Inspector</td>
                  <td> const config = {<br>
                    onInspect: (styles) =&gt; {<br>
                    // the styles on the element..<br>
                    },<br>
                    }
                    <br>
                    const styleIt = new StyleIt(*Element Object or Element Id*,config);
                    }
                  </td>
                  <td> The inspector will trigger your function on every style change with the style in a key-value
                    format.
                  </td>
                </tr>
              </tbody>
            </table>
            <h2>Inspector</h2>
            <div class="code-wrapper">
              <code>
                  const config = {<br>
                  onInspect: (styles) =&gt; {<br>
                    //grab the style<br>
                  },<br>
                  const styleIt = new  StyleIt(*Element Object or Element Id*,config);
                }
              </code>
            </div>
            <br>
            <h3>Save Function</h3>
            <div class="code-wrapper">
              <code>
                  const styleIt = new  StyleIt(*Element Object or Element Id*,config);
                  <br>
                 const savedContent = styleIt.Save();
              </code>
            </div>
            <h6>Will create a clean JSON from your content. Note that this function will also filter every invalid tags
              and chars.</h6>
            <h3>Load Function</h3>
            <div class="code-wrapper">
              <code>
                  const styleIt = new  StyleIt(*Element Object or Element Id*,config);
                  <br>
                  styleIt.Load(savedJson);
              </code>
            </div>
            <h6></h6>
            <h6>Will create a html markup from your JOSN content and will append it into the end of the editor.</h6>
            <p>and will inject it into the container.</p>
            <h6>Load can use only json Data from the Save method.</h6>
            <h3>Destroy</h3>
            <h6>Will remove all StyleIt functionality.</h6>

            <div class="code-wrapper">
              <code>
                  const styleIt = new  StyleIt(*Element Object or Element Id*,config);
                  <br>
                  styleIt.Destroy();
              </code>
            </div>


          </div>
        </div>
      </div>
      </div>
      </div>

      </div>
    </section>