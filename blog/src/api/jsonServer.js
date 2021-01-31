import axios from 'axios';

const NGROK_ID = '';

export default axios.create({
  baseURL: `http://${NGROK_ID}.ngrok.io`
});