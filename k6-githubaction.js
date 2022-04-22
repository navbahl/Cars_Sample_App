import http from 'k6/http';
import { sleep, check } from 'k6';
import { Counter } from 'k6/metrics';

// you can specify stages of your test (ramp up/down patterns) through the options object
// target is the number of VUs you are aiming for

export const options = {
  stages: [
    { target: 20, duration: '2s' },
    { target: 15, duration: '2s' },
    { target: 0, duration: '2s' },
  ],
  thresholds: {
    http_req_duration: ['p(95) < 100'],
  },
};

export default function () {
  // our HTTP request, note that we are saving the response to res, which can be accessed later

  const res = http.get('http://142.126.74.22:8080/Cars_Sample_App/angular/index.jsp');

  sleep(1);

  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.includes('enquire'),
  });
}
