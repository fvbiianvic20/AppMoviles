import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonAvatar, IonModal } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';
import { AutenticacionService } from '../Autenticacion/autenticacion.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonAvatar, { read: ElementRef }) avatar!: ElementRef<HTMLIonAvatarElement>;

  @ViewChild(IonModal) modal!: IonModal;
 
  constructor(private router: Router,private animationCtrl: AnimationController, private auth: AutenticacionService) {

  }
  private animation!: Animation;
  public mensaje = ""

  public alertButtons = ['OK'];
  user = {
    username: "",
    password: ""
  }
 

  enviarPerfil() {
    this.auth.login(this.user.username, this.user.password)
  if (this.auth.autenticado) {
    let navigationExtras: NavigationExtras = {
      state: { user: this.user }
    }
    this.router.navigate(['/perfil-usuario'], navigationExtras);
  } else {
    this.mensaje = "Debe ingresar sus credenciales";
  } 
  }

  ngOnInit() {
  }
  mostrarConsola() {
    console.log(this.user);
    if (this.user.username != "" && this.user.password != "") {
      this.mensaje = "Usuario Conectado";
    } else {
      this.mensaje = "Usuario y contraseña deben tener algun valor"
    }
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.mensaje = "Registro Exitoso"
    this.modal.dismiss(this.user.username, 'confirm');
  }

}
