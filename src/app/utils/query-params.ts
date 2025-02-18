import {inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {filter, map} from 'rxjs';

export const getTokenParam = () => {
  return inject(ActivatedRoute).queryParams.pipe(
    map(param => param['token'])
  );
};

export const getIdParam = () => {
  return inject(ActivatedRoute).paramMap.pipe(
    map(paramMap => paramMap.get('id')),
    filter(id => id !== null),
  );
};
