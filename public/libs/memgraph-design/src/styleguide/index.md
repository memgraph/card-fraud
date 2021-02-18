# Introduction

Use this as a reference point when building any digital aspect of Memgraph project. For in depth information on how to properly use elements, refer to Foundation documentation linked above.

To customize the use of Foundation components, copy the `_foundation.scss` and `_settings.scss`. You can also customize Foundation JavaScript by only including the plugins you need from the Foundation `dist/js` folder to your build.



# Colors

The Memgraph primary pallette represents the brand. It is vivid, clean and bold. Use primary colors sparsly, when emphasizing elements. These colors are best used in form of gradients for content areas, backgrounds etc. Main accent color for text is orange.

Auxillary pallette supports primary colors to ensure clear communication and contrast. These colors should be used only as an addition to tone down primary pallette usage, never as standalone colors.

<div class="grid-x">
<div class="medium-6">
<h3>Primary colors</h3>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#DD2222"></div>
    </div>
    <div class="media-object-section">
      $brand-red <br/>
       #DD2222
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#FB6E00"></div>
    </div>
    <div class="media-object-section">
      $brand-orange <br/>
       #FB6E00
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#FFC500"></div>
    </div>
    <div class="media-object-section">
      $brand-yellow <br/>
       #FFC500
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#720096"></div>
    </div>
    <div class="media-object-section">
      $brand-purple <br/>
       #720096
    </div>
</div>

<h3>Secondary colors</h3>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#1EB76D"></div>
    </div>
    <div class="media-object-section">
      $brand-green <br/>
       #1EB76D
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#0677B2"></div>
    </div>
    <div class="media-object-section">
      $brand-blue <br/>
       #0677B2
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#FF0092"></div>
    </div>
    <div class="media-object-section">
      $brand-pink <br/>
       #FF0092
    </div>
</div>
</div>
<div class="medium-6">

<h3> Gray palette </h3>

<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#fff"></div>
    </div>
    <div class="media-object-section">
      $brand-white <br/>
       #FFFFFF
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#f9f9f9"></div>
    </div>
    <div class="media-object-section">
      $brand-light <br/>
       #f9f9f9
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#e6e6e6"></div>
    </div>
    <div class="media-object-section">
      $brand-silver <br/>
       #e6e6e6
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#bab8bb"></div>
    </div>
    <div class="media-object-section">
      $brand-ash <br/>
       #bab8bb
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#9d989f"></div>
    </div>
    <div class="media-object-section">
      $brand-cadet <br/>
       #9d989f
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#857f87"></div>
    </div>
    <div class="media-object-section">
      $brand-gray <br/>
       #857f87
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#645965"></div>
    </div>
    <div class="media-object-section">
      $brand-dimgray <br/>
       #645965
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#3E323F"></div>
    </div>
    <div class="media-object-section">
      $brand-anthracite <br/>
       #3E323F
    </div>
</div>
<div class="media-object">
    <div class="media-object-section">
        <div class="color" style="background-color:#231f20"></div>
    </div>
    <div class="media-object-section">
      $brand-black <br/>
       #231f20
    </div>
</div>
</div>
</div>

### Brand gradients

<div class="grid-x">
    <div class="medium-6">
        <div class="media-object">
            <div class="media-object-section">
                <div class="color gradient-primary"></div>
            </div>
            <div class="media-object-section">
                $gradient-primary
            </div>
        </div>
        <div class="media-object">
            <div class="media-object-section">
                <div class="color gradient-dark"></div>
            </div>
            <div class="media-object-section">
                $gradient-dark
            </div>
        </div>
        <div class="media-object">
            <div class="media-object-section">
                <div class="color gradient-punch"></div>
            </div>
            <div class="media-object-section">
                $gradient-punch
            </div>
        </div>
        <div class="media-object">
            <div class="media-object-section">
                <div class="color gradient-light"></div>
            </div>
            <div class="media-object-section">
                $gradient-light
            </div>
        </div>
    </div>
    <div class="medium-6">
        <div class="media-object">
            <div class="media-object-section">
                <div class="color gradient-auxiliary"></div>
            </div>
            <div class="media-object-section">
                $gradient-auxiliary
            </div>
        </div>
    </div>
</div>



# Typography

Our primary typefaces are Encode Sans Semi Condensed and Roboto. These typefaces can be used both in digital and print environment.

Use Encode Sans Pro only for headings, and avoid using italics. Never use it for quotes. Use Roboto for body text and in lighter weights. Use Roboto Mono for code blocks.

### Example

<div class="card card-section">
<h1>Lorem Ipsum Dolores Berum Voluptas</h1>
<p class="lead">Tiberum accae optatenet lametan. Ut accusdam rem atium conseces cusam sinumendis dundis at est esendunt.</p>
<p>Lerum re lab in re et alis pel estrum eaque dus invenimi, optas sed que ium que magnat doluptio quam quid ipsam quodipsum as eosa cusam et harum re nos moui offic teniscita doluptam non perum fuga atium est.</p>
<blockquote>Nam dolor poria nobis es alibea venimil luptatiae diciunt od ullam idis acipsae et.</blockquote>
<p>Estis re endant aut qui optur? Iciasperibus ipsam imenemp osapita aut et maiorest ad quam harciis moles dolorum reperorem si intor aut ut quia conseque dolupti accum autem excepel iquiam ad ullam aliquos velest atium fuga quia tiores.</p>
</div>



