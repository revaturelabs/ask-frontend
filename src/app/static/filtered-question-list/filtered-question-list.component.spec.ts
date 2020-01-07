import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ResponseService } from '../../services/response.service';
import { defer } from 'rxjs';
import { Response } from 'src/app/models/Response';

describe('ResponseService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  let httpClientSpy: { get: jasmine.Spy };
  let responseService: ResponseService;

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    responseService = new ResponseService(httpClientSpy as any);
  });

  it('should be created', () => {
    const service: ResponseService = TestBed.get(ResponseService);
    expect(service).toBeTruthy();
  });
  /*
  it('should return expected Response (HttpClient called once)', () => {
    const expectedResponse: Response = {
      user: 'Adam Shipe',
      id: 1,
      responderId: 3,
      questionId: 1,
      body: 'Collections is a framework that is designed to store the objects and manipulate the design to store the objects.',
      creationDate: '2019-10-29',
    };

    httpClientSpy.get.and.returnValue(asyncData(expectedResponse));

    responseService.getResponseById(1).subscribe(
      response => expect(response).toEqual(expectedResponse, 'expected response'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should remove the Response (HttpClient called once)', () => {
    const expectedResponse: Response = {
      user: 'Adam Shipe',
      id: 1,
      responderId: 3,
      questionId: 1,
      body: 'Collections is a framework that is designed to store the objects and manipulate the design to store the objects.',
      creationDate: '2019-10-29',
    };

    httpClientSpy.get.and.returnValue(asyncData(expectedResponse));

    responseService.getResponseById(1).subscribe(
      response => expect(response).toEqual(expectedResponse, 'expected response'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
  */

});

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}