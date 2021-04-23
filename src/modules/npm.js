import moment from "moment";

const npm = require('api-npm');
const now = moment().format();

npm.getstat('barbican-reset','2021-04-06', now, test);

export default function test(data){
  return data;
}