# Forms

<form>
    <div class="grid-x grid-padding-x">
        <div class="medium-6 cell">
            <label>Input Label
                <input type="text" placeholder=".medium-6.cell">
            </label>
        </div>
        <div class="medium-6 cell">
            <label>Input Label
                <input type="text" placeholder=".medium-6.cell">
            </label>
        </div>
        <label class="large-12 cell">Select Menu
            <select>
                <option value="husker">Husker</option>
                <option value="starbuck">Starbuck</option>
                <option value="hotdog">Hot Dog</option>
                <option value="apollo">Apollo</option>
            </select>
        </label>
        <fieldset class="large-6 cell">
            <legend>Choose Your Favorite</legend>
            <input type="radio" name="pokemon" value="Red" id="pokemonRed" required><label for="pokemonRed">Red</label>
            <input type="radio" name="pokemon" value="Blue" id="pokemonBlue"><label for="pokemonBlue">Blue</label>
            <input type="radio" name="pokemon" value="Yellow" id="pokemonYellow"><label for="pokemonYellow">Yellow</label>
        </fieldset>
        <fieldset class="large-6 cell">
            <legend>Check these out</legend>
            <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
            <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
            <input id="checkbox3" type="checkbox"><label for="checkbox3">Checkbox 3</label>
        </fieldset>
        <div class="large-12 input-group cell">
            <span class="input-group-label">$</span>
            <input class="input-group-field" type="number">
            <div class="input-group-button">
                <input type="submit" class="button" value="Submit">
            </div>
        </div>
    </div>
</form>



# Buttons

For primary button purposes, main color is black. Inside the app, stick to the primary color palette. You cna apply button classes to both link and button elements.

#### Sizing:

<a class="button tiny" href="#">So Tiny</a>
<a class="button small" href="#">So Small</a>
<a class="button" href="#">So Basic</a>
<a class="button large" href="#">So Large</a>
<br />
<br />
<a class="button expanded" href="#">Such Expand</a>

#### Coloring:

<a class="button primary" href="#">Primary</a>
<a class="button secondary" href="#">Secondary</a>
<a class="button success" href="#">Success</a>
<a class="button alert" href="#">Alert</a>
<a class="button warning" href="#">Warning</a>



# Callouts - Alerts

<div class="callout primary">
  <h5>This is a primary callout</h5>
  <p>It has an easy to override visual style, and is appropriately subdued.</p>
  <a href="#">It's dangerous to go alone, take this.</a>
</div>

<div class="callout secondary">
  <h5>This is a secondary callout</h5>
  <p>It has an easy to override visual style, and is appropriately subdued.</p>
  <a href="#">It's dangerous to go alone, take this.</a>
</div>

<div class="callout success">
  <h5>This is a success callout</h5>
  <p>It has an easy to override visual style, and is appropriately subdued.</p>
  <a href="#">It's dangerous to go alone, take this.</a>
</div>

<div class="callout alert">
  <h5>This is a alert callout</h5>
  <p>It has an easy to override visual style, and is appropriately subdued.</p>
  <a href="#">It's dangerous to go alone, take this.</a>
</div>

<div class="callout warning">
  <h5>This is a warning callout</h5>
  <p>It has an easy to override visual style, and is appropriately subdued.</p>
  <a href="#">It's dangerous to go alone, take this.</a>
</div>



# Labels

<span class="label primary">Primary Label</span>
<span class="label secondary">Secondary Label</span>
<span class="label success">Success Label</span>
<span class="label alert">Alert Label</span>
<span class="label warning">Warning Label</span>



# Badges

<span class="badge primary">1</span>
<span class="badge secondary">2</span>
<span class="badge success">3</span>
<span class="badge alert">A</span>
<span class="badge warning">B</span>



# Dropdown

<button class="button" type="button" data-toggle="example-dropdown-bottom-left">Toggle Dropdown</button>
<div class="dropdown-pane" data-position="bottom" data-alignment="left" id="example-dropdown-bottom-left" data-dropdown data-auto-focus="true">
  Content here
</div>



# Tooltip

Use tooltip to show small amounts of contextual data. Best to use in graphs or tables to provide additional information.
Always place it on top if possible.

<blockquote>
    The <span data-tooltip aria-haspopup="true" class="has-tip" data-disable-hover="false" tabindex="1" title="Fancy word for a beetle.">scarabaeus</span> hung quite clear of any branches, and, if allowed to fall, would have fallen at our feet.
</blockquote>



# Table

Use table to display big, more complex sets of data. If the table is a standalone element in the UI against the body background, wrap it into `card` class element.

Table next to other content:

<table>
  <thead>
    <tr>
      <th width="200">Table Header</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
</table>

