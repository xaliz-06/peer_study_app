import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";

import Root from "./routes/Root";
import Error from "./routes/Error";
import Home from "./routes/Home";
import Topic from "./routes/Topic";

import FeedPost from "./components/feed/feed_posts/post_cards/FeedPost";
import Hot from "./components/feed/hot/Hot";
import Latest from "./components/feed/latest/Latest";
import CommunityPage from "./components/feed/community/CommunityPage";
import Discover from "./components/feed/discover/Discover";

import TopicFeed from "./components/Topics/topics_list/TopicFeed";
import TopicDetails from "./components/Topics/topic_details/TopicDetails";
import HotTopicsList from "./components/Topics/topics_list/HotTopicsList";
import AllTopics from "./components/Topics/topics_list/AllTopics";

import Landing from "./components/landing/landing";
import Section1 from "./components/landing/landing-components/Section1";
import Carousel from "./components/landing/landing-components/Carousel";
import Section3 from "./components/landing/landing-components/Section3";
import ContactUs from "./components/landing/landing-components/Footer";
import LoginSignUp from "./components/landing/landing-components/login";
import Info from "./components/landing/landing-components/info/Info";

function App() {
  // const [modalOn, setModalOn] = useState(false);

  // const openModalHandler = (e) => {
  //   setModalOn(true);
  // };

  // const closeModalHandler = (e) => {
  //   setModalOn(false);
  // };

  const { currentUser } = useSelector((state) => state.user);

  const getLoginRoute = () => {
    if (currentUser) {
      return {
        path: "/info",
        element: <Info />,
      };
    }

    return {
      path: "/login",
      element: <LoginSignUp />,
    };
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      errorElement: <Error />,

      children: [
        {
          index: true,
          element: <Section1 />,
        },
        {
          path: "learn",
          element: <Carousel />,
        },
        {
          path: "about",
          element: <Section3 />,
        },
        {
          path: "contact",
          element: <ContactUs />,
        },
        getLoginRoute(),
        // {
        //   path: "/info",
        //   element: <Info />,
        // },
        // {
        //   path: "/login",
        //   element: <LoginSignUp />,
        // },
      ],
    },
    {
      path: "/home",
      element: <Root />,
      errorElement: <Error />,

      children: [
        {
          path: "",
          element: <Home />,
          children: [
            { path: "", element: <FeedPost /> },
            { path: "latest", element: <Latest /> },
            { path: "hot", element: <Hot /> },
            { path: "discover", element: <Discover /> },
            { path: "communities", element: <CommunityPage /> },
          ],
        },
        {
          path: "topic",
          element: <Topic />,
          children: [
            { path: "", element: <TopicFeed /> },
            { path: "hot-topics", element: <HotTopicsList /> },
            { path: "all-topics", element: <AllTopics /> },
            {
              path: ":topicId",
              element: <TopicDetails />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      {/* {modalOn && <Login onHideModal={closeModalHandler}></Login>}
      <Header onShowModal={openModalHandler} />
      <div className={styles.container}>
        <Sidebar />
        <Feed />
        <Trending />
      </div> */}
    </RouterProvider>
  );
}

export default App;
