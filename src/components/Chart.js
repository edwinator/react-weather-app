import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average({data, units}) {
  const avg = _.round(_.sum(data) / data.length);
  return units === '°F' ? _.round(avg * 1.8 - 459.67) : avg;
  // return _.round(_.sum(data) / data.length);
}

export default props => (
  <div>
    <Sparklines height={120} width={180} data={props.data}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>
      {average(props)} {props.units}
    </div>
  </div>
);
