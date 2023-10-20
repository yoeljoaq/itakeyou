import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public ngFireAuth: AngularFireAuth) { }

  async registerUser(email: string, password: string) {
    try {
      const userCredential = await this.ngFireAuth.createUserWithEmailAndPassword(email, password);
      // Si deseas, puedes acceder a la información del usuario utilizando userCredential.user
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }

  async loginUser(email: string, password: string) {
    try {
      const userCredential = await this.ngFireAuth.signInWithEmailAndPassword(email, password);
      // Si deseas, puedes acceder a la información del usuario utilizando userCredential.user
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }

  async resetPassword(email: string) {
    try {
      await this.ngFireAuth.sendPasswordResetEmail(email);
      return true; // Éxito al enviar el correo de restablecimiento
    } catch (error) {
      throw error;
    }
  }

  async signOut() {
    try {
      await this.ngFireAuth.signOut();
      return true; // Éxito al cerrar sesión
    } catch (error) {
      throw error;
    }
  }

  async getProfile() {
    try {
      return await this.ngFireAuth.currentUser;
    } catch (error) {
      throw error;
    }
  }

  // Función para verificar si un usuario está autenticado
  isAuthenticated() {
    return this.ngFireAuth.authState;
  }
}


