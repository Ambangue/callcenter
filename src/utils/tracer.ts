import tracer from 'dd-trace';

tracer.init({
  service: 'acpe-omnicall',
  env: process.env.NODE_ENV || 'development',
  logInjection: true,
  profiling: true,
  runtimeMetrics: true,
});

export default tracer;