import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ibrahimabdelkhaleq.com/__docusaurus/debug',
    component: ComponentCreator('/ibrahimabdelkhaleq.com/__docusaurus/debug', '0a0'),
    exact: true
  },
  {
    path: '/ibrahimabdelkhaleq.com/__docusaurus/debug/config',
    component: ComponentCreator('/ibrahimabdelkhaleq.com/__docusaurus/debug/config', '63e'),
    exact: true
  },
  {
    path: '/ibrahimabdelkhaleq.com/__docusaurus/debug/content',
    component: ComponentCreator('/ibrahimabdelkhaleq.com/__docusaurus/debug/content', '147'),
    exact: true
  },
  {
    path: '/ibrahimabdelkhaleq.com/__docusaurus/debug/globalData',
    component: ComponentCreator('/ibrahimabdelkhaleq.com/__docusaurus/debug/globalData', 'b56'),
    exact: true
  },
  {
    path: '/ibrahimabdelkhaleq.com/__docusaurus/debug/metadata',
    component: ComponentCreator('/ibrahimabdelkhaleq.com/__docusaurus/debug/metadata', '278'),
    exact: true
  },
  {
    path: '/ibrahimabdelkhaleq.com/__docusaurus/debug/registry',
    component: ComponentCreator('/ibrahimabdelkhaleq.com/__docusaurus/debug/registry', '815'),
    exact: true
  },
  {
    path: '/ibrahimabdelkhaleq.com/__docusaurus/debug/routes',
    component: ComponentCreator('/ibrahimabdelkhaleq.com/__docusaurus/debug/routes', '16c'),
    exact: true
  },
  {
    path: '/ibrahimabdelkhaleq.com/blog',
    component: ComponentCreator('/ibrahimabdelkhaleq.com/blog', 'ec7'),
    exact: true
  },
  {
    path: '/ibrahimabdelkhaleq.com/blog/archive',
    component: ComponentCreator('/ibrahimabdelkhaleq.com/blog/archive', '706'),
    exact: true
  },
  {
    path: '/ibrahimabdelkhaleq.com/blog/tags',
    component: ComponentCreator('/ibrahimabdelkhaleq.com/blog/tags', '20e'),
    exact: true
  },
  {
    path: '/ibrahimabdelkhaleq.com/blog/tags/hello',
    component: ComponentCreator('/ibrahimabdelkhaleq.com/blog/tags/hello', '0df'),
    exact: true
  },
  {
    path: '/ibrahimabdelkhaleq.com/blog/welcome',
    component: ComponentCreator('/ibrahimabdelkhaleq.com/blog/welcome', '4d7'),
    exact: true
  },
  {
    path: '/ibrahimabdelkhaleq.com/markdown-page',
    component: ComponentCreator('/ibrahimabdelkhaleq.com/markdown-page', 'b6d'),
    exact: true
  },
  {
    path: '/ibrahimabdelkhaleq.com/tag-display',
    component: ComponentCreator('/ibrahimabdelkhaleq.com/tag-display', '664'),
    exact: true
  },
  {
    path: '/ibrahimabdelkhaleq.com/talks',
    component: ComponentCreator('/ibrahimabdelkhaleq.com/talks', '750'),
    exact: true
  },
  {
    path: '/ibrahimabdelkhaleq.com/docs',
    component: ComponentCreator('/ibrahimabdelkhaleq.com/docs', '945'),
    routes: [
      {
        path: '/ibrahimabdelkhaleq.com/docs',
        component: ComponentCreator('/ibrahimabdelkhaleq.com/docs', '0ac'),
        routes: [
          {
            path: '/ibrahimabdelkhaleq.com/docs',
            component: ComponentCreator('/ibrahimabdelkhaleq.com/docs', '25e'),
            routes: [
              {
                path: '/ibrahimabdelkhaleq.com/docs/intro',
                component: ComponentCreator('/ibrahimabdelkhaleq.com/docs/intro', 'da3'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ibrahimabdelkhaleq.com/',
    component: ComponentCreator('/ibrahimabdelkhaleq.com/', '870'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
