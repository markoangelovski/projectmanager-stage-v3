import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import InfiniteScroll from "react-infinite-scroll-component";

import TitleMain from "../../components/TitleMain/TitleMain.js";
import TasksDocsItem from "../../components/TasksDocsItem/TasksDocsItem.js";

const Tasks = () => {
  const { taskDocs, taskDocsSkip, hasMoreTaskDocs } = useStoreState(
    state => state
  );
  const { getTaskDocs } = useStoreActions(actions => actions);

  const query = new URLSearchParams(`skip=${taskDocsSkip}`);
  const done = window.location.hash.split("=")[1];
  if (done === "true" || done === "false") query.append("done", done);

  useEffect(() => {
    (async () => {
      !taskDocs.length && (await getTaskDocs(query));
    })();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    await getTaskDocs(query);
  };

  return (
    <>
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
        {taskDocs.map((doc, i) => (
          <React.Fragment key={i}>
            <h5>{doc.project}</h5>
            <TasksDocsItem tasks={doc.tasks} />
          </React.Fragment>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default Tasks;
