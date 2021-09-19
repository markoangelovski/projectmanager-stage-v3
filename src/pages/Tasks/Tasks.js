import React, { useEffect } from "react";
import moment from "moment";
import { useStoreState, useStoreActions } from "easy-peasy";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

import PageMetaData from "../../components/PageMetaData/PageMetaData.js";
import TitleMain from "../../components/TitleMain/TitleMain.js";
import DayStatsTableRow from "../../components/TasksDocsItem/TasksDocsItem.js";

const Tasks = () => {
  const { taskDocs, taskDocsSkip, hasMoreTaskDocs } = useStoreState(
    state => state
  );
  const { getTaskDocs } = useStoreActions(actions => actions);

  const query = new URLSearchParams(`skip=${taskDocsSkip}`);
  // const done = window.location.hash.split("=")[1];

  /\?/.test(window.location.hash) &&
    window.location.hash
      .split("?")[1]
      .split("&")
      .forEach(pair => {
        const [key, value] = pair.split("=");
        query.append(key, decodeURIComponent(value));
      });
  // if (done === "true" || done === "false") query.append("done", done);

  useEffect(() => {
    (async () => {
      !taskDocs.length && (await getTaskDocs(query));
    })();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    await getTaskDocs(query);
  };

  const taskCount = taskDocs.length;
  // const taskCount = taskDocs.reduce((acc, curr) => acc + curr.tasks.length, 0);

  return (
    <>
      <PageMetaData title={`Tasks (${taskCount}) | jBot`} />
      <TitleMain
        callFunction
        query
        mainNav={"#/tasks"}
        secondNav={"#/tasks/booking"}
      >
        {"All tasks"}
        {"Booking"}
      </TitleMain>

      <InfiniteScroll
        dataLength={taskDocs.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMoreTaskDocs}
        loader={<h4>Loading...</h4>}
      >
        <Row>
          <Col>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{moment().format("dddd, MMMM Do YYYY")}</Card.Title>
                <Table striped hover responsive size="sm" className="mb-0">
                  <colgroup>
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "20%" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">Task</th>
                      <th scope="col">Project Lead</th>
                      <th scope="col">Due</th>
                      <th scope="col">Created</th>
                      <th scope="col">Updated</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taskDocs.map((task, i) => (
                      <DayStatsTableRow key={i} task={task} />
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </InfiniteScroll>
    </>
  );
};

export default Tasks;
