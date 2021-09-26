import React, { useEffect, useRef } from "react";
import moment from "moment";
import { useStoreState, useStoreActions } from "easy-peasy";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { FaSort } from "react-icons/fa";

import PageMetaData from "../../components/PageMetaData/PageMetaData.js";
import TitleMain from "../../components/TitleMain/TitleMain.js";
import DayStatsTableRow from "../../components/TasksDocsItem/TasksDocsItem.js";

const Tasks = () => {
  const { taskDocs, filteredTaskDocs, taskDocsSkip, hasMoreTaskDocs } =
    useStoreState(state => state);
  const { getTaskDocs, resetTaskDocs } = useStoreActions(actions => actions);

  // Use Ref is used for query params in order to retain query values (in fetchData function for infinite scroll) between renders when custom sortBy() is selected
  const queryRef = useRef(new URLSearchParams());
  queryRef.current.set("skip", taskDocsSkip);

  const sortRef = useRef({
    title: -1,
    pl: -1,
    createdAt: 1,
    updatedAt: 1,
    dueDate: 1
  });

  /\?/.test(window.location.hash) &&
    window.location.hash
      .split("?")[1]
      .split("&")
      .forEach(pair => {
        const [key, value] = pair.split("=");
        queryRef.current.set(key, decodeURIComponent(value));
      });

  useEffect(() => {
    (async () => {
      !taskDocs.length && (await getTaskDocs(queryRef.current));
    })();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    await getTaskDocs(queryRef.current);
  };

  const sortBy = async option => {
    switch (option) {
      case "title":
        resetTaskDocs();
        sortRef.current.title = sortRef.current.title * -1;

        queryRef.current.delete("pl");
        queryRef.current.delete("createdAt");
        queryRef.current.delete("updatedAt");
        queryRef.current.delete("dueDate");
        queryRef.current.set("skip", 0);
        queryRef.current.set("sort", "title:" + sortRef.current.title);

        await fetchData();

        break;

      case "pl":
        resetTaskDocs();
        sortRef.current.pl = sortRef.current.pl * -1;

        queryRef.current.delete("title");
        queryRef.current.delete("createdAt");
        queryRef.current.delete("updatedAt");
        queryRef.current.delete("dueDate");
        queryRef.current.set("skip", 0);
        queryRef.current.set("sort", "pl:" + sortRef.current.pl);

        await fetchData();

        break;

      case "createdAt":
        resetTaskDocs();
        sortRef.current.createdAt = sortRef.current.createdAt * -1;

        queryRef.current.delete("title");
        queryRef.current.delete("pl");
        queryRef.current.delete("updatedAt");
        queryRef.current.delete("dueDate");
        queryRef.current.set("skip", 0);
        queryRef.current.set("sort", "createdAt:" + sortRef.current.createdAt);

        await fetchData();

        break;

      case "updatedAt":
        resetTaskDocs();
        sortRef.current.updatedAt = sortRef.current.updatedAt * -1;

        queryRef.current.delete("title");
        queryRef.current.delete("pl");
        queryRef.current.delete("createdAt");
        queryRef.current.delete("dueDate");
        queryRef.current.set("skip", 0);
        queryRef.current.set("sort", "updatedAt:" + sortRef.current.updatedAt);

        await fetchData();

        break;

      case "dueDate":
        resetTaskDocs();
        sortRef.current.dueDate = sortRef.current.dueDate * -1;

        queryRef.current.delete("title");
        queryRef.current.delete("pl");
        queryRef.current.delete("createdAt");
        queryRef.current.delete("updatedAt");
        queryRef.current.set("skip", 0);
        queryRef.current.set("sort", "dueDate:" + sortRef.current.dueDate);

        await fetchData();

        break;

      default:
        break;
    }
  };

  const taskCount = taskDocs.length;
  const tasksToRender = filteredTaskDocs.length ? filteredTaskDocs : taskDocs;

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
                      <th scope="col">
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => sortBy("title")}
                        >
                          <FaSort /> Task
                        </span>
                      </th>
                      <th scope="col">
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => sortBy("pl")}
                        >
                          <FaSort /> Project Lead
                        </span>
                      </th>
                      <th scope="col">
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => sortBy("dueDate")}
                        >
                          <FaSort /> Due
                        </span>
                      </th>
                      <th scope="col">
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => sortBy("createdAt")}
                        >
                          <FaSort /> Created
                        </span>
                      </th>
                      <th scope="col">
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => sortBy("updatedAt")}
                        >
                          <FaSort /> Updated
                        </span>
                      </th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasksToRender.map((task, i) => (
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