Table as a standalone element:
<div class="card">
  <table>
    <thead>
      <tr>
        <th width="200">Table Header</th>
        <th>Table Header</th>
        <th width="150">Table Header</th>
        <th width="150">Table Header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Content Goes Here</td>
        <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
        <td>Content Goes Here</td>
        <td>Content Goes Here</td>
      </tr>
      <tr>
        <td>Content Goes Here</td>
        <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
        <td>Content Goes Here</td>
        <td>Content Goes Here</td>
      </tr>
      <tr>
        <td>Content Goes Here</td>
        <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
        <td>Content Goes Here</td>
        <td>Content Goes Here</td>
      </tr>
    </tbody>
  </table>
</div>



# Progressbar

<div class="progress" role="progressbar" tabindex="0" aria-valuenow="50" aria-valuemin="0" aria-valuetext="50 percent" aria-valuemax="100">
  <div class="progress-meter" style="width: 50%"></div>
</div>

<div class="progress success" role="progressbar" tabindex="0" aria-valuenow="80" aria-valuemin="0" aria-valuetext="80 percent" aria-valuemax="100">
  <div class="progress-meter" style="width: 80%"></div>
</div>

<div class="progress warning" role="progressbar" tabindex="0" aria-valuenow="30" aria-valuemin="0" aria-valuetext="30 percent" aria-valuemax="100">
  <div class="progress-meter" style="width: 30%"></div>
</div>

<div class="progress alert" role="progressbar" tabindex="0" aria-valuenow="10" aria-valuemin="0" aria-valuetext="10 percent" aria-valuemax="100">
  <div class="progress-meter" style="width: 10%"></div>
</div>



# Slider

Use slider in forms when user needs to choose a number within a specified range. Use number input next to slider whenever possible to ensure easier use.

<div class="container">
    <div class="grid-x">
        <div class="small-10 columns">
          <div class="slider" data-slider data-initial-start="50" data-start="50" data-end="200">
            <span class="slider-handle" data-slider-handle role="slider" tabindex="1" aria-controls="sliderOutput1"></span>
            <span class="slider-fill" data-slider-fill></span>
          </div>
        </div>
        <div class="small-2 columns">
          <input type="number" id="sliderOutput1">
        </div>
    </div>
</div>



# Switch

Use switch when one option needs to be turned on or off. To control more options within a form, use chackbox instead.

<div class="switch">
  <input class="switch-input" id="exampleSwitch" type="checkbox" name="exampleSwitch">
  <label class="switch-paddle" for="exampleSwitch">
    <span class="show-for-sr">Download Kittens</span>
  </label>
</div>



# Icons

We use Fontello to define custom UI icon set. Brand icons are used to communicate any brand-related information or to make distinct visual impact.
UI icons are used for interactions (within buttons or navigation), or as supporting visual cues when listing textual items.
If you need to add any UI icon to the set, do it from the Entypo group on Fontello.

