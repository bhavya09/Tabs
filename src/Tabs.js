import { useEffect, useState } from "react";

const Tabs = (props) => {
  const [tabsContent, setTabsContent] = useState();
  const [tabsHeaders, setTabsHeaders] = useState([]);
  const [active, setActive] = useState("");

  const { children } = props;

  useEffect(() => {
    const map = {};
    const headers = [];

    console.log("propChild", children);
    console.log("propChild", typeof children);

    children.forEach((element) => {
      const { title } = element?.props;
      headers.push(title);
      map[title] = element?.props?.children;
    });

    setTabsHeaders(headers);
    setTabsContent(map);
    setActive(headers[0]);
    // setTabs(tabButtons);
  }, [props, children]);

  console.log("tabs", tabsContent);

  const tabClicked = (e) => {
    setActive(e.target.id);
  };

  return (
    <div>
      <div onClick={tabClicked}>
        {tabsHeaders.map((tabButton) => (
          <>
            <button
              className={active === tabButton && "tabButton"}
              id={tabButton}
            >
              {tabButton}
            </button>
          </>
        ))}
      </div>

      {/* <div className="tabContent">{tabsContent?.[selectedTab]}</div> */}

      <div>
        {tabsContent &&
          Object.keys(tabsContent).map((key, idx) => {
            if (key === active) {
              return <div key={idx}>{tabsContent[key]}</div>;
            } else {
              return null;
            }
          })}
      </div>
    </div>
  );
};

export default Tabs;
