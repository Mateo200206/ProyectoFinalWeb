import { inject, Injectable } from '@angular/core';
import { Auth } from './auth';
import { NewUser, User } from '../interfaces/user';

// @Injectable({
//   providedIn: 'root',
// })
// export class UsersService {
//   authService = inject(Auth);

//   async register(user: NewUser) {
//     const res = await fetch(, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: 'Bearer ' + this.authService.token,
//       },
//       body: JSON.stringify(user),
//     });
//     return res.ok;
//   }
// }
