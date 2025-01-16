// src/service/request.ts
import {axios} from "taro-axios";

const request = axios.create({
  baseURL: process.env.NODE_ENV
})

export default request
