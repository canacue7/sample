// import { Injectable } from '@angular/core';
// import { AuthSession } from '../auth/auth.types';

// @Injectable({
//   providedIn: 'root',
// })
// export class Token {
//   private readonly tokenKey = 'sample.auth.token';
//   private readonly userKey = 'sample.auth.user';
//   private readonly memory = new Map<string, string>();

//   getSession(): AuthSession | null {
    
//     const token = this.read(this.tokenKey);
//     const user = this.read(this.userKey);
//   }

//   private read(key: string): string | null {
//     const storage = this.storage();
//     return storage ? storage.getItem(key) : this.memory.get(key) ?? null;
//   }

//   private storage(): Storage | null {
//     return typeof globalThis !== 'undefined' && 'localStorage' in globalThis
//       ? globalThis.localStorage
//       : null;
//   }
  
// }
