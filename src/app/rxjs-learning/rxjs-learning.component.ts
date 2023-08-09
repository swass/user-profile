import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of , from, interval, pipe, debounceTime} from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent implements OnInit {

  agent$:Observable<string>; //observable should have dollar sign at the end, good coding practice
  agentData:string;
  //************ of ************
  studentlist:string[] = ["Mark", "David", "Lisa"];
  studentListObs$: Observable<string[]> = of(this.studentlist);
  studentNameObs$: Observable<object> = of({
    name:"Swastika",
    id:10,
    place: "Bangalore"
  });
  //************  from **************
  studentListObs2$: Observable<any> = from(this.studentlist);

  searchForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.agent$ = new Observable(
      function (observer){
        observer.next("A will change to B in 3 seconds");
        setTimeout(()=>{
          observer.next("B will change to C in 3 seconds");
        }, 3000);
        setTimeout(()=>{
          observer.next("C");
        }, 6000);
      }
    );

    this.agent$.subscribe(
      (data)=>{
        this.agentData = data;
      }
    );

    //Of operator
    // *********************************************
    this.studentListObs$.subscribe(
      (data)=>{
        let counter$: Observable<number> = interval(3000);
        console.log("example of 'of' "+data); //string coercion 
        console.log(data);
        console.log("interval example");
        counter$.subscribe(
          (count)=>{
            if(count < 5)
            console.log(count);
          }
        );
        
    
      }
    )
    this.studentNameObs$.subscribe(
      (data)=>{
        console.log(data);
      }
    )
    // *********************************************
    // from operator
      this.studentListObs2$.subscribe(
        (data)=>{
          console.log("from example");
          console.log(data);
        }
      )

    // *********************************************
    // searchform, debounce
      this.searchForm = new FormGroup({
        searchValue : new FormControl()
      })

      this.searchForm.get('searchValue')?.valueChanges
        .pipe(
          debounceTime(1500)
        )
        .subscribe(data=>{
          console.log(data);
        });
       
     
    
  }

  ReadSearchValue(){
        console.log("mouse key up");
  }
  

}
