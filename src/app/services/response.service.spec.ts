import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResponseService } from './response.service';
import { Response } from 'src/app/models/Response';
import { asyncData } from '../../test';

describe('ResponseService', () => {
  const responseDummyData: Response[] = [{
    id: 1,
    responderId: 3,
    body: 'Collections is a framework that is designed to store the objects and manipulate the design to store the objects.',
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
  },
  {
    id: 2,
    responderId: 4,
    body: 'Collections are any objects that implement the Interface Collection.',
    creationDate: '2019-10-31T04:00:00.000+0000',
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
  },
  {
    id: 3,
    responderId: 6,
    body: 'Collections is a utility class in Java to work with objects that implement the Interface Collection.',
    creationDate: '2019-10-30T04:00:00.000+0000',
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
  }
  ];
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy };
  let responseService: ResponseService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    responseService = new ResponseService(httpClientSpy as any);
  });

  it('should be created', () => {
    const service: ResponseService = TestBed.get(ResponseService);
    expect(service).toBeTruthy();
  });

  it('should get all responses (HttpClient called once)', () => {
    httpClientSpy.get.and.returnValue(asyncData(responseDummyData));
    responseService.getResponses().subscribe(
      response => expect(response).toEqual(responseDummyData, 'expected response'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should save a response (HttpClient called once)', () => {
    const fakeResponse = responseDummyData[0];
    fakeResponse.body = 'test save';
    httpClientSpy.post.and.returnValue(asyncData(fakeResponse));
    responseService.saveResponse(fakeResponse).subscribe(
      value => {
        expect(value).toBeDefined();
        expect(value).toBe(fakeResponse);
      });
    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  });

  it('should update a response (HttpClient called once)', () => {
    const fakeResponse = responseDummyData[0];
    fakeResponse.body = 'test update';
    httpClientSpy.put.and.returnValue(asyncData(fakeResponse));
    responseService.updateResponse(fakeResponse).subscribe(
      value => {
        expect(value).toBeDefined();
        expect(value).toBe(fakeResponse);
      });
    expect(httpClientSpy.put.calls.count()).toBe(1, 'one call');
  });

  it('should delete a response (HttpClient called once)', () => {
    httpClientSpy.delete.and.returnValue(asyncData(1));
    responseService.removeResponse(1).subscribe(
      (result: any) => {
        expect(result).toBe(1);
    }
      );
    expect(httpClientSpy.delete.calls.count()).toBe(1, 'one call');
  });


  it('should return expected Response (HttpClient called once)', () => {
    httpClientSpy.get.and.returnValue(asyncData(responseDummyData[0]));
    responseService.getResponseById(1).subscribe(
      response => expect(response).toEqual(responseDummyData[0], 'expected response'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

});
