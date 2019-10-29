// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  environmentName: 'Default Environment',
  localhostUri: 'http://localhost:8080/',
  postsUrl: 'http://ec2-54-80-244-190.compute-1.amazonaws.com:1337/question',
  questionsUri: 'http://ec2-54-80-244-190.compute-1.amazonaws.com:1337/question',
  tagsUrl: 'http://ec2-54-80-244-190.compute-1.amazonaws.com:1337/tags',

  allQuestionsUri:
    'http://ec2-54-80-244-190.compute-1.amazonaws.com:1337/questions',
  tagsUri: 'http://ec2-54-80-244-190.compute-1.amazonaws.com:1337/tags',
  responsesUrl: 'http://ec2-54-80-244-190.compute-1.amazonaws.com:1337/responses',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
