import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptorInterceptor : HttpInterceptorFn = (req, next) => {
  const updateReq = req.clone({
    headers: req.headers.append('Authorization', 'new header value'),
  })
  return next(req);
};
