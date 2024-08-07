import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

    user: User | null = null;

    constructor(
      private route: ActivatedRoute,
      private userService: UserService
    ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get("id"));
      if(id){
        this.getUser(id);
      }
    })
  }

    getUser(id: number){
      this.userService.getUser(id).subscribe({
        next: (resp)=> {
          if(resp !== null){
            this.user = resp;
          }
        }, error: (err) => console.log(err)
      })
    }
}
