const baseUri = 'http://ec2-52-23-219-175.compute-1.amazonaws.com';
const port = '1337';

export const environment = {
  production: false,
  environmentName: 'Default Dev Environment',
  tagsUri: `${baseUri}:${port}/tags`,
  questionsUri: `${baseUri}:${port}/questions`,
  responsesUri: `${baseUri}:${port}/responses`,
  userUri: `${baseUri}:${port}/users`,
  url: `${baseUri}:${port}`,
  amaSessionUri: `${baseUri}:${port}/amaSession`
};
