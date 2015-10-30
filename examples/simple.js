'use strict';

require('rc-slider/assets/index.less');

var React = require('react');
var Slider = require('rc-slider');
var style = {width:400,margin:50};

function onChange(v) {
  console.log(v);
}

React.render(
  <div>
    <div style={style}>
      <p>基础滑块</p>
      <Slider onChange={onChange} tipTransitionName='rc-slider-tooltip-zoom-down' />
    </div>
    <div style={style}>
      <p>基础滑块，step=20</p>
      <Slider step={20} />
    </div>
    <div style={style}>
      <p>基础滑块，step=20 带原点</p>
      <Slider withDots step={20} />
    </div>
    <div style={style}>
      <p>双滑块</p>
      <Slider range={true} min={10} max={90} values={[0, 30]} onChange={onChange} />
    </div>
    <div style={style}>
      <p>双滑块，step=20 </p>
      <Slider range={true} withDots step={20} values={[0, 30]} onChange={onChange} isIncluded={false} />
    </div>
    <div style={style}>
      <p>分段式滑块（包含关系）</p>
      <Slider marks={["状态1","状态2","状态3","状态4"]} defaultIndex={1} />
    </div>
    <div style={style}>
      <p>分段式滑块（并列关系）</p>
      <Slider marks={["状态1","状态2","状态3","状态4"]} isIncluded={false} defaultIndex={1} />
    </div>
  </div>
  , document.getElementById('__react-content'));
