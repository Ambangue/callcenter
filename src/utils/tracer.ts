import tracer from 'dd-trace';

tracer.init({
  logInjection: true,
  profiling: true,
  runtimeMetrics: true,
  service: 'acpe-omnicall',
  env: process.env.NODE_ENV || 'development',
  version: process.env.DD_VERSION || '1.0.0',
  sampleRate: 1
});

export default tracer;