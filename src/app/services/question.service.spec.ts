import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Question } from '../models/Question';
import { QuestionService } from './question.service';
import { asyncData } from '../../test';

describe('QuestionService', () => {
    const questionDummyData: Question[] =
        [
            {
                id: 15,
                userId: 5,
                username: 'Billy Carter',
                highlightedResponseId: null,
                head: 'How to calculate maximum/minimum number of probes required to build a hash-table',
                body: 'I need to know how I do this cant understand why it\s giving me index out of bounds exception',
                creationDate: '2019-10-03T04:00:00.000+0000',
                associatedTags: [
                    {
                        id: 12,
                        name: 'Algorithms'
                    }
                ],
                responses: [{
                    id: 1,
                    responderId: 3,
                    body: 'Collections is a framework that is designed to store the objects and manipulate the design to '
                        + 'store the objects.',
                    creationDate: '2019-10-29T04:00:00.000+0000',
                    questionId: 1,
                    user: {
                        id: 3,
                        username: 'Zach Marshello',
                        expertTags: [
                            {
                                id: 15,
                                name: 'Architecture'
                            },
                            {
                                id: 3,
                                name: 'Java'
                            },
                            {
                                id: 31,
                                name: 'CSS'
                            },
                            {
                                id: 1,
                                name: 'JavaScript'
                            }
                        ],
                        expert: true
                    }
                }],
                images: [],
            },
            {
                id: 14,
                userId: 2,
                username: 'Sally OBrien',
                highlightedResponseId: null,
                head: 'SimpleDateFormat parsing date with Z literal',
                body: 'I am trying to parse a date that looks like this:2010-04-05T17:16:00Z. This is a valid date per '
                    + 'http://www.ietf.org/rfc/rfc3339.txt. The Z literal (quote) imply that UTC is the preferred reference '
                    + 'point for the specified time. If I try to parse it using SimpleDateFormat and this pattern: '
                    + 'yyyy-MM-dd-T-HH:mm:ss it will be parsed as a Mon Apr 05 17:16:00 EDT 2010 SimpleDateFormat '
                    + 'is unable to parse the string with these patterns:',
                creationDate: '2019-10-03T04:00:00.000+0000',
                associatedTags: [
                    {
                        id: 3,
                        name: 'Java'
                    }
                ],
                responses: [],
                images: [],
            },
            {
                id: 13,
                username: 'Billy Carter',
                userId: 5,
                highlightedResponseId: null,
                head: 'Using Fabric.js with Angular 4',
                body: 'I am new to Angular and Fabric.js. I am trying to build a UI where users can drag and drop objects onto a canvas '
                    + 'and then connect them with lines. In essence I am hoping to get the Angular4 drag and drop example from the '
                    + 'first link to play well with the Fabric.js canvas found at the second link. The drag and drop example works '
                    + 'but the Fabric.js canvas renders in Chrome as a square box and nothing more.',
                creationDate: '2019-10-29T04:00:00.000+0000',
                associatedTags: [
                    {
                        id: 5,
                        name: 'Angular'
                    }
                ],
                responses: [],
                images: [],
            }];

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    }));

    let httpClientSpy: { get: jasmine.Spy, put: jasmine.Spy, post: jasmine.Spy, delete: jasmine.Spy, patch: jasmine.Spy };
    let questionService: QuestionService;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'put', 'post', 'delete', 'patch']);
        questionService = new QuestionService(httpClientSpy as any);
    });

    it('should be created', () => {
        const service: QuestionService = TestBed.get(QuestionService);
        expect(service).toBeTruthy();
    });

    it('should get all questions (HttpClient called once)', () => {
        httpClientSpy.get.and.returnValue(asyncData(questionDummyData));
        questionService.getQuestions().subscribe(
            response => expect(response).toEqual(questionDummyData, 'expected response'),
            fail
        );
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('geters and setters should work', () => {
        questionService.setQuestionId(1);
        expect(questionService.getQuestionId()).toEqual(1);
    });

    it('should get the question by the id (HttpClient called once)', () => {
        httpClientSpy.get.and.returnValue(asyncData(questionDummyData[0]));
        questionService.getQuestionById(15).subscribe(
            response => expect(response).toEqual(questionDummyData[0], 'expected response'),
            fail
        );
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('should save a question (HttpClient called once)', () => {
        const fakeResponse = questionDummyData[0];
        fakeResponse.body = 'test save';
        httpClientSpy.post.and.returnValue(asyncData(fakeResponse));
        questionService.saveQuestion(fakeResponse).subscribe(
            value => {
                expect(value).toBeDefined();
                expect(value).toBe(fakeResponse);
            });
        expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
    });

    it('should get a question image (HttpClient called once)', () => {
        const fakeResponse = {
            questionId: 15,
            images: ['code.png', 'error.jpg']
        };
        httpClientSpy.get.and.returnValue(asyncData(fakeResponse));
        questionService.getQuestionImages(fakeResponse).subscribe(
            (result: any) => {
                expect(result.images).toBe(fakeResponse.images);
            }
        );
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('should remove a post (HttpClient called once)', () => {
        httpClientSpy.delete.and.returnValue(asyncData(1));
        questionService.removePost(1).subscribe(
            (result: any) => {
                expect(result).toBe(1);
            }
        );
        expect(httpClientSpy.delete.calls.count()).toBe(1, 'one call');
    });

    it('should update a response (HttpClient called once)', () => {
        const fakeResponse = questionDummyData[0];
        fakeResponse.body = 'test update';
        httpClientSpy.put.and.returnValue(asyncData(fakeResponse));
        questionService.updateQuestion(fakeResponse).subscribe(
            value => {
                expect(value).toBeDefined();
                expect(value).toBe(fakeResponse);
            });
        expect(httpClientSpy.put.calls.count()).toBe(1, 'one call');
    });

    it('should highlight a response (HttpClient called once)', () => {
        const fakeResponse = questionDummyData[0];
        fakeResponse.highlightedResponseId = questionDummyData[0].responses[0];
        httpClientSpy.patch.and.returnValue(asyncData(fakeResponse));
        questionService.highlightResponse(fakeResponse).subscribe(
            value => {
                expect(value).toBeDefined();
                expect(value).toBe(fakeResponse);
            });
        expect(httpClientSpy.patch.calls.count()).toBe(1, 'one call');
    });

});

