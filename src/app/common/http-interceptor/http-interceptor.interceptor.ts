import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptorInterceptor : HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('ACCESS_TOKEN') || ''
  const updateReq = req.clone({
    headers: req.headers.append('Authorization',token ),
  })
  return next(updateReq);
};
