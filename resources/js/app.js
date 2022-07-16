import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import axios from 'axios'
import { RecoilRoot } from 'recoil';

axios.defaults.baseURL = "http://localhost:8000/api/";
axios.defaults.headers["Accept"] = "application/json";

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    render(
    <RecoilRoot>
      <App {...props} /></RecoilRoot>, el)
  },
})