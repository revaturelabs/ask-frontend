import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/Question';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class QuestionService {

  questionId: number;

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(environment.questionsUri);
  }

  getQuestionById(question: Question): Observable<Question> {
    return this.http.get<Question>(`${environment.questionsUri}/${question.id}`);
  }

  setQuestionId(questionId) {
    this.questionId = questionId;
  }

  getQuestionId() {
    return this.questionId;
  }

  saveQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(
      environment.questionsUri,
      question,
      httpOptions,
    );
  }

  updateQuestion(question: Question): Observable<Question> {
    const url = `${environment.questionsUri}/${question.id}`;

    return this.http.put<Question>(url, question, httpOptions);
  }

  removePost(question: Question | number): Observable<Question> {
    const id = typeof question === 'number' ? question : question.id;
    const url = `${environment.questionsUri}/${id}`;

    return this.http.delete<Question>(url, httpOptions);
  }
}
