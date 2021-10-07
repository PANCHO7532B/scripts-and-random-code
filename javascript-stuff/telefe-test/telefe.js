//links
//main page: https://telefe.com/vivo
//redirector: /Api/Videos/GetSourceUrl/694564/0/HLS
//gets to m3u8 hls
//request needs to be on argentina apparently
//m3u8 expiration sets to 1 hour in advance
//it may be necesary store the cookie given by akamai
const https = require('https');
const url = require('url');
const socksclient = require('socks-proxy-agent');
const ffmpeg = require('ffmpeg'); //for transcoding