import { Component, inject } from '@angular/core';
import Swal from 'sweetalert2'
import { Auth } from '../../services/auth';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
  
@Component({
  selector: 'app-navbar',
  imports: [RouterModule, RouterOutlet],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class NavbarComponent {
  authService = inject(Auth)
  router = inject(Router)

  async mostrarLoginModal(){
    const { value: loginData } = await Swal.fire({
      title : "Login",
      html: `
      <input id="email" class="swal2-input" placeholder="Email" type="email">
      <input id="password" class="swal2-input" placeholder="Password" type="password">
      `,
      theme: 'auto',
      animation: true,
      position: 'center',
      showCancelButton: true,
      cancelButtonText: "Continue as a guest",
      confirmButtonText: "Login",

      preConfirm: async () => {
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const password = (document.getElementById("password")as HTMLInputElement).value;
        
        if(!email || !password){
          Swal.showValidationMessage("Something is missing");
          return false;
        }
        return { email: email, password: password };
      },
      allowOutsideClick: () => !Swal.isLoading()
    });

    if (loginData) {
      const loginResult = await this.authService.login(loginData);
      if (loginResult) {
        this.router.navigate(['/']);
      } else {
        await Swal.fire('User or Password are incorrect');
      }
    }
  }
}