/**
 * Created by Rick on 2019-01-16.
 */
'use strict';
import {drag} from 'd3-drag';
import {transition} from 'd3-transition';
import {event} from 'd3-selection'

function init_chart(svg,left=80,top=40,right=20,bottom=80){
  const svg_width = +svg.attr('width');
  const svg_height = +svg.attr('height');

  const chart_width = svg_width - left - right;
  const chart_height = svg_height - top - bottom;
  const chart_g = svg.append('g').attr('transform', `translate(${left}, ${top})`);
  return {
    chart_width: chart_width,
    chart_height: chart_height,
    chart_g: chart_g
  };
}

function make_draggable(element){
  const adrag = drag()
    .on('start',function(){
    })
    .on('drag',function(d){
      element
        .attr('transform',`translate(${d.x = event.x},${d.y = event.y})`);
    })
    .on('end',function(){
    });

  element
    .datum({x: 0,y: 0})
    .call(adrag);
}

function transition_fun(delay=0,duration=1000){
  return transition()
    .delay(delay)
    .duration(duration);
}

export {init_chart,make_draggable,transition_fun}