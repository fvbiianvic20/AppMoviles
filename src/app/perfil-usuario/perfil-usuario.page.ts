import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {

  public user = {
    username: "",
    password: ""
  }
 
  constructor(private router: Router, private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
   

    this.activeRoute.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (state) {
        this.user.username = state['user'].username;
        this.user.password = state['user'].password;
        console.log(this.user);
      }
    })
  }

}
