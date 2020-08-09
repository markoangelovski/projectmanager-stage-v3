import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import HoursStatsGaugeChart from "../Charts/DayStats/HoursStatsGauge.chart.js";

const HoursStatsGauge = props => {
  return (
    <Col xl={3} md={6}>
      <Card className="mb-3">
        <Card.Body>
          <div className="float-left" dir="ltr">
            <HoursStatsGaugeChart
              seriesData={props.totalHours}
              type={props.type}
            />
          </div>
          <div className="text-right">
            <h3 className="mb-1">
              {props.totalHours}
              <small className="text-muted">h</small>
            </h3>
            <p className="text-muted mb-1">{props.children}</p>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HoursStatsGauge;
