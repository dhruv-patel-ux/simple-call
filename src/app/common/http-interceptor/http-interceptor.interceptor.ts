import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const httpInterceptorInterceptor : HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('ACCESS_TOKEN') || ''
  const updateReq = req.clone({
    headers: req.headers.append('Authorization',token ),
  })
  return next(updateReq).pipe(
    tap((event:any)=>{
      if (event instanceof HttpErrorResponse) {
        console.log(event);
        
        if (event.status === 403) {
          localStorage.getItem('ACCESS_TOKEN');
        }
      }
    })
  );
};
