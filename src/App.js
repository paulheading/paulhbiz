import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "focus-visible/dist/focus-visible.min.js";

import { Layout } from "blocks";
import { HomePage, AboutPage, ArticlePage, ResumePage, NotFound } from "pages";
import { test } from "store/actions";

import "./App.scss";

export default function App() {
  const write = useDispatch();

  const store = {
    menu:  useSelector(state => state.menu),
    test:  useSelector(state => state.test) 
  };
  
  const routes = [
    { path: "/", component: HomePage, exact: true },
    { path: "/about", component: AboutPage, exact: true },
    { path: "/resume", component: ResumePage, exact: true },
    { path: "/article/projects/:route", component: ArticlePage },
    { path: "/article/roles/:route", component: ArticlePage },
    { path: "/article/education/:route", component: ArticlePage },
    { component: NotFound }
  ];

  write(test(false));

  const _test = store.test ? "test-mode" : "";

  return (
    <BrowserRouter>
      <div className={`component site-wrap ${_test}`}>
      <Layout>
        <Switch>
          { routes.map((route, index) => (<Route key={index} { ...route} />)) }
        </Switch>
      </Layout>
      </div>
    </BrowserRouter>
  );
}