<div class="container" id="icons">
      <div class="row">
        <div class="medium-3" title="Code: 0xe800"><i class="icon-brand-account-check"></i> <span class="i-name">icon-brand-account-check</span></div>
        <div class="medium-3" title="Code: 0xe801"><i class="icon-brand-account-theft"></i> <span class="i-name">icon-brand-account-theft</span></div>
        <div class="medium-3" title="Code: 0xe802"><i class="icon-brand-analytics"></i> <span class="i-name">icon-brand-analytics</span></div>
        <div class="medium-3" title="Code: 0xe803"><i class="icon-brand-blog"></i> <span class="i-name">icon-brand-blog</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe804"><i class="icon-brand-book"></i> <span class="i-name">icon-brand-book</span></div>
        <div class="medium-3" title="Code: 0xe805"><i class="icon-brand-briefcase"></i> <span class="i-name">icon-brand-briefcase</span></div>
        <div class="medium-3" title="Code: 0xe806"><i class="icon-brand-building-blocks"></i> <span class="i-name">icon-brand-building-blocks</span></div>
        <div class="medium-3" title="Code: 0xe807"><i class="icon-brand-card-fraud"></i> <span class="i-name">icon-brand-card-fraud</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe808"><i class="icon-brand-care"></i> <span class="i-name">icon-brand-care</span></div>
        <div class="medium-3" title="Code: 0xe809"><i class="icon-brand-chart-bar"></i> <span class="i-name">icon-brand-chart-bar</span></div>
        <div class="medium-3" title="Code: 0xe80a"><i class="icon-brand-chart-pie"></i> <span class="i-name">icon-brand-chart-pie</span></div>
        <div class="medium-3" title="Code: 0xe80b"><i class="icon-brand-checklist"></i> <span class="i-name">icon-brand-checklist</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe80c"><i class="icon-brand-checkmark"></i> <span class="i-name">icon-brand-checkmark</span></div>
        <div class="medium-3" title="Code: 0xe80d"><i class="icon-brand-chip-big"></i> <span class="i-name">icon-brand-chip-big</span></div>
        <div class="medium-3" title="Code: 0xe80e"><i class="icon-brand-chip-small"></i> <span class="i-name">icon-brand-chip-small</span></div>
        <div class="medium-3" title="Code: 0xe80f"><i class="icon-brand-cloud-download"></i> <span class="i-name">icon-brand-cloud-download</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe810"><i class="icon-brand-cloud-upload"></i> <span class="i-name">icon-brand-cloud-upload</span></div>
        <div class="medium-3" title="Code: 0xe811"><i class="icon-brand-code"></i> <span class="i-name">icon-brand-code</span></div>
        <div class="medium-3" title="Code: 0xe812"><i class="icon-brand-cloud"></i> <span class="i-name">icon-brand-cloud</span></div>
        <div class="medium-3" title="Code: 0xe813"><i class="icon-brand-coffee"></i> <span class="i-name">icon-brand-coffee</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe814"><i class="icon-brand-cog-spin"></i> <span class="i-name">icon-brand-cog-spin</span></div>
        <div class="medium-3" title="Code: 0xe815"><i class="icon-brand-cog"></i> <span class="i-name">icon-brand-cog</span></div>
        <div class="medium-3" title="Code: 0xe816"><i class="icon-brand-cogs"></i> <span class="i-name">icon-brand-cogs</span></div>
        <div class="medium-3" title="Code: 0xe817"><i class="icon-brand-compass"></i> <span class="i-name">icon-brand-compass</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe818"><i class="icon-brand-complexity"></i> <span class="i-name">icon-brand-complexity</span></div>
        <div class="medium-3" title="Code: 0xe819"><i class="icon-brand-conconnector"></i> <span class="i-name">icon-brand-conconnector</span></div>
        <div class="medium-3" title="Code: 0xe81a"><i class="icon-brand-connection"></i> <span class="i-name">icon-brand-connection</span></div>
        <div class="medium-3" title="Code: 0xe81b"><i class="icon-brand-credit-card"></i> <span class="i-name">icon-brand-credit-card</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe81c"><i class="icon-brand-crypto-laundering-alt"></i> <span class="i-name">icon-brand-crypto-laundering-alt</span></div>
        <div class="medium-3" title="Code: 0xe81d"><i class="icon-brand-crypto-laundering"></i> <span class="i-name">icon-brand-crypto-laundering</span></div>
        <div class="medium-3" title="Code: 0xe81e"><i class="icon-brand-dashboard-slow"></i> <span class="i-name">icon-brand-dashboard-slow</span></div>
        <div class="medium-3" title="Code: 0xe81f"><i class="icon-brand-data-volumes"></i> <span class="i-name">icon-brand-data-volumes</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe820"><i class="icon-brand-database-cloud"></i> <span class="i-name">icon-brand-database-cloud</span></div>
        <div class="medium-3" title="Code: 0xe821"><i class="icon-brand-database-ok"></i> <span class="i-name">icon-brand-database-ok</span></div>
        <div class="medium-3" title="Code: 0xe822"><i class="icon-brand-database"></i> <span class="i-name">icon-brand-database</span></div>
        <div class="medium-3" title="Code: 0xe823"><i class="icon-brand-diamond"></i> <span class="i-name">icon-brand-diamond</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe824"><i class="icon-brand-disk-alt"></i> <span class="i-name">icon-brand-disk-alt</span></div>
        <div class="medium-3" title="Code: 0xe825"><i class="icon-brand-disk"></i> <span class="i-name">icon-brand-disk</span></div>
        <div class="medium-3" title="Code: 0xe826"><i class="icon-brand-email"></i> <span class="i-name">icon-brand-email</span></div>
        <div class="medium-3" title="Code: 0xe827"><i class="icon-brand-encrypted"></i> <span class="i-name">icon-brand-encrypted</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe828"><i class="icon-brand-filter"></i> <span class="i-name">icon-brand-filter</span></div>
        <div class="medium-3" title="Code: 0xe829"><i class="icon-brand-flag"></i> <span class="i-name">icon-brand-flag</span></div>
        <div class="medium-3" title="Code: 0xe82a"><i class="icon-brand-flash"></i> <span class="i-name">icon-brand-flash</span></div>
        <div class="medium-3" title="Code: 0xe82b"><i class="icon-brand-folder"></i> <span class="i-name">icon-brand-folder</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe82c"><i class="icon-brand-food-alt"></i> <span class="i-name">icon-brand-food-alt</span></div>
        <div class="medium-3" title="Code: 0xe82d"><i class="icon-brand-food"></i> <span class="i-name">icon-brand-food</span></div>
        <div class="medium-3" title="Code: 0xe82e"><i class="icon-brand-globe-net-alt"></i> <span class="i-name">icon-brand-globe-net-alt</span></div>
        <div class="medium-3" title="Code: 0xe82f"><i class="icon-brand-globe-net"></i> <span class="i-name">icon-brand-globe-net</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe830"><i class="icon-brand-group"></i> <span class="i-name">icon-brand-group</span></div>
        <div class="medium-3" title="Code: 0xe831"><i class="icon-brand-history"></i> <span class="i-name">icon-brand-history</span></div>
        <div class="medium-3" title="Code: 0xe832"><i class="icon-brand-idea-alt"></i> <span class="i-name">icon-brand-idea-alt</span></div>
        <div class="medium-3" title="Code: 0xe833"><i class="icon-brand-idea"></i> <span class="i-name">icon-brand-idea</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe834"><i class="icon-brand-info"></i> <span class="i-name">icon-brand-info</span></div>
        <div class="medium-3" title="Code: 0xe835"><i class="icon-brand-interchange"></i> <span class="i-name">icon-brand-interchange</span></div>
        <div class="medium-3" title="Code: 0xe836"><i class="icon-brand-interface"></i> <span class="i-name">icon-brand-interface</span></div>
        <div class="medium-3" title="Code: 0xe837"><i class="icon-brand-key"></i> <span class="i-name">icon-brand-key</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe838"><i class="icon-brand-lock"></i> <span class="i-name">icon-brand-lock</span></div>
        <div class="medium-3" title="Code: 0xe839"><i class="icon-brand-magnet"></i> <span class="i-name">icon-brand-magnet</span></div>
        <div class="medium-3" title="Code: 0xe83a"><i class="icon-brand-map-marker"></i> <span class="i-name">icon-brand-map-marker</span></div>
        <div class="medium-3" title="Code: 0xe83b"><i class="icon-brand-medal"></i> <span class="i-name">icon-brand-medal</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe83c"><i class="icon-brand-money-laundering-alt"></i> <span class="i-name">icon-brand-money-laundering-alt</span></div>
        <div class="medium-3" title="Code: 0xe83d"><i class="icon-brand-money-laundering"></i> <span class="i-name">icon-brand-money-laundering</span></div>
        <div class="medium-3" title="Code: 0xe83e"><i class="icon-brand-monitor"></i> <span class="i-name">icon-brand-monitor</span></div>
        <div class="medium-3" title="Code: 0xe83f"><i class="icon-brand-nodes-alt"></i> <span class="i-name">icon-brand-nodes-alt</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe840"><i class="icon-brand-nodes"></i> <span class="i-name">icon-brand-nodes</span></div>
        <div class="medium-3" title="Code: 0xe841"><i class="icon-brand-non-scalable"></i> <span class="i-name">icon-brand-non-scalable</span></div>
        <div class="medium-3" title="Code: 0xe842"><i class="icon-brand-off"></i> <span class="i-name">icon-brand-off</span></div>
        <div class="medium-3" title="Code: 0xe843"><i class="icon-brand-password-stolen"></i> <span class="i-name">icon-brand-password-stolen</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe844"><i class="icon-brand-password"></i> <span class="i-name">icon-brand-password</span></div>
        <div class="medium-3" title="Code: 0xe845"><i class="icon-brand-plug"></i> <span class="i-name">icon-brand-plug</span></div>
        <div class="medium-3" title="Code: 0xe846"><i class="icon-brand-presentation"></i> <span class="i-name">icon-brand-presentation</span></div>
        <div class="medium-3" title="Code: 0xe847"><i class="icon-brand-question"></i> <span class="i-name">icon-brand-question</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe848"><i class="icon-brand-real-time"></i> <span class="i-name">icon-brand-real-time</span></div>
        <div class="medium-3" title="Code: 0xe849"><i class="icon-brand-reshipping"></i> <span class="i-name">icon-brand-reshipping</span></div>
        <div class="medium-3" title="Code: 0xe84a"><i class="icon-brand-retail"></i> <span class="i-name">icon-brand-retail</span></div>
        <div class="medium-3" title="Code: 0xe84b"><i class="icon-brand-scalable"></i> <span class="i-name">icon-brand-scalable</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe84c"><i class="icon-brand-search"></i> <span class="i-name">icon-brand-search</span></div>
        <div class="medium-3" title="Code: 0xe84d"><i class="icon-brand-settings"></i> <span class="i-name">icon-brand-settings</span></div>
        <div class="medium-3" title="Code: 0xe84e"><i class="icon-brand-shield"></i> <span class="i-name">icon-brand-shield</span></div>
        <div class="medium-3" title="Code: 0xe84f"><i class="icon-brand-spread"></i> <span class="i-name">icon-brand-spread</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe850"><i class="icon-brand-support"></i> <span class="i-name">icon-brand-support</span></div>
        <div class="medium-3" title="Code: 0xe851"><i class="icon-brand-tag-broken"></i> <span class="i-name">icon-brand-tag-broken</span></div>
        <div class="medium-3" title="Code: 0xe852"><i class="icon-brand-tag"></i> <span class="i-name">icon-brand-tag</span></div>
        <div class="medium-3" title="Code: 0xe853"><i class="icon-brand-target"></i> <span class="i-name">icon-brand-target</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe854"><i class="icon-brand-telecommunication"></i> <span class="i-name">icon-brand-telecommunication</span></div>
        <div class="medium-3" title="Code: 0xe855"><i class="icon-brand-time"></i> <span class="i-name">icon-brand-time</span></div>
        <div class="medium-3" title="Code: 0xe856"><i class="icon-brand-trash"></i> <span class="i-name">icon-brand-trash</span></div>
        <div class="medium-3" title="Code: 0xe857"><i class="icon-brand-trophy"></i> <span class="i-name">icon-brand-trophy</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe858"><i class="icon-brand-unlock"></i> <span class="i-name">icon-brand-unlock</span></div>
        <div class="medium-3" title="Code: 0xe859"><i class="icon-brand-upload"></i> <span class="i-name">icon-brand-upload</span></div>
        <div class="medium-3" title="Code: 0xe85a"><i class="icon-brand-avatar"></i> <span class="i-name">icon-brand-avatar</span></div>
        <div class="medium-3" title="Code: 0xe85b"><i class="icon-brand-user"></i> <span class="i-name">icon-brand-user</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe85c"><i class="icon-brand-users-linked"></i> <span class="i-name">icon-brand-users-linked</span></div>
        <div class="medium-3" title="Code: 0xe85d"><i class="icon-brand-users"></i> <span class="i-name">icon-brand-users</span></div>
        <div class="medium-3" title="Code: 0xe85e"><i class="icon-brand-vacation"></i> <span class="i-name">icon-brand-vacation</span></div>
        <div class="medium-3" title="Code: 0xe85f"><i class="icon-ui-cancel"></i> <span class="i-name">icon-ui-cancel</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe860"><i class="icon-ui-ok"></i> <span class="i-name">icon-ui-ok</span></div>
        <div class="medium-3" title="Code: 0xe861"><i class="icon-ui-link"></i> <span class="i-name">icon-ui-link</span></div>
        <div class="medium-3" title="Code: 0xe862"><i class="icon-ui-download"></i> <span class="i-name">icon-ui-download</span></div>
        <div class="medium-3" title="Code: 0xe863"><i class="icon-ui-plus"></i> <span class="i-name">icon-ui-plus</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe864"><i class="icon-ui-down"></i> <span class="i-name">icon-ui-down</span></div>
        <div class="medium-3" title="Code: 0xe865"><i class="icon-ui-left"></i> <span class="i-name">icon-ui-left</span></div>
        <div class="medium-3" title="Code: 0xe866"><i class="icon-ui-right"></i> <span class="i-name">icon-ui-right</span></div>
        <div class="medium-3" title="Code: 0xe867"><i class="icon-ui-up"></i> <span class="i-name">icon-ui-up</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe868"><i class="icon-ui-attention"></i> <span class="i-name">icon-ui-attention</span></div>
        <div class="medium-3" title="Code: 0xe869"><i class="icon-ui-calendar"></i> <span class="i-name">icon-ui-calendar</span></div>
        <div class="medium-3" title="Code: 0xe86a"><i class="icon-ui-user"></i> <span class="i-name">icon-ui-user</span></div>
        <div class="medium-3" title="Code: 0xe86b"><i class="icon-ui-users"></i> <span class="i-name">icon-ui-users</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe86c"><i class="icon-ui-help-circled"></i> <span class="i-name">icon-ui-help-circled</span></div>
        <div class="medium-3" title="Code: 0xe86d"><i class="icon-ui-info-circled"></i> <span class="i-name">icon-ui-info-circled</span></div>
        <div class="medium-3" title="Code: 0xe86e"><i class="icon-ui-home"></i> <span class="i-name">icon-ui-home</span></div>
        <div class="medium-3" title="Code: 0xe86f"><i class="icon-ui-upload"></i> <span class="i-name">icon-ui-upload</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe870"><i class="icon-ui-trash"></i> <span class="i-name">icon-ui-trash</span></div>
        <div class="medium-3" title="Code: 0xe871"><i class="icon-ui-archive"></i> <span class="i-name">icon-ui-archive</span></div>
        <div class="medium-3" title="Code: 0xe872"><i class="icon-ui-folder-sm"></i> <span class="i-name">icon-ui-folder-sm</span></div>
        <div class="medium-3" title="Code: 0xe873"><i class="icon-ui-cog"></i> <span class="i-name">icon-ui-cog</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe874"><i class="icon-ui-cloud"></i> <span class="i-name">icon-ui-cloud</span></div>
        <div class="medium-3" title="Code: 0xe875"><i class="icon-ui-lock-closed"></i> <span class="i-name">icon-ui-lock-closed</span></div>
        <div class="medium-3" title="Code: 0xe876"><i class="icon-ui-play"></i> <span class="i-name">icon-ui-play</span></div>
        <div class="medium-3" title="Code: 0xe877"><i class="icon-ui-comment"></i> <span class="i-name">icon-ui-comment</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe878"><i class="icon-ui-search"></i> <span class="i-name">icon-ui-search</span></div>
        <div class="medium-3" title="Code: 0xe879"><i class="icon-ui-cloud-upload"></i> <span class="i-name">icon-ui-cloud-upload</span></div>
        <div class="medium-3" title="Code: 0xe87a"><i class="icon-ui-lock-open"></i> <span class="i-name">icon-ui-lock-open</span></div>
        <div class="medium-3" title="Code: 0xe87b"><i class="icon-ui-tools"></i> <span class="i-name">icon-ui-tools</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe87c"><i class="icon-ui-credit-card"></i> <span class="i-name">icon-ui-credit-card</span></div>
        <div class="medium-3" title="Code: 0xe87d"><i class="icon-ui-tag"></i> <span class="i-name">icon-ui-tag</span></div>
        <div class="medium-3" title="Code: 0xe87e"><i class="icon-ui-th-large"></i> <span class="i-name">icon-ui-th-large</span></div>
        <div class="medium-3" title="Code: 0xe87f"><i class="icon-ui-th-list"></i> <span class="i-name">icon-ui-th-list</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe880"><i class="icon-ui-dashboard"></i> <span class="i-name">icon-ui-dashboard</span></div>
        <div class="medium-3" title="Code: 0xe881"><i class="icon-ui-paper-plane"></i> <span class="i-name">icon-ui-paper-plane</span></div>
        <div class="medium-3" title="Code: 0xe882"><i class="icon-ui-resize-full"></i> <span class="i-name">icon-ui-resize-full</span></div>
        <div class="medium-3" title="Code: 0xe883"><i class="icon-ui-eye"></i> <span class="i-name">icon-ui-eye</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe884"><i class="icon-ui-book"></i> <span class="i-name">icon-ui-book</span></div>
        <div class="medium-3" title="Code: 0xe885"><i class="icon-ui-phone"></i> <span class="i-name">icon-ui-phone</span></div>
        <div class="medium-3" title="Code: 0xe886"><i class="icon-ui-plus-circled"></i> <span class="i-name">icon-ui-plus-circled</span></div>
        <div class="medium-3" title="Code: 0xe887"><i class="icon-ui-minus"></i> <span class="i-name">icon-ui-minus</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe888"><i class="icon-ui-minus-circled"></i> <span class="i-name">icon-ui-minus-circled</span></div>
        <div class="medium-3" title="Code: 0xe889"><i class="icon-window"></i> <span class="i-name">icon-window</span></div>
        <div class="medium-3" title="Code: 0xe88a"><i class="icon-ui-database"></i> <span class="i-name">icon-ui-database</span></div>
        <div class="medium-3" title="Code: 0xe88b"><i class="icon-ui-history"></i> <span class="i-name">icon-ui-history</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe88c"><i class="icon-ui-new-document"></i> <span class="i-name">icon-ui-new-document</span></div>
        <div class="medium-3" title="Code: 0xe88d"><i class="icon-ui-external-link"></i> <span class="i-name">icon-ui-external-link</span></div>
        <div class="medium-3" title="Code: 0xe88e"><i class="icon-ui-heart"></i> <span class="i-name">icon-ui-heart</span></div>
        <div class="medium-3" title="Code: 0xe88f"><i class="icon-ui-heart-empty"></i> <span class="i-name">icon-ui-heart-empty</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe890"><i class="icon-ui-flow-branch"></i> <span class="i-name">icon-ui-flow-branch</span></div>
        <div class="medium-3" title="Code: 0xe891"><i class="icon-ui-lifebuoy"></i> <span class="i-name">icon-ui-lifebuoy</span></div>
        <div class="medium-3" title="Code: 0xe892"><i class="icon-ui-chart-line"></i> <span class="i-name">icon-ui-chart-line</span></div>
        <div class="medium-3" title="Code: 0xe893"><i class="icon-ui-chart-bar"></i> <span class="i-name">icon-ui-chart-bar</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe894"><i class="icon-ui-star"></i> <span class="i-name">icon-ui-star</span></div>
        <div class="medium-3" title="Code: 0xe895"><i class="icon-ui-star-empty"></i> <span class="i-name">icon-ui-star-empty</span></div>
        <div class="medium-3" title="Code: 0xe896"><i class="icon-ui-time"></i> <span class="i-name">icon-ui-time</span></div>
        <div class="medium-3" title="Code: 0xe897"><i class="icon-ui-flag"></i> <span class="i-name">icon-ui-flag</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe898"><i class="icon-ui-mail"></i> <span class="i-name">icon-ui-mail</span></div>
        <div class="medium-3" title="Code: 0xe899"><i class="icon-ui-eye-off"></i> <span class="i-name">icon-ui-eye-off</span></div>
        <div class="medium-3" title="Code: 0xe89a"><i class="icon-ui-resize-small"></i> <span class="i-name">icon-ui-resize-small</span></div>
        <div class="medium-3" title="Code: 0xe89b"><i class="icon-ui-redo"></i> <span class="i-name">icon-ui-redo</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe89c"><i class="icon-ui-run-code"></i> <span class="i-name">icon-ui-run-code</span></div>
        <div class="medium-3" title="Code: 0xe89d"><i class="icon-ui-refresh"></i> <span class="i-name">icon-ui-refresh</span></div>
        <div class="medium-3" title="Code: 0xe89e"><i class="icon-ui-shuffle"></i> <span class="i-name">icon-ui-shuffle</span></div>
        <div class="medium-3" title="Code: 0xe89f"><i class="icon-ui-stop"></i> <span class="i-name">icon-ui-stop</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe8a0"><i class="icon-ui-pause"></i> <span class="i-name">icon-ui-pause</span></div>
        <div class="medium-3" title="Code: 0xe8a1"><i class="icon-ui-share"></i> <span class="i-name">icon-ui-share</span></div>
        <div class="medium-3" title="Code: 0xe8a2"><i class="icon-ui-move"></i> <span class="i-name">icon-ui-move</span></div>
        <div class="medium-3" title="Code: 0xe8a3"><i class="icon-ui-target"></i> <span class="i-name">icon-ui-target</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe8a4"><i class="icon-ui-diagram"></i> <span class="i-name">icon-ui-diagram</span></div>
        <div class="medium-3" title="Code: 0xe8a5"><i class="icon-monitor"></i> <span class="i-name">icon-monitor</span></div>
        <div class="medium-3" title="Code: 0xe8a6"><i class="icon-ui-pencil"></i> <span class="i-name">icon-ui-pencil</span></div>
        <div class="medium-3" title="Code: 0xe8a7"><i class="icon-ui-user-add"></i> <span class="i-name">icon-ui-user-add</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe8a8"><i class="icon-ui-idea"></i> <span class="i-name">icon-ui-idea</span></div>
        <div class="medium-3" title="Code: 0xe8a9"><i class="icon-ui-list-add"></i> <span class="i-name">icon-ui-list-add</span></div>
        <div class="medium-3" title="Code: 0xe8aa"><i class="icon-ui-trophy"></i> <span class="i-name">icon-ui-trophy</span></div>
        <div class="medium-3" title="Code: 0xe8ab"><i class="icon-ui-network"></i> <span class="i-name">icon-ui-network</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe8ac"><i class="icon-ui-briefcase"></i> <span class="i-name">icon-ui-briefcase</span></div>
        <div class="medium-3" title="Code: 0xe8ad"><i class="icon-ui-chart-area"></i> <span class="i-name">icon-ui-chart-area</span></div>
        <div class="medium-3" title="Code: 0xe8ae"><i class="icon-ui-chart-pie"></i> <span class="i-name">icon-ui-chart-pie</span></div>
        <div class="medium-3" title="Code: 0xe8af"><i class="icon-ui-drive"></i> <span class="i-name">icon-ui-drive</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe8b0"><i class="icon-ui-map-marker"></i> <span class="i-name">icon-ui-map-marker</span></div>
        <div class="medium-3" title="Code: 0xe8b1"><i class="icon-ui-compass"></i> <span class="i-name">icon-ui-compass</span></div>
        <div class="medium-3" title="Code: 0xe8c3"><i class="icon-piece-of-cake"></i> <span class="i-name">icon-piece-of-cake</span></div>
        <div class="medium-3" title="Code: 0xe8c4"><i class="icon-dumbbell"></i> <span class="i-name">icon-dumbbell</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe8c5"><i class="icon-favorites"></i> <span class="i-name">icon-favorites</span></div>
        <div class="medium-3" title="Code: 0xe8c6"><i class="icon-puzzles"></i> <span class="i-name">icon-puzzles</span></div>
        <div class="medium-3" title="Code: 0xe8c7"><i class="icon-search-file"></i> <span class="i-name">icon-search-file</span></div>
        <div class="medium-3" title="Code: 0xe8cc"><i class="icon-ui-copy"></i> <span class="i-name">icon-ui-copy</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xe8cd"><i class="icon-dashboard-fast"></i> <span class="i-name">icon-dashboard-fast</span></div>
        <div class="medium-3" title="Code: 0xf004"><i class="icon-ui-down-open"></i> <span class="i-name">icon-ui-down-open</span></div>
        <div class="medium-3" title="Code: 0xf005"><i class="icon-ui-up-open"></i> <span class="i-name">icon-ui-up-open</span></div>
        <div class="medium-3" title="Code: 0xf006"><i class="icon-ui-right-open"></i> <span class="i-name">icon-ui-right-open</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xf007"><i class="icon-ui-left-open"></i> <span class="i-name">icon-ui-left-open</span></div>
        <div class="medium-3" title="Code: 0xf019"><i class="icon-ui-globe"></i> <span class="i-name">icon-ui-globe</span></div>
        <div class="medium-3" title="Code: 0xf06d"><i class="icon-ui-ok-circled"></i> <span class="i-name">icon-ui-ok-circled</span></div>
        <div class="medium-3" title="Code: 0xf06e"><i class="icon-ui-cancel-circled"></i> <span class="i-name">icon-ui-cancel-circled</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xf099"><i class="icon-ui-twitter"></i> <span class="i-name">icon-ui-twitter</span></div>
        <div class="medium-3" title="Code: 0xf09a"><i class="icon-ui-facebook"></i> <span class="i-name">icon-ui-facebook</span></div>
        <div class="medium-3" title="Code: 0xf09b"><i class="icon-ui-github"></i> <span class="i-name">icon-ui-github</span></div>
        <div class="medium-3" title="Code: 0xf121"><i class="icon-ui-code"></i> <span class="i-name">icon-ui-code</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xf16c"><i class="icon-ui-stackoverflow"></i> <span class="i-name">icon-ui-stackoverflow</span></div>
        <div class="medium-3" title="Code: 0xf198"><i class="icon-ui-slack"></i> <span class="i-name">icon-ui-slack</span></div>
        <div class="medium-3" title="Code: 0xf1ad"><i class="icon-ui-building"></i> <span class="i-name">icon-ui-building</span></div>
        <div class="medium-3" title="Code: 0xf2db"><i class="icon-ui-chip-big"></i> <span class="i-name">icon-ui-chip-big</span></div>
      </div>
      <div class="row">
        <div class="medium-3" title="Code: 0xf30c"><i class="icon-ui-linkedin"></i> <span class="i-name">icon-ui-linkedin</span></div>
      </div>
    </div>

