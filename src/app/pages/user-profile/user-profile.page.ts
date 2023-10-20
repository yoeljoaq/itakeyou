import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  userData: any;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    // Aquí puedes obtener la información del usuario autenticado desde AuthenticationService
    this.authService.getProfile().then((user) => {
      if (user) {
        // Asignar la información del usuario a userData
        this.userData = {
          email: user.email,
          
        };
      }
    });
  }

  solicitarVehiculo() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        try {
          // Usar una API de geolocalización inversa para obtener la dirección
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await response.json();

          if (data) {
            const region = data.address.state;
            const comuna = data.address.city;
            const calle = data.address.road;

            // Mensaje al usuario con la ubicación
            const mensaje = `Tu vehículo ya va para ${comuna}, ${calle}, ${region}`;
            alert(mensaje);

            
          } else {
            alert('No se pudo obtener la información de geolocalización.');
          }
        } catch (error) {
          console.error('Error al obtener la información de geolocalización:', error);
          alert('No se pudo obtener la información de geolocalización.');
        }
      });
    } else {
      alert('La geolocalización no está disponible en este dispositivo.');
    }
  }
}





