import { TestBed } from '@angular/core/testing';

import { TokenAccessInterceptor } from './token-access.interceptor';

describe('TokenAccessInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenAccessInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenAccessInterceptor = TestBed.inject(TokenAccessInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
