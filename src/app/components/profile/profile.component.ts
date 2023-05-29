import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Restaurante } from 'src/app/models/restaurante.model';
import { User } from 'src/app/models/users.model';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public userLog: User = this.authService.userLogged[0]
  public restaurantes: Restaurante[] = []
  public restaurante: Restaurante = {} as Restaurante;
  public userRegister: User | undefined = this.DATASERVICE.userLogged

  constructor(private authService: AuthService,
    private DATASERVICE: DataService,
    private restaurantesService: RestauranteService,
    private cdRef: ChangeDetectorRef) {
  }


  ngOnInit(): void {
    this.restaurantesService.restaurantes.subscribe((res) => {
      this.restaurantes = res
      this.ownerRestaurant()
    })


  }

  public ownerRestaurant(): void {
    if (this.userLog.owner) {
      let restaurantefind = this.restaurantes.find(restaurante =>
        restaurante.name === this.userLog.restaurantName)
      if (restaurantefind) {
        this.restaurante = restaurantefind
        this.cdRef.detectChanges()
      }
    }
  }


}
