import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenAiService {
  private apiKey = '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';

  constructor(private http: HttpClient) {}

  getApiResponse(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const requestBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You are a professional writer, your job will be generate stories based on the prompt, please the story will be medium size and exciting, also you will convert all the paraphase into the story, is the case is that the prompt are numbres or words without any sense just create any random story about the text. if the text i send to you isnt a valid story, for example a number or a short paraphase without any sense then your response will be "rejected" in lowercase. also insert line breaks for html.',
        },
        { role: 'user', content: prompt },
      ],
    };

    return this.http.post<any>(
      'https://api.openai.com/v1/chat/completions',
      requestBody,
      { headers }
    );
  }
}